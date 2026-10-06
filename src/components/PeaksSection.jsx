import { useRef } from 'react';
import { PeakCard } from './PeakCard.jsx';
import { Reveal } from './Reveal.jsx';
import { SectionLabel } from './SectionLabel.jsx';

const peaks = [
  { title: 'Тропа к водопаду', meta: 'Сентябрь 2024 · 08,4 км', position: 'center' },
  { title: 'Кванаксан', meta: 'Август 2024 · 11,2 км', position: '25% 50%' },
  { title: 'Пукхансан', meta: 'Июнь 2024 · 06,7 км', position: '75% 70%' },
];

export function PeaksSection() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    carouselRef.current?.scrollBy({
      left: direction * carouselRef.current.clientWidth * 0.75,
      behavior: 'smooth',
    });
  };

  return (
    <Reveal id="peaks" className="bg-[#e6ece7] px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1120px]">
        <SectionLabel>02 / Истории вершин</SectionLabel>
        <div className="mb-9 mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="m-0 max-w-[600px] text-[clamp(34px,4.5vw,62px)] font-extrabold leading-[.98] tracking-[-.07em]">Маршруты, которые<br />до сих пор <em className="text-moss not-italic">в ногах.</em></h2>
          <p className="m-0 max-w-[290px] text-[14px] leading-[1.65] text-muted">Каждое восхождение оставляет след: новую линию на карте, общий перекус и немного больше неба в неделе.</p>
        </div>

        <div className="mb-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollCarousel(-1)}
            aria-label="Предыдущие маршруты"
            aria-controls="peak-carousel"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-xl transition hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel(1)}
            aria-label="Следующие маршруты"
            aria-controls="peak-carousel"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-xl transition hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div
          id="peak-carousel"
          ref={carouselRef}
          role="region"
          aria-label="Карусель маршрутов"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          style={{ scrollbarWidth: 'none' }}
        >
          {peaks.map((peak) => (
            <PeakCard
              key={peak.title}
              {...peak}
              className="h-[320px] w-[min(82vw,350px)] shrink-0 snap-start md:h-[380px] md:w-[360px]"
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
