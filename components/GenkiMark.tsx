/**
 * =============================================================================
 * GENKI MARK
 * =============================================================================
 *
 * PURPOSE: Brand mark component — vertical 元気 stamp.
 * WHAT IT DOES: Renders the square 元気 app-icon mark and a wordmark helper.
 * WHY IT EXISTS: Replaces the previous gradient text logo. Spec from the
 *   "Genki Stamp Handoff" design (direction 02 · Editorial).
 * CONSTRAINTS/GOTCHAS:
 *   - Vertical writing requires `writing-mode: vertical-rl` + `text-orientation: upright`.
 *   - Kanji font is Shippori Mincho (loaded in app/layout.tsx). If unavailable,
 *     the browser falls back to system serif, which still reads as 元気.
 *   - The "second" kanji (気) takes the teal accent.
 *   - Favicon kanji font-size ≈ 0.38 × icon width.
 * =============================================================================
 */

'use client';

import React from 'react';

interface GenkiMarkProps {
  size?: number;
  inverted?: boolean;
  className?: string;
  title?: string;
}

export function GenkiMark({
  size = 32,
  inverted = false,
  className = '',
  title = 'Genki Reference',
}: GenkiMarkProps) {
  const radius = Math.max(3, Math.round(size * 0.22));
  const fontSize = Math.max(6, Math.round(size * 0.38));
  const background = inverted ? 'var(--paper, #fff)' : 'var(--ink, #0B1F44)';
  const firstColor = inverted ? 'var(--ink, #0B1F44)' : '#ffffff';
  const secondColor = inverted ? 'var(--teal-deep, #14B8A6)' : 'var(--teal, #2DD4BF)';

  return (
    <span
      role="img"
      aria-label={title}
      title={title}
      className={className}
      style={{
        display: 'inline-grid',
        placeItems: 'center',
        width: size,
        height: size,
        background,
        borderRadius: radius,
        boxShadow: inverted
          ? 'inset 0 0 0 1px rgba(11,31,68,.08)'
          : '0 10px 30px -14px rgba(11,31,68,.35)',
        flex: '0 0 auto',
        overflow: 'hidden',
        lineHeight: 0.95,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily:
            "var(--font-shippori-mincho), 'Shippori Mincho', 'Hiragino Mincho ProN', 'Yu Mincho', serif",
          fontWeight: 800,
          fontSize,
          lineHeight: 0.95,
          letterSpacing: '0.04em',
          writingMode: 'vertical-rl',
          textOrientation: 'upright',
          color: firstColor,
        }}
      >
        元<span style={{ color: secondColor }}>気</span>
      </span>
    </span>
  );
}

interface WordmarkProps {
  className?: string;
  showBeta?: boolean;
}

export function GenkiWordmark({ className = '', showBeta = false }: WordmarkProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily:
            "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: 'inherit',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        Genki<span style={{ color: 'var(--teal-deep, #14B8A6)' }}>Ref</span>
      </span>
      {showBeta && (
        <span
          style={{
            fontFamily:
              "var(--font-dm-mono), 'DM Mono', ui-monospace, monospace",
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ash, #5C6B8A)',
            padding: '2px 8px',
            borderRadius: 999,
            border: '1px solid var(--ash, #5C6B8A)',
            lineHeight: 1,
          }}
        >
          Beta
        </span>
      )}
    </span>
  );
}

export default GenkiMark;
