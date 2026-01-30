import type { Metadata } from 'next'
import { ShootingStars } from '@/components/ui/shotting-star'
import { StarsBackground } from '@/components/ui/star-background'
import grainImage from '@/assets/images/grain.jpg'
import { Header } from '@/sections/Header'
import Footer from '../../../components/blogs/Footer'
import NewsletterSection from '@/components/blogs/Newsletter'
import { BlogHeader } from '@/components/blogs/BlogHeader'

export const metadata: Metadata = {
  // 🔹 SEO/AEO: Structured for Search & AI Answer Engines
  title: {
    template: '%s | Learning Logs by Nischal Puri',
    default: 'Learning Logs | Nischal Puri Developer Journal',
  },
  description:
    'A technical ledger of architectural breakthroughs, system migrations, and modern full-stack development logs by Nischal Puri.',

  // 🔹 GEO: Geographic relevance for local/global search
  keywords: [
    'Nischal Puri Blog',
    'Full Stack Engineering Logs',
    'Next.js Technical Journal',
    'AI Engineer Journey',
    'Software Architecture Documentation',
    'Developer Notes Kathmandu', // Added GEO context
    'Remote Developer Build Logs',
  ],

  openGraph: {
    title: 'The Learning Logs | Nischal Puri',
    description:
      'Documenting the raw process of building and scaling modern systems.',
    url: 'https://nischaldev.vercel.app/blogs',
    siteName: 'Nischal Puri Archive',
    locale: 'en_US',
    type: 'website',
  },

  // 🔹 AEO: Specifically for AI bots to identify the content type
  category: 'Technology',
  classification: 'Engineering Journal',
}

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Outer container provides the base background color
    <div className='relative min-h-screen overflow-x-hidden bg-[#030712] font-sans selection:bg-emerald-500/30'>
      {/* LAYER 2: Navigation (Always on top) */}
      <BlogHeader />
      {/* LAYER 1: Background Atmosphere (Stars & Grain) */}
      {/* Moved to z-10 so it sits above the background rings but below text */}
      <div className='pointer-events-none fixed inset-0 z-10'>
        <div
          className='absolute inset-0 opacity-[0.03] dark:opacity-[0.05]'
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* LAYER 3: Main Content Area */}
      {/* We set this to z-20 to ensure text/buttons stay above the stars */}
      <div className='relative z-20 flex min-h-screen flex-col'>
        <main className='flex-1'>{children}</main>

        {/* Global Blog Components */}
        <NewsletterSection />
        <Footer />
      </div>

      {/* 5. AEO: JSON-LD for AI Search Agents */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Nischal Puri Learning Logs',
            description: 'Technical build notes and architectural insights.',
            url: 'https://nischaldev.vercel.app/blogs',
            author: {
              '@type': 'Person',
              name: 'Nischal Puri',
            },
          }),
        }}
      />
    </div>
  )
}
