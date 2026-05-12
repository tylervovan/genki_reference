/**
 * OpenNext adapter config for Cloudflare Workers.
 * Defaults are fine for this app — no ISR/cache needed yet.
 */
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
