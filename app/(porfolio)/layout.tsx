import type { Metadata } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import { ShootingStars } from '@/components/ui/shotting-star'
import { StarsBackground } from '@/components/ui/star-background'
import grainImage from '@/assets/images/grain.jpg'
import { Header } from '@/sections/Header'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

export const metadata: Metadata = {
  // 🔹 SEO Title
  title: 'Nischal Puri | Full Stack Developer & AI Engineer',

  // 🔹 SEO Description
  description:
    'Explore the portfolio of Nischal Puri, a Full Stack Developer & AI Engineer. Skilled in Next.js, Node.js, and building scalable, modern applications.',

  // 🔹 Favicons & Icons
  icons: {
    icon: [
      '/icon.png', // auto-detected from app/
      { url: '/emoji-smile.png', type: 'image/png', sizes: '32x32' }, // public/
    ],
    apple: '/emoji-smile.png', // iOS Safari
  },

  // 🔹 Open Graph (for LinkedIn, WhatsApp, Facebook, etc.)
  openGraph: {
    title: 'Nischal Puri | Full Stack Developer & AI Engineer',
    description:
      'Portfolio showcasing projects, AI integrations, and scalable full-stack solutions by Nischal Puri.',
    url: 'https://nischaldev.vercel.app', // replace with your real domain
    siteName: 'Nischal Puri Portfolio',
    images: [
      {
        url: '/emoji-smile.png', // ✅ preview image (ideally 1200x630 px)
        width: 1200,
        height: 630,
        alt: 'Nischal Puri Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 🔹 Twitter Card (for X/Twitter)
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Nischal Puri | Full Stack Developer & AI Engineer',
  //   description:
  //     'Portfolio showcasing full-stack projects, AI solutions, and scalable apps by Nischal Puri.',
  //   images: ['/emoji-smile.png'],
  //   creator: '@yourhandle', // optional, add if you have Twitter/X handle
  // },

  // 🔹 Other metadata (optional but nice to have)
  keywords: [
    'Nischal Puri',
    'Full Stack Developer',
    'AI Engineer',
    'Next.js Portfolio',
    'Node.js Developer',
    'React Developer',
  ],
  authors: [{ name: 'Nischal Puri' }],
}
export default async function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className=''>
      <Header />
      {children}
      <div className='pointer-events-none fixed inset-0'>
        <div
          className='fixed inset-0 opacity-5'
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />

        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  )
}
