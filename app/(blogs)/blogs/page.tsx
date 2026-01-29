'use client'

import React from 'react'
import HeroSection from './_sections/HeroSection'
import BlogGrid from '@/components/blogs/BlogGrid'
import { ALL_BLOGS } from '@/data/blogs'

// Unified Dummy Data matching your JSON format exactly

export default function BlogsPage() {
  return (
    <main className='br relative min-h-screen bg-[#030712] selection:bg-emerald-500/30'>
      <HeroSection />

      {/* Pass your JSON data to the grid */}
      <BlogGrid posts={ALL_BLOGS} />

      {/* Newsletter or other sections... */}
    </main>
  )
}
