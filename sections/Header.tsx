'use client'
import { ModeToggle } from '@/components/toggle-theme'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', link: '/#hero', path: '/', sectionId: 'hero' },
  { name: 'About', link: '/#about', path: '/', sectionId: 'about' },
  { name: 'Projects', link: '/#projects', path: '/', sectionId: 'projects' },
  { name: 'Contact', link: '/#contact', path: '/', sectionId: 'contact' },
  { name: 'Blog', link: '/blogs', path: '/blogs', sectionId: 'blogs' },
]

export const Header = () => {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')
  const [visible, setVisible] = useState(true) // For scroll-to-reveal logic

  const { scrollY } = useScroll()

  // 1. Pathname Logic
  const isArchivePage = pathname === '/blogs'
  const isIndividualPost = pathname.startsWith('/blogs/')

  // 2. Mimic Floating Nav behavior (Reveal on Scroll Up)
  useMotionValueEvent(scrollY, 'change', current => {
    // If we are on the Archive page, we don't want the floating behavior
    if (isArchivePage) return

    const previous = scrollY.getPrevious() ?? 0
    const diff = current - previous

    // Logic:
    // 1. Hide at the very top (optional, adjust threshold as needed)
    // 2. Show if scrolling up (diff < 0)
    // 3. Hide if scrolling down (diff > 0)
    if (current < 50) {
      setVisible(true)
    } else {
      if (diff < 0) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  })

  useEffect(() => {
    if (isIndividualPost) return
    if (isArchivePage) {
      setActiveSection('blogs')
      setVisible(true) // Always visible at the top of archive
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        let maxRatio = 0
        let mostVisibleSection = ''
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisibleSection = entry.target.id
          }
        })
        if (maxRatio >= 0.02) {
          setActiveSection(mostVisibleSection)
        } else if (pathname === '/') {
          setActiveSection(prev => (prev ? prev : 'hero'))
        }
      },
      {
        threshold: [0.02, 0.05, 0.1, 0.3, 0.5],
        rootMargin: '-30% 0px -30% 0px',
      }
    )

    if (pathname === '/') {
      navItems.forEach(item => {
        const section = document.querySelector(`#${item.sectionId}`)
        if (section) observer.observe(section)
      })
    }

    return () => observer.disconnect()
  }, [pathname, isArchivePage, isIndividualPost])

  // GUARD: Hide header completely on individual posts
  if (isIndividualPost) return null

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          'top-3 z-[100] flex w-full items-center justify-center px-2 sm:px-4',
          // Archive page: Absolute (scrolls away). Home page: Fixed (follows/reveals)
          isArchivePage ? 'absolute' : 'fixed'
        )}
      >
        <div className='xs:max-w-[85vw] relative mx-auto flex w-full max-w-[90vw] items-center justify-center md:min-w-lg lg:min-w-3xl'>
          <nav className='flex gap-0.5 rounded-full border border-white/15 bg-white/10 p-1.5 shadow-2xl backdrop-blur-2xl backdrop-saturate-200 md:gap-1 dark:border-gray-700/15 dark:bg-gray-900/20'>
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.link}
                className={cn(
                  'xs:min-w-[70px] xs:px-2.5 xs:text-xs relative min-w-[60px] rounded-full px-2 py-1.5 text-center text-xs font-medium transition-all duration-300 md:min-w-[100px] md:px-4 md:py-2 md:text-sm',
                  activeSection === item.sectionId
                    ? 'bg-white/30 text-white shadow-inner shadow-white/30 dark:bg-gray-100/30 dark:text-white dark:shadow-gray-200/30'
                    : 'text-white/70 hover:bg-white/20 hover:text-white dark:text-gray-300 dark:hover:bg-gray-800/20 dark:hover:text-white'
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme toggle - Hidden if active section is blogs */}
          {!activeSection.includes('blogs') && (
            <div className='absolute right-0'>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <ModeToggle />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
