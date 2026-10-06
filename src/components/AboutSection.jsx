import { Reveal } from './Reveal.jsx';
import { SectionLabel } from './SectionLabel.jsx';

const stats = [
  { value: '1 248', label: 'км пройдено' },
  { value: '37', label: 'вершин' },
  { value: '86', label: 'друзей' },
];

export function AboutSection() {
  return (
    <Reveal className="mx-auto w-[calc(100%-48px)] max-w-[1240px] py-[135px]" id="about">
      <SectionLabel>01 / О клубе</SectionLabel>
      <div className="mb-16 mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h2 className="m-0 max-w-[680px] text-[clamp(38px,5.2vw,78px)] font-extrabold leading-[.98] tracking-[-.07em]">Мы выбираем<br />длинный путь <em className="text-moss not-italic">вместе.</em></h2>
        <p className="m-0 max-w-[290px] text-[14px] leading-[1.65] text-muted">산산대 — клуб любителей гор для тех, кто верит: лучшие разговоры начинаются где-то между стартом тропы и вершиной.</p>
      </div>
      <div className="grid items-start gap-12 md:grid-cols-[1.1fr_.9fr] md:gap-20">
        <div>
          <p className="m-0 max-w-[620px] text-[clamp(25px,3vw,42px)] leading-[1.2] tracking-[-.05em]">Ежемесячный ритуал <em className="text-moss not-italic">тихого усилия</em>, новых троп и радости от вида, который нужно заслужить.</p>
          <div className="mt-14 grid grid-cols-3 border-t border-ink/15">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`pt-5 ${index === 0 ? 'border-r border-ink/15 pr-3' : index === 1 ? 'border-r border-ink/15 px-3' : 'pl-3'}`}>
                <b className="block text-4xl tracking-[-.06em]">{stat.value}</b>
                <span className="font-mono text-[10px] uppercase tracking-[.08em] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded bg-moss-dark p-8 text-[#e5ece2] before:absolute before:-bottom-16 before:-right-5 before:font-serif before:text-[260px] before:opacity-[.06] before:content-['산']">
          <span className="relative font-mono text-[10px] uppercase tracking-[.15em] text-[#b4c8b5]">Заметка в пути / 004</span>
          <p className="relative max-w-[310px] font-serif text-[26px] leading-[1.35]">«Гора — не цель. Это способ научиться смотреть внимательнее».</p>
          <span className="relative font-mono text-[10px] uppercase tracking-[.15em] text-[#b4c8b5]">— 산산대, Сеул</span>
        </aside>
      </div>
    </Reveal>
  );
}
