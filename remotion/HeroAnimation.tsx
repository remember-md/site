import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Sequence } from "remotion";

const LINES = [
  { text: "$ claude", color: "#a6e3a1", delay: 0 },
  { text: '> "Remember: we decided to use PostgreSQL', color: "#cdd6f4", delay: 30 },
  { text: '   for the auth service because of...', color: "#cdd6f4", delay: 45 },
  { text: "", color: "", delay: 60 },
  { text: "✓ Hook triggered: remember", color: "#f9e2af", delay: 80 },
  { text: "  → Writing to second-brain/Decisions/", color: "#89b4fa", delay: 95 },
  { text: "  → Created: auth-database-choice.md", color: "#a6e3a1", delay: 110 },
  { text: "  → Linked: [[Projects/auth-service]]", color: "#cba6f7", delay: 125 },
  { text: "", color: "", delay: 140 },
  { text: "✓ Captured in 12ms", color: "#a6e3a1", delay: 155 },
];

function TerminalLine({ text, color, startFrame }: { text: string; color: string; startFrame: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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

function ConnectionLine({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) {
  const frame = useCurrentFrame();
  if (frame < delay) return null;

  const progress = interpolate(frame - delay, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <svg
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <line
        x1={x1}
        y1={y1}
        x2={x1 + (x2 - x1) * progress}
        y2={y1 + (y2 - y1) * progress}
        stroke="rgba(139, 92, 246, 0.3)"
        strokeWidth={1}
        strokeDasharray="4,4"
      />
    </svg>
  );
}

export const HeroAnimation: React.FC = () => {
  const frame = useCurrentFrame();

  // Flash effect when hook triggers
  const flashOpacity = frame >= 80 && frame <= 90
    ? interpolate(frame, [80, 85, 90], [0, 0.15, 0])
    : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#1e1e2e", padding: 0 }}>
      {/* Window chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: 12, fontSize: 12, color: "#6c7086", fontFamily: "monospace" }}>claude-code — terminal</span>
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
          width: 200,
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
          }}>
            second-brain/
          </div>

          <BrainNode x={20} y={50} label="📁 Decisions" delay={100} />
          <BrainNode x={30} y={95} label="📄 auth-db.md" delay={115} />
          <BrainNode x={20} y={150} label="📁 Projects" delay={130} />
          <BrainNode x={30} y={195} label="📄 auth-service" delay={140} />

          <ConnectionLine x1={90} y1={115} x2={90} y2={155} delay={145} />
          <ConnectionLine x1={70} y1={75} x2={70} y2={100} delay={120} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
