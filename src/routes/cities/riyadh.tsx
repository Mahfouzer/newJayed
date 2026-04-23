import { createFileRoute } from '@tanstack/react-router'
import { CityPage } from '../../components/pages/CityPage'

export const Route = createFileRoute('/cities/riyadh')({
  head: () => ({
    meta: [
      { title: 'Web & App Development for SMEs in Riyadh | Jayed' },
      { name: 'description', content: 'Custom web and mobile app development for SMEs in Riyadh. On time. On budget. Free quotation in 24 hours.' },
      { name: 'description:ar', content: 'Jayed Studio - تطوير مواقع وتطبيقات للشركات الصغيرة في الرياض. بدون مبالغة. بدون تكاليف زائدة.' },
      { property: 'og:url', content: 'https://jayed.studio/cities/riyadh' },
      { property: 'og:title', content: 'Web & App Development for SMEs in Riyadh | Jayed' },
      { property: 'og:description', content: 'Custom web and mobile app development for SMEs in Riyadh. On time. On budget. Free quotation in 24 hours.' },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
      { name: 'twitter:title', content: 'Web & App Development for SMEs in Riyadh | Jayed' },
      { name: 'twitter:description', content: 'Custom web and mobile app development for SMEs in Riyadh. On time. On budget. No overkill.' },
      { rel: 'canonical', href: 'https://jayed.studio/cities/riyadh' },
    ],
  }),
  component: RiyadhPage,
})

function RiyadhPage() {
  return <CityPage city="Riyadh" country="Saudi Arabia" slug="riyadh" flag="🇸🇦" />
}
