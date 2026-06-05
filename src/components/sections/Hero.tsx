import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, lazy, Suspense } from "react";
import forest from "@/assets/hero-forest.jpg";

const HeroScene = lazy(() =>
  import("../HeroScene").then((m) => ({ default: m.HeroScene }))
);

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="noise relative min-h-screen w-full overflow-hidden"
    >
      {/* Parallax forest backdrop */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        <img
          src={forest}
          alt=""
          aria-hidden
          width={1920}
          height={1216}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, transparent 0%, oklch(0.10 0.02 230 / 0.7) 70%)",
          }}
        />
      </motion.div>

      {/* 3D water orb */}
      <div className="absolute inset-0 -z-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-end px-6 pb-24 pt-[34vh] text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="font-jp text-sm tracking-[0.8em] text-water"
        >
          竈門 炭治郎
        </motion.span>

        <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl md:text-[6rem]">
          {"Tanjiro".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0, filter: "blur(12px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.4 + i * 0.08, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
          <span className="text-gradient-water"> Kamado</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1.2 }}
          className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A charcoal seller's son who walks the path of the slayer — carrying
          kindness as a blade and the breath of water as a vow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1.6 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-water to-transparent" />
        </motion.div>
      </motion.div>

      {/* Shimmer divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px shimmer-line" />
    </section>
  );
}