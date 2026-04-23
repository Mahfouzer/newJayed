import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { FadeIn } from '../ui/FadeIn'
import { useI18n, type Lang, type T } from '../../lib/i18n'

const PROJECT_ASSETS = [
  {
    year: '2025',
    caseSlug: 'quran-tutors' as const,
    image: '/images/quran1.jpg',
    bg: '#1A3C5E',
  },
  {
    year: '2024',
    caseSlug: 'skmd-dubai-sports-world' as const,
    image: '/images/SKMD1.jpg',
    bg: '#2E75B6',
  },
  {
    year: '2025',
    caseSlug: 'datajolt' as const,
    image: '/images/datajolt1.jpg',
    bg: '#1E7B4B',
  },
  {
    year: '2023',
    caseSlug: 'electric-kiwi' as const,
    image: '/images/electricKiwi.jpg',
    bg: '#1A4D2E',
  },
  {
    year: '2025',
    caseSlug: 'surra' as const,
    image: '/images/surra.png',
    bg: 'var(--c-bg)',
  },
] as const

type Project = T['work']['showcase'][number] & (typeof PROJECT_ASSETS)[number]

function mergeShowcase(t: T): Project[] {
  return t.work.showcase.map((row, i) => ({
    ...row,
    ...PROJECT_ASSETS[i],
  }))
}

function WorkExploreLink({
  project,
  className,
}: {
  project: Project
  className: string
}) {
  const { t, lang } = useI18n()
  return (
    <Link
      to={project.caseSlug ? '/projects/$slug' : '/projects'}
      params={project.caseSlug ? { slug: project.caseSlug } : undefined}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={className}
    >
      <span>{t.work.exploreCase}</span>
      <span aria-hidden className="shrink-0">
        {lang === 'ar' ? '←' : '→'}
      </span>
    </Link>
  )
}

function ProjectSection({
  project,
  index,
  active,
}: {
  project: Project
  index: number
  active: boolean
}) {
  const { t, lang } = useI18n()
  return (
    <Link
      to={project.caseSlug ? '/projects/$slug' : '/projects'}
      params={project.caseSlug ? { slug: project.caseSlug } : undefined}
      className="group block w-full rounded-3xl border px-6 py-10 no-underline transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F55E00]/40 text-start"
      style={{
        borderColor: active ? 'rgba(245,94,0,0.55)' : 'var(--c-gborder-md)',
        backgroundColor: active ? 'var(--c-glass-md)' : 'var(--c-glass-xs)',
        boxShadow: active ? '0 18px 60px rgba(0,0,0,0.45)' : undefined,
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--c-muted)]">
          {project.year}
        </span>
        <span className="h-px flex-1 bg-[var(--c-gborder-md)]" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--c-muted)]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3
        className="mt-5 font-semibold tracking-tight"
        style={{
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          color: active ? 'var(--c-hi)' : 'var(--c-muted)',
        }}
      >
        {project.title}
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--c-body)]">{project.desc}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border bg-[var(--c-raised)] px-2 py-1 text-[10px] font-mono"
            style={{
              borderColor: 'var(--c-border)',
              color: active ? '#FFB020' : 'var(--c-muted)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <p
        className="mt-6 text-sm font-semibold text-[#F55E00] lg:opacity-0 transition-opacity duration-300 group-hover:opacity-100 inline-flex items-center gap-2"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <span>{t.work.exploreCase}</span>
        <span aria-hidden className="shrink-0">{lang === 'ar' ? '←' : '→'}</span>
      </p>
    </Link>
  )
}

function StickyProjectPanel({
  project,
  stickyLabels,
  lang,
}: {
  project: Project
  stickyLabels: { client: string; industry: string; tags: string }
  lang: Lang
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--c-gborder-md)] bg-[var(--c-glass-xs)] backdrop-blur-2xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            loading="lazy"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-bg)] via-[var(--c-bg)]/35 to-transparent" />
        <div className="absolute bottom-4 start-4 end-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-[var(--c-gborder-hi)] bg-black/30 px-3 py-1 text-xs font-semibold text-[var(--c-hi)]">
              {project.year}
            </span>
            <span className="rounded-full border border-[var(--c-gborder-hi)] bg-black/30 px-3 py-1 text-xs font-semibold text-[var(--c-hi)]">
              {project.industry}
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--c-hi)]">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--c-body)]">{project.desc}</p>
        </div>
      </div>

      <div
        className="p-6"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        lang={lang === 'ar' ? 'ar' : 'en'}
      >
        <p className="text-sm leading-relaxed text-[var(--c-muted)]">{project.overview}</p>

        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex items-start justify-between gap-4 border-t border-[var(--c-gborder-lo)] pt-3">
            <dt className="text-[var(--c-muted)]">{stickyLabels.client}</dt>
            <dd className="text-[var(--c-hi)] text-end">{project.client}</dd>
          </div>
          <div className="flex items-start justify-between gap-4 border-t border-[var(--c-gborder-lo)] pt-3">
            <dt className="text-[var(--c-muted)]">{stickyLabels.industry}</dt>
            <dd className="text-[var(--c-hi)] text-end">{project.industry}</dd>
          </div>
          <div className="flex items-start justify-between gap-4 border-t border-[var(--c-gborder-lo)] pt-3">
            <dt className="text-[var(--c-muted)]">{stickyLabels.tags}</dt>
            <dd className="flex flex-wrap justify-end gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[var(--c-border)] bg-[var(--c-raised)] px-2 py-1 text-[10px] font-mono text-[var(--c-muted)]"
                >
                  {tag}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <WorkExploreLink
            project={project}
            className="inline-flex items-center gap-2 rounded-full bg-[#F55E00] px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-[#FF7A2D]"
          />
        </div>
      </div>
    </div>
  )
}

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<Array<HTMLElement | null>>([])
  const { t, lang } = useI18n()

  const projects = useMemo(() => mergeShowcase(t), [t, lang])

  const activeProject = useMemo(() => projects[activeIndex] ?? projects[0], [activeIndex, projects])

  useEffect(() => {
    setActiveIndex(0)
  }, [lang])

  useEffect(() => {
    const elements = sectionRefs.current.filter(Boolean) as HTMLElement[]
    if (!elements.length) return

    let raf = 0

    const compute = () => {
      raf = 0
      setActiveIndex((current) => {
        const midY = Math.round(window.innerHeight / 2)
        for (let i = 0; i < elements.length; i++) {
          const rect = elements[i]?.getBoundingClientRect()
          if (!rect) continue
          if (rect.top <= midY && rect.bottom >= midY) return i
        }
        const firstRect = elements[0]?.getBoundingClientRect()
        const lastRect = elements[elements.length - 1]?.getBoundingClientRect()
        if (firstRect && midY < firstRect.top) return 0
        if (lastRect && midY > lastRect.bottom) return elements.length - 1
        return current
      })
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="work" className="section-gap bg-[var(--c-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#F55E00]">
              {t.work.label}
            </p>
            <h2
              className="font-semibold text-[var(--c-hi)] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              {t.work.heading}
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium no-underline hidden md:block text-[#F55E00] hover:text-[#FFB020] transition-colors duration-200"
          >
            {t.work.seeAll}
          </Link>
        </FadeIn>

        <div key={lang} className="grid gap-8 lg:grid-cols-2">
          <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
            <StickyProjectPanel
              key={`${lang}-${activeIndex}`}
              project={activeProject}
              stickyLabels={t.work.stickyLabels}
              lang={lang}
            />
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={`${index}-${project.caseSlug ?? 'work'}`}
                ref={(el) => {
                  sectionRefs.current[index] = el
                }}
                id={`project-${index}`}
                className="snap-start [scroll-margin-top:30vh]"
              >
                <ProjectSection project={project} index={index} active={index === activeIndex} />
              </div>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3} className="mt-8 md:hidden text-center">
          <Link
            to="/projects"
            className="text-sm font-medium no-underline text-[#F55E00] hover:text-[#FFB020] transition-colors duration-200"
          >
            {t.work.seeAll}
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
