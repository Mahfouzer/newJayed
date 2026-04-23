import { createFileRoute } from '@tanstack/react-router'
import { QuoteForm } from '../components/forms/QuoteForm'
import { useI18n } from '../lib/i18n'

export const Route = createFileRoute('/quote')({
  head: () => ({
    meta: [
      { title: 'Get a Straight Quote | Jayed Studio' },
      { name: 'description', content: 'Tell us what you need and get a real price and timeline in 24 hours. No discovery calls, no upsell, no overkill.' },
      { property: 'og:url', content: 'https://jayed.studio/quote' },
      { property: 'og:title', content: 'Get a Straight Quote | Jayed Studio' },
      { property: 'og:description', content: 'Tell us what you need and get a real price and timeline in 24 hours. No discovery calls, no upsell, no overkill.' },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
      { name: 'twitter:title', content: 'Get a Straight Quote | Jayed Studio' },
      { name: 'twitter:description', content: 'Tell us what you need and get a real price and timeline in 24 hours. No discovery calls, no upsell, no overkill.' },
    ],
    links: [{ rel: 'canonical', href: 'https://jayed.studio/quote' }],
  }),
  component: QuotePage,
})

function QuotePage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-[var(--c-bg)] flex flex-col lg:flex-row">

      {/* ── Left panel ── */}
      <div className="lg:w-[38%] lg:min-h-screen lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between px-8 md:px-12 pt-28 pb-12 border-b lg:border-b-0 lg:border-r border-[var(--c-surface)]">

        {/* Top */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F55E00] mb-4">{t.quotePage.label}</p>
          <h1 className="font-bold text-[var(--c-hi)] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {t.quotePage.heading1}
            <br />
            {t.quotePage.heading2}
          </h1>
          <p className="text-[var(--c-muted)] text-base leading-relaxed max-w-sm">
            {t.quotePage.sub}
          </p>

          {/* Trust items */}
          <div className="mt-10 space-y-4">
            {t.quotePage.trustItems.map(({ icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="text-lg mt-0.5 shrink-0">{icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--c-body)]">{label}</p>
                  <p className="text-xs text-[var(--c-border)] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--c-surface)]">
          <p className="text-xs text-[var(--c-border)]">{t.quotePage.preferEmail}</p>
          <a href="mailto:info@jayed.studio" className="text-sm font-semibold text-[#F55E00] no-underline hover:underline">
            info@jayed.studio
          </a>
        </div>
      </div>

      {/* ── Right panel — form ── */}
      <div className="flex-1 flex items-start justify-center px-6 md:px-12 pt-16 pb-20 lg:pt-28">
        <div className="w-full max-w-xl">
          <QuoteForm />
        </div>
      </div>

    </div>
  )
}
