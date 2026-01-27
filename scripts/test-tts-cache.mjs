import fs from 'fs/promises';
import path from 'path';
import { pathToFileURL, fileURLToPath } from 'url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function transpileTSModule(tsPath, outPath) {
  const source = await fs.readFile(tsPath, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ES2022,
      esModuleInterop: true,
      skipLibCheck: true,
    },
    fileName: path.basename(tsPath),
  });
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, outputText, 'utf8');
}

async function rimrafSafe(dir) {
  try {
    await fs.rm(dir, { recursive: true, force: true });
  } catch {}
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const repoRoot = path.resolve(projectRoot, '..');
  const tsPath = path.resolve(repoRoot, 'app/utils/tts-cache.ts');
  const outDir = path.resolve(repoRoot, '.test-dist');
  const outPath = path.join(outDir, 'tts-cache.mjs');
  const testCacheDir = path.resolve(repoRoot, '.tts-cache-test');

  // Ensure clean test cache
  await rimrafSafe(testCacheDir);
  await fs.mkdir(testCacheDir, { recursive: true });

  // Force file-based backend and disable debug logs
  delete process.env.KV_REST_API_URL;
  delete process.env.KV_REST_API_TOKEN;
  process.env.TTS_CACHE_DIR = testCacheDir;
  process.env.DEBUG_TTS_CACHE = '0';

  // Transpile the TS module to ESM and import
  await transpileTSModule(tsPath, outPath);
  const mod = await import(pathToFileURL(outPath).href);

  const text = `test-${Date.now()}-${Math.random()}`;

  // Expect initial miss
  const before = await mod.getCachedAudio(text);
  assert(before === null, 'Expected initial cache miss to return null');

  // Store and hit
  const payload = 'AUDIO_CONTENT_BASE64';
  await mod.setCachedAudio(text, payload);
  const after = await mod.getCachedAudio(text);
  assert(after === payload, 'Expected cache hit to return stored payload');

  const stats = mod.getCacheStats();
  assert(stats.backend === 'file', `Expected file backend, got ${stats.backend}`);
  assert(stats.hits >= 1, 'Expected at least one cache hit');

  console.log('PASS: tts-cache basic file backend');
}

main().catch((err) => {
  console.error('FAIL:', err);
  process.exit(1);
});
