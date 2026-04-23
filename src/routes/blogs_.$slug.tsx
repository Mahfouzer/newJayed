import { createFileRoute, notFound } from '@tanstack/react-router'
import { getPost, type Post } from '../lib/posts'
import { BlogPostPage } from './blog_.$slug'

export const Route = createFileRoute('/blogs_/$slug')({
  head: ({ params }) => {
    const post = getPost(params.slug)
    const title = post ? `${post.title} | Jayed Studio` : 'Post | Jayed Studio'
    const desc = post?.subtitle ?? ''
    const url = `https://jayed.studio/blogs/${params.slug}`
    return {
      meta: [
        { title },
        { name: 'description', content: desc },
        { property: 'og:url', content: url },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: 'https://jayed.studio/icon.png' },
        { property: 'og:type', content: 'article' },
        ...(post?.date ? [{ property: 'article:published_time', content: post.date }] : []),
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: 'https://jayed.studio/icon.png' },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  loader: ({ params }): Post => {
    const post = getPost(params.slug)
    if (!post) throw notFound()
    return post
  },
  component: BlogPostDetail,
})

function BlogPostDetail() {
  const post = Route.useLoaderData()
  return <BlogPostPage post={post} />
}

