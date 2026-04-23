import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { WhatsAppButton } from '../components/layout/WhatsAppButton'
import { OrganizationSchema } from '../components/seo/OrganizationSchema'
import { DocumentMetaSync } from '../components/seo/DocumentMetaSync'
import { I18nProvider, useI18n } from '../lib/i18n'

import appCss from '../styles.css?url'

const ANTI_FLASH_SCRIPT = `(function(){
  var t=localStorage.getItem('theme');
  var prefersDark=window.matchMedia('(prefers-color-scheme:dark)').matches;
  var resolved=t==='light'?'light':t==='dark'?'dark':prefersDark?'dark':'light';
  document.documentElement.classList.add(resolved);
  var l=localStorage.getItem('lang');
  if(l==='ar'){document.documentElement.setAttribute('dir','rtl');document.documentElement.setAttribute('lang','ar');}
  else{document.documentElement.setAttribute('dir','ltr');document.documentElement.setAttribute('lang','en');}
})();`

const GTM_ID = import.meta.env.VITE_GTM_ID ?? ''
const GA_ID = import.meta.env.VITE_GA_ID ?? ''

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Web & Mobile App Dev for SMEs | Jayed Studio' },
      {
        name: 'description',
        content:
          'Websites, mobile apps, and e-commerce for SMEs in Egypt and the Gulf. On time. On budget. No overkill. Free quotation in 24 hours.',
      },
      {
        name: 'keywords',
        content:
          'user experience, developer experience, custom web development, MENA software development, Saudi Arabia web development, UAE mobile applications, Egypt software solutions, web design agency, React development, TailwindCSS, TypeScript, startup software, SME tech partner',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#E86329' },
      { name: 'author', content: 'Jayed Studio' },

      // Open Graph
      { property: 'og:site_name', content: 'Jayed Studio' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://jayed.studio/' },
      { property: 'og:title', content: 'Web & Mobile App Dev for SMEs | Jayed Studio' },
      {
        property: 'og:description',
        content:
          'Websites, mobile apps, and e-commerce for SMEs in Egypt and the Gulf. On time. On budget. No overkill.',
      },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:locale:alternate', content: 'ar_SA' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jayedstudio' },
      { name: 'twitter:creator', content: '@mahfouzer' },
      { name: 'twitter:title', content: 'Web & Mobile App Dev for SMEs | Jayed Studio' },
      {
        name: 'twitter:description',
        content:
          'Websites, mobile apps, and e-commerce for SMEs in Egypt and the Gulf. On time. On budget. No overkill.',
      },
      { name: 'twitter:image', content: 'https://jayed.studio/icon.png' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous' as const,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;1,14..32,400&family=JetBrains+Mono:wght@400;500&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap',
      },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
    scripts: [
      ...((GTM_ID || GA_ID)
        ? [
            {
              dangerouslySetInnerHTML: { __html: `(function(){var gtmId=${GTM_ID ? `'${GTM_ID}'` : '""'};var gaId=${GA_ID ? `'${GA_ID}'` : '""'};var load=function(){try{if(gtmId){window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var gtm=document.createElement('script');gtm.async=true;gtm.src='https://www.googletagmanager.com/gtm.js?id='+gtmId;document.head.appendChild(gtm);}if(gaId){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',gaId);var ga=document.createElement('script');ga.async=true;ga.src='https://www.googletagmanager.com/gtag/js?id='+gaId;document.head.appendChild(ga);}}catch(e){}};if('requestIdleCallback'in window){requestIdleCallback(load,{timeout:2000});}else{setTimeout(load,2000);}})();` },
            },
          ]
        : []),
    ],
  }),
  notFoundComponent: NotFoundScreen,
  shellComponent: RootDocument,
})

function NotFoundScreen() {
  const { lang } = useI18n()
  const isAr = lang === 'ar'

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[var(--c-bg)] pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--c-gborder-md)] bg-[var(--c-glass-xs)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_480px_at_15%_20%,rgba(245,94,0,0.18),transparent_55%),radial-gradient(900px_520px_at_85%_25%,rgba(232,0,61,0.14),transparent_55%)]" />

          <div className="relative p-7 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-[var(--c-hi)]">
                <img
                  src="/images/jayed-logo.webp"
                  alt=""
                  aria-hidden
                  className="h-5 w-auto drop-shadow-[0_12px_18px_rgba(245,94,0,0.20)]"
                  decoding="async"
                />
                <span className="font-semibold tracking-tight">Jayed Studio</span>
              </div>
              <span className="rounded-full border border-[#F55E00]/35 bg-[#F55E00]/10 px-3 py-2 text-xs font-mono text-white/85">
                NOT_FOUND
              </span>
            </div>

            <div className="mt-7">
              <div className="font-mono font-extrabold tracking-[-0.06em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#F55E00] via-[#E8003D] to-[#FFB020] text-[clamp(44px,8vw,84px)]">
                404
              </div>
              <h1 className="mt-3 text-[var(--c-hi)] font-bold tracking-tight text-[clamp(20px,2.3vw,28px)]">
                {isAr ? 'هذه الصفحة غير موجودة.' : 'This page doesn’t exist.'}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/"
                  className="no-underline inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white
                    bg-gradient-to-br from-[#F55E00] to-[#E8003D] border border-[#F55E00]/35
                    shadow-[0_14px_44px_rgba(245,94,0,0.20)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {isAr ? 'العودة للرئيسية' : 'Go home'}
                </Link>
                <Link
                  to="/projects"
                  className="no-underline inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white/90
                    bg-[var(--c-raised)]/60 border border-white/10 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {isAr ? 'عرض المشاريع' : 'View projects'}
                </Link>
                <Link
                  to="/blogs"
                  className="no-underline inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white/90
                    bg-[var(--c-raised)]/60 border border-white/10 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {isAr ? 'قراءة المدونة' : 'Read blogs'}
                </Link>
                <Link
                  to="/quote"
                  className="no-underline inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white/90
                    bg-[var(--c-raised)]/60 border border-white/10 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {isAr ? 'احصل على عرض سعر' : 'Get a quote'}
                </Link>
              </div>

            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="px-7 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-white/35">
            <span>
              <span className="text-white/70 font-semibold">چيد</span> —{' '}
              {isAr ? 'نبني ما يهم، ونُسلّم ما يعمل.' : 'building what matters, shipping what works.'}
            </span>
            <span>© 2026 Jayed Studio</span>
          </div>
        </div>
      </div>
    </main>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: ANTI_FLASH_SCRIPT }} />
      </head>
      <body className="antialiased">
        {/* GTM noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <I18nProvider>
          <DocumentMetaSync />
          <OrganizationSchema />
          <Nav />
          <div>{children}</div>
          <div className="snap-start"><Footer /></div>
          <WhatsAppButton />
        </I18nProvider>
        <Scripts />
      </body>
    </html>
  )
}
