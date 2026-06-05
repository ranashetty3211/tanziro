export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
        <p className="font-jp text-2xl tracking-[0.4em] text-water">竈門炭治郎</p>
        <div className="divider-jp w-40" />
        <p className="max-w-md text-sm text-muted-foreground">
          A fan tribute. All characters and lore belong to Koyoharu Gotouge,
          Shueisha, and Ufotable.
        </p>
        <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          © Taisho · Demon Slayer Archives
        </p>
      </div>
    </footer>
  );
}