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
  title: 'Portfolio | Nischal Puri',
  description: 'Portfolio of Nischal Puri - Full Stack Developer',
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
