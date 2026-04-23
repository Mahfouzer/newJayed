import { useState } from 'react'
import { FadeIn } from '../ui/FadeIn'
import { useI18n } from '../../lib/i18n'
import { motion, AnimatePresence } from 'framer-motion'
import { QuestionMarkBackground } from '../ui/QuestionMarkBackground'

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)
  const { t } = useI18n()

  return (
    <section className="section-gap bg-[var(--c-surface)] relative overflow-hidden">
        <QuestionMarkBackground />

      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#F55E00]">
            {t.faq.label}
          </p>
          <h2 className="font-semibold text-[var(--c-hi)] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            {t.faq.heading}
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {t.faq.items.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="rounded-xl border border-[var(--c-border)] overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-150 cursor-pointer"
                  style={{
                    backgroundColor: open === i ? 'var(--c-raised)' : 'var(--c-surface)',
                  }}
                >
                  <span className="text-base font-medium pr-4 text-[var(--c-hi)]">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl shrink-0 text-[#F55E00]"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-sm leading-relaxed text-[var(--c-body)] bg-[var(--c-surface)] border-t border-[var(--c-border)]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
