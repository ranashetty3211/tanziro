import { Reveal, RevealText } from "../Reveal";
import village from "@/assets/village.jpg";
import { Sakura } from "../Sakura";

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-32 sm:py-44">
      <Sakura count={20} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="font-jp text-xs tracking-[0.5em] text-water">物語 — STORY</span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
            <RevealText text="A quiet boy from the mountain." />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              On a snowbound morning, Tanjiro returned to find his family taken
              by a demon — all but Nezuko, his sister, transformed yet still
              fighting to remain human. From that ash he chose a vow: to walk
              into the dark with a blade, and to bring her home.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="divider-jp mt-10 w-32" />
            <dl className="mt-10 grid grid-cols-3 gap-6 text-sm">
              {[
                ["Age", "15"],
                ["Breath", "Water / Sun"],
                ["Rank", "Kanoe"],
              ].map(([k, v]) => (
                <div key={k} className="glass glass-hover rounded-xl p-4">
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{k}</dt>
                  <dd className="mt-2 font-display text-lg text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="glass relative overflow-hidden rounded-2xl">
              <img
                src={village}
                alt="Snowed-in mountain village at night"
                loading="lazy"
                width={1280}
                height={896}
                className="h-[520px] w-full object-cover opacity-90 transition-transform duration-[1400ms] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-jp text-xs text-water">竈門家</p>
                  <p className="mt-1 font-display text-2xl">The Kamado Home</p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Taisho Era
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}