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

    // Default to 'hero' on main page
    if (pathname === '/') {
      setActiveSection('hero')
    }

    // IntersectionObserver for sections on main page
    const observer = new IntersectionObserver(
      entries => {
        let maxRatio = 0
        let mostVisibleSection = ''
        entries.forEach(entry => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            mostVisibleSection = entry.target.id
          }
        })
        if (maxRatio > 0) {
          setActiveSection(mostVisibleSection)
        } else if (pathname === '/') {
          setActiveSection('hero') // Fallback to hero
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds
        rootMargin: '-15% 0px -15% 0px', // Adjusted margin
      }
    )

    // Observe sections only on main page
    if (pathname === '/') {
      navItems.forEach(item => {
        if (item.path === '/' && item.sectionId !== 'blogs') {
          const section = document.querySelector(`#${item.sectionId}`)
          if (section) {
            observer.observe(section)
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
    <div className='sticky top-3 z-10 flex w-full items-center justify-center'>
      <div className='relative mx-auto flex min-w-md items-center justify-center md:min-w-lg lg:min-w-3xl'>
        <nav className='flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur-xl backdrop-saturate-150'>
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.link}
              className={`nav-item rounded-full px-4 py-2 transition-all duration-300 ${
                activeSection === item.sectionId
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'text-white hover:bg-white/20 hover:text-gray-900'
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
