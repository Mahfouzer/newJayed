import { createFileRoute } from '@tanstack/react-router'
import { CityPage } from '../../components/pages/CityPage'

export const Route = createFileRoute('/cities/cairo')({
  head: () => ({
    meta: [
      { title: 'Web & App Development in Egypt | Jayed Studio' },
      {
        name: 'description',
        content:
          'Websites, mobile apps, and e-commerce for SMEs in Egypt. On time. On budget. No overkill. Free quotation in 24 hours.',
      },
      { name: 'description:ar', content: 'شركة Jayed Studio تبني مواقع وتطبيقات للشركات في مصر والخليج. عرض سعر مجاني خلال 24 ساعة.' },
      { property: 'og:url', content: 'https://jayed.studio/cities/cairo' },
      { property: 'og:title', content: 'Web & App Development in Egypt | Jayed Studio' },
      { property: 'og:description', content: 'Websites, mobile apps, and e-commerce for SMEs in Egypt. On time. On budget. No overkill. Free quotation in 24 hours.' },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
      { name: 'twitter:title', content: 'Web & App Development in Egypt | Jayed Studio' },
      { name: 'twitter:description', content: 'Websites, mobile apps, and e-commerce for SMEs in Egypt. On time. On budget. No overkill.' },
      { rel: 'canonical', href: 'https://jayed.studio/cities/cairo' },
    ],
  }),
  component: CairoPage,
})

function CairoPage() {
  return <CityPage city="Cairo" country="Egypt" slug="cairo" flag="🇪🇬" />
}
