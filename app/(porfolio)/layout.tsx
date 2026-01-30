import type { Metadata } from 'next'
import { ShootingStars } from '@/components/ui/shotting-star'
import { StarsBackground } from '@/components/ui/star-background'
import grainImage from '@/assets/images/grain.jpg'
import { Header } from '@/sections/Header'

export const metadata: Metadata = {
  // 🔹 SEO template for dynamic sub-pages
  title: {
    template: '%s | Nischal Puri',
    default: 'Nischal Puri | Full Stack Developer & AI Engineer',
  },
  description:
    'Portfolio of Nischal Puri, a systems-focused Full Stack Developer and AI Engineer specializing in Next.js, Node.js, and scalable architectural logic.',

  // 🔹 GEO: Establishing regional authority
  keywords: [
    'Nischal Puri',
    'Full Stack Developer Kathmandu',
    'AI Engineer Nepal',
    'Next.js Expert',
    'Software Architect Portfolio',
    'Remote AI Developer',
  ],

  // 🔹 Open Graph & Socials
  openGraph: {
    title: 'Nischal Puri | Systems Builder',
    description: 'Building modern full-stack solutions with AI integration.',
    url: 'https://nischaldev.vercel.app',
    siteName: 'Nischal Puri Portfolio',
    locale: 'en_US',
    type: 'website',
  },

  // 🔹 AEO/Classification
  category: 'Technology',
  classification: 'Software Engineering Portfolio',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-background relative min-h-screen overflow-x-clip font-sans selection:bg-teal-400/30'>
      {/* 1. Persistence Navigation */}
      <Header />

      {/* 2. Main Content Layer */}
      <div className='relative z-20'>{children}</div>

      {/* 3. Background Visual Layer (z-10) */}
      <div className='pointer-events-none fixed inset-0 z-10'>
        <div
          className='absolute inset-0 opacity-[0.03] dark:opacity-[0.05]'
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* 4. AEO: Structured Data (JSON-LD) for AI Agents */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Nischal Puri',
            url: 'https://nischaldev.vercel.app',
            jobTitle: 'Full Stack Developer & AI Engineer',
            knowsAbout: [
              'Next.js',
              'React',
              'AI Engineering',
              'Node.js',
              'PostgreSQL',
              'Systems Architecture',
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kathmandu',
              addressCountry: 'Nepal',
            },
            alumniOf: 'Your University Name',
            sameAs: [
              'https://github.com/yourusername',
              'https://linkedin.com/in/yourusername',
              'https://twitter.com/yourusername',
            ],
          }),
        }}
      />
    </div>
  )
}
