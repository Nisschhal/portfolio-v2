import PostView from '@/components/blogs/PostView'
import { notFound } from 'next/navigation'
import { posts } from '@velite'

// Incoming params Type
interface Props {
  params: Promise<{ slug: string }>
}

// Generate Static slug for all posts
export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params

  // Find the blog from your velite data
  const blog = posts.find(p => p.slug === slug)

  if (!blog) {
    notFound()
  }

  return <PostView post={blog} />
}
