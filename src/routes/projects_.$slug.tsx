import { createFileRoute, notFound } from '@tanstack/react-router'
import { ProjectDetailPageInner, getWorkCaseMeta } from './work_.$slug'

export { getWorkCaseMeta } from './work_.$slug'

export const Route = createFileRoute('/projects_/$slug')({
  head: ({ params }) => {
    const m = getWorkCaseMeta(params.slug)
    const title = m?.title ?? 'Project | Jayed Studio'
    const desc = m?.description ?? ''
    const url = `https://jayed.studio/projects/${params.slug}`
    return {
      meta: [
        { title },
        { name: 'description', content: desc },
        { property: 'og:url', content: url },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: 'https://jayed.studio/icon.png' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: 'https://jayed.studio/icon.png' },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const { slug } = Route.useParams()
  if (!getWorkCaseMeta(slug)) throw notFound()
  return <ProjectDetailPageInner slug={slug} />
}

