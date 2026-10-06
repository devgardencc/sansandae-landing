import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const mountain = '/assets/sansandae-mountain.png';

const hotspots = [
  { className: 'left-[51%] top-[18%]', href: '#join', label: 'Вершина · новый поход', ariaLabel: 'Перейти к новому походу' },
  { className: 'right-[23%] top-[64%]', href: '#about', label: 'Водопад · наш ритм', ariaLabel: 'Перейти к разделу о клубе' },
  { className: 'left-[31%] top-[53%]', href: '#peaks', label: 'Сакура · истории маршрутов', ariaLabel: 'Перейти к маршрутам' },
];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-2.6, 2.6]), { stiffness: 80, damping: 20 });
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [2.6, -2.6]), { stiffness: 80, damping: 20 });
  const x = useSpring(useTransform(mouseX, [-1, 1], [-9, 9]), { stiffness: 80, damping: 24 });
  const y = useSpring(useTransform(mouseY, [-1, 1], [7, -7]), { stiffness: 80, damping: 24 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onMove = (event) => {
      mouseX.set((event.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.35);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="relative grid min-h-screen place-items-center bg-[radial-gradient(circle_at_50%_40%,#fff_0,var(--color-paper)_58%)] px-6 pb-20 pt-28">
      <div className="hero-orbit" />
      <div className="pointer-events-none absolute left-1/2 top-[30%] z-[2] flex w-[calc(100%-48px)] max-w-[1240px] -translate-x-1/2 -translate-y-1/2 items-end justify-between md:top-1/2">
        <div>
          <h1 className="m-0 max-w-[560px] text-[clamp(52px,8vw,132px)] font-extrabold leading-[.9] tracking-[-.08em]">
            <span className="mb-4 block font-serif text-[.37em] font-semibold tracking-[-.04em]">산산대 / клуб любителей гор</span>
            Найди свою<br />высоту.
          </h1>
        </div>
        <p className="mb-1 hidden w-[205px] text-[13px] leading-relaxed text-muted lg:block">
          <strong className="mb-2 block font-mono text-[11px] uppercase tracking-[.12em] text-ink">Сеул · с 2021 года</strong>
          Небольшие группы, длинные маршруты и более внимательный взгляд на город, сезон и друг на друга.
        </p>
      </div>
      <motion.div className="relative z-[1] w-[min(680px,74vw)] [perspective:900px]" style={{ x, y, rotateX, rotateY }}>
        <div className="mountain-shadow" />
        <motion.img
          src={mountain}
          alt="Парящий горный остров с тропой и водопадом"
          className="block w-full drop-shadow-[0_25px_30px_rgba(28,48,36,.13)]"
          animate={{ y: [0, -10, 0], rotate: [-0.5, 0.5, -0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {hotspots.map((hotspot) => (
          <a
            key={hotspot.label}
            className={`hotspot absolute z-[3] h-4 w-4 cursor-pointer rounded-full border-4 border-white/85 bg-sakura ${hotspot.className}`}
            href={hotspot.href}
            data-label={hotspot.label}
            aria-label={hotspot.ariaLabel}
          />
        ))}
      </motion.div>
      <motion.div animate={{ opacity: scrolled ? 0 : 1 }} className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[.16em] text-muted">
        <i className="block h-px w-9 bg-ink" />Листайте, чтобы подняться
      </motion.div>
    </section>
  );
}
