import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'ar'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      work: 'Projects',
      about: 'About',
      blog: 'Blogs',
      getQuote: 'Get a Quote',
    },
    hero: {
      badge: 'چيد · Building what matters, shipping what works.',
      subtext:
        'Websites, mobile apps, and e-commerce for SMEs in Egypt and the Gulf. On time. On budget. No overkill.',
      cta1: 'Get a Straight Quotation →',
      cta2: 'See our work →',
    },
    themeToggle: {
      auto: 'Auto',
      light: 'Light',
      dark: 'Dark',
      ariaAuto: 'Theme: system default. Click to use light mode.',
      ariaLight: 'Theme: light. Click to use dark mode.',
      ariaDark: 'Theme: dark. Click to use system default.',
    },
    work: {
      label: 'Our Work',
      heading: 'Built and shipped.',
      seeAll: 'See all projects →',
      exploreCase: 'Explore the case',
      stickyLabels: {
        client: 'Client',
        industry: 'Industry',
        tags: 'Tags',
      },
      showcase: [
        {
          title: 'Quran Tutors',
          desc: 'Online learning platform for Arabic and Islamic studies.',
          overview:
            'A fast, clean learning platform designed to reduce friction for parents and students: clear onboarding, scheduling that makes sense, and admin tools that keep operations simple.',
          industry: 'Education',
          client: 'Quran Tutors',
          tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
        },
        {
          title: 'SKMD - Dubai Sports World 2024',
          desc: 'Event platform built for thousands of attendees.',
          overview:
            'A high-traffic event experience built for speed and clarity: landing pages, registration flows, and content that stays readable under real campaign load.',
          industry: 'Events',
          client: 'SKMD',
          tags: ['JavaScript', 'React.js'],
        },
        {
          title: 'Datajolt',
          desc: 'Data platform built and shipped for a San Francisco-based startup.',
          overview:
            'A product-grade data platform with a practical UI: clean information architecture, predictable workflows, and a codebase built to evolve without rewrites.',
          industry: 'B2B SaaS',
          client: 'Datajolt',
          tags: ['React.js', 'TypeScript'],
        },
        {
          title: 'Electric Kiwi',
          desc: 'A mobile, broadband, and power company in New Zealand.',
          overview:
            'A customer-facing web experience shipped with a focus on stability and performance, designed to keep everyday flows fast and frustration-free.',
          industry: 'Energy',
          client: 'Electric Kiwi',
          tags: ['Stencil.js', 'TypeScript'],
        },
        {
          title: 'Surra 💰',
          desc: 'A gold-buying app we talked a client out of building — and why that was the real work.',
          overview:
            "They came with a plan to build a gold-trading platform. We reviewed the business — the licensing, the operational costs, the competitive landscape — and told them the foundation wasn't ready. They listened. Nothing was built. That was the deliverable.",
          industry: 'Advisory',
          client: 'Surra',
          tags: ['Strategy', 'Due Diligence', 'Advisory'],
        },
      ] as {
        title: string
        desc: string
        overview: string
        industry: string
        client: string
        tags: string[]
      }[],
    },
    services: {
      label: 'What We Build',
      heading: 'Three things. We do them well.',
      sub: "If you need something else, we'll tell you.",
      items: [
        { title: 'Websites', body: 'Fast, clean, built to convert. No templates, no bloat.' },
        { title: 'Mobile Apps', body: 'iOS and Android. Built once, works everywhere.' },
        {
          title: 'E-commerce',
          body: "Sell online without paying for a platform you'll never fully use.",
        },
      ] as { title: string; body: string }[],
    },
    manifesto: {
      translationGuide: 'Translation guide',
      theySay: 'They say',
      weMean: 'We mean',
      comparisons: [
        { bad: '"World-class" results', good: 'Results that work' },
        { bad: '"Seamless user experiences"', good: 'Software people actually use' },
        { bad: '"Cutting-edge solutions"', good: 'The right tool for the job' },
        { bad: '"End-to-end transformation"', good: 'Delivery on what we agreed' },
        { bad: '"Strategic partnership"', good: 'A team that talks to you' },
      ] as { bad: string; good: string }[],
      dictionary: {
        headlineLatin: 'jayed.',
        headlineArabicWord: 'چيد',
        pronunciation: '[jay · yed]',
        partOfSpeech: 'adjective.',
        defBefore:
          'Software that ships on time, works perfectly, and costs exactly what was agreed. Not ',
        defStrike: '"world-class."',
        defAfter: ' Not "enterprise-grade." Not over-engineered. Just right.',
        seeAlsoPrefix: 'see also:',
        seeAlsoTerms: ['ships on time', 'honest scope', 'no upsell', 'built in Egypt'] as string[],
        antonymLabel: 'antonym:',
        antonymTerms: ['mumtaz', 'world-class', 'premium'] as string[],
      },
    },
    testimonials: {
      label: 'Clients Say',
      heading: "They hired us. We built it. Here's what they said.",
      items: [
        {
          quote:
            "They're smart, professional, and understand customer requirements perfectly. Their experience across UI design, development, and UX was really valuable to us.",
          name: 'Max Broussard',
          role: 'Co-Founder @ Datajolt',
          flag: '🇺🇸',
          initial: 'M',
          project: 'Datajolt Platform',
        },
        {
          quote:
            'I was delighted to work with Jayed. The quality and professionalism exceeded our expectations. I am sure we will work together again.',
          name: 'Basel',
          role: 'Business Developer @ SKMD',
          flag: '🇦🇪',
          initial: 'B',
          project: 'Dubai Sports World 2024',
        },
        {
          quote:
            'Jayed has been fantastic to work with. You can tell they love what they do and it shows in the code they produce. We look forward to working with them again.',
          name: 'Matt',
          role: 'Engineering Manager @ Electric Kiwi',
          flag: '🇳🇿',
          initial: 'M',
          project: 'Electric Kiwi Platform',
        },
        {
          quote:
            'Thanks for enlightening me and guiding me through the business process even before the technical execution.',
          name: "Ahmed Ma'mon",
          role: 'Police Officer',
          flag: '🇪🇬',
          initial: 'A',
          project: 'Surra — Strategic Advisory',
        },
      ] as {
        quote: string
        name: string
        role: string
        flag: string
        initial: string
        project: string
      }[],
    },
    faq: {
      label: 'Questions',
      heading: 'Straight answers.',
      items: [
        {
          q: "What do you mean by 'Building what matters, shipping what works'?",
          a: "It means built for purpose - not over-engineered, not under-delivered. We build exactly what your project needs. No six features when you need two. No agency markup on complexity you don't need. It ships, it works, and it grows with you.",
        },
        {
          q: 'How much does a website cost?',
          a: "It depends on what you need - which is why we ask before we quote. A clean 5-page business website is very different from an e-commerce platform. We give you a straight number within 24 hours of your submission, with no surprises after.",
        },
        {
          q: 'How long does development take?',
          a: 'Websites: 4–8 weeks. Mobile apps: 10–16 weeks. E-commerce: 6–12 weeks. These are real timelines - not the optimistic ones used to win a pitch.',
        },
        {
          q: 'Do you work with clients in Saudi Arabia and the UAE?',
          a: 'Yes. Our main markets are the UAE, Saudi Arabia, Kuwait, Qatar, and Egypt. We speak Arabic, we understand Gulf business culture, and we have delivered projects across all five markets.',
        },
        {
          q: 'What happens after I submit the form?',
          a: "We read every submission personally. Within 24 hours you receive a straight quotation - a real number and a timeline, not a pitch deck. If your project isn't a good fit for us, we'll tell you that too.",
        },
      ] as { q: string; a: string }[],
    },
    quoteSection: {
      label: 'Get a Quote',
      heading: 'Tell us what you need.',
      sub: 'We will tell you what it costs and how long it takes within 24 hours. No pitch. No upsell. If it is overkill for your business, we will say so.',
      trustSignals: [
        'Free, no-obligation quotation',
        'Response within 24 hours',
        'Serving businesses in UAE, Saudi Arabia, Kuwait, Qatar and Egypt',
        "If you don't need it, we'll tell you",
      ] as string[],
      formFooter:
        'Good enough to get the job done. Honest enough to tell you when it is not.',
    },
    footer: {
      studioLabel: 'Studio',
      marketsLabel: 'Markets',
      tagline1: 'Building what matters,',
      tagline2: 'shipping what works.',
      copyright: '© 2026 Jayed Studio. All rights reserved.',
      taglineBottom: 'Building what matters, shipping what works.',
      preferEmail: 'Prefer email?',
      navLinks: [
        { label: 'Home', to: '/' },
        { label: 'Projects', to: '/projects' },
        { label: 'About', to: '/about' },
        { label: 'Blogs', to: '/blogs' },
        { label: 'Get a Quote', to: '/quote' },
      ] as { label: string; to: string }[],
      cities: [
        { label: 'Web development in Riyadh', to: '/cities/riyadh' },
        { label: 'Web development in Dubai', to: '/cities/dubai' },
        { label: 'Web development in Kuwait', to: '/cities/kuwait' },
        { label: 'Web development in Qatar', to: '/cities/qatar' },
        { label: 'Web development in Cairo', to: '/cities/cairo' },
      ] as { label: string; to: string }[],
    },
    workPage: {
      label: 'Our Work',
      heading: 'Built and shipped.',
      sub: 'Real projects. Clear outcomes. No inflated case-study language.',
      startProject: 'Start your project →',
      freeQuote: 'Free quotation. Response within 24 hours.',
    },
    workDetail: {
      backToAll: '← Back to all projects',
    },
    workCaseStudy: {
      challenge: '01. The Challenge',
      solution: '02. The Solution',
      impact: '03. The Impact',
      stackTitle: 'Engineered Core',
      advisoryBrief: '01. The Brief',
      advisoryFindings: '02. What We Found',
      advisorySaid: '03. What We Said',
      advisoryOutcome: '04. The Outcome',
      ctaAdvisoryLine1: 'Honest work starts with an',
      ctaAdvisoryAccent: 'honest conversation.',
      ctaAdvisorySub:
        "If we think you shouldn't build it, we'll tell you. If we think you should — we'll make it great.",
      ctaStandardLine1: 'Ready to engineer your',
      ctaStandardAccent: 'unfair advantage?',
      ctaStandardSub: "Let's build something that doesn't just work, but wins.",
    },
    aboutPage: {
      label: 'About',
      cta: 'Get a Straight Quotation →',
      heroPrefix: 'We are Jayed Studio. ',
      heroSuffix: '.',
      tagline1: 'Good in Arabic. Not Momtaz. Not World-Class. Not Premium.',
      tagline2: 'Good - because good ships.',
      body1:
        'We are an Egyptian software studio that builds websites, mobile apps, and e-commerce platforms for SMEs across Egypt and the Gulf. Our clients are in Cairo, Riyadh, Dubai, Kuwait City, and Doha.',
      body2:
        'We speak the language - literally and professionally. Arabic is our first language. Gulf business culture is our context. We have built for clients from San Francisco to Dubai, and we know what a growing SME in the Gulf actually needs from a software partner.',
      body3:
        'We built Jayed because we were tired of watching clients pay for six features when they needed two. Tired of discovery calls that were really pitches. Tired of world-class promises and over-budget deliveries. So we built the alternative.',
      quote1: 'Good enough to get the job done.',
      quote2: "Honest enough to tell you when it isn't.",
    },
    blogPage: {
      label: 'Journal',
      heading: 'Thoughts & writing',
      sub: 'On software, the Gulf market, pricing, and building things that actually last.',
    },
    quotePage: {
      label: 'Get a Quote',
      heading1: 'Straight quotation.',
      heading2: 'Real timeline.',
      sub: 'Tell us what you need. We reply within 24 hours with a clear scope, price range, and delivery timeline — no discovery call required.',
      trustItems: [
        { icon: '⚡', label: 'Response within 24 hours', sub: 'A real person reads every submission.' },
        { icon: '💬', label: 'No discovery call', sub: 'We ask targeted questions by email if we need more.' },
        { icon: '🎯', label: 'No vague pricing', sub: 'You get an actual number and an actual timeline.' },
        { icon: '🤝', label: 'Honest fit check', sub: "If we're not the right team for this, we'll tell you." },
      ] as { icon: string; label: string; sub: string }[],
      preferEmail: 'Prefer email?',
    },
    process: {
      label: 'How We Work',
      heading: 'No surprises. No upsell.',
      steps: [
        {
          title: 'We listen.',
          body: 'We ask the right questions - not to impress you, but to understand exactly what you need and nothing more.',
        },
        {
          title: 'We scope it honestly.',
          body: "We'll tell you what's worth building and what isn't. If you don't need it, we won't sell it to you.",
        },
        {
          title: 'We build it.',
          body: 'No surprises. We deliver what we agreed, the way we agreed it, when we agreed it.',
        },
        {
          title: 'We ship.',
          body: "On time. On budget. And we're still here after launch if something needs fixing.",
        },
      ] as { title: string; body: string }[],
      footer:
        "We use React, Next.js, React Native, Flutter, and whatever your project actually needs - not whatever's trending.",
    },
    blogPost: {
      backToJournal: '← Journal',
      ctaEyebrow: 'Ready to build?',
      ctaHeading: 'Get a straight quotation.',
      ctaSub: 'Real number. Real timeline. Within 24 hours.',
      ctaButton: 'Start your project →',
      moreFromJournal: 'More from the journal',
    },
    cityPage: {
      heroHeadline: 'We build software that does the job.',
      heroSub:
        'Websites, mobile apps, and e-commerce for SMEs in {city} and across the Gulf.',
      heroTagline: 'Building what matters, shipping what works.',
      heroStrong: 'On time. On budget. No overkill.',
      cta: 'Get a Straight Quotation →',
      testimonialsHeading: 'Clients who trusted us.',
      seeWorkIn: 'See our work in {city} →',
    },
    whyJayed: {
      heroTitle: "You don't need a 1,600-person agency.",
      heroSubtitle: 'You need software that does the job.',
      introP1:
        'The top 20 software agencies in Dubai are impressive. 1,600 people. Global offices. Minimum projects starting at $50,000. They are built for enterprises - not for growing SMEs who need a website that converts, an app that works, and a team that actually talks to them.',
      introP2:
        'Jayed is different. Lean senior team. Building what matters, shipping what works. Straight quotation in 24 hours - no discovery calls, no pitch decks, no upsell.',
      tableHeading: 'The real difference.',
      colDimension: 'Dimension',
      colThem: 'Big Agency',
      colUs: 'Jayed Studio',
      rows: [
        { dimension: 'Team size', them: '200–1,600 people', us: 'Lean senior team' },
        { dimension: 'Minimum project size', them: '$25,000+', us: 'No minimum - scope-based' },
        { dimension: 'Time to first quote', them: '2–3 weeks (discovery process)', us: '24 hours' },
        { dimension: 'Discovery call', them: 'Required (really a pitch)', us: 'None - just fill the form' },
        { dimension: 'Project ownership', them: 'Account manager layer', us: 'You talk directly to the builder' },
        { dimension: 'Best for', them: 'Enterprise platforms', us: 'SMEs who need it done right' },
        { dimension: 'Arabic + Gulf context', them: 'Global template', us: 'Arabic-first, Gulf-native' },
        { dimension: 'Pricing honesty', them: '"Let\'s discuss budget"', us: 'Straight number in 24 hours' },
      ] as { dimension: string; them: string; us: string }[],
      honestTitle: "We'll tell you when you need them - not us.",
      honestP1:
        'Big agencies are the right choice when you need a 200-page enterprise platform, ISO 27001 compliance across every layer, or a project that genuinely cannot fail at any cost.',
      honestP2: "If that's your project - go with them.",
      honestP3:
        "If your project is a website, mobile app, or e-commerce store - you don't need all of that. You need Jayed.",
      bottomCta:
        'Tell us what you need. Straight quotation within 24 hours. No pitch. No upsell.',
      ctaButton: 'Get a Straight Quotation →',
    },
    quoteForm: {
      steps: [
        { label: 'Project', question: 'What are we building?' },
        { label: 'Status', question: 'Where are you right now?' },
        { label: 'Budget', question: "What's your budget range?" },
        { label: 'Timeline', question: 'When do you need it?' },
        { label: 'Contact', question: "Last step — who are we talking to?" },
      ] as { label: string; question: string }[],
      projectTypes: [
        { label: 'Website', sub: 'Marketing site, landing page, or web app' },
        { label: 'Mobile App', sub: 'iOS, Android, or cross-platform' },
        { label: 'E-commerce', sub: 'Online store with products and checkout' },
        { label: 'Dashboard / SaaS', sub: 'Internal tools, analytics, or B2B product' },
        { label: 'Something else', sub: 'Tell us about it in the notes' },
      ] as { label: string; sub: string }[],
      designStatus: [
        { label: 'I have a complete design', sub: 'Figma files or similar, ready to build from' },
        { label: 'I have a rough idea / wireframes', sub: "We'll refine it together" },
        { label: 'I need design + development', sub: 'Start from scratch — we handle both' },
        { label: 'Redesign an existing product', sub: 'Something already live that needs a rework' },
      ] as { label: string; sub: string }[],
      budgets: [
        { label: 'Under $5,000', sub: 'Landing pages, simple sites' },
        { label: '$5,000 – $15,000', sub: 'Full websites, small web apps' },
        { label: '$15,000 – $40,000', sub: 'Complex web apps, mobile apps, SaaS' },
        { label: '$40,000+', sub: 'Large-scale products or long-term partnerships' },
        { label: "I don't know yet", sub: "We'll help you scope it" },
      ] as { label: string; sub: string }[],
      timelines: [
        { label: 'As soon as possible', sub: "We'll prioritize if capacity allows" },
        { label: 'Within 1 month', sub: 'Tight but possible for scoped projects' },
        { label: 'Within 3 months', sub: 'Standard timeline for most projects' },
        { label: 'Still planning', sub: 'No deadline yet — just exploring' },
      ] as { label: string; sub: string }[],
      fields: {
        name: 'Your name',
        company: 'Company',
        email: 'Work email',
        phone: 'Phone / WhatsApp',
        notes: 'Anything else?',
      },
      placeholders: {
        name: 'Ahmed Al-Rashid',
        company: 'Acme Corp (optional)',
        email: 'you@company.com',
        phone: '+966 5x xxx xxxx (optional)',
        notes: 'Describe your project, reference sites you like, or share any constraints…',
      },
      buttons: {
        continue: 'Continue →',
        back: '← Back',
        submit: 'Send it →',
        submitting: 'Sending…',
      },
      footerNote: "We read every submission personally. If it's not a fit, we'll say so.",
      successTitle: "We've got it, {firstName}.",
      successSub:
        'Expect a real quote — an actual number and timeline — within 24 hours. No calls, no vague estimates.',
      submitError: 'Something went wrong. Please email us directly at info@jayed.studio',
    },
    pageMeta: {
      home: {
        title: 'Web & Mobile App Development for SMEs | Jayed Studio',
        description:
          'Websites, mobile apps, and e-commerce for SMEs in Egypt and the Gulf. On time. On budget. No overkill.',
      },
      work: {
        title: 'Work | Jayed Studio',
        description:
          'Selected software projects delivered for startups and SMEs in Egypt and the Gulf.',
      },
      about: {
        title: 'About - Jayed Studio | Good Enough.',
        description:
          'An Egyptian software studio. We build websites, mobile apps, and e-commerce for SMEs across Egypt and the Gulf. Honest pricing. Real timelines.',
      },
      blog: {
        title: 'Blog | Jayed Studio',
        description: 'Thoughts on software, the Gulf market, and building things that last.',
      },
      quote: {
        title: 'Get a Straight Quote | Jayed Studio',
        description:
          'Tell us what you need and get a real price and timeline in 24 hours. No discovery calls, no upsell, no overkill.',
      },
      whyJayed: {
        title: 'Jayed vs Big Agencies | Jayed Studio',
        description:
          "You don't need a 1,600-person agency. You need software that does the job. Here's why Jayed is different.",
      },
      workUnknown: {
        title: 'Project | Jayed Studio',
        description: 'Case study and project details from Jayed Studio.',
      },
      blogUnknown: {
        title: 'Post | Jayed Studio',
        description: 'Article from the Jayed Studio journal.',
      },
      cities: {
        dubai: {
          title: 'Custom Web & App Development in Dubai | Jayed',
          description:
            'Custom web and mobile app development for SMEs in Dubai. On time. On budget. No overkill. Free quotation in 24 hours.',
        },
        riyadh: {
          title: 'Web & App Development for SMEs in Riyadh | Jayed',
          description:
            'Custom web and mobile app development for SMEs in Riyadh. On time. On budget. Free quotation in 24 hours.',
        },
        kuwait: {
          title: 'Website & App Development in Kuwait | Jayed',
          description:
            'Websites, mobile apps, and e-commerce for SMEs in Kuwait. On time. On budget. No overkill. Free quotation in 24 hours.',
        },
        qatar: {
          title: 'Web & App Development in Qatar | Jayed Studio',
          description:
            'Custom web and mobile app development for SMEs in Qatar. On time. On budget. Free quotation in 24 hours.',
        },
        cairo: {
          title: 'Web & App Development in Egypt | Jayed Studio',
          description:
            'Websites, mobile apps, and e-commerce for SMEs in Egypt. On time. On budget. No overkill. Free quotation in 24 hours.',
        },
      },
    },
  },
} as const

export type T = typeof translations.en

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: T
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

function applyLang(lang: Lang) {
  const html = document.documentElement
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl')
    html.setAttribute('lang', 'ar')
  } else {
    html.setAttribute('dir', 'ltr')
    html.setAttribute('lang', 'en')
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [t, setT] = useState<T>(translations.en)

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    const resolved: Lang = stored === 'ar' ? 'ar' : 'en'
    setLangState(resolved)
    applyLang(resolved)
    if (resolved === 'ar') {
      void import('./translations.ar').then((m) => {
        // Keep `T` driven by English for types; Arabic is loaded at runtime.
        setT(m.translationsAr as unknown as T)
      })
    } else {
      setT(translations.en)
    }
  }, [])

  function setLang(newLang: Lang) {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
    applyLang(newLang)
    if (newLang === 'ar') {
      void import('./translations.ar').then((m) => setT(m.translationsAr as unknown as T))
    } else {
      setT(translations.en)
    }
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
