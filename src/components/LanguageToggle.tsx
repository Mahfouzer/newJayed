import { Languages } from 'lucide-react'
import { useI18n } from '../lib/i18n'

export default function LanguageToggle() {
  const { lang, setLang } = useI18n()

  return (
    <button
      type="button"
      dir="ltr"
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
      className="rounded-full border border-[var(--c-border)] bg-[var(--c-raised)] px-3 py-1.5 text-xs font-semibold text-[var(--c-muted)] transition-all duration-200 hover:border-[#F55E00]/40 hover:text-[#F55E00] flex items-center gap-1.5 justify-center"
    >
      <Languages className="size-3.5 shrink-0 opacity-90" aria-hidden strokeWidth={2.25} />
      {lang === 'en' ? (
        <span className="font-arabic text-[13px]">عربي</span>
      ) : (
        <span className="tracking-wide">EN</span>
      )}
    </button>
  )
}
