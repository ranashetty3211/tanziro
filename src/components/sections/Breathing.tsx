import { Reveal } from "../Reveal";
import water from "@/assets/water-breathing.jpg";
import { motion } from "framer-motion";

const forms = [
  { n: "I", name: "Water Surface Slash", jp: "水面斬り", desc: "A single decisive arc — the simplest, sharpest form." },
  { n: "II", name: "Water Wheel", jp: "水車", desc: "A vertical revolution that turns gravity into a blade." },
  { n: "III", name: "Flowing Dance", jp: "流流舞い", desc: "Footwork like a river bending past stone." },
  { n: "VI", name: "Whirlpool", jp: "ねじれ渦", desc: "A spinning current that swallows the strike." },
  { n: "VIII", name: "Waterfall Basin", jp: "滝壺", desc: "Defensive stillness — a pool that absorbs the storm." },
  { n: "X", name: "Constant Flux", jp: "生生流転", desc: "A ten-fold spiral that grows with every revolution." },
];

export function Breathing() {
  return (
    <section id="breathing" className="relative overflow-hidden py-32 sm:py-44">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url(${water})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-background/80" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="font-jp text-xs tracking-[0.5em] text-water">呼吸 — BREATHING</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl sm:text-6xl">
              The Ten Forms of <span className="text-gradient-water">Water</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Taught by the former Water Hashira Sakonji Urokodaki — a breathing
              style as gentle and lethal as a river running through stone.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {forms.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                className="glass glass-hover group relative h-full rounded-2xl p-7"
                data-cursor="hover"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl text-gradient-water">{f.n}</span>
                  <span className="font-jp text-sm text-muted-foreground transition-colors group-hover:text-water">
                    {f.jp}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl text-foreground">{f.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                <div className="divider-jp mt-6" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}