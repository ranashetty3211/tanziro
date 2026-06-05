import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import forest from "@/assets/hero-forest.jpg";
import water from "@/assets/water-breathing.jpg";
import sakura from "@/assets/sakura.jpg";
import village from "@/assets/village.jpg";
import battle from "@/assets/battle.jpg";

const items = [
  { src: forest, label: "Mt. Sagiri", jp: "狭霧山", span: "lg:col-span-2 lg:row-span-2" },
  { src: water, label: "Dragon of Water", jp: "水の龍", span: "" },
  { src: sakura, label: "Final Selection", jp: "最終選別", span: "" },
  { src: village, label: "Home in Snow", jp: "雪の家", span: "lg:col-span-2" },
  { src: battle, label: "Beneath the Moon", jp: "月下", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 sm:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="font-jp text-xs tracking-[0.5em] text-water">画廊 — GALLERY</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl sm:text-6xl">Fragments of a Journey</h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-muted-foreground">
              Hand-picked stills from the road between Sagiri and the eternal
              night.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05} className={`${it.span} h-full`}>
              <motion.figure
                whileHover={{ scale: 1.01 }}
                className="glass group relative h-full w-full overflow-hidden rounded-2xl"
                data-cursor="hover"
              >
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-85 transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-jp text-xs text-water">{it.jp}</p>
                    <p className="font-display text-lg">{it.label}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}