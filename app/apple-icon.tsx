/**
 * =============================================================================
 * APPLE TOUCH ICON
 * =============================================================================
 *
 * PURPOSE: Generate the 180×180 apple-touch-icon for iOS home-screen pin.
 * WHAT IT DOES: Renders the 元気 stamp as a PNG via next/og ImageResponse.
 * WHY IT EXISTS: iOS prefers a PNG apple-touch-icon. SVG favicons cover the
 *   browser tab; this covers home-screen pin.
 * CONSTRAINTS/GOTCHAS:
 *   - ImageResponse supports a limited CSS subset — no writing-mode, so the
 *     two kanji are stacked with flex column.
 *   - Falls back to system serif (Satori bundles a default font). Visual
 *     match to Shippori Mincho is close enough at this size.
 * =============================================================================
 */

import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0B1F44',
          borderRadius: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          fontWeight: 800,
          lineHeight: 1,
        }}
      >
        <div style={{ color: '#FFFFFF', fontSize: 72 }}>元</div>
        <div style={{ color: '#2DD4BF', fontSize: 72, marginTop: 4 }}>気</div>
      </div>
    ),
    { ...size }
  );
}
