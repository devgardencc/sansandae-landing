const logo = '/assets/sansandae-logo.jpg';

export function Header() {
  return (
    <header className="absolute left-1/2 top-0 z-10 flex w-[calc(100%-48px)] max-w-[1240px] -translate-x-1/2 items-center justify-between py-6 md:py-7">
      <a href="#top" className="flex items-center gap-3 font-extrabold tracking-[-.04em]" aria-label="На главную">
        <img src={logo} alt="Логотип 산산대" className="h-9 w-9 rounded-full object-cover" />
        <span>SANSANDAE</span>
      </a>
      <nav aria-label="Основная навигация" className="hidden items-center gap-8 text-[12px] font-bold uppercase tracking-[.08em] text-[#526057] md:flex">
        <a href="#about" className="transition hover:text-ink">О клубе</a>
        <a href="#peaks" className="transition hover:text-ink">Маршруты</a>
        <a href="#join" className="transition hover:text-ink">Вступить</a>
      </nav>
      <a href="#join" className="rounded-full border border-ink px-4 py-2 text-[12px] font-bold transition hover:bg-ink hover:text-paper">Ближайший поход ↗</a>
    </header>
  );
}
