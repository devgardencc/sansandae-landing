import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const mountain = '/assets/sansandae-mountain.png';
const logo = '/assets/sansandae-logo.jpg';

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .8, ease: [.22, 1, .36, 1] } } };

function Reveal({ children, className = '', delay = 0, ...props }) {
  return <motion.div {...props} className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .16 }} transition={{ delay }}>{children}</motion.div>;
}

function SectionLabel({ children, centered = false }) {
  return <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.14em] text-moss ${centered ? 'justify-center' : ''}`}><span className="h-px w-8 bg-moss" />{children}</div>;
}

export default function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-2.6, 2.6]), { stiffness: 80, damping: 20 });
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [2.6, -2.6]), { stiffness: 80, damping: 20 });
  const x = useSpring(useTransform(mouseX, [-1, 1], [-9, 9]), { stiffness: 80, damping: 24 });
  const y = useSpring(useTransform(mouseY, [-1, 1], [7, -7]), { stiffness: 80, damping: 24 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onMove = (event) => {
      mouseX.set((event.clientX / window.innerWidth - .5) * 2);
      mouseY.set((event.clientY / window.innerHeight - .5) * 2);
    };
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * .35);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); window.removeEventListener('scroll', onScroll); };
  }, [mouseX, mouseY]);

  return <div className="overflow-hidden bg-paper">
    <header className="absolute left-1/2 top-0 z-10 flex w-[calc(100%-48px)] max-w-[1240px] -translate-x-1/2 items-center justify-between py-6 md:py-7">
      <a href="#top" className="flex items-center gap-3 font-extrabold tracking-[-.04em]" aria-label="На главную">
        <img src={logo} alt="Логотип 산산대" className="h-9 w-9 rounded-full object-cover" /><span>SANSANDAE</span>
      </a>
      <nav className="hidden items-center gap-8 text-[12px] font-bold uppercase tracking-[.08em] text-[#526057] md:flex"><a href="#about" className="transition hover:text-ink">О клубе</a><a href="#peaks" className="transition hover:text-ink">Маршруты</a><a href="#join" className="transition hover:text-ink">Вступить</a></nav>
      <a href="#join" className="rounded-full border border-ink px-4 py-2 text-[12px] font-bold transition hover:bg-ink hover:text-paper">Ближайший поход ↗</a>
    </header>

    <main id="top">
      <section className="relative grid min-h-screen place-items-center bg-[radial-gradient(circle_at_50%_40%,#fff_0,var(--color-paper)_58%)] px-6 pb-20 pt-28">
        <div className="hero-orbit" />
        <div className="absolute left-1/2 top-1/2 z-[2] flex w-[calc(100%-48px)] max-w-[1240px] -translate-x-1/2 -translate-y-1/2 items-end justify-between pointer-events-none">
          <div><h1 className="m-0 max-w-[560px] text-[clamp(52px,8vw,132px)] font-extrabold leading-[.9] tracking-[-.08em]"><span className="mb-4 block font-serif text-[.37em] font-semibold tracking-[-.04em]">산산대 / клуб любителей гор</span>Найди свою<br />высоту.</h1></div>
          <p className="mb-1 hidden w-[205px] text-[13px] leading-relaxed text-muted lg:block"><strong className="mb-2 block font-mono text-[11px] uppercase tracking-[.12em] text-ink">Сеул · с 2021 года</strong>Небольшие группы, длинные маршруты и более внимательный взгляд на город, сезон и друг на друга.</p>
        </div>
        <motion.div className="relative z-[1] w-[min(680px,74vw)] [perspective:900px]" style={{ x, y, rotateX, rotateY }}>
          <div className="mountain-shadow" /><motion.img src={mountain} alt="Парящий горный остров с тропой и водопадом" className="block w-full drop-shadow-[0_25px_30px_rgba(28,48,36,.13)]" animate={{ y: [0, -10, 0], rotate: [-.5, .5, -.5] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
          <a className="hotspot absolute left-[51%] top-[18%] z-[3] h-4 w-4 cursor-pointer rounded-full border-4 border-white/85 bg-sakura" href="#join" data-label="Вершина · новый поход" aria-label="Перейти к новому походу" />
          <a className="hotspot absolute right-[23%] top-[64%] z-[3] h-4 w-4 cursor-pointer rounded-full border-4 border-white/85 bg-sakura" href="#about" data-label="Водопад · наш ритм" aria-label="Перейти к разделу о клубе" />
          <a className="hotspot absolute left-[31%] top-[53%] z-[3] h-4 w-4 cursor-pointer rounded-full border-4 border-white/85 bg-sakura" href="#peaks" data-label="Сакура · истории маршрутов" aria-label="Перейти к маршрутам" />
        </motion.div>
        <motion.div animate={{ opacity: scrolled ? 0 : 1 }} className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[.16em] text-muted"><i className="block h-px w-9 bg-ink" />Листайте, чтобы подняться</motion.div>
      </section>

      <Reveal className="mx-auto w-[calc(100%-48px)] max-w-[1240px] py-[135px]" id="about">
        <SectionLabel>01 / О клубе</SectionLabel>
        <div className="mb-16 mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="m-0 max-w-[680px] text-[clamp(38px,5.2vw,78px)] font-extrabold leading-[.98] tracking-[-.07em]">Мы выбираем<br />длинный путь <em className="text-moss not-italic">вместе.</em></h2><p className="m-0 max-w-[290px] text-[14px] leading-[1.65] text-muted">산산대 — клуб любителей гор для тех, кто верит: лучшие разговоры начинаются где-то между стартом тропы и вершиной.</p></div>
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_.9fr] md:gap-20"><div><p className="m-0 max-w-[620px] text-[clamp(25px,3vw,42px)] leading-[1.2] tracking-[-.05em]">Ежемесячный ритуал <em className="text-moss not-italic">тихого усилия</em>, новых троп и радости от вида, который нужно заслужить.</p><div className="mt-14 grid grid-cols-3 border-t border-ink/15"><div className="border-r border-ink/15 pr-3 pt-5"><b className="block text-4xl tracking-[-.06em]">1 248</b><span className="font-mono text-[10px] uppercase tracking-[.08em] text-muted">км пройдено</span></div><div className="border-r border-ink/15 px-3 pt-5"><b className="block text-4xl tracking-[-.06em]">37</b><span className="font-mono text-[10px] uppercase tracking-[.08em] text-muted">вершин</span></div><div className="pt-5 pl-3"><b className="block text-4xl tracking-[-.06em]">86</b><span className="font-mono text-[10px] uppercase tracking-[.08em] text-muted">друзей</span></div></div></div><aside className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded bg-moss-dark p-8 text-[#e5ece2] before:absolute before:-bottom-16 before:-right-5 before:font-serif before:text-[260px] before:opacity-[.06] before:content-['산']"><span className="relative font-mono text-[10px] uppercase tracking-[.15em] text-[#b4c8b5]">Заметка в пути / 004</span><p className="relative max-w-[310px] font-serif text-[26px] leading-[1.35]">«Гора — не цель. Это способ научиться смотреть внимательнее».</p><span className="relative font-mono text-[10px] uppercase tracking-[.15em] text-[#b4c8b5]">— 산산대, Сеул</span></aside></div>
      </Reveal>

      <Reveal id="peaks" className="bg-[#e6ece7] px-6 py-[135px] md:px-[max(24px,calc((100% - 1240px)/2))]"><SectionLabel>02 / Истории вершин</SectionLabel><div className="mb-16 mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="m-0 max-w-[680px] text-[clamp(38px,5.2vw,78px)] font-extrabold leading-[.98] tracking-[-.07em]">Маршруты, которые<br />до сих пор <em className="text-moss not-italic">в ногах.</em></h2><p className="m-0 max-w-[290px] text-[14px] leading-[1.65] text-muted">Каждое восхождение оставляет след: новую линию на карте, общий перекус и немного больше неба в неделе.</p></div><div className="grid grid-cols-2 gap-[18px]"><PeakCard className="col-span-2 min-h-[500px] md:col-span-1 md:row-span-2 md:min-h-[600px]" title="Тропа к водопаду" meta="Сентябрь 2024 · 08,4 км" position="center" /><PeakCard title="Кванаксан" meta="Август 2024 · 11,2 км" position="25% 50%" /><PeakCard title="Пукхансан" meta="Июнь 2024 · 06,7 км" position="75% 70%" /></div></Reveal>

      <Reveal id="join" className="px-6 py-40 text-center"><SectionLabel centered>03 / Следующее восхождение</SectionLabel><h2 className="mx-auto my-6 max-w-[950px] text-[clamp(48px,8vw,115px)] font-extrabold leading-[.87] tracking-[-.09em]">Оставьте место<br />для <em className="text-moss not-italic">вида.</em></h2><p className="mx-auto mb-9 text-muted">Следующий маршрут — небольшая группа и север на рассвете. Приходите такими, какие вы есть.</p><a className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-moss" href="mailto:hello@sansandae.club?subject=Хочу в 산산대">Вступить в клуб <span className="text-xl">↗</span></a></Reveal>
    </main>

    <footer className="bg-ink px-6 pb-7 pt-6 text-[#f1f1eb] md:px-[max(24px,calc((100% - 1240px)/2))]"><div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-14 md:flex-row md:items-center"><div className="font-serif text-[28px]">산산대 Sansandae</div><div className="flex gap-7 text-[12px] text-[#bac4bd]"><a href="mailto:hello@sansandae.club">Почта</a><a href="#join">KakaoTalk</a><a href="#join">Instagram</a></div></div><div className="flex flex-col justify-between gap-3 pt-5 font-mono text-[10px] uppercase tracking-[.08em] text-[#88958d] md:flex-row"><span>© 2024 Sansandae Hiking Club</span><span>Сделано для тех, кто любит горы</span></div></footer>
  </div>;
}

function PeakCard({ title, meta, className = '', position = 'center' }) {
  return <motion.article whileHover={{ y: -4 }} className={`group relative min-h-[270px] overflow-hidden bg-[#cbd7cc] ${className}`}><img src={mountain} alt={title} style={{ objectPosition: position }} className="h-full w-full object-cover saturate-[.8] contrast-[.95] transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(13,27,19,.75)]" /><div className="absolute bottom-6 left-6 z-[1] text-white"><small className="font-mono text-[10px] uppercase tracking-[.12em]">{meta}</small><h3 className="m-1 0 0 text-[28px] font-bold tracking-[-.05em]">{title}</h3></div></motion.article>;
}
