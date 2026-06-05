import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "#story", label: "Story", jp: "物語" },
  { href: "#about", label: "About", jp: "私達" },
  { href: "#breathing", label: "Breathing", jp: "呼吸" },
  { href: "#gallery", label: "Gallery", jp: "画廊" },
  { href: "#quotes", label: "Quotes", jp: "言葉" },
  { href: "#battles", label: "Battles", jp: "戦い" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const blur = useTransform(scrollY, [0, 200], [0, 14]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          style={{
            opacity,
            backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
          }}
          className="absolute inset-0 border-b border-border/50 bg-background/40"
        />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="group flex items-center gap-3" data-cursor="hover">
            <span className="font-display text-lg tracking-[0.3em] text-foreground">
              竈門
            </span>
            <span className="hidden text-xs uppercase tracking-[0.4em] text-muted-foreground sm:inline">
              Kamado
            </span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-cursor="hover"
                  className="group relative inline-flex flex-col items-center px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span>{l.label}</span>
                  <span className="font-jp absolute -bottom-0.5 text-[10px] opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-70 group-hover:translate-y-0 text-water">
                    {l.jp}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#story"
            data-cursor="hover"
            className="glass glass-hover rounded-full px-5 py-2 text-xs uppercase tracking-[0.3em] text-foreground"
          >
            Enter
          </a>
        </nav>
      </header>
  );
}