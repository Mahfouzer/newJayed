import { createFileRoute } from '@tanstack/react-router'
import { CityPage } from '../../components/pages/CityPage'

export const Route = createFileRoute('/cities/kuwait')({
  head: () => ({
    meta: [
      { title: 'Website & App Development in Kuwait | Jayed' },
      { name: 'description', content: 'Websites, mobile apps, and e-commerce for SMEs in Kuwait. On time. On budget. No overkill. Free quotation in 24 hours.' },
      { name: 'description:ar', content: 'Jayed Studio - تصميم مواقع وتطبيقات للشركات في الكويت. عرض سعر مجاني.' },
      { property: 'og:url', content: 'https://jayed.studio/cities/kuwait' },
      { property: 'og:title', content: 'Website & App Development in Kuwait | Jayed' },
      { property: 'og:description', content: 'Websites, mobile apps, and e-commerce for SMEs in Kuwait. On time. On budget. No overkill. Free quotation in 24 hours.' },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
      { name: 'twitter:title', content: 'Website & App Development in Kuwait | Jayed' },
      { name: 'twitter:description', content: 'Websites, mobile apps, and e-commerce for SMEs in Kuwait. On time. On budget. No overkill.' },
      { rel: 'canonical', href: 'https://jayed.studio/cities/kuwait' },
    ],
  }),
  component: KuwaitPage,
})

function KuwaitPage() {
  return <CityPage city="Kuwait" country="Kuwait" slug="kuwait" flag="🇰🇼" />
}
