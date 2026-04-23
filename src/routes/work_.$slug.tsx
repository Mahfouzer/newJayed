import { createFileRoute, Link, notFound, redirect } from '@tanstack/react-router'
import { mergeWorkLocale } from '../lib/workCaseMerge'
import { workCaseArPatch } from '../lib/workCaseLocales.ar'
import { useI18n } from '../lib/i18n'

const projects = {
  'quran-tutors': {
    title: 'Quran Tutors',
    titleAccent: 'Tutors',
    category: 'EdTech • Egypt',
    tagline:
      "Building the digital bridge between students and the world's leading Quran scholars.",
    meta: ['2025 Project', 'Web Platform'],
    image: '/images/quran1.jpg',
    challenge: {
      heading: 'Learning without boundaries, friction without purpose.',
      body: [
        'Thousands of parents were searching for certified Quran and Arabic teachers for their children - but the process was scattered across WhatsApp groups, phone calls, and word-of-mouth. Quality was inconsistent and scheduling was chaos.',
        'The client needed a platform that made discovery, booking, and learning feel effortless - while giving teachers a professional, trustworthy presence online.',
      ],
    },
    solution: {
      heading: 'A Campus Without Walls.',
      body: 'We designed and built a full learning platform from scratch - pixel-perfect Figma prototypes iterated with the client, then a Next.js frontend with Firebase real-time backend. The result is a fast, clean experience that works for parents, students, and teachers alike.',
      features: [
        {
          name: 'One-Click Booking',
          desc: 'Parents book sessions directly with certified teachers, with instant confirmation.',
        },
        {
          name: 'Scholar Profiles',
          desc: 'Each teacher gets a rich profile page with credentials, reviews, and availability.',
        },
      ],
    },
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Firebase', 'Figma'],
    metrics: [
      { value: '3k+', label: 'Students enrolled at launch', icon: '👥' },
      { value: '95%', label: 'Course completion rate', icon: '📈' },
      { value: '4.9★', label: 'Average teacher rating', icon: '⭐' },
    ],
    impactQuote: '"Jayed didn\'t build us an app. They built us a community."',
    liveUrl: 'https://quran-app-mu.vercel.app/',
  },
  'skmd-dubai-sports-world': {
    title: 'SKMD - Dubai Sports World',
    titleAccent: 'Sports World',
    category: 'SportsTech • Dubai',
    tagline:
      "Architecting the digital heartbeat of the Middle East's premier indoor sports destination.",
    meta: ['2024 Project', 'Native iOS & Android'],
    image: '/images/SKMD1.jpg',
    challenge: {
      heading: 'Fragmented experiences in a unified space.',
      body: [
        'Dubai Sports World manages thousands of simultaneous bookings across 20+ different sports. The existing infrastructure struggled with real-time availability sync, resulting in double-bookings and friction at the physical gates.',
        "The goal wasn't just to build an app - it was to eliminate the cognitive load for users and administrative overhead for the management team. Precision was not optional; it was the baseline.",
      ],
    },
    solution: {
      heading: 'A Synchronized Pulse.',
      body: "We engineered a cross-platform app using React.js and CapacitorJS - a single codebase shipping native iOS and Android builds. Clean booking flows, event previews, and sport registration all in one place.",
      features: [
        {
          name: 'Smart Queuing',
          desc: 'Intelligent court allocation based on real-time usage patterns.',
        },
        {
          name: 'Unified ID',
          desc: 'One QR code for entry, payments, and loyalty points across all sports.',
        },
      ],
    },
    stack: ['JavaScript', 'React.js', 'CapacitorJS'],
    metrics: [
      { value: '420%', label: 'Increase in mobile bookings within 90 days', icon: '📱' },
      { value: '68k+', label: 'New active users onboarded in season one', icon: '👥' },
      { value: '0.0%', label: 'Critical system downtime during peak hours', icon: '✅' },
    ],
    impactQuote: '"Never split the difference on quality."',
    liveUrl: 'https://apps.apple.com/us/app/dubai-sports-world-app/id6449235680',
  },
  datajolt: {
    title: 'Datajolt',
    titleAccent: 'Datajolt',
    category: 'B2B SaaS • San Francisco',
    tagline:
      'A product-grade dashboard that turns data complexity into decision-making clarity.',
    meta: ['2025 Project', 'Web App'],
    image: '/images/datajolt1.jpg',
    challenge: {
      heading: 'Data everywhere. Insight nowhere.',
      body: [
        "Datajolt's clients had data scattered across dozens of sources - CRMs, ad platforms, revenue tools - with no single view of what was actually happening. Analysts were spending more time building reports than acting on them.",
        'The client needed a dashboard that non-technical stakeholders could use daily, while still giving analysts the power to go deep with raw SQL when needed.',
      ],
    },
    solution: {
      heading: 'One Dashboard. Every Answer.',
      body: 'We built a React.js product dashboard with a clean, intuitive interface - a fully functional SQL editor with table joins, and multiple visualisation types. Clean information architecture means anyone can find what they need in under 30 seconds.',
      features: [
        {
          name: 'SQL Editor',
          desc: 'Full-power editor with table joins, autocomplete, and instant previews.',
        },
        {
          name: 'Visual Analytics',
          desc: 'Graphs, tables, and summary cards built for non-technical stakeholders.',
        },
      ],
    },
    stack: ['React.js', 'TypeScript', 'JavaScript'],
    metrics: [
      { value: '150+', label: 'Data sources integrated at launch', icon: '🔗' },
      { value: '40%', label: 'Faster time-to-insight for analysts', icon: '⚡' },
      { value: '99.9%', label: 'Uptime across the first year', icon: '✅' },
    ],
    impactQuote:
      '"They\'re smart, professional, and understand customer requirements perfectly."',
    liveUrl: 'https://www.datajolt.io/',
  },
  surra: {
    type: 'advisory' as const,
    title: 'Surra',
    titleAccent: 'Surra',
    category: 'Strategic Advisory • Egypt',
    tagline: 'The most valuable work we have ever done was not built — it was spoken.',
    meta: ['2025', 'Strategic Advisory'],
    image: '/images/surra.png',
    brief: {
      heading: 'They came ready to build. 💰',
      body: [
        'Surra had a clear vision: a gold-buying app — think Sabika, but their own. The idea was real, the market appetite seemed obvious, and they had a budget to match. What they needed, they thought, was a development team to start building.',
        'But before we write a single line of code, we do something most agencies skip: we sit down with the client and pressure-test the business behind the product. Every assumption, every number, every operational dependency.',
      ],
    },
    findings: {
      heading: 'Gold is a regulated, operationally heavy business. The plan wasn\'t ready for that.',
      body: 'We went through the model top to bottom. A gold-buying platform is not a standard marketplace — it carries licensing requirements, custodianship obligations, price-spread risk, and KYC/AML compliance burdens that don\'t show up in the pitch deck. What we found were gaps that no frontend or backend work could close.',
      points: [
        {
          name: 'Regulatory exposure',
          desc: 'Operating a gold-trading platform requires financial licenses that weren\'t in place — and the timeline to obtain them was far longer than the business plan assumed.',
        },
        {
          name: 'Operational infrastructure',
          desc: 'The physical and custodial side of gold handling was undercosted by a significant margin. These weren\'t line items to be negotiated — they were non-negotiable baseline costs.',
        },
        {
          name: 'Competitive window',
          desc: 'Established players with regulatory clearance already occupied the position the plan was targeting. The differentiator was thin and the moat was absent.',
        },
      ],
    },
    whatWeSaid: 'We told them not to proceed. Not "let\'s reduce scope." Not "let\'s phase it." Stop. We laid out what we found, walked through the numbers, and gave them our honest read: building the app now would put capital at risk before the foundation underneath it was solid. The app was the least of the problems.',
    outcome: {
      heading: 'They listened.',
      body: [
        'Surra did not build. The budget stayed intact. The team redirected energy toward the regulatory and operational groundwork that actually needed to happen first.',
        'No product was shipped. No launch date was announced. That was the right call — and we were glad to be the ones to say it.',
      ],
    },
    impactQuote: '"We could have taken the contract, built what they asked, and collected the fee. That would have been the easy path — and the wrong one."',
    clientQuote: {
      text: 'Thanks for enlightening me and guiding me through the business process even before the technical execution.',
      name: 'Ahmed Ma\'mon',
      role: 'Police Officer',
    },
  },
  'electric-kiwi': {
    title: 'Electric Kiwi',
    titleAccent: 'Kiwi',
    category: 'Energy Tech • New Zealand',
    tagline:
      'Reusable energy insight components that empower Kiwis to make smarter power decisions.',
    meta: ['2023 Project', 'Component Library'],
    image: '/images/electricKiwi.jpg',
    challenge: {
      heading: 'Energy data that empowers, not overwhelms.',
      body: [
        "Electric Kiwi's web platform needed to surface real-time energy data - green meter readings, three-day forecasts, carbon emissions - without overwhelming everyday users who just want to know the best time to run the dishwasher.",
        "The engineering team needed reusable, framework-agnostic components that could be dropped into any part of the platform without coupling to a specific stack.",
      ],
    },
    solution: {
      heading: 'Components That Just Work.',
      body: 'We built a custom Stencil.js component library - web components with clean input/output interfaces, framework-agnostic and built to last. Developers on the Electric Kiwi platform can integrate any component with standard HTML attributes.',
      features: [
        {
          name: 'Green Meter',
          desc: 'Real-time visualisation of the current renewable energy percentage on the grid.',
        },
        {
          name: '3-Day Forecast',
          desc: 'Predictive energy consumption graphs with carbon emissions breakdowns.',
        },
      ],
    },
    stack: ['Stencil.js', 'TypeScript'],
    metrics: [
      { value: '12', label: 'Reusable components shipped', icon: '🧩' },
      { value: '60%', label: 'Reduction in component integration time', icon: '⚡' },
      { value: '100k+', label: 'Kiwis using the energy features daily', icon: '🌿' },
    ],
    impactQuote:
      '"Jayed has been fantastic to work with. You can tell they love what they do."',
    liveUrl: 'https://www.electrickiwi.co.nz/',
  },
}

/** Used by {@link DocumentMetaSync} so document title/description can follow UI language. */
export function getWorkCaseMeta(slug: string): { title: string; description: string } | null {
  const project = projects[slug as keyof typeof projects]
  if (!project) return null
  return {
    title: `${project.title} | Jayed Studio`,
    description: project.tagline,
  }
}

export const Route = createFileRoute('/work_/$slug')({
  loader: ({ params }) => {
    throw redirect({ to: '/projects/$slug', params: { slug: params.slug } })
  },
})

export function ProjectDetailPageInner({ slug }: { slug: string }) {
  const { t, lang } = useI18n()
  const project = projects[slug as keyof typeof projects]

  if (!project) throw notFound()

  const display = (
    lang === 'ar' && workCaseArPatch[slug]
      ? mergeWorkLocale(project as unknown as Record<string, unknown>, workCaseArPatch[slug])
      : project
  ) as typeof project

  // Advisory projects get a custom layout
  if ('type' in display && display.type === 'advisory') {
    return (
      <main
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        lang={lang === 'ar' ? 'ar' : 'en'}
        className="min-h-screen bg-[var(--c-bg)] text-[var(--c-hi)]"
      >
        {/* ─── HERO ─── */}
        <section className="relative pt-32 pb-20 bg-[var(--c-bg)]">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs font-mono text-[var(--c-muted)] mb-8">
              <Link to="/" className="no-underline hover:text-[var(--c-body)] transition-colors">{t.nav.home}</Link>
              <span>/</span>
              <Link to="/projects" className="no-underline hover:text-[var(--c-body)] transition-colors">{t.nav.work}</Link>
              <span>/</span>
              <span className="text-[var(--c-body)]">{display.title}</span>
            </nav>

            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F55E00]/10 border border-[#F55E00]/20 text-[#F55E00] text-xs font-bold uppercase tracking-widest mb-8">
              {display.category}
            </span>

            <div className="max-w-4xl">
              <h1 className="font-extrabold tracking-tighter leading-none mb-8" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                {display.title}
              </h1>
              <p className="text-xl text-[var(--c-body)] leading-relaxed max-w-2xl mb-10">
                {display.tagline}
              </p>
              <div className="flex items-center gap-6">
                {display.meta.map((m: string) => (
                  <div key={m} className="flex items-center gap-3">
                    <span className="w-8 h-px bg-[var(--c-border)]" />
                    <span className="text-[var(--c-muted)] text-sm font-semibold">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logo panel */}
          <div className="max-w-7xl mx-auto px-8 mt-16">
            <div className="relative rounded-2xl overflow-hidden flex items-center justify-center py-20" style={{ background: 'linear-gradient(135deg, #2A1A08 0%, #4A2E10 50%, #2A1A08 100%)' }}>
              <img src={display.image} alt={display.title} className="h-56 w-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </section>

        {/* ─── THE BRIEF ─── */}
        <section className="py-24 bg-[var(--c-surface)]">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="text-xs font-bold text-[#F55E00] uppercase tracking-widest mb-4">{t.workCaseStudy.advisoryBrief}</h2>
              <h3 className="font-bold text-[var(--c-hi)] leading-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                {display.brief.heading}
              </h3>
            </div>
            <div className="md:col-span-7 space-y-5 text-lg text-[var(--c-body)] leading-relaxed">
              {display.brief.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* ─── WHAT WE FOUND ─── */}
        <section className="py-24 bg-[var(--c-bg)]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl mb-14">
              <h2 className="text-xs font-bold text-[#F55E00] uppercase tracking-widest mb-4">{t.workCaseStudy.advisoryFindings}</h2>
              <h3 className="font-bold text-[var(--c-hi)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                {display.findings.heading}
              </h3>
              <p className="text-lg text-[var(--c-body)] leading-relaxed">{display.findings.body}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {display.findings.points.map((pt: { name: string; desc: string }, i: number) => (
                <div key={pt.name} className="p-8 rounded-2xl bg-[var(--c-surface)] border border-[var(--c-border)]">
                  <div className="w-8 h-8 rounded-full bg-[#E8003D]/10 border border-[#E8003D]/20 flex items-center justify-center text-[#E8003D] text-xs font-bold mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 className="font-semibold text-[var(--c-hi)] mb-3">{pt.name}</h4>
                  <p className="text-sm text-[var(--c-muted)] leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT WE SAID ─── */}
        <section className="py-24 bg-[var(--c-surface)]">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-xs font-bold text-[#F55E00] uppercase tracking-widest mb-8">{t.workCaseStudy.advisorySaid}</h2>
            <blockquote className="max-w-3xl text-2xl font-semibold text-[var(--c-hi)] leading-relaxed border-s-2 border-[#F55E00]/50 ps-8 text-start">
              {display.whatWeSaid}
            </blockquote>
          </div>
        </section>

        {/* ─── THE OUTCOME ─── */}
        <section className="py-24 bg-[var(--c-bg)]">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <h2 className="text-xs font-bold text-[#F55E00] uppercase tracking-widest mb-4">{t.workCaseStudy.advisoryOutcome}</h2>
              <h3 className="font-bold text-[var(--c-hi)] leading-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                {display.outcome.heading}
              </h3>
            </div>
            <div className="md:col-span-7 space-y-5 text-lg text-[var(--c-body)] leading-relaxed">
              {display.outcome.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* ─── CLIENT QUOTE ─── */}
        <section className="py-20 bg-[var(--c-surface)]">
          <div className="max-w-3xl mx-auto px-8">
            <div className="relative p-10 rounded-2xl bg-[var(--c-glass-xs)] border border-[var(--c-gborder-md)]">
              <span className="absolute top-6 start-8 text-[5rem] leading-none font-serif text-[#F55E00] opacity-[0.12] select-none">"</span>
              <blockquote className="relative z-10 text-xl text-[var(--c-body)] leading-relaxed italic mb-8 text-start">
                {display.clientQuote.text}
              </blockquote>
              <footer className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F55E00]/30 to-[#E8003D]/20 border border-[var(--c-border)] flex items-center justify-center text-[var(--c-hi)] text-sm font-bold shrink-0">
                  {display.clientQuote.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--c-hi)]">{display.clientQuote.name}</p>
                  <p className="text-xs text-[var(--c-muted)]">{display.clientQuote.role}</p>
                </div>
              </footer>
            </div>
          </div>
        </section>

        {/* ─── IMPACT QUOTE ─── */}
        <section className="py-24 bg-[var(--c-bg)]">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <p className="text-[6rem] leading-none font-serif text-[#F55E00] opacity-20 select-none mb-2">"</p>
            <p className="text-2xl font-semibold text-[var(--c-hi)] leading-relaxed italic -mt-12">
              {display.impactQuote}
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 bg-[var(--c-bg)]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="relative bg-[var(--c-surface)] rounded-3xl p-14 overflow-hidden border border-[var(--c-border)]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#F55E00]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-start">
                  <h2 className="font-extrabold text-[var(--c-hi)] leading-none mb-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
                    {t.workCaseStudy.ctaAdvisoryLine1}{' '}
                    <span className="text-[#F55E00]">{t.workCaseStudy.ctaAdvisoryAccent}</span>
                  </h2>
                  <p className="text-[var(--c-muted)] text-lg">{t.workCaseStudy.ctaAdvisorySub}</p>
                </div>
                <Link
                  to="/quote"
                  className="no-underline shrink-0 inline-flex items-center gap-3 bg-[#F55E00] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#FF7A2D] transition-colors"
                >
                  {t.workPage.startProject}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-8 pb-16">
          <Link to="/projects" className="no-underline inline-flex items-center gap-2 text-sm text-[var(--c-muted)] hover:text-[var(--c-body)] transition-colors">
            {t.workDetail.backToAll}
          </Link>
        </div>
      </main>
    )
  }

  if (!('challenge' in display)) throw notFound()

  // Find the accent word in the title
  const titleParts = display.title.split(display.titleAccent)

  return (
    <main
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      lang={lang === 'ar' ? 'ar' : 'en'}
      className="min-h-screen bg-[var(--c-bg)] text-[var(--c-hi)]"
    >

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            {/* Left: category + title + tagline */}
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs font-mono text-[var(--c-muted)] mb-6">
                <Link to="/" className="no-underline hover:text-[var(--c-body)] transition-colors">{t.nav.home}</Link>
                <span>/</span>
                <Link to="/projects" className="no-underline hover:text-[var(--c-body)] transition-colors">{t.nav.work}</Link>
                <span>/</span>
                <span className="text-[var(--c-body)]">{display.title}</span>
              </nav>

              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F55E00]/10 border border-[#F55E00]/20 text-[#F55E00] text-xs font-bold uppercase tracking-widest mb-6">
                {display.category}
              </span>

              <h1 className="font-extrabold tracking-tighter leading-none mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                {titleParts[0]}
                <span className="text-[#F55E00]">{display.titleAccent}</span>
                {titleParts[1]}
              </h1>

              <p className="text-xl text-[var(--c-body)] leading-relaxed max-w-xl">
                {display.tagline}
              </p>
            </div>

            {/* Right: meta */}
            <div className="flex flex-col gap-3 text-sm shrink-0">
              {display.meta.map((m) => (
                <div key={m} className="flex items-center gap-3">
                  <span className="w-10 h-px bg-[var(--c-border)]" />
                  <span className="text-[var(--c-muted)] font-semibold">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '21/9' }}>
            <img
              src={display.image}
              alt={display.title}
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-bg)]/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── CHALLENGE ─── */}
      <section className="py-24 bg-[var(--c-surface)]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-xs font-bold text-[#F55E00] uppercase tracking-widest mb-4">{t.workCaseStudy.challenge}</h2>
            <h3 className="font-bold text-[var(--c-hi)] leading-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              {display.challenge.heading}
            </h3>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-5 text-lg text-[var(--c-body)] leading-relaxed">
              {display.challenge.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-24 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-8">
          {/* Image + text */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative p-6 bg-[var(--c-surface)] rounded-2xl overflow-hidden group border border-[var(--c-gborder-lo)]">
                <img
                  src={display.image}
                  alt={`${display.title} solution`}
                  className="rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ maxHeight: '360px' }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xs font-bold text-[#F55E00] uppercase tracking-widest mb-4">{t.workCaseStudy.solution}</h2>
              <h3 className="font-bold text-[var(--c-hi)] mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                {display.solution.heading}
              </h3>
              <p className="text-[var(--c-body)] text-lg leading-relaxed mb-8">
                {display.solution.body}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {display.solution.features.map((f) => (
                  <div key={f.name}>
                    <h4 className="font-semibold text-[var(--c-hi)] mb-2">{f.name}</h4>
                    <p className="text-sm text-[var(--c-muted)] leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento: Tech stack + metric cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Stack card (spans 2) */}
            <div className="md:col-span-2 bg-[var(--c-surface)] p-8 rounded-2xl border border-[var(--c-gborder-lo)]">
              <h4 className="text-base font-bold text-[var(--c-hi)] mb-5">{t.workCaseStudy.stackTitle}</h4>
              <div className="flex flex-wrap gap-3">
                {display.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[var(--c-raised)] rounded-full text-sm font-medium text-[var(--c-body)] border border-[var(--c-border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Metric card 1 - orange */}
            <div className="bg-[#F55E00] text-white p-8 rounded-2xl flex flex-col justify-between">
              <span className="text-3xl">{display.metrics[0].icon}</span>
              <div>
                <p className="text-3xl font-black tracking-tight">{display.metrics[0].value}</p>
                <p className="text-sm opacity-80 font-bold mt-1 leading-snug">{display.metrics[0].label}</p>
              </div>
            </div>

            {/* Metric card 2 - teal */}
            <div className="bg-[#0D3D36] text-[#67d9c9] p-8 rounded-2xl flex flex-col justify-between border border-[#67d9c9]/10">
              <span className="text-3xl">{display.metrics[1].icon}</span>
              <div>
                <p className="text-3xl font-black tracking-tight">{display.metrics[1].value}</p>
                <p className="text-sm opacity-80 font-bold mt-1 leading-snug">{display.metrics[1].label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT ─── */}
      <section className="py-24 bg-[var(--c-surface)]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#F55E00] uppercase tracking-widest mb-4">{t.workCaseStudy.impact}</h2>
            <h3
              className="font-extrabold text-[var(--c-hi)] tracking-tight italic mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              {display.impactQuote}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {display.metrics.map((m) => (
              <div key={m.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--c-raised)] border border-[var(--c-border)] mb-5 transition-transform group-hover:scale-110 text-2xl">
                  {m.icon}
                </div>
                <h4 className="text-4xl font-black text-[var(--c-hi)] mb-2">{m.value}</h4>
                <p className="text-[var(--c-muted)] font-medium text-sm leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative bg-[var(--c-surface)] rounded-3xl p-14 overflow-hidden border border-[var(--c-border)]">
            {/* Glow blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F55E00]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5C1A6E]/20 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <h2
                  className="font-extrabold text-[var(--c-hi)] leading-none mb-4 text-start"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
                >
                  {t.workCaseStudy.ctaStandardLine1}{' '}
                  <span className="text-[#F55E00]">{t.workCaseStudy.ctaStandardAccent}</span>
                </h2>
                <p className="text-[var(--c-muted)] text-lg text-start">{t.workCaseStudy.ctaStandardSub}</p>
              </div>
              <Link
                to="/quote"
                className="no-underline shrink-0 inline-flex items-center gap-3 bg-[#F55E00] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#FF7A2D] transition-colors"
              >
                {t.workPage.startProject}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <Link
          to="/projects"
          className="no-underline inline-flex items-center gap-2 text-sm text-[var(--c-muted)] hover:text-[var(--c-body)] transition-colors"
        >
          {t.workDetail.backToAll}
        </Link>
      </div>
    </main>
  )
}
