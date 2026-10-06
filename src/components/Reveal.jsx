import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, className = '', delay = 0, ...props }) {
  return (
    <motion.div
      {...props}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
