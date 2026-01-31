

import React from 'react'
import { posts } from '@velite' // 1. Import real data
import BlogGrid from '@/components/blogs/BlogGrid'
import { HeroSection } from '@/sections/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Learning Logs by Nischal Puri',
    default: 'Learning Logs | Nischal Puri',
  },
  description: 'Technical ledger of architectural breakthroughs and build notes.',
  openGraph: {
    title: 'The Learning Logs | Nischal Puri',
    description: 'Documenting the raw process of building and scaling modern systems.',
    url: 'https://nischaldev.vercel.app/blogs',
    images: [
      {
        url: 'https://nischaldev.vercel.app/og-main-blog.png', // 👈 Put a generic "Blog Hero" image in your public folder
        width: 1200,
        height: 630,
      },
    ],
  },
}


export default function BlogsPage() {
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <main className='br relative min-h-screen selection:bg-emerald-500/30'>
      <HeroSection />

      {/* Pass your JSON data to the grid */}
      <BlogGrid posts={sortedPosts} />
    </main>
  )
}
