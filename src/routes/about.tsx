import { createFileRoute, Link } from '@tanstack/react-router'
import { FadeIn } from '../components/ui/FadeIn'
import { ArabicBackground } from '../components/ui/ArabicBackground'
import { OrganizationSchema } from '../components/seo/OrganizationSchema'
import { useI18n } from '../lib/i18n'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About - Jayed Studio | Good Enough.' },
      {
        name: 'description',
        content:
          'An Egyptian software studio. We build websites, mobile apps, and e-commerce for SMEs across Egypt and the Gulf. Honest pricing. Real timelines.',
      },
      { property: 'og:title', content: 'About - Jayed Studio | Good Enough.' },
    ],
    links: [{ rel: 'canonical', href: 'https://jayed.studio/about' }],
  }),
  component: AboutPage,
})


function AboutPage() {
  const { t } = useI18n()

  return (
    <div className="pt-24 bg-[var(--c-bg)]">
      <OrganizationSchema />

      {/* Hero */}
      <section className="section-gap bg-[var(--c-bg)] relative overflow-hidden">
        <ArabicBackground vignetteBg="var(--c-bg)" />

        {/* Orange glow accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#F55E00]/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#E8003D]/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-[#F55E00]">
              {t.aboutPage.label}
            </p>
            <h1
              className="font-bold mb-6 text-[var(--c-hi)] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1 }}
            >
              {t.aboutPage.heroPrefix}
              <span className="font-arabic text-[#F55E00]">چيد</span>
              {t.aboutPage.heroSuffix}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl mb-4 text-[var(--c-muted)]">
              {t.aboutPage.tagline1}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-2xl font-bold mb-12 text-[var(--c-hi)]">
              {t.aboutPage.tagline2}
            </p>
          </FadeIn>

          <div className="space-y-5 max-w-2xl">
            <FadeIn delay={0.2}>
              <p className="text-base leading-relaxed text-[var(--c-body)]">
                {t.aboutPage.body1}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-base leading-relaxed text-[var(--c-body)]">
                {t.aboutPage.body2}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-base leading-relaxed text-[var(--c-body)]">
                {t.aboutPage.body3}
              </p>
            </FadeIn>
          </div>

          {/* Pull quote */}
          <FadeIn delay={0.35}>
            <blockquote className="mt-12 mb-12 border-l-4 border-[#F55E00] pl-6 py-2">
              <p className="text-2xl font-bold text-[var(--c-hi)]">
                {t.aboutPage.quote1}
              </p>
              <p className="text-2xl font-bold mt-1 text-[var(--c-hi)]">
                {t.aboutPage.quote2}
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link to="/quote" className="no-underline">
              <span className="inline-flex items-center px-7 py-3 rounded-full font-semibold text-base text-white bg-gradient-to-br from-[#F55E00] to-[#E8003D] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,94,0,0.40)]">
                {t.aboutPage.cta}
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
