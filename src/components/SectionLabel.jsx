export function SectionLabel({ children, centered = false }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.14em] text-moss ${centered ? 'justify-center' : ''}`}>
      <span className="h-px w-8 bg-moss" />
      {children}
    </div>
  );
}
