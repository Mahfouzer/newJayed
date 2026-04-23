import { createFileRoute, Link } from '@tanstack/react-router'
import { FadeIn } from '../components/ui/FadeIn'
import { FAQSection } from '../components/sections/FAQSection'
import { FAQSchema } from '../components/seo/FAQSchema'
import { useI18n } from '../lib/i18n'

export const Route = createFileRoute('/why-jayde')({
  head: () => ({
    meta: [
      { title: 'Jayed vs Big Agencies | Jayed Studio' },
      {
        name: 'description',
        content: "You don't need a 1,600-person agency. You need software that does the job. Here's why Jayed is different.",
      },
      { property: 'og:url', content: 'https://jayed.studio/why-jayde' },
      { property: 'og:title', content: 'Jayed vs Big Agencies | Jayed Studio' },
      {
        property: 'og:description',
        content: "You don't need a 1,600-person agency. You need software that does the job. Here's why Jayed is different.",
      },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Jayed vs Big Agencies | Jayed Studio' },
      {
        name: 'twitter:description',
        content: "You don't need a 1,600-person agency. You need software that does the job. Here's why Jayed is different.",
      },
      { name: 'twitter:image', content: 'https://jayed.studio/icon.png' },
    ],
    links: [{ rel: 'canonical', href: 'https://jayed.studio/why-jayde' }],
  }),
  component: WhyJayedPage,
})

function WhyJayedPage() {
  const { t } = useI18n()

  return (
    <div className="pt-24 bg-[var(--c-bg)]">
      <FAQSchema />

      {/* Hero */}
      <section className="section-gap bg-[var(--c-bg)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#F55E00]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <h1
              className="font-bold mb-4 text-[var(--c-hi)] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              {t.whyJayed.heroTitle}
            </h1>
            <p className="text-xl font-medium mb-8 text-[#F55E00]">
              {t.whyJayed.heroSubtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base leading-relaxed mb-4 text-[var(--c-body)]">
              {t.whyJayed.introP1}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-base leading-relaxed text-[var(--c-body)]">
              {t.whyJayed.introP2}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-gap bg-[var(--c-surface)]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="mb-10">
            <h2
              className="font-semibold text-[var(--c-hi)] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              {t.whyJayed.tableHeading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-[var(--c-border)]">
              <div className="grid grid-cols-3">
                <div className="px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[var(--c-bg)] text-[var(--c-muted)]">
                  {t.whyJayed.colDimension}
                </div>
                <div className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-center bg-[#E8003D]/10 text-[#E8003D]">
                  {t.whyJayed.colThem}
                </div>
                <div className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-center bg-[#22c55e]/10 text-[#22c55e]">
                  {t.whyJayed.colUs}
                </div>
              </div>
              {t.whyJayed.rows.map((row, i) => (
                <div key={row.dimension} className="grid grid-cols-3 border-t border-[var(--c-border)]">
                  <div className="px-5 py-3.5 text-sm font-medium text-[var(--c-body)]" style={{ backgroundColor: i % 2 === 0 ? 'var(--c-bg)' : 'transparent' }}>
                    {row.dimension}
                  </div>
                  <div className="px-5 py-3.5 text-sm text-center text-[var(--c-muted)]" style={{ backgroundColor: i % 2 === 0 ? 'rgba(232,0,61,0.03)' : 'transparent' }}>
                    {row.them}
                  </div>
                  <div className="px-5 py-3.5 text-sm font-medium text-center text-[#22c55e]" style={{ backgroundColor: i % 2 === 0 ? 'rgba(34,197,94,0.04)' : 'transparent' }}>
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Honest section */}
      <section className="section-gap bg-[var(--c-bg)]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8">
              <h2 className="text-xl font-bold mb-4 text-[var(--c-hi)]">
                {t.whyJayed.honestTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4 text-[var(--c-body)]">
                {t.whyJayed.honestP1}
              </p>
              <p className="text-base leading-relaxed font-medium text-[var(--c-hi)]">
                {t.whyJayed.honestP2}
              </p>
              <p className="text-base leading-relaxed mt-3 text-[var(--c-body)]">
                {t.whyJayed.honestP3}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="section-gap bg-[var(--c-surface)]">
        <FadeIn className="text-center max-w-2xl mx-auto px-6">
          <p className="text-xl font-semibold mb-6 text-[var(--c-hi)]">
            {t.whyJayed.bottomCta}
          </p>
          <Link to="/quote" className="no-underline">
            <span className="inline-flex items-center px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-br from-[#F55E00] to-[#E8003D] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,94,0,0.40)]">
              {t.whyJayed.ctaButton}
            </span>
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Cairo', to: '/cities/cairo' },
              { label: 'Dubai', to: '/cities/dubai' },
              { label: 'Riyadh', to: '/cities/riyadh' },
              { label: 'Kuwait', to: '/cities/kuwait' },
              { label: 'Qatar', to: '/cities/qatar' },
            ].map(({ label, to }) => (
              <Link key={to} to={to} className="text-sm no-underline text-[#F55E00] hover:text-[#FFB020] transition-colors duration-200">
                {t.cityPage.seeWorkIn.replace('{city}', label)}
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
