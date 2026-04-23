import { createFileRoute } from '@tanstack/react-router'
import { BlogPage } from './blog'

export const Route = createFileRoute('/blogs')({
  head: () => ({
    meta: [
      { title: 'Blogs | Jayed Studio' },
      { name: 'description', content: 'Thoughts on software, the Gulf market, and building things that last.' },
      { rel: 'canonical', href: 'https://jayed.studio/blogs' },
      { property: 'og:url', content: 'https://jayed.studio/blogs' },
      { property: 'og:title', content: 'Blogs | Jayed Studio' },
      { property: 'og:description', content: 'Thoughts on software, the Gulf market, and building things that last.' },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
    ],
  }),
  component: BlogPage,
})

