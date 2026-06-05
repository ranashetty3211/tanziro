import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className="rounded-full transition-all duration-300"
          style={{
            width: hover ? 48 : 10,
            height: hover ? 48 : 10,
            background: hover ? "transparent" : "oklch(0.78 0.13 200)",
            border: hover ? "1px solid oklch(0.78 0.13 200)" : "none",
            boxShadow: "0 0 20px oklch(0.78 0.13 200 / 0.6)",
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[99] hidden md:block w-1.5 h-1.5 rounded-full bg-white/80"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}