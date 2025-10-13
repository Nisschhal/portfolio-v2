import type { Metadata } from 'next'
import {
  Inter,
  Calistoga,
  Playfair_Display,
  Space_Grotesk,
} from 'next/font/google'
import './globals.css'
import { ShootingStars } from '@/components/ui/shotting-star'
import { StarsBackground } from '@/components/ui/star-background'
import { ThemeProvider } from '@/components/theme-provider'
import grainImage from '@/assets/images/grain.jpg'
import { Header } from '@/sections/Header'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif-play',
})

// const Playfair = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-play-serif',
// })

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${calistoga.variable} ${spaceGrotesk.variable} relative font-sans text-white antialiased`}
      >
        {/* ThemeProvider */}
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
