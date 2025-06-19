'use client'
import { ModeToggle } from '@/components/toggle-theme'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Blog', link: 'blogs' },
  { name: 'Contact', link: '#contact' },
]

export const Header = () => {
  const pathname = usePathname()
  const [hash, setHash] = useState<string>(
    typeof window !== 'undefined' ? window.location.hash : ''
  )

  // Track hash changes
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    updateHash()
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  // Check if the current pathname or hash matches the link
  const isActive = (link: string) => {
    if (link.startsWith('#')) {
      const cleanLink = link.replace('#', '')
      return (
        hash === link || (cleanLink === 'home' && !hash && pathname === '/')
      )
    }
    return pathname.includes(link.replace('#', ''))
  }

  return (
    <div className='sticky top-3 z-50 flex w-full items-center justify-center'>
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
                  <a
                    href={item.link}
                    className={`nav-item relative z-10 rounded-full border border-transparent px-4 py-2 font-medium transition-all duration-200 ${
                      isActive(item.link)
                        ? 'text-base text-white'
                        : 'text-gray-800/80 hover:bg-white/10 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-black/10 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                    {/* Glass reflection effect on hover */}
                    <span className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100' />
                    {/* Sliding glass highlight */}
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
                  </a>
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
