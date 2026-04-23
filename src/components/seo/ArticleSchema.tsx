interface ArticleSchemaProps {
  slug: string
  title: string
  description: string
  datePublished: string
}

export function ArticleSchema({ slug, title, description, datePublished }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished,
    author: {
      '@type': 'Organization',
      name: 'Jayed Studio',
      url: 'https://jayed.studio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jayed Studio',
      url: 'https://jayed.studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jayed.studio/logo.png',
      },
    },
    image: `https://jayed.studio/images/blog/${slug}.svg`,
    url: `https://jayed.studio/blogs/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://jayed.studio/blogs/${slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
