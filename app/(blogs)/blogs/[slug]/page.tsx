import PostView from '@/components/blogs/PostView'
import { notFound } from 'next/navigation'
import { posts } from '@velite'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

// 🔹 DYNAMIC METADATA FIX: This makes the image show in share cards
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = posts.find((p) => p.slug === slug)

  if (!blog) return {}

  const siteUrl = "https://nischaldev.vercel.app" // 👈 REPLACE WITH YOUR REAL DOMAIN
  const ogImage = `${siteUrl}${blog.image.src}`

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${siteUrl}/blogs/${blog.slug}`,
      siteName: "Nischal Puri Logs",
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params
  const blog = posts.find(p => p.slug === slug)
  if (!blog) notFound()

  return <PostView post={blog} />
}