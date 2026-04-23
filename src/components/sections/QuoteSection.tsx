import { FadeIn } from '../ui/FadeIn'
import { QuoteForm } from '../forms/QuoteForm'
import { useI18n } from '../../lib/i18n'

export function QuoteSection() {
  const { t } = useI18n()
  return (
    <section id="quote" className="section-gap bg-[var(--c-bg)] relative overflow-hidden">
      {/* CTA orange glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F55E00]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <FadeIn className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F55E00]">
            {t.quoteSection.label}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-[var(--c-hi)]">
            {t.quoteSection.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed sm:text-base text-[var(--c-muted)]">
            {t.quoteSection.sub}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-1">
            {t.quoteSection.trustSignals.map((signal, index) => (
              <FadeIn key={signal} delay={index * 0.08}>
                <div className="flex items-start gap-3 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3">
                  <span className="text-sm font-semibold text-[#22c55e]">✓</span>
                  <p className="text-sm text-[var(--c-body)]">{signal}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 sm:p-6">
              <QuoteForm />
              <p className="mt-4 text-center text-xs text-[var(--c-muted)]">
                {t.quoteSection.formFooter}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
