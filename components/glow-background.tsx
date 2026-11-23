export function GlowBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="glow glow-violet" />
      <div className="glow glow-cyan" />
      <div className="glow glow-blue" />
      <div className="dot-grid absolute inset-0" />
    </div>
  );
}
