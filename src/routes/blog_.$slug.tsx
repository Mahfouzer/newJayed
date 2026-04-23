import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { BlogCover } from '../components/blog/BlogCover'
import { LtrIsolate } from '../components/ui/LtrIsolate'
import type { Lang } from '../lib/i18n'
import { useI18n } from '../lib/i18n'
import {
  getPostBodyForLang,
  getPostMetaForLang,
  hasArPostBody,
  hasArPostMeta,
  posts,
  type Post,
} from '../lib/posts'

export const Route = createFileRoute('/blog_/$slug')({
  loader: ({ params }) => {
    throw redirect({ to: '/blogs/$slug', params: { slug: params.slug } })
  },
})

const proseBodyClasses = `
  prose prose-invert max-w-none
  prose-p:text-[var(--c-body)] prose-p:leading-[1.9] prose-p:text-[1.05rem]
  prose-headings:text-[var(--c-hi)] prose-headings:font-bold prose-headings:tracking-tight
  prose-h2:text-[1.6rem] prose-h2:mt-14 prose-h2:mb-5
  prose-a:text-[#F55E00] prose-a:no-underline hover:prose-a:underline
  prose-strong:text-[var(--c-hi)]
`

function HeroBlock({
  post,
  meta,
  lang,
}: {
  post: Post
  meta: ReturnType<typeof getPostMetaForLang>
  lang: Lang
}) {
  const arHero = lang === 'ar' && hasArPostMeta(post.slug)

  /** Latin author line: always LTR so names/dates don’t break inside RTL Arabic hero. */
  const byline = (
    <div
      dir="ltr"
      lang="en"
      className="min-w-0 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-mono text-white/35"
    >
      <span className="text-white/55">{post.author}</span>
      <span aria-hidden>·</span>
      <span>{post.date}</span>
      <span aria-hidden>·</span>
      <span>{meta.readTime}</span>
    </div>
  )

  const inner = (
    <>
      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#F55E00]/20 border border-[#F55E00]/30 text-[#F55E00] mb-5">
        {meta.category}
      </span>
      <h1
        className="font-bold text-white tracking-tight leading-[1.1] mb-4 text-start"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
      >
        {meta.title}
      </h1>
      <p className="text-white/55 text-lg leading-relaxed mb-7 max-w-2xl text-start">{meta.subtitle}</p>
      <div className="flex flex-wrap items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F55E00] to-[#E8003D] flex items-center justify-center text-white text-xs font-bold shrink-0 select-none">
          J
        </div>
        {byline}
      </div>
    </>
  )

  if (arHero) {
    return (
      <div className="w-full max-w-3xl text-start" dir="rtl" lang="ar">
        {inner}
      </div>
    )
  }
  if (lang === 'ar') {
    return (
      <LtrIsolate className="block w-full max-w-3xl text-start">
        {inner}
      </LtrIsolate>
    )
  }
  return (
    <div className="w-full max-w-3xl text-start" dir="ltr" lang="en">
      {inner}
    </div>
  )
}

function RelatedCard({
  p,
  lang,
}: {
  p: Post
  lang: Lang
}) {
  const meta = getPostMetaForLang(p, lang)
  const inner = (
    <>
      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#F55E00]/10 border border-[#F55E00]/20 text-[#F55E00] mb-2">
        {meta.category}
      </span>
      <h3 className="font-bold text-[var(--c-hi)] leading-snug group-hover:text-white transition-colors line-clamp-2">
        {meta.title}
      </h3>
      <p className="text-xs text-[var(--c-border)] font-mono mt-2">
        {p.date} · {meta.readTime}
      </p>
    </>
  )

  if (lang === 'ar' && hasArPostMeta(p.slug)) {
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

export function BlogPostPage({ post }: { post: Post }) {
  const { t, lang } = useI18n()
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const meta = getPostMetaForLang(post, lang)
  const bodyHtml = getPostBodyForLang(post, lang)
  const arBodyRtl = lang === 'ar' && hasArPostBody(post.slug)

  return (
    <main className="min-h-screen bg-[var(--c-bg)]">
      <div className="relative flex flex-col justify-end" style={{ minHeight: '85vh' }}>
        <BlogCover emoji={post.coverEmoji} variant="hero" />
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[var(--c-bg)] to-transparent" />
        <div
          className="absolute bottom-0 left-0 right-0 h-3/4"
          style={{ background: 'linear-gradient(to top, var(--c-bg) 55%, transparent 100%)' }}
        />

        <div className="absolute top-0 left-0 right-0 pt-24 px-6 z-10">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/blogs"
              className="no-underline inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/40 hover:text-[#F55E00] transition-colors duration-150"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
              {t.blogPost.backToJournal}
            </Link>
          </div>
        </div>

        <div className="relative z-10 px-6 pb-14 pt-32">
          <div className="max-w-6xl mx-auto">
            <HeroBlock post={post} meta={meta} lang={lang} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto py-14">
          {arBodyRtl ? (
            <div
              dir="rtl"
              lang="ar"
              className={proseBodyClasses.trim()}
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          ) : lang === 'ar' ? (
            <LtrIsolate className={proseBodyClasses.trim()} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          ) : (
            <div className={proseBodyClasses.trim()} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          )}

          <div className="relative overflow-hidden rounded-2xl border border-[var(--c-raised)] bg-[var(--c-bg)] p-8 mt-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F55E00]/10 blur-[80px] rounded-full pointer-events-none" />
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#F55E00] mb-2">{t.blogPost.ctaEyebrow}</p>
            <p className="text-[var(--c-hi)] font-bold text-2xl tracking-tight mb-2">{t.blogPost.ctaHeading}</p>
            <p className="text-[var(--c-muted)] text-sm mb-6">{t.blogPost.ctaSub}</p>
            <Link
              to="/quote"
              className="no-underline inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-[#F55E00] to-[#E8003D] text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,94,0,0.4)] transition-all duration-200"
            >
              {t.blogPost.ctaButton}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--c-raised)] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-border)] mb-8">{t.blogPost.moreFromJournal}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {related.map((p) => (
            <Link key={p.slug} to="/blogs/$slug" params={{ slug: p.slug }} className="no-underline block group">
              <article>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--c-surface)] mb-4">
                  <BlogCover emoji={p.coverEmoji} variant="thumb" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
                <RelatedCard p={p} lang={lang} />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
