const techs = [
  'React',
  'Next.js',
  'React Native',
  'Flutter',
  'Vue',
  'Angular',
  'TypeScript',
  'Node.js',
  'PHP',
  'Laravel',
  'TailwindCSS',
  'PostgreSQL',
  'React',
  'Next.js',
  'React Native',
  'Flutter',
  'Vue',
  'Angular',
  'TypeScript',
  'Node.js',
  'PHP',
  'Laravel',
  'TailwindCSS',
  'PostgreSQL',
]

export function TechStripe() {
  return (
    <div className="relative w-full overflow-hidden border-y border-[var(--c-border)]/60 bg-[var(--c-surface)] py-4">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--c-surface)] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--c-surface)] to-transparent" />

      <div className="flex w-max animate-marquee">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="mx-8 text-[13px] font-semibold uppercase tracking-[0.15em] text-[var(--c-muted)] whitespace-nowrap select-none transition-colors duration-200 hover:text-[#F55E00]"
          >
            {tech}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </div>
  )
}
