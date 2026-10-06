import { motion } from 'framer-motion';

const mountain = '/assets/sansandae-mountain.png';

export function PeakCard({ title, meta, className = '', position = 'center' }) {
  return (
    <motion.article whileHover={{ y: -4 }} className={`group relative min-h-[270px] overflow-hidden bg-[#cbd7cc] ${className}`}>
      <img src={mountain} alt={title} style={{ objectPosition: position }} className="h-full w-full object-cover saturate-[.8] contrast-[.95] transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(13,27,19,.75)]" />
      <div className="absolute bottom-6 left-6 z-[1] text-white">
        <small className="font-mono text-[10px] uppercase tracking-[.12em]">{meta}</small>
        <h3 className="m-0 mt-1 text-[28px] font-bold tracking-[-.05em]">{title}</h3>
      </div>
    </motion.article>
  );
}
