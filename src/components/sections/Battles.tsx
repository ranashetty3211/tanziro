import { Reveal } from "../Reveal";
import battle from "@/assets/battle.jpg";

const battles = [
  { year: "Arc I", title: "Final Selection", place: "Mt. Fujikasane", outcome: "Survived seven nights — earns the Nichirin blade." },
  { year: "Arc III", title: "Swamp Demon", place: "Asakusa Outskirts", outcome: "First true test of the Water Breathing forms." },
  { year: "Arc IV", title: "Mount Natagumo", place: "Spider Family", outcome: "Joined by Inosuke and Zenitsu — bonds forged in blood." },
  { year: "Arc VII", title: "Mugen Train", place: "Infinity Express", outcome: "Witnesses Rengoku's burning heart against Akaza." },
  { year: "Arc VIII", title: "Entertainment District", place: "Yoshiwara", outcome: "Faces Upper Moon Six alongside the Sound Hashira." },
  { year: "Final", title: "Infinity Castle", place: "Beneath the World", outcome: "Calls upon the Hinokami — the dance of the fire god." },
];

export function Battles() {
  return (
    <section id="battles" className="relative overflow-hidden py-32 sm:py-44">
      <img
        src={battle}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-2/3 object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/95 to-background/40" />

      <div className="mx-auto max-w-7xl px-6">
        <div>
          <Reveal>
            <span className="font-jp text-xs tracking-[0.5em] text-water">戦い — BATTLES</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl font-display text-4xl sm:text-6xl">
              A chronicle of every <span className="text-gradient-ember">scar</span> earned.
            </h2>
          </Reveal>
        </div>

        <ol className="relative mt-20 border-l border-water/30 pl-10">
          {battles.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <li className="group relative mb-12 last:mb-0">
                <span className="absolute -left-[46px] top-2 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-water/30 transition-all duration-500 group-hover:scale-150 group-hover:bg-water/60" />
                  <span className="relative h-2 w-2 rounded-full bg-water glow-water" />
                </span>
                <div className="glass glass-hover rounded-2xl p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl">{b.title}</h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {b.year} · {b.place}
                    </span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{b.outcome}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}