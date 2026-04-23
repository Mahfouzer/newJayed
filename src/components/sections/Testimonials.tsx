import { FadeIn } from '../ui/FadeIn'
import { useI18n } from '../../lib/i18n'

/** Photos stay in code; copy lives in `t.testimonials.items`. */
const TESTIMONIAL_PHOTOS = ['/images/Max.png', '/images/Basel.png', null, null] as const

export function Testimonials() {
  const { t, lang } = useI18n()
  return (
    <section className="section-gap bg-[var(--c-bg)] relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Decorative quotes (inside content container) */}
        <div
          className="pointer-events-none absolute left-6 top-[-8.5rem] z-0 select-none"
          style={{
            fontSize: 'clamp(10rem, 22vw, 27.5rem)',
            opacity: 0.1,
            color: 'rgb(245, 94, 0)',
            transform: 'rotate(-30deg) translateY(56px)',
            fontFamily: 'Amiri, serif',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          “
        </div>
        <div
          className="pointer-events-none absolute bottom-[-8rem] right-6 z-0 select-none"
          style={{
            fontSize: 'clamp(10rem, 22vw, 27.5rem)',
            opacity: 0.1,
            color: 'rgb(245, 94, 0)',
            transform: 'rotate(18deg) translateY(240px)',
            fontFamily: 'Amiri, serif',
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          ”
        </div>

        <FadeIn className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#F55E00]">
            {t.testimonials.label}
          </p>
          <h2 className="font-semibold text-[var(--c-hi)] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            {t.testimonials.heading}
          </h2>
        </FadeIn>

        <div
          key={lang}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible"
        >
          {t.testimonials.items.map(({ quote, name, role, flag, initial, project }, i) => (
            <FadeIn key={name} delay={i * 0.15} className="min-w-[85vw] md:min-w-0 snap-start self-stretch flex flex-col">
              {/* Card Style B - glass/frosted */}
              <div className="relative p-6 rounded-2xl overflow-hidden bg-[var(--c-glass-lo)] backdrop-blur-2xl border border-[var(--c-gborder-md)] transition-all duration-300 hover:border-[var(--c-gborder-xl)] hover:bg-[var(--c-glass-hi)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:-translate-y-1 group flex flex-col h-full min-h-[220px]">
                {/* Decorative quote mark */}
                <span className="absolute top-4 left-5 text-[80px] leading-none font-serif text-[#F55E00] opacity-[0.08] select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.14]">
                  "
                </span>

                {/* Top-left gradient bleed */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#F55E00]/5 to-transparent rounded-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col flex-1 mt-auto">
                  <blockquote className="text-[var(--c-body)] text-[15px] leading-relaxed italic mb-5 flex-1">
                    {quote}
                  </blockquote>

                  <footer className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[var(--c-border)] overflow-hidden shrink-0">
                      {TESTIMONIAL_PHOTOS[i] ? (
                        <img src={TESTIMONIAL_PHOTOS[i]!} alt={name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#F55E00]/30 to-[#E8003D]/20 flex items-center justify-center text-[var(--c-hi)] text-[12px] font-semibold">
                          {initial}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[var(--c-hi)] text-[13px] font-semibold truncate">
                        {name} {flag}
                      </div>
                      <div className="text-[var(--c-muted)] text-[11px] truncate">{role}</div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-1 rounded-full bg-[var(--c-raised)] border border-[var(--c-border)] text-[var(--c-muted)] text-[10px] font-mono">
                    {project}
                  </div>
                </footer>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
