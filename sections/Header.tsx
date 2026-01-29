'use client'
import { ModeToggle } from '@/components/toggle-theme'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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

  // 1. Pathname Logic
  const isArchivePage = pathname === '/blogs'
  const isIndividualPost = pathname.startsWith('/blogs/')

  useEffect(() => {
    // Stop logic if we are hiding the header anyway
    if (isIndividualPost) return

    if (isArchivePage) {
      setActiveSection('blogs')
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

  // 2. GUARD: Completely hide header if on an individual post page
  if (isIndividualPost) return null

  return (
    <div
      className='top-3 z-[100] flex w-full items-center justify-center px-2 sm:px-4'
      style={{
        // 3. Dynamic Positioning:
        // If on archive page, use 'absolute' (not sticky).
        // Otherwise, use 'sticky' for the home page sections.
        position: isArchivePage ? 'absolute' : 'sticky',
      }}
    >
      <div className='xs:max-w-[85vw] relative mx-auto flex w-full max-w-[90vw] items-center justify-center md:min-w-lg lg:min-w-3xl'>
        <nav className='flex gap-0.5 rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur-2xl backdrop-saturate-200 md:gap-1 dark:border-gray-700/15 dark:bg-gray-900/20'>
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.link}
              className={`xs:min-w-[70px] xs:px-2.5 xs:text-xs relative min-w-[60px] rounded-full px-2 py-1.5 text-center text-xs font-medium transition-all duration-300 md:min-w-[100px] md:px-4 md:py-2 md:text-sm ${
                activeSection === item.sectionId
                  ? 'bg-white/30 text-white shadow-inner shadow-white/30 dark:bg-gray-100/30 dark:text-white dark:shadow-gray-200/30'
                  : 'text-white/70 hover:bg-white/20 hover:text-white dark:text-gray-300 dark:hover:bg-gray-800/20 dark:hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Show theme toggle everywhere except individual posts (handled by the guard above) */}
        {!activeSection.includes('blogs') && (
          <div className='absolute right-0'>
            <ModeToggle />
          </div>
        )}
      </div>
    </div>
  )
}
