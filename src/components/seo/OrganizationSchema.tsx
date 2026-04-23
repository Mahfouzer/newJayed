export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jayed Studio',
    alternateName: 'چيد',
    url: 'https://jayed.studio',
    logo: 'https://jayed.studio/logo.png',
    description:
      'Custom web and mobile app development for SMEs in Egypt and the Gulf. Building what matters, shipping what works.',
    email: 'info@jayed.studio',
    areaServed: ['EG', 'AE', 'SA', 'KW', 'QA'],
    sameAs: [
      'https://clutch.co/profile/jayed-studio',
      'https://www.linkedin.com/company/jayed-studio',
      'https://www.sortlist.com/agency/jayed-studio',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
