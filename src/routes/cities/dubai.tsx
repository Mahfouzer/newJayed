import { createFileRoute } from '@tanstack/react-router'
import { CityPage } from '../../components/pages/CityPage'

export const Route = createFileRoute('/cities/dubai')({
  head: () => ({
    meta: [
      { title: 'Custom Web & App Development in Dubai | Jayed' },
      { name: 'description', content: 'Custom web and mobile app development for SMEs in Dubai. On time. On budget. No overkill. Free quotation in 24 hours.' },
      { name: 'description:ar', content: 'Jayed Studio - تطوير مواقع وتطبيقات جوال للشركات الصغيرة في دبي. بدون تكاليف زائدة.' },
      { property: 'og:url', content: 'https://jayed.studio/cities/dubai' },
      { property: 'og:title', content: 'Custom Web & App Development in Dubai | Jayed' },
      { property: 'og:description', content: 'Custom web and mobile app development for SMEs in Dubai. On time. On budget. No overkill. Free quotation in 24 hours.' },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
      { name: 'twitter:title', content: 'Custom Web & App Development in Dubai | Jayed' },
      { name: 'twitter:description', content: 'Custom web and mobile app development for SMEs in Dubai. On time. On budget. No overkill.' },
    ],
    links: [{ rel: 'canonical', href: 'https://jayed.studio/cities/dubai' }],
  }),
  component: DubaiPage,
})

function DubaiPage() {
  return <CityPage city="Dubai" country="UAE" slug="dubai" flag="🇦🇪" />
}
