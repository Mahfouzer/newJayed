import type { Lang } from './i18n'

/** Shallow-deep merge: objects recurse, arrays and scalars replace. */
export function mergeWorkLocale<T>(base: T, patch: Partial<T> | undefined): T {
  if (patch === undefined) return base
  if (patch === null || typeof patch !== 'object' || Array.isArray(patch)) {
    return (patch ?? base) as T
  }
  if (typeof base !== 'object' || base === null || Array.isArray(base)) {
    return patch as T
  }
  const out = { ...base } as Record<string, unknown>
  for (const key of Object.keys(patch)) {
    const p = (patch as Record<string, unknown>)[key]
    const b = (base as Record<string, unknown>)[key]
    if (p === undefined) continue
    if (Array.isArray(p)) {
      out[key] = p
    } else if (typeof p === 'object' && p !== null && !Array.isArray(p) && typeof b === 'object' && b !== null && !Array.isArray(b)) {
      out[key] = mergeWorkLocale(b, p as Record<string, unknown>)
    } else {
      out[key] = p
    }
  }
  return out as T
}

export function pickWorkLocale<T>(base: T, patch: Partial<T> | undefined, lang: Lang): T {
  if (lang !== 'ar' || !patch) return base
  return mergeWorkLocale(base, patch)
}
