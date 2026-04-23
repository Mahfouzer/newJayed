import { FadeIn } from '../ui/FadeIn'
import { useI18n } from '../../lib/i18n'

export function Process() {
  const { t } = useI18n()
  const steps = t.process.steps.map((s, i) => ({ ...s, num: i + 1 }))

  return (
    <section className="section-gap bg-[var(--c-bg)] relative overflow-hidden">
      {/* Shared parallax background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/saudi.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-[var(--c-bg)]/88" style={{ backdropFilter: 'saturate(0.3) hue-rotate(300deg)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#F55E00]">
            {t.process.label}
          </p>
          <h2 className="font-semibold text-[var(--c-hi)] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            {t.process.heading}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          {steps.map(({ num, title, body }, i) => (
            <FadeIn key={num} delay={i * 0.12} direction="left" className="h-full">
              {/* Card Style D - number step */}
              <div className="relative h-full p-6 rounded-2xl bg-[var(--c-glass-lo)] backdrop-blur-2xl border border-[var(--c-gborder-md)] overflow-hidden transition-all duration-300 hover:border-[var(--c-gborder-xl)] hover:bg-[var(--c-glass-hi)] group">
                {/* Large background number */}
                <div className="absolute -top-4 -right-2 text-[120px] font-bold leading-none text-[var(--c-border)]/60 select-none pointer-events-none transition-all duration-500 group-hover:text-[#F55E00]/10 group-hover:-top-6">
                  {num}
                </div>

                {/* Left accent bar */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-gradient-to-b from-[#F55E00]/60 to-[#E8003D]/20 scale-y-0 origin-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

                {/* Step label */}
                <div className="text-[#F55E00]/60 text-[11px] font-mono mb-3 tracking-widest">
                  {num.toString().padStart(2, '0')}
                </div>

                <h3 className="text-[var(--c-hi)] text-[17px] font-semibold mb-2 relative z-10">
                  {title}
                </h3>
                <p className="text-[var(--c-body)] text-[14px] leading-relaxed relative z-10">
                  {body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="mt-12 text-sm text-[var(--c-muted)]">
            {t.process.footer}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
