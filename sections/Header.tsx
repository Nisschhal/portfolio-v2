'use client'
import { ModeToggle } from '@/components/toggle-theme'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navItems = [
  {
    name: 'Home',
    link: '/#hero',
    path: '/',
    sectionId: 'hero',
  },
  {
    name: 'About',
    link: '/#about',
    path: '/',
    sectionId: 'about',
  },
  {
    name: 'Projects',
    link: '/#projects',
    path: '/',
    sectionId: 'projects',
  },
  {
    name: 'Contact',
    link: '/#contact',
    path: '/',
    sectionId: 'contact',
  },
  {
    name: 'Blog',
    link: '/blogs',
    path: '/blogs',
    sectionId: 'blogs',
  },
]

export const Header = () => {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // Handle Blog page active state
    if (pathname === '/blogs') {
      setActiveSection('blogs')
      return
    }

    // IntersectionObserver for sections on main page
    const observer = new IntersectionObserver(
      entries => {
        let maxRatio = 0
        let mostVisibleSection = ''
        entries.forEach(entry => {
          console.log(
            `Section: ${entry.target.id}, Intersection Ratio: ${entry.intersectionRatio}`
          )
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisibleSection = entry.target.id
          }
        })
        if (maxRatio >= 0.1) {
          setActiveSection(mostVisibleSection)
        } else if (pathname === '/') {
          // Only fallback to 'hero' if no section is sufficiently visible
          setActiveSection(prev => (prev ? prev : 'hero'))
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds
        rootMargin: '-20% 0px -20% 0px', // Increased margin for stability
      }
    )

    // Observe sections only on main page
    if (pathname === '/') {
      navItems.forEach(item => {
        if (item.path === '/' && item.sectionId !== 'blogs') {
          const section = document.querySelector(`#${item.sectionId}`)
          if (section) {
            observer.observe(section)
            console.log(`Observing section: #${item.sectionId}`)
          } else {
            console.warn(`Section #${item.sectionId} not found in DOM`)
          }
        }
      })
    }

    // Cleanup observers
    return () => {
      if (pathname === '/') {
        navItems.forEach(item => {
          if (item.path === '/' && item.sectionId !== 'blogs') {
            const section = document.querySelector(`#${item.sectionId}`)
            if (section) {
              observer.unobserve(section)
            }
          }
        })
      }
    }
  }, [pathname])

  return (
    <div className='sticky top-3 z-10 flex w-full items-center justify-center px-4'>
      <div className='relative mx-auto flex w-full max-w-4xl items-center justify-center sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px]'>
        <nav className='flex flex-wrap gap-1 rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-2xl backdrop-saturate-150 dark:border-gray-200/15 dark:bg-gray-900/10'>
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.link}
              className={`relative min-w-[80px] flex-1 rounded-full px-3 py-2 text-center text-sm font-medium transition-all duration-300 sm:min-w-[100px] sm:px-4 ${
                activeSection === item.sectionId
                  ? 'bg-white/30 text-white shadow-inner shadow-white/20 dark:bg-gray-100/30 dark:text-white dark:shadow-gray-200/20'
                  : 'text-white/70 hover:bg-white/20 hover:text-white dark:text-gray-300 dark:hover:bg-gray-200/20 dark:hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className='absolute right-0'>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
