import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import type { Lang } from '../lib/i18n'
import { BlogCover } from '../components/blog/BlogCover'
import { FadeIn } from '../components/ui/FadeIn'
import { LtrIsolate } from '../components/ui/LtrIsolate'
import { useI18n } from '../lib/i18n'
import { getPostMetaForLang, hasArPostMeta, postsMeta as posts } from '../lib/posts.meta'

export const Route = createFileRoute('/blog')({
  loader: () => {
    throw redirect({ to: '/blogs' })
  },
})

function PostCardInner({
  title,
  subtitle,
  category,
  date,
  readTime,
  lineClamp,
  lang,
  slug,
}: {
  title: string
  subtitle: string
  category: string
  date: string
  readTime: string
  lineClamp?: boolean
  lang: Lang
  slug: string
}) {
  const arLayout = lang === 'ar' && hasArPostMeta(slug)
  const inner = (
    <>
      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#F55E00]/10 border border-[#F55E00]/20 text-[#F55E00] mb-3">
        {category}
      </span>
      <h3 className="font-bold text-[var(--c-hi)] leading-snug mb-2 group-hover:text-[#F55E00] transition-colors">
        {title}
      </h3>
      <p className={`text-[var(--c-muted)] text-sm leading-relaxed ${lineClamp ? 'line-clamp-2 mb-3' : 'mb-6'}`}>
        {subtitle}
      </p>
      <div className="flex items-center gap-3 text-[11px] text-[var(--c-border)] font-mono">
        <span>{date}</span>
        <span>·</span>
        <span>{readTime}</span>
      </div>
    </>
  )

  if (arLayout) {
    return (
      <div dir="rtl" lang="ar">
        {inner}
      </div>
    )
  }
  if (lang === 'ar') {
    return <LtrIsolate>{inner}</LtrIsolate>
  }
  return <div>{inner}</div>
}

function FeaturedCard({
  slug,
  meta,
  author,
  date,
  lang,
}: {
  slug: string
  meta: ReturnType<typeof getPostMetaForLang>
  author: string
  date: string
  lang: Lang
}) {
  const arLayout = lang === 'ar' && hasArPostMeta(slug)
  const inner = (
    <>
      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#F55E00]/10 border border-[#F55E00]/20 text-[#F55E00] mb-4">
        {meta.category}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--c-hi)] leading-snug mb-3 group-hover:text-[#F55E00] transition-colors">
        {meta.title}
      </h2>
      <p className="text-[var(--c-muted)] text-sm leading-relaxed mb-6">{meta.subtitle}</p>
      <div className="flex items-center gap-3 text-[11px] text-[var(--c-border)] font-mono">
        <span>{author}</span>
        <span>·</span>
        <span>{date}</span>
        <span>·</span>
        <span>{meta.readTime}</span>
      </div>
    </>
  )

  if (arLayout) {
    return (
      <div dir="rtl" lang="ar">
        {inner}
      </div>
    )
  }
  if (lang === 'ar') {
    return <LtrIsolate>{inner}</LtrIsolate>
  }
  return <div>{inner}</div>
}

export function BlogPage() {
  const { t, lang } = useI18n()
  const [featured, ...rest] = posts

  const featuredMeta = getPostMetaForLang(featured, lang)

  return (
    <main className="min-h-screen bg-[var(--c-bg)]">
      <div className="border-b border-[var(--c-surface)]">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F55E00] mb-3">{t.blogPage.label}</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--c-hi)]">{t.blogPage.heading}</h1>
            <p className="mt-3 text-[var(--c-muted)] text-base max-w-xl">{t.blogPage.sub}</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <FadeIn delay={0.05}>
          <Link to="/blogs/$slug" params={{ slug: featured.slug }} className="no-underline block group mb-14">
            <article className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[var(--c-surface)]">
                <BlogCover emoji={featured.coverEmoji} variant="thumb" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              <FeaturedCard
                slug={featured.slug}
                meta={featuredMeta}
                author={featured.author}
                date={featured.date}
                lang={lang}
              />
            </article>
          </Link>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--c-raised)] to-transparent mb-12" />
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {rest.map((post) => {
              const meta = getPostMetaForLang(post, lang)
              return (
                <Link key={post.slug} to="/blogs/$slug" params={{ slug: post.slug }} className="no-underline block group">
                  <article>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--c-surface)] mb-4">
                      <BlogCover emoji={post.coverEmoji} variant="thumb" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    </div>
                    <PostCardInner
                      title={meta.title}
                      subtitle={meta.subtitle}
                      category={meta.category}
                      date={post.date}
                      readTime={meta.readTime}
                      lineClamp
                      lang={lang}
                      slug={post.slug}
                    />
                  </article>
                </Link>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
