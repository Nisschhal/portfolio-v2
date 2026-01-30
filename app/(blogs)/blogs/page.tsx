'use client'

import React from 'react'
import HeroSection from './_sections/HeroSection'
import BlogGrid from '@/components/blogs/BlogGrid'
import { ALL_BLOGS } from '@/data/blogs'
import NewsletterSection from '@/components/blogs/Newsletter'
import Footer from '../../../components/blogs/Footer'

// Unified Dummy Data matching your JSON format exactly

export default function BlogsPage() {
  return (
    <main className='br relative min-h-screen selection:bg-emerald-500/30'>
      <HeroSection />

      {/* Pass your JSON data to the grid */}
      <BlogGrid posts={ALL_BLOGS} />
    </main>
  )
}
