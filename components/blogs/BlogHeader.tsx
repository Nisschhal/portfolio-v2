'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { LayoutGrid, Home, User } from 'lucide-react'

const blogNavItems = [
  { name: 'Portfolio', link: '/', icon: User },
  { name: 'Home', link: '/blogs', icon: Home },
  { name: 'Archive', link: '/blogs/archive', icon: LayoutGrid },
]

export const BlogHeader = () => {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const { scrollY } = useScroll()

  // 1. Behavior Check: Is the user inside the /blogs section?
  const isInBlogSection = pathname.startsWith('/blogs')

  // 2. Universal Scroll Logic: Active on EVERY blog-related page
  useMotionValueEvent(scrollY, 'change', current => {
    if (!isInBlogSection) return

    const previous = scrollY.getPrevious() ?? 0
    const diff = current - previous

    // Threshold: Always show at the top of the page
    if (current < 80) {
      setVisible(true)
    } else {
      // Reveal on Scroll Up, Hide on Scroll Down
      if (diff < 0) setVisible(true)
      else setVisible(false)
    }
  })

  // 3. Reset visibility to true whenever the user navigates to a new page
  useEffect(() => {
    setVisible(true)
  }, [pathname])

  // If for some reason the user isn't in /blogs, don't show this specific header
  if (!isInBlogSection) return null

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        // We removed the key={pathname} here to make the header persist
        // smoothly across navigation without a "re-entry" flicker
        initial={{ opacity: 0, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: 1,
        }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, ease: 'circOut' }}
        className='pointer-events-none fixed top-6 z-[100] flex w-full items-center justify-center px-4'
      >
        <div className='pointer-events-auto flex items-center gap-4'>
          {/* Industrial Brand Icon */}
          <Link
            href='/'
            className='group hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gray-950/50 backdrop-blur-md transition-all hover:border-emerald-500/50 sm:flex'
          >
            <div className='font-space-grotesk font-black text-emerald-500 transition-transform group-hover:scale-110'>
              N
            </div>
          </Link>

          {/* Navigation Pill */}
          <nav className='flex gap-1 rounded-2xl border border-white/10 bg-gray-950/90 p-1.5 shadow-2xl backdrop-blur-2xl'>
            {blogNavItems.map(item => {
              const isActive = pathname === item.link
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={cn(
                    'relative flex items-center gap-2 rounded-xl px-4 py-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-300',
                    isActive
                      ? 'bg-emerald-500 text-gray-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <item.icon
                    className={cn(
                      'h-3.5 w-3.5',
                      isActive ? 'text-gray-950' : 'text-emerald-500/50'
                    )}
                  />
                  <span className='xs:inline hidden'>{item.name}</span>

                  {/* Active Indicator Pulse */}
                  {isActive && (
                    <span className='absolute -top-1 -right-1 flex h-2 w-2'>
                      <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
                      <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500'></span>
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
