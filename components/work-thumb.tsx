import type { CaseThumb } from "@/lib/cases";

/**
 * Lightweight stand-in graphics shown in the home `Selected work` cards. Real
 * thumbnails (live demos, screenshots) land with the case-study phases — these
 * just give each card a distinct visual signature in the meantime.
 *
 * Each thumb is a pure SVG, ~5 elements, no JS, scales with the card. They use
 * `currentColor` for the ink hairlines so they pick up the theme automatically.
 */
export function WorkThumb({ kind }: { kind: CaseThumb }) {
  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-(--radius) border border-line bg-(--cream-soft) text-ink-mute">
      <svg
        viewBox="0 0 320 200"
        className="h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        {kind === "chat" ? <ChatThumb /> : null}
        {kind === "schedule" ? <ScheduleThumb /> : null}
        {kind === "extract" ? <ExtractThumb /> : null}
        {kind === "pipeline" ? <PipelineThumb /> : null}
        {kind === "browser" ? <BrowserThumb /> : null}
        {kind === "dashboard" ? <DashboardThumb /> : null}
      </svg>
    </div>
  );
}

function ChatThumb() {
  return (
    <g>
      <rect x="32" y="40" width="160" height="32" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="32" y="80" width="120" height="20" rx="2" fill="currentColor" opacity="0.1" />
      <rect x="128" y="112" width="160" height="32" rx="2" fill="oklch(0.58 0.18 248)" opacity="0.85" />
      <rect x="168" y="152" width="120" height="20" rx="2" fill="oklch(0.58 0.18 248)" opacity="0.55" />
    </g>
  );
}

function ScheduleThumb() {
  return (
    <g>
      {Array.from({ length: 7 }).map((_, c) =>
        Array.from({ length: 4 }).map((_, r) => {
          const filled = (c + r) % 3 === 0;
          return (
            <rect
              key={`${c}-${r}`}
              x={32 + c * 36}
              y={40 + r * 36}
              width="28"
              height="28"
              rx="2"
              fill={filled ? "oklch(0.58 0.18 248)" : "currentColor"}
              opacity={filled ? 0.85 : 0.15}
            />
          );
        }),
      )}
    </g>
  );
}

function ExtractThumb() {
  return (
    <g>
      <rect x="32" y="32" width="120" height="136" rx="2" fill="currentColor" opacity="0.1" />
      <rect x="44" y="48" width="96" height="6" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="44" y="64" width="80" height="6" rx="2" fill="currentColor" opacity="0.25" />
      <rect x="44" y="80" width="60" height="6" rx="2" fill="currentColor" opacity="0.25" />
      <rect x="44" y="120" width="96" height="6" rx="2" fill="currentColor" opacity="0.25" />
      <rect x="44" y="136" width="60" height="6" rx="2" fill="currentColor" opacity="0.25" />
      <path
        d="M168 100 L196 100 M186 92 L196 100 L186 108"
        stroke="oklch(0.58 0.18 248)"
        strokeWidth="2"
        fill="none"
      />
      <rect x="208" y="48" width="80" height="120" rx="2" fill="oklch(0.58 0.18 248)" opacity="0.18" />
      <rect x="220" y="64" width="56" height="6" rx="2" fill="oklch(0.58 0.18 248)" />
      <rect x="220" y="80" width="40" height="6" rx="2" fill="oklch(0.58 0.18 248)" opacity="0.7" />
      <rect x="220" y="100" width="56" height="6" rx="2" fill="oklch(0.58 0.18 248)" />
      <rect x="220" y="116" width="40" height="6" rx="2" fill="oklch(0.58 0.18 248)" opacity="0.7" />
    </g>
  );
}

function PipelineThumb() {
  return (
    <g>
      <line x1="48" y1="100" x2="272" y2="100" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      {[48, 104, 160, 216, 272].map((x) => (
        <circle key={x} cx={x} cy="100" r="6" fill="currentColor" opacity="0.7" />
      ))}
      <circle cx="160" cy="100" r="9" fill="oklch(0.58 0.18 248)" />
    </g>
  );
}

function BrowserThumb() {
  return (
    <g>
      <rect x="32" y="32" width="256" height="136" rx="3" fill="currentColor" opacity="0.1" />
      <rect x="32" y="32" width="256" height="20" rx="3" fill="currentColor" opacity="0.18" />
      <circle cx="44" cy="42" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="56" cy="42" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="68" cy="42" r="3" fill="currentColor" opacity="0.4" />
      <rect x="48" y="68" width="120" height="14" rx="2" fill="oklch(0.58 0.18 248)" />
      <rect x="48" y="92" width="180" height="6" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="48" y="108" width="160" height="6" rx="2" fill="currentColor" opacity="0.25" />
      <rect x="48" y="124" width="100" height="6" rx="2" fill="currentColor" opacity="0.25" />
      <rect x="48" y="148" width="60" height="14" rx="2" fill="oklch(0.58 0.18 248)" />
    </g>
  );
}

function DashboardThumb() {
  return (
    <g>
      <rect x="32" y="32" width="120" height="56" rx="2" fill="currentColor" opacity="0.1" />
      <rect x="160" y="32" width="60" height="56" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="228" y="32" width="60" height="56" rx="2" fill="oklch(0.58 0.18 248)" opacity="0.25" />
      <polyline
        points="44,76 60,68 76,72 92,52 108,60 124,46 140,52"
        stroke="oklch(0.58 0.18 248)"
        strokeWidth="2"
        fill="none"
      />
      <rect x="32" y="100" width="256" height="68" rx="2" fill="currentColor" opacity="0.08" />
      {[44, 76, 108, 140, 172, 204, 236, 268].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={108 + (i % 3) * 4}
          width="20"
          height={48 - (i % 3) * 8}
          fill="oklch(0.58 0.18 248)"
          opacity={0.45 + (i % 3) * 0.18}
        />
      ))}
    </g>
  );
}
