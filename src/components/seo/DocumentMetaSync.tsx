import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'
import type { Lang, T } from '../../lib/i18n'
import { useI18n } from '../../lib/i18n'
import { getPostMeta } from '../../lib/posts.meta'
import { getWorkCaseMeta } from '../../routes/projects_.$slug'

/**
 * Keeps document title and primary meta tags aligned with the selected UI language.
 * Blog article bodies stay English-only in `posts.ts`; titles/descriptions here follow
 * the post record for both languages (Arabic UI uses an Arabic site-name suffix).
 */
function resolveDocumentMeta(pathname: string, lang: Lang, t: T): { title: string; description: string } {
  const pm = t.pageMeta
  const p = pathname.replace(/\/$/, '') || '/'

  if (p === '/') return pm.home
  if (p === '/projects') return pm.work
  if (p === '/about') return pm.about
  if (p === '/blogs') return pm.blog
  if (p === '/quote') return pm.quote
  if (p === '/why-jayde') return pm.whyJayed

  const cityMatch = p.match(/^\/cities\/([^/]+)$/)
  if (cityMatch) {
    const key = cityMatch[1] as keyof typeof pm.cities
    if (key in pm.cities) return pm.cities[key]
  }

  const blogMatch = p.match(/^\/blogs\/([^/]+)$/)
  if (blogMatch) {
    const post = getPostMeta(blogMatch[1])
    if (post) {
      const title =
        lang === 'ar' ? `${post.title} | جيد ستوديو` : `${post.title} | Jayed Studio`
      const description = post.subtitle?.trim() ? post.subtitle : pm.blogUnknown.description
      return { title, description }
    }
    return { title: pm.blogUnknown.title, description: pm.blogUnknown.description }
  }

  const workMatch = p.match(/^\/projects\/([^/]+)$/)
  if (workMatch) {
    const m = getWorkCaseMeta(workMatch[1])
    if (m) {
      if (lang === 'ar') {
        return {
          title: m.title.replace(/\s*\|\s*Jayed Studio\s*$/, ' | جيد ستوديو'),
          description: m.description,
        }
      }
      return m
    }
    return { title: pm.workUnknown.title, description: pm.workUnknown.description }
  }

  return pm.home
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const metas = document.head.querySelectorAll(`meta[${attr}]`)
  let el: HTMLMetaElement | null = null
  for (const m of metas) {
    if (m.getAttribute(attr) === key) {
      el = m as HTMLMetaElement
      break
    }
  }
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function DocumentMetaSync() {
  const { lang, t } = useI18n()
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    const { title, description } = resolveDocumentMeta(pathname, lang, t)
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:locale', lang === 'ar' ? 'ar_SA' : 'en_US')
    upsertMeta('property', 'og:locale:alternate', lang === 'ar' ? 'en_US' : 'ar_SA')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
  }, [pathname, lang, t])

  return null
}
