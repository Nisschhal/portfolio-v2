'use client'
import { ModeToggle } from '@/components/toggle-theme'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'

const navItems = [
  { name: 'Home', link: '/#hero' },
  { name: 'About', link: '/#about' },
  { name: 'Projects', link: '/#projects' },
  { name: 'Contact', link: '/#contact' },
  { name: 'Blog', link: '/blogs' },
]

export const Header = () => {
  const pathname = usePathname()
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState<string>('')
  const navContainerRef = useRef<HTMLDivElement>(null)
  const { y: currentScrollY } = useWindowScroll()

  // Show or hide the navigation bar based on scroll position
  // useEffect(() => {
  //   if (!navContainerRef.current) return
  //   if (currentScrollY === 0) {
  //     setIsNavVisible(true)
  //     navContainerRef.current.classList.remove('floating-nav')
  //   } else if (currentScrollY > lastScrollY) {
  //     setIsNavVisible(false)
  //     navContainerRef.current.classList.add('floating-nav')
  //   } else if (currentScrollY < lastScrollY) {
  //     setIsNavVisible(true)
  //     navContainerRef.current.classList.add('floating-nav')
  //   }
  //   setLastScrollY(currentScrollY)
  // }, [currentScrollY, lastScrollY])

  // Animate the nav based on visibility
  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [isNavVisible])

  // Track section visibility with Intersection Observer
  useEffect(() => {
    const sections = navItems
      .filter(item => item.link.startsWith('/#'))
      .map(item => item.link.replace('/#', '#'))
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
            mostVisibleSection = `#${entry.target.id}`
          }
        })
        if (maxRatio > 0) {
          setActiveSection(mostVisibleSection)
        } else if (pathname === '/') {
          setActiveSection('#hero') // Fallback to Home on initial load
        }
      },
      { root: null, threshold: [0.1, 0.3, 0.5, 0.7, 0.9] } // Multiple thresholds for better detection
    )

    sections.forEach(section => {
      const element = document.querySelector(section)
      if (element) {
        console.log(`Observing section: ${section}`)
        observer.observe(element)
      } else {
        console.warn(`Section not found: ${section}`)
      }
    })

    return () => {
      sections.forEach(section => {
        const element = document.querySelector(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [pathname])

  // Determine if a nav item is active
  const isActive = (link: string) => {
    if (link.startsWith('/#')) {
      const cleanLink = link.replace('/#', '#')
      return (
        activeSection === cleanLink ||
        (cleanLink === '#hero' && !activeSection && pathname === '/')
      )
    }
    return pathname === link
  }

  return (
    <div
      ref={navContainerRef}
      className='sticky top-3 z-50 flex w-full items-center justify-center'
    >
      <div className='relative mx-auto flex min-w-[300px] items-center justify-center md:min-w-[500px] lg:min-w-[800px]'>
        <nav className='glass inset-shadow-glass flex gap-1 rounded-full'>
          <ul className='flex items-center gap-1 py-1.5'>
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileTap={{ scale: 0.95 }}
                  className='relative'
                >
                  <Link
                    href={item.link}
                    className={`nav-item relative z-10 rounded-full border border-transparent px-4 py-2 font-medium transition-all duration-200 ${
                      isActive(item.link)
                        ? 'text-base text-white'
                        : 'text-white/70 dark:text-gray-200 dark:hover:bg-black/10 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100' />
                    {isActive(item.link) && (
                      <motion.div
                        className='glass-active inset-shadow-glass absolute inset-0 rounded-full'
                        layoutId='glass-highlight'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </nav>
        <div className='absolute right-0 flex items-center'>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
// "use client"
// import {
//   Navbar,
//   NavBody,
//   NavItems,
//   MobileNav,
//   NavbarLogo,
//   NavbarButton,
//   MobileNavHeader,
//   MobileNavToggle,
//   MobileNavMenu,
// } from "@/components/ui/resizable-navbar"
// import { useState } from "react"

// export function Header() {
//   const navItems = [
//     {
//       name: "Home",
//       link: "#home",
//     },
//     {
//       name: "About",
//       link: "#about",
//     },
//     {
//       name: "Projects",
//       link: "#projects",
//     },
//     {
//       name: "Contact",
//       link: "#contact",
//     },
//   ]

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   return (
//     <div className="relative w-full">
//       <div className="flex justify-center items-center fixed top-3 z-10 w-full">
//         <Navbar>
//           {/* Desktop Navigation */}
//           <NavBody>
//             <NavbarLogo />
//             <NavItems items={navItems} />
//             <div className="flex items-center gap-4">
//               <NavbarButton variant="secondary">Login</NavbarButton>
//               <NavbarButton variant="primary">Book a call</NavbarButton>
//             </div>
//           </NavBody>

//           {/* Mobile Navigation */}
//           <MobileNav>
//             <MobileNavHeader>
//               <NavbarLogo />
//               <MobileNavToggle
//                 isOpen={isMobileMenuOpen}
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               />
//             </MobileNavHeader>

//             <MobileNavMenu
//               isOpen={isMobileMenuOpen}
//               onClose={() => setIsMobileMenuOpen(false)}
//             >
//               {navItems.map((item, idx) => (
//                 <a
//                   key={`mobile-link-${idx}`}
//                   href={item.link}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="relative text-neutral-600 dark:text-neutral-300"
//                 >
//                   <span className="block">{item.name}</span>
//                 </a>
//               ))}
//               <div className="flex w-full flex-col gap-4">
//                 <NavbarButton
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   variant="primary"
//                   className="w-full"
//                 >
//                   Login
//                 </NavbarButton>
//                 <NavbarButton
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   variant="primary"
//                   className="w-full"
//                 >
//                   Book a call
//                 </NavbarButton>
//               </div>
//             </MobileNavMenu>
//           </MobileNav>
//         </Navbar>

//         {/* Navbar */}
//       </div>
//     </div>
//   )
// }
