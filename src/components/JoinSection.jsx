import { Reveal } from './Reveal.jsx';
import { SectionLabel } from './SectionLabel.jsx';

export function JoinSection() {
  return (
    <Reveal id="join" className="px-6 py-40 text-center">
      <SectionLabel centered>03 / Следующее восхождение</SectionLabel>
      <h2 className="mx-auto my-6 max-w-[950px] text-[clamp(48px,8vw,115px)] font-extrabold leading-[.87] tracking-[-.09em]">Оставьте место<br />для <em className="text-moss not-italic">вида.</em></h2>
      <p className="mx-auto mb-9 text-muted">Следующий маршрут — небольшая группа и север на рассвете. Приходите такими, какие вы есть.</p>
      <a className="inline-flex items-center gap-3 rounded-full bg-moss px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-moss" href="#join">
        Вступить в клуб <span className="text-xl">↗</span>
      </a>
    </Reveal>
  );
}
