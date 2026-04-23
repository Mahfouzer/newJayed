import { createFileRoute } from '@tanstack/react-router'
import { CityPage } from '../../components/pages/CityPage'

export const Route = createFileRoute('/cities/qatar')({
  head: () => ({
    meta: [
      { title: 'Web & App Development in Qatar | Jayed Studio' },
      { name: 'description', content: 'Custom web and mobile app development for SMEs in Qatar. On time. On budget. Free quotation in 24 hours.' },
      { name: 'description:ar', content: 'Jayed Studio - تطوير تطبيق وموقع للشركات في قطر. بدون تعقيد. عرض سعر خلال 24 ساعة.' },
      { property: 'og:url', content: 'https://jayed.studio/cities/qatar' },
      { property: 'og:title', content: 'Web & App Development in Qatar | Jayed Studio' },
      { property: 'og:description', content: 'Custom web and mobile app development for SMEs in Qatar. On time. On budget. Free quotation in 24 hours.' },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
      { name: 'twitter:title', content: 'Web & App Development in Qatar | Jayed Studio' },
      { name: 'twitter:description', content: 'Custom web and mobile app development for SMEs in Qatar. On time. On budget. No overkill.' },
      { rel: 'canonical', href: 'https://jayed.studio/cities/qatar' },
    ],
  }),
  component: QatarPage,
})

function QatarPage() {
  return <CityPage city="Doha" country="Qatar" slug="qatar" flag="🇶🇦" />
}
