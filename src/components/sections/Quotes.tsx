import { Reveal } from "../Reveal";

const quotes = [
  {
    en: "No matter how many people you may lose, you have no choice but to go on living.",
    jp: "どんなに人を失っても、生きていくしかないんだ",
  },
  {
    en: "The bond between Nezuko and me cannot be severed by anyone.",
    jp: "禰豆子との絆は誰にも引き裂けない",
  },
  {
    en: "Set your heart ablaze.",
    jp: "心を燃やせ",
  },
];

export function Quotes() {
  return (
    <section id="quotes" className="relative overflow-hidden py-32 sm:py-44">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.78 0.13 200 / 0.10) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="font-jp text-xs tracking-[0.5em] text-water">言葉 — WORDS</span>
          </Reveal>
        </div>
        <div className="mt-20 space-y-12">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="glass glass-hover relative mx-auto max-w-3xl rounded-3xl p-10 sm:p-14">
                <span
                  aria-hidden
                  className="absolute -top-6 left-8 font-display text-7xl text-water/40"
                >
                  &ldquo;
                </span>
                <blockquote className="font-display text-2xl leading-snug sm:text-3xl">
                  {q.en}
                </blockquote>
                <figcaption className="mt-6 font-jp text-sm tracking-wider text-muted-foreground">
                  {q.jp}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}