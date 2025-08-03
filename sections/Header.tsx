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
            `Section: ${entry.target.id}, Intersection Ratio: ${entry.intersectionRatio}, Is Intersecting: ${entry.isIntersecting}`
          )
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisibleSection = entry.target.id
          }
        })
        if (maxRatio >= 0.02) {
          console.log(`Setting active section to: ${mostVisibleSection}`)
          setActiveSection(mostVisibleSection)
        } else if (pathname === '/') {
          console.log(`Fallback check, current active: ${activeSection}`)
          setActiveSection(prev => (prev ? prev : 'hero'))
        }
      },
      {
        threshold: [0.02, 0.05, 0.1, 0.3, 0.5], // Lower threshold for short sections
        rootMargin: '-30% 0px -30% 0px', // Tighter margin for precision
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
    <div className='sticky top-3 z-[100] flex w-full items-center justify-center px-2 sm:px-4'>
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
        <div className='absolute right-0'>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
