import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { useMemo } from 'react'
import { FadeIn } from '../components/ui/FadeIn'
import { useI18n, type T } from '../lib/i18n'

const WORK_SLUGS = [
  'quran-tutors',
  'skmd-dubai-sports-world',
  'datajolt',
  'electric-kiwi',
  'surra',
] as const

const WORK_IMAGES: (string | null)[] = [
  '/images/quran1.jpg',
  '/images/SKMD1.jpg',
  '/images/datajolt1.jpg',
  '/images/electricKiwi.jpg',
  '/images/surra.png',
]

type WorkRow = T['work']['showcase'][number] & {
  slug: (typeof WORK_SLUGS)[number]
  image: string | null
}

function buildWorkRows(t: T): WorkRow[] {
  return t.work.showcase.map((row, i) => ({
    ...row,
    slug: WORK_SLUGS[i],
    image: WORK_IMAGES[i],
  }))
}

export const Route = createFileRoute('/work')({
  loader: () => {
    throw redirect({ to: '/projects' })
  },
})

export function WorkPage() {
  const { t, lang } = useI18n()
  const projects = useMemo(() => buildWorkRows(t), [t])

  return (
    <main className="min-h-screen bg-[var(--c-bg)] pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <header className="max-w-2xl mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F55E00]">
              {t.workPage.label}
            </p>
            <h1
              className="font-bold tracking-tight text-[var(--c-hi)]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              {t.workPage.heading}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--c-muted)]">{t.workPage.sub}</p>
          </header>
        </FadeIn>

        <FadeIn>
          <div className="space-y-8">
            {projects.map((project, i) => (
              <Link key={project.slug} to="/projects/$slug" params={{ slug: project.slug }} className="no-underline block">
                <article className="group relative overflow-hidden rounded-3xl border border-[var(--c-gborder-md)] bg-[var(--c-glass-xs)] backdrop-blur-2xl transition-all duration-300 hover:border-[#F55E00]/30 hover:bg-[var(--c-glass-lo)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden shrink-0">
                      {project.image ? (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--c-bg)]/60 md:block hidden" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-bg)]/60 to-transparent md:hidden" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-[var(--c-bg)] flex items-center justify-center">
                          <span className="text-[5rem] leading-none select-none opacity-20 font-serif text-[#F55E00]">"</span>
                        </div>
                      )}

                      <div className="absolute top-4 start-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-[11px] font-mono font-semibold text-white/85">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <div
                      className="flex flex-col justify-between p-8 md:p-10 flex-1"
                      dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      lang={lang === 'ar' ? 'ar' : 'en'}
                    >
                      <div className="flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-5 flex-wrap">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#F55E00]/10 border border-[#F55E00]/20 text-[#F55E00]">
                              {project.industry}
                            </span>
                            <span className="text-[11px] font-mono text-[var(--c-muted)]">{project.client}</span>
                          </div>

                          <h2
                            className="font-semibold tracking-tight text-[var(--c-hi)] mb-3 transition-colors group-hover:text-white"
                            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)' }}
                          >
                            {project.title}
                          </h2>

                          <p className="text-[var(--c-body)] text-sm leading-relaxed mb-4">{project.desc}</p>

                          <p className="text-[var(--c-muted)] text-sm leading-relaxed">{project.overview}</p>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-md bg-[var(--c-raised)] border border-[var(--c-border)] text-[var(--c-muted)] text-[10px] font-mono transition-colors group-hover:border-[#F55E00]/20 group-hover:text-[#FFB020]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#F55E00] to-[#E8003D] scale-x-0 origin-start transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </article>
              </Link>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              to="/quote"
              className="no-underline inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-br from-[#F55E00] to-[#E8003D] text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,94,0,0.4)]"
            >
              {t.workPage.startProject}
            </Link>
            <p className="text-sm text-[var(--c-muted)]">{t.workPage.freeQuote}</p>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
