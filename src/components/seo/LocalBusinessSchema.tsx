interface LocalBusinessSchemaProps {
  city: string
  country: string
  slug: string
}

export function LocalBusinessSchema({ city, country, slug }: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Jayed Studio - ${city}`,
    url: `https://jayed.studio/cities/${slug}`,
    email: 'info@jayed.studio',
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'Country',
        name: country,
      },
    },
    priceRange: '$$',
    description: `Custom web and mobile app development for SMEs in ${city}. On time. On budget. Good Enough.`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
