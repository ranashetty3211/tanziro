import { useMemo } from "react";

export function Sakura({ count = 24 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 14,
        size: 6 + Math.random() * 10,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute block rounded-[60%_40%_55%_45%/55%_60%_40%_45%]"
          style={{
            left: `${p.left}%`,
            top: `-5%`,
            width: p.size,
            height: p.size * 0.7,
            opacity: p.opacity,
            background:
              "radial-gradient(circle at 30% 30%, #fbcfe8, #f9a8d4 60%, transparent 80%)",
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
            filter: "blur(0.4px)",
          }}
        />
      ))}
    </div>
  );
}