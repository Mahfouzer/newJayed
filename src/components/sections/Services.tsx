import { Globe, Smartphone, ShoppingBag } from 'lucide-react'
import { FadeIn } from '../ui/FadeIn'
import { motion } from 'framer-motion'
import { useI18n } from '../../lib/i18n'

const serviceIcons = [Globe, Smartphone, ShoppingBag]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export function Services() {
  const { t, lang } = useI18n()
  return (
    <section className="section-gap bg-[var(--c-bg)] relative overflow-hidden">
      {/* Background image with dark hue overlay */}
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
            {t.services.label}
          </p>
          <h2 className="font-semibold text-[var(--c-hi)] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            {t.services.heading}
          </h2>
          <p className="mt-2 text-base text-[var(--c-muted)]">
            {t.services.sub}
          </p>
        </FadeIn>

        {/* key={lang} remounts the grid on language change so whileInView + stagger run again.
            Otherwise new motion children mount in "hidden" while parent already ran once:true → invisible cards. */}
        <motion.div
          key={lang}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-72px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {t.services.items.map(({ title, body }, idx) => {
            const Icon = serviceIcons[idx]
            return (
            <motion.div key={title} variants={item}>
              {/* Card Style A - apple glass */}
              <div className="relative p-px rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 transition-all duration-300 group hover:from-[#F55E00]/50 hover:via-[#E8003D]/25 hover:to-[#F55E00]/50 h-full">
                <div className="relative rounded-2xl p-6 bg-[var(--c-glass-lo)] backdrop-blur-2xl transition-colors duration-300 group-hover:bg-[var(--c-glass-hi)] h-full">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center bg-[#F55E00]/10 border border-[#F55E00]/20 text-[#F55E00] transition-all duration-300 group-hover:bg-[#F55E00]/20 group-hover:border-[#F55E00]/40 group-hover:scale-110">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-[var(--c-hi)] text-[17px] font-semibold mb-2 transition-colors duration-300 group-hover:text-white">
                    {title}
                  </h3>
                  <p className="text-[var(--c-body)] text-[14px] leading-relaxed">{body}</p>

                  {/* Bottom glow edge */}
                  <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F55E00]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-2xl" />
                </div>
              </div>
            </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
