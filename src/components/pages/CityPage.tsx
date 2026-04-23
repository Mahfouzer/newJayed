import { Link } from '@tanstack/react-router'
import { FadeIn } from '../ui/FadeIn'
import { LtrIsolate } from '../ui/LtrIsolate'
import { motion } from 'framer-motion'
import { useI18n } from '../../lib/i18n'
import { Services } from '../sections/Services'
import { Process } from '../sections/Process'
import { QuoteSection } from '../sections/QuoteSection'
import { LocalBusinessSchema } from '../seo/LocalBusinessSchema'

const testimonials = [
  {
    quote: "They're smart, professional, and understand customer requirements perfectly. Their experience across UI design, development, and UX was really valuable to us.",
    name: 'Max Broussard',
    role: 'Co-Founder @ Datajolt',
    flag: '🇺🇸',
    initial: 'M',
  },
  {
    quote: 'I was delighted to work with Jayed. The quality and professionalism exceeded our expectations. I am sure we will work together again.',
    name: 'Basel',
    role: 'Business Developer @ SKMD',
    flag: '🇦🇪',
    initial: 'B',
  },
]

interface CityPageProps {
  city: string
  country: string
  slug: string
  flag: string
}

export function CityPage({ city, country, slug, flag }: CityPageProps) {
  const { t } = useI18n()

  return (
    <div className="pt-24 bg-[var(--c-bg)]">
      <LocalBusinessSchema city={city} country={country} slug={slug} />

      {/* Hero */}
      <section className="section-gap bg-[var(--c-bg)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#F55E00]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-[#F55E00]">
              {flag} {city}, {country}
            </p>
            <h1
              className="font-bold mb-6 text-[var(--c-hi)] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              {t.cityPage.heroHeadline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg mb-3 text-[var(--c-body)]">
              {t.cityPage.heroSub.replace('{city}', city)}{' '}
              <strong className="text-[var(--c-hi)]">{t.cityPage.heroStrong}</strong>
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm mb-8 text-[var(--c-muted)]">{t.cityPage.heroTagline}</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link to="/quote" className="no-underline">
              <motion.span
                whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(245,94,0,0.40)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="inline-flex items-center px-7 py-3 rounded-full font-semibold text-[14px] text-white bg-gradient-to-br from-[#F55E00] to-[#E8003D]"
              >
                {t.cityPage.cta}
              </motion.span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Services />
      <Process />

      {/* Testimonials */}
      <section className="section-gap bg-[var(--c-surface)]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-12">
            <h2
              className="font-semibold text-[var(--c-hi)] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              {t.cityPage.testimonialsHeading}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(({ quote, name, role, flag: f, initial }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl overflow-hidden bg-[var(--c-surface)]/80 border border-[var(--c-border)]/60 backdrop-blur-sm transition-all duration-300 hover:border-[var(--c-border)] hover:-translate-y-1 group">
                  <span className="absolute top-4 left-5 text-[80px] leading-none font-serif text-[#F55E00] opacity-[0.08] select-none pointer-events-none">
                    "
                  </span>
                  <LtrIsolate className="relative z-10">
                  <blockquote className="text-[var(--c-body)] text-[15px] leading-relaxed italic mb-5">
                    {quote}
                  </blockquote>
                  <footer className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F55E00]/30 to-[#E8003D]/20 border border-[var(--c-border)] flex items-center justify-center text-[var(--c-hi)] text-[12px] font-semibold">
                      {initial}
                    </div>
                    <div>
                      <div className="text-[var(--c-hi)] text-[13px] font-semibold">{name} {f}</div>
                      <div className="text-[var(--c-muted)] text-[11px]">{role}</div>
                    </div>
                  </footer>
                  </LtrIsolate>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </div>
  )
}
