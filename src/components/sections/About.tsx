import { Reveal, RevealText } from "../Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-18, -6]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-32 sm:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, oklch(0.18 0.04 220 / 0.5), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="font-jp text-xs tracking-[0.5em] text-water">
              私たちについて — ABOUT US
            </span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            <RevealText text="Keepers of the Slayer's Flame." />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We are a small archive of devoted artisans — illustrators, writers,
              and motion designers — gathering fragments of the Taisho era into
              a single, quiet tribute. Every frame here is hand-tuned, every
              breath of water rendered with care.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="divider-jp mt-10 w-32" />
            <dl className="mt-10 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
              {[
                ["Founded", "Taisho 14"],
                ["Devotees", "1,204"],
                ["Chronicles", "37"],
              ].map(([k, v]) => (
                <div key={k} className="glass glass-hover rounded-xl p-4">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-2 font-display text-lg text-foreground">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.25}>
            <blockquote className="glass relative rounded-2xl p-8">
              <span className="font-jp absolute -top-3 left-6 bg-background px-2 text-xs text-water">
                信念
              </span>
              <p className="font-display text-xl leading-relaxed text-foreground">
                "To remember kindly, and to render faithfully — so that the
                blade, the breath, and the boy are never forgotten."
              </p>
              <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — The Archive
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}