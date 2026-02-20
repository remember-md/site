import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const LINES = [
  { text: "$ claude", color: "#a6e3a1", delay: 0 },
  { text: '> remember this: met Sarah, she prefers', color: "#cdd6f4", delay: 25 },
  { text: '  JWT over OAuth for internal APIs', color: "#cdd6f4", delay: 40 },
  { text: "", color: "", delay: 55 },
  { text: "✓ Brain dump detected", color: "#f9e2af", delay: 70 },
  { text: "  → Updated People/sarah-chen.md", color: "#89b4fa", delay: 85 },
  { text: "  → Created Notes/decision-auth.md", color: "#a6e3a1", delay: 100 },
  { text: "  → Linked [[Projects/auth-service]]", color: "#cba6f7", delay: 115 },
  { text: "", color: "", delay: 130 },
  { text: "✓ Saved to brain in 49ms", color: "#a6e3a1", delay: 145 },
];

function TerminalLine({ text, color, startFrame }: { text: string; color: string; startFrame: number }) {
  const frame = useCurrentFrame();

  if (frame < startFrame) return null;

  const localFrame = frame - startFrame;
  const charsToShow = Math.min(Math.floor(localFrame * 1.5), text.length);
  const displayText = text.substring(0, charsToShow);
  const showCursor = charsToShow < text.length;

  const opacity = interpolate(localFrame, [0, 5], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ opacity, fontFamily: "monospace", fontSize: 14, lineHeight: 1.8, color, whiteSpace: "pre" }}>
      {displayText}
      {showCursor && <span style={{ opacity: frame % 30 < 15 ? 1 : 0, color: "#fff" }}>▌</span>}
    </div>
  );
}

function BrainNode({ x, y, label, delay }: { x: number; y: number; label: string; delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame: frame - delay, fps, config: { damping: 12 } });
  const opacity = interpolate(frame - delay, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  if (frame < delay) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${scale})`,
        opacity,
        background: "rgba(139, 92, 246, 0.15)",
        border: "1px solid rgba(139, 92, 246, 0.3)",
        borderRadius: 8,
        padding: "4px 10px",
        fontSize: 11,
        color: "#c4b5fd",
        fontFamily: "monospace",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </div>
  );
}

// L-shaped tree connector like a file explorer: vertical down then horizontal right
function TreeLine({ x, y1, y2, indent, delay }: { x: number; y1: number; y2: number; indent: number; delay: number }) {
  const frame = useCurrentFrame();
  if (frame < delay) return null;

  const opacity = interpolate(frame - delay, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  return (
    <svg
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", opacity }}
    >
      {/* Vertical line down */}
      <line x1={x} y1={y1} x2={x} y2={y2} stroke="rgba(139, 92, 246, 0.25)" strokeWidth={1} />
      {/* Horizontal line right to child */}
      <line x1={x} y1={y2} x2={x + indent} y2={y2} stroke="rgba(139, 92, 246, 0.25)" strokeWidth={1} />
    </svg>
  );
}

// Pulse ring for the "brain active" indicator
function PulseRing({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  if (frame < delay) return null;

  const localFrame = (frame - delay) % 60;
  const scale = interpolate(localFrame, [0, 60], [1, 2.5]);
  const opacity = interpolate(localFrame, [0, 60], [0.4, 0]);

  return (
    <div
      style={{
        position: "absolute",
        right: 14,
        top: 10,
        width: 8,
        height: 8,
        borderRadius: "50%",
        border: "1px solid rgba(167, 139, 250, 0.5)",
        transform: `scale(${scale})`,
        opacity,
      }}
    />
  );
}

export const HeroAnimation: React.FC = () => {
  const frame = useCurrentFrame();

  // Flash effect when hook triggers
  const flashOpacity = frame >= 70 && frame <= 80
    ? interpolate(frame, [70, 75, 80], [0, 0.12, 0])
    : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#1e1e2e", padding: 0 }}>
      {/* Window chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: 12, fontSize: 12, color: "#6c7086", fontFamily: "monospace" }}>remember.md — one brain, every AI tool</span>
      </div>

      {/* Flash overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(139, 92, 246, 1)",
        opacity: flashOpacity,
        pointerEvents: "none",
        zIndex: 10,
      }} />

      <div style={{ display: "flex", height: "calc(100% - 41px)" }}>
        {/* Terminal side */}
        <div style={{ flex: 1, padding: "16px 20px", overflow: "hidden" }}>
          {LINES.map((line, i) => (
            <TerminalLine key={i} text={line.text} color={line.color} startFrame={line.delay} />
          ))}
        </div>

        {/* Brain side */}
        <div style={{
          width: 220,
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            padding: "12px 14px",
            fontSize: 11,
            color: "#6c7086",
            fontFamily: "monospace",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            <span>~/remember/</span>
            {frame >= 70 && (
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#a6e3a1",
                display: "inline-block",
              }} />
            )}
          </div>

          <PulseRing delay={70} />

          <BrainNode x={14} y={50} label="People/" delay={80} />
          <BrainNode x={28} y={85} label="sarah-chen.md" delay={90} />
          <BrainNode x={14} y={130} label="Notes/" delay={95} />
          <BrainNode x={28} y={165} label="decision-auth.md" delay={105} />
          <BrainNode x={14} y={210} label="Projects/" delay={110} />
          <BrainNode x={28} y={245} label="auth-service/" delay={120} />

          {/* Tree lines: folder → child (L-shaped like file explorer) */}
          <TreeLine x={22} y1={72} y2={97} indent={6} delay={90} />
          <TreeLine x={22} y1={152} y2={177} indent={6} delay={105} />
          <TreeLine x={22} y1={232} y2={257} indent={6} delay={120} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
