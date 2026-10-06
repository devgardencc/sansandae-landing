export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-7 pt-6 text-[#f1f1eb] md:px-[max(24px,calc((100% - 1240px)/2))]">
      <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-14 md:flex-row md:items-center">
        <div className="font-serif text-[28px]">산산대 Sansandae</div>
        <div className="flex gap-7 text-[12px] text-[#bac4bd]">
          <a href="mailto:hello@sansandae.club">Почта</a>
          <a href="#join">KakaoTalk</a>
          <a href="#join">Instagram</a>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 pt-5 font-mono text-[10px] uppercase tracking-[.08em] text-[#88958d] md:flex-row">
        <span>© 2024 Sansandae Hiking Club</span>
        <span>Сделано для тех, кто любит горы</span>
      </div>
    </footer>
  );
}
