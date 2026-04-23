import { useRef, useEffect } from 'react'
import { FadeIn } from '../ui/FadeIn'
import { ArabicBackground } from '../ui/ArabicBackground'
import { LtrIsolate } from '../ui/LtrIsolate'
import { useI18n } from '../../lib/i18n'

export function Manifesto() {
  const { t, lang } = useI18n()
  const d = t.manifesto.dictionary
  const strikeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = strikeRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const dictionaryInner = (
    <>
      <h2
        className="font-serif text-[var(--c-hi)] leading-none mb-5"
        style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 400, letterSpacing: '-0.02em' }}
      >
        {d.headlineLatin}{' '}
        <span className="font-arabic text-[#F55E00]" style={{ fontSize: '1em' }}>
          {d.headlineArabicWord}
        </span>
      </h2>

      <p className="text-[var(--c-muted)] text-[15px] mb-1 tracking-wide">{d.pronunciation}</p>

      <p className="text-[var(--c-muted)] text-[15px] italic mb-8">{d.partOfSpeech}</p>

      <div className="border-s-2 border-[#F55E00]/40 ps-7 space-y-6">
        <FadeIn delay={0.15}>
          <p className="text-[var(--c-body)] text-[1.15rem] leading-relaxed">
            {d.defBefore}
            <span ref={strikeRef} className="strike-animated">
              {d.defStrike}
            </span>{' '}
            {d.defAfter}
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-[var(--c-muted)] text-[15px] italic">
            {d.seeAlsoPrefix}{' '}
            {d.seeAlsoTerms.map((term, i) => (
              <span key={term}>
                {i > 0 ? ', ' : ''}
                <span className="text-[var(--c-body)]">{term}</span>
              </span>
            ))}
          </p>
        </FadeIn>

        <FadeIn delay={0.32}>
          <p className="text-[var(--c-muted)] text-[14px]">
            <span className="italic">{d.antonymLabel}</span>{' '}
            {d.antonymTerms.map((term, i) => (
              <span key={term}>
                {i > 0 ? ', ' : ''}
                <span className="line-through decoration-[#E8003D]/60">{term}</span>
              </span>
            ))}
          </p>
        </FadeIn>
      </div>
    </>
  )

  return (
    <section className="section-gap bg-[var(--c-surface)] relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--c-surface)] via-transparent to-[var(--c-surface)] pointer-events-none" />

      <ArabicBackground vignetteBg="var(--c-surface)" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeIn className="mb-20">
          {lang === 'ar' ? dictionaryInner : <LtrIsolate>{dictionaryInner}</LtrIsolate>}
        </FadeIn>

        <div className="h-px bg-gradient-to-r from-transparent via-[var(--c-border)] to-transparent mb-16" />

        <FadeIn delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-[#F55E00]">
            {t.manifesto.translationGuide}
          </p>

          <div className="rounded-2xl overflow-hidden border border-[var(--c-border)]">
            <div className="grid grid-cols-2">
              <div className="px-3 py-2.5 sm:px-5 sm:py-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#E8003D]/10 text-[#E8003D]">
                {t.manifesto.theySay}
              </div>
              <div className="px-3 py-2.5 sm:px-5 sm:py-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#22c55e]/10 text-[#22c55e]">
                {t.manifesto.weMean}
              </div>
            </div>
            {t.manifesto.comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-t border-[var(--c-border)]">
                <div
                  className="px-3 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm text-[var(--c-muted)]"
                  style={{
                    textDecoration: 'line-through',
                    textDecorationColor: '#E8003D',
                    backgroundColor: i % 2 === 0 ? 'rgba(232,0,61,0.05)' : 'transparent',
                  }}
                >
                  {row.bad}
                </div>
                <div
                  className="px-3 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm font-medium text-[#22c55e]"
                  style={{ backgroundColor: i % 2 === 0 ? 'rgba(34,197,94,0.05)' : 'transparent' }}
                >
                  ✓ {row.good}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
