import { createFileRoute } from '@tanstack/react-router'
import { WorkPage } from './work'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      { title: 'Projects | Jayed Studio' },
      { name: 'description', content: 'Selected software projects delivered for startups and SMEs in Egypt and the Gulf.' },
      { property: 'og:url', content: 'https://jayed.studio/projects' },
      { property: 'og:title', content: 'Projects | Jayed Studio' },
      { property: 'og:description', content: 'Selected software projects delivered for startups and SMEs in Egypt and the Gulf.' },
      { property: 'og:image', content: 'https://jayed.studio/icon.png' },
    ],
    links: [{ rel: 'canonical', href: 'https://jayed.studio/projects' }],
  }),
  component: WorkPage,
})

