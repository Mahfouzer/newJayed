import { createElement, type HTMLAttributes, type ReactNode } from 'react'
import { useI18n } from '../../lib/i18n'

/** Host tag names (avoid `keyof JSX.IntrinsicElements` — too wide for `createElement`). */
type LtrTag = 'div' | 'main' | 'section' | 'article' | 'span' | 'blockquote' | 'p'

/** Supports `dangerouslySetInnerHTML` without `children`. */
export type LtrIsolateProps = Omit<HTMLAttributes<HTMLElement>, 'dir' | 'lang' | 'children'> & {
  tag?: LtrTag
  children?: ReactNode
}

/**
 * Wraps English / LTR copy when the site is in Arabic so `html[dir=rtl]` does not
 * flip punctuation, periods, or flex order for Latin text.
 */
export function LtrIsolate({ tag = 'div', children, className = '', ...rest }: LtrIsolateProps) {
  const { lang } = useI18n()
  const merged = [lang === 'ar' ? 'ltr-isolate' : '', className].filter(Boolean).join(' ')
  const props =
    lang === 'ar'
      ? { dir: 'ltr' as const, lang: 'en', className: merged, ...rest }
      : { className: merged || undefined, ...rest }
  return createElement(tag, props, children)
}
