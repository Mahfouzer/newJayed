import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import ThemeToggle from '../ThemeToggle'
import LanguageToggle from '../LanguageToggle'
import { useI18n } from '../../lib/i18n'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useI18n()

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/projects', label: t.nav.work },
    { to: '/about', label: t.nav.about },
    { to: '/blogs', label: t.nav.blog },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--c-bg) 92%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--c-border)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-4">
        {/* Logo — start */}
        <Link to="/" className="flex shrink-0 items-center gap-2 no-underline group">
          <img
            src="/images/jayed-logo.webp"
            alt="Jayed Studio"
            className="h-5 w-auto"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop: links + CTA centered in remaining space */}
        <nav className="hidden min-w-0 md:flex flex-1 items-center justify-center gap-7 lg:gap-10">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative shrink-0 text-[14px] font-medium no-underline text-[var(--c-muted)] hover:text-[var(--c-body)] transition-colors duration-200
                after:absolute after:bottom-0 after:left-0 after:w-full after:h-px
                after:bg-[#F55E00] after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:after:scale-x-100"
              activeProps={{ className: 'text-[#F55E00] after:scale-x-100' }}
            >
              {label}
            </Link>
          ))}
          <Link to="/quote" className="no-underline shrink-0">
            <motion.span
              whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(245,94,0,0.40)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="inline-block px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-br from-[#F55E00] to-[#E8003D]"
            >
              {t.nav.getQuote}
            </motion.span>
          </Link>
        </nav>

        {/* Theme + language (+ hamburger on small screens) — end */}
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:max-w-none md:flex-none md:gap-3">
          <ThemeToggle />
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex md:hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[var(--c-hi)] transition-colors hover:bg-[var(--c-raised)]/35"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {/* Fixed box: 2px bars + 6px gaps → 8px between centers; transforms meet for a true X */}
            <span className="relative block h-[18px] w-5" aria-hidden>
              <span
                className="absolute left-0 top-0 block h-0.5 w-5 origin-center rounded-sm bg-current transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'translateY(0) rotate(0deg)',
                }}
              />
              <span
                className="absolute left-0 top-[8px] block h-0.5 w-5 origin-center rounded-sm bg-current transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
                }}
              />
              <span
                className="absolute left-0 top-[16px] block h-0.5 w-5 origin-center rounded-sm bg-current transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'translateY(0) rotate(0deg)',
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          backgroundColor: 'var(--c-bg)',
          borderBottom: menuOpen ? '1px solid var(--c-border)' : 'none',
        }}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium no-underline py-1 text-[var(--c-body)]"
              activeProps={{ className: 'text-[#F55E00]' }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/quote"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 text-sm font-semibold text-white rounded-full text-center no-underline bg-gradient-to-br from-[#F55E00] to-[#E8003D]"
          >
            {t.nav.getQuote}
          </Link>
        </nav>
      </div>
    </header>
  )
}
