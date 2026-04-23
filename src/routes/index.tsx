import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Hero } from '../components/sections/Hero'
import { Manifesto } from '../components/sections/Manifesto'
import { Services } from '../components/sections/Services'
import { Process } from '../components/sections/Process'
import { Work } from '../components/sections/Work'
import { Testimonials } from '../components/sections/Testimonials'
import { FAQSection } from '../components/sections/FAQSection'
import { QuoteSection } from '../components/sections/QuoteSection'
import { FAQSchema } from '../components/seo/FAQSchema'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Web & Mobile App Development for SMEs | Jayed Studio' },
      {
        name: 'description',
        content:
          'Websites, mobile apps, and e-commerce for SMEs in Egypt and the Gulf. On time. On budget. No overkill.',
      },
      { property: 'og:url', content: 'https://jayed.studio/' },
      { property: 'og:title', content: 'Web & Mobile App Development for SMEs | Jayed Studio' },
      {
        property: 'og:description',
        content:
          'Websites, mobile apps, and e-commerce for SMEs in Egypt and the Gulf. On time. On budget. No overkill.',
      },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
      { name: 'twitter:title', content: 'Web & Mobile App Development for SMEs | Jayed Studio' },
      { name: 'twitter:description', content: 'Websites, mobile apps, and e-commerce for SMEs in Egypt and the Gulf. On time. On budget. No overkill.' },
      { name: 'twitter:image', content: 'https://jayed.studio/icon.png' },
    ],
    links: [{ rel: 'canonical', href: 'https://jayed.studio/' }],
  }),
  component: HomePage,
})

function HomePage() {
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const html = document.documentElement

    const apply = (matches: boolean) => {
      html.style.scrollSnapType = matches ? 'y mandatory' : ''
      html.style.scrollPaddingTop = matches ? '64px' : ''
    }

    apply(mq.matches)
    mq.addEventListener('change', (e) => apply(e.matches))

    return () => {
      html.style.scrollSnapType = ''
      html.style.scrollPaddingTop = ''
      mq.removeEventListener('change', (e) => apply(e.matches))
    }
  }, [])

  return (
    <main>
      <div className="snap-start"><Hero /></div>
      <div className="snap-start"><Manifesto /></div>
      <div className="snap-start"><Services /></div>
      <div className="snap-start"><Process /></div>
      <div className="snap-start"><Work /></div>
      <div className="snap-start"><Testimonials /></div>
      <div className="snap-start"><FAQSection /></div>
      <div className="snap-start"><QuoteSection /></div>
      <FAQSchema />
    </main>
  )
}
