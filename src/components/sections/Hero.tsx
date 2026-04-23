import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { HeroCanvas } from './HeroCanvas'
import { LtrIsolate } from '../ui/LtrIsolate'
import { useI18n } from '../../lib/i18n'

const enWords = 'We build software that does the job.'.split(' ')

const techs = [
  'React', 'Next.js', 'React Native', 'Flutter', 'Vue', 'Angular',
  'TypeScript', 'Node.js', 'PHP', 'Laravel', 'TailwindCSS', 'PostgreSQL',
  'React', 'Next.js', 'React Native', 'Flutter', 'Vue', 'Angular',
  'TypeScript', 'Node.js', 'PHP', 'Laravel', 'TailwindCSS', 'PostgreSQL',
]

export function Hero() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const y = useTransform(scrollY, [0, 400], [0, -40])
  const { t, lang } = useI18n()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--c-bg)] noise">
      {/* WebGL lava lamp background */}
      <HeroCanvas />

      {/* Center content */}
      <motion.div
        style={reduced ? {} : { opacity, y }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24 md:pt-40 pb-16 text-center flex flex-col items-center flex-1 justify-center"
      >
        {/* Badge */}
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex rounded-full border border-[#F55E00]/45 bg-[#F55E00]/10 px-4 py-1.5 text-[12px] font-semibold tracking-wide text-[#F55E00]"
        >
          {t.hero.badge}
        </motion.p>

        {/* Headline */}
        <h1 className="mb-7 text-[clamp(3rem,8vw,6rem)] font-semibold text-[var(--c-hi)] leading-[1.05] tracking-[-0.04em]">
          {lang === 'ar' ? (
            /* Arabic headline: "نبني برمجيات تؤدي المهمة." */
            <>
              {['نبني', 'برمجيات', 'تؤدي'].map((word, i) => (
                <motion.span
                  key={i}
                  className="ms-[0.22em] inline-block"
                  initial={reduced ? {} : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
              <span className="relative inline-block ms-[0.22em]">
                <motion.span
                  className="inline-block italic text-[#F55E00]"
                  initial={reduced ? {} : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
                >
                  المهمة.
                </motion.span>
                {/* SVG brush stroke underline */}
                <motion.svg
                  viewBox="0 0 300 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 w-full pointer-events-none"
                  style={{ bottom: '-0.22em', height: '0.26em' }}
                  initial={reduced ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.2 }}
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 11 C 10 7, 40 4, 80 6 C 120 8, 160 12, 200 10 C 240 8, 275 5, 298 8 C 280 14, 245 16, 200 15 C 155 14, 115 11, 75 13 C 40 15, 12 16, 2 11 Z"
                    fill="#F55E00"
                    opacity="0.92"
                    initial={reduced ? {} : { scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.92 }}
                    style={{ transformOrigin: 'right center' }}
                    transition={{ delay: 1.0, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.path
                    d="M5 9 C 50 5, 110 8, 170 7 C 220 6, 265 8, 296 6"
                    stroke="#FFB020"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                    initial={reduced ? {} : { pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.svg>
              </span>
            </>
          ) : (
            /* English headline */
            <>
              {enWords.slice(0, 4).map((word, i) => (
                <motion.span
                  key={i}
                  className="mr-[0.22em] inline-block"
                  initial={reduced ? {} : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              ))}
              <span className="relative inline-block">
                {enWords.slice(4).map((word, i) => (
                  <motion.span
                    key={i + 4}
                    className={`mr-[0.22em] inline-block ${i === 2 ? 'italic text-[#F55E00]' : ''}`}
                    initial={reduced ? {} : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (i + 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
                {/* SVG brush stroke underline */}
                <motion.svg
                  viewBox="0 0 300 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 w-full pointer-events-none"
                  style={{ bottom: '-0.22em', height: '0.26em' }}
                  initial={reduced ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.2 }}
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 11 C 10 7, 40 4, 80 6 C 120 8, 160 12, 200 10 C 240 8, 275 5, 298 8 C 280 14, 245 16, 200 15 C 155 14, 115 11, 75 13 C 40 15, 12 16, 2 11 Z"
                    fill="#F55E00"
                    opacity="0.92"
                    initial={reduced ? {} : { scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.92 }}
                    style={{ transformOrigin: 'left center' }}
                    transition={{ delay: 1.0, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.path
                    d="M5 9 C 50 5, 110 8, 170 7 C 220 6, 265 8, 296 6"
                    stroke="#FFB020"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.4"
                    initial={reduced ? {} : { pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.svg>
              </span>
            </>
          )}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-lg leading-relaxed text-[var(--c-body)] mb-8"
        >
          {t.hero.subtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Link to="/quote" className="no-underline">
            <motion.span
              whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(245,94,0,0.40)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-[15px] text-white bg-gradient-to-br from-[#F55E00] to-[#E8003D]"
            >
              {t.hero.cta1}
            </motion.span>
          </Link>
          <a
            href="#work"
            className="inline-flex items-center rounded-full border border-[var(--c-border)]/80 bg-transparent px-7 py-3.5 text-sm font-medium text-[var(--c-body)] no-underline transition-all duration-200 hover:border-[var(--c-border)] hover:text-[var(--c-hi)] hover:-translate-y-0.5"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </motion.div>

      {/* Tech stripe - pinned to bottom of hero */}
      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="relative z-10 w-full mt-auto"
      >
        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--c-border)] to-transparent" />

        <LtrIsolate className="relative overflow-hidden py-4 bg-[var(--c-bg)]/60 backdrop-blur-sm">
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--c-bg)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--c-bg)] to-transparent" />

          <div className={`flex w-max ${reduced ? '' : 'animate-tech-marquee'}`}>
            {techs.map((tech, i) => (
              <span
                key={i}
                className="mx-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--c-muted)] whitespace-nowrap select-none hover:text-[#F55E00] transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </LtrIsolate>
      </motion.div>

      <style>{`
        @keyframes tech-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-tech-marquee {
          animation: tech-marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
