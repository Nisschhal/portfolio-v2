'use client'

import React from 'react'
import HeroSection from './_sections/HeroSection'
import BlogGrid from '@/components/blogs/BlogGrid'
import { ALL_BLOGS } from '@/data/blogs'
import NewsletterSection from '@/components/blogs/Newsletter'
import Footer from '../../../components/blogs/Footer'
import { posts } from '@velite' // 1. Import real data

// Unified Dummy Data matching your JSON format exactly

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
