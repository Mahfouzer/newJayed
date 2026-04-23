import { useCallback, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useI18n } from '../../lib/i18n'

function BigLogoText() {
  const ref = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const onLeave = useCallback(() => setMouse(null), [])

  const cx = mouse?.x ?? -9999
  const cy = mouse?.y ?? -9999
  const maskStyle = {
    WebkitMaskImage: `radial-gradient(ellipse 280px 180px at ${cx}px ${cy}px, black 0%, transparent 100%)`,
    maskImage: `radial-gradient(ellipse 280px 180px at ${cx}px ${cy}px, black 0%, transparent 100%)`,
  }

  const logoFontStyle = {
    fontSize: 'clamp(2.25rem, calc((100vw - 2rem) / 7.2), 11.5rem)',
    letterSpacing: '-0.04em',
  } as const

  return (
    <div
      className="flex w-full min-w-0 max-w-full justify-center overflow-x-clip select-none"
      style={{ lineHeight: 0.85 }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative max-w-full"
        style={{ transform: 'translateY(20%)' }}
      >
        <span
          className="block font-bold text-[var(--c-raised)] pointer-events-none whitespace-nowrap"
          style={{ ...logoFontStyle }}
          aria-hidden
        >
          Jayed Studio
        </span>
        <span
          className="absolute inset-0 block font-bold text-[var(--c-body)] pointer-events-none whitespace-nowrap"
          style={{
            ...logoFontStyle,
            ...maskStyle,
          }}
          aria-hidden
        >
          Jayed Studio
        </span>
      </div>
    </div>
  )
}

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="w-full min-w-0 overflow-x-clip bg-[var(--c-footer-bg)] border-t border-[var(--c-surface)]">
      {/* Big type: clipped to a short window so it reads “cut” by the line; hover spotlight works inside */}
      <div className="w-full min-w-0 overflow-x-clip pt-8 md:pt-12">
        <div className="relative z-0 mx-6 overflow-hidden flex items-start justify-center min-h-0 h-[min(28vw,9.5rem)] md:h-[min(24vw,11rem)]">
          <div dir="ltr" className="ltr-isolate w-full min-w-0 max-w-full px-2 flex justify-center">
            <BigLogoText />
          </div>
        </div>
        {/* Rule sits above the clip — text is cut below; line paints on top */}
        <div className="relative z-10 -mt-px h-px bg-gradient-to-r from-transparent via-[var(--c-raised)] to-transparent mx-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base font-bold text-[var(--c-hi)]">Jayed Studio</span>
              <span className="font-arabic text-base font-bold text-[#F55E00]">· چيد</span>
            </div>
            <p className="text-sm text-[var(--c-border)]">{t.footer.tagline1}</p>
            <p className="text-sm text-[var(--c-border)]">{t.footer.tagline2}</p>

            <a
              href="mailto:info@jayed.studio"
              className="no-underline inline-block mt-4 text-sm text-[#F55E00] hover:underline"
            >
              info@jayed.studio
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-5">
              {[
                {
                  href: 'https://www.facebook.com/jayedstudioo',
                  label: 'Facebook',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.instagram.com/jayed.studio/',
                  label: 'Instagram',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.linkedin.com/company/jayedstudio',
                  label: 'LinkedIn',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--c-raised)] text-[var(--c-muted)] hover:border-[#F55E00]/40 hover:text-[#F55E00] hover:bg-[var(--c-surface)] transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-5 text-[var(--c-border)]">
              {t.footer.studioLabel}
            </p>
            <ul className="space-y-3 list-none m-0 p-0">
              {t.footer.navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm no-underline text-[var(--c-muted)] hover:text-[var(--c-body)] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div className="md:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-5 text-[var(--c-border)]">
              {t.footer.marketsLabel}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none m-0 p-0">
              {t.footer.cities.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm no-underline text-[var(--c-muted)] hover:text-[var(--c-body)] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--c-surface)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--c-border)]">{t.footer.copyright}</p>
          <p className="text-xs text-[var(--c-border)]">{t.footer.taglineBottom}</p>
        </div>
      </div>
    </footer>
  )
}
