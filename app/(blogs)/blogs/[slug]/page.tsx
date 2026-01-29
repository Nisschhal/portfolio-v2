// import { blogs } from '#velite'
import PostView from '@/components/blogs/PostView'
import { ALL_BLOGS } from '@/data/blogs'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params

  // Find the blog from your velite data
  const blog = ALL_BLOGS.find(b => b.slug === slug)

  if (!blog) {
    notFound()
  }

  return <PostView post={blog} />
}
