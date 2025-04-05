"use client"
import { ModeToggle } from "@/components/toggle-theme"
import { usePathname } from "next/navigation"
const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Blog",
    link: "#blog",
  },
]
export const Header = () => {
  // check if /blog is in url
  // const isBlog = usePathname().includes("blog")

  return (
    <div className="flex justify-center items-center fixed  top-3 z-10 w-full ">
      <div className="min-w-md md:min-w-lg lg:min-w-3xl  mx-auto flex items-center justify-center relative">
        <nav className="flex gap-1 p-0.5 rounded-full border border-white/15 bg-white/10 backdrop-blur  ">
          <a href="/" className="nav-item">
            Home
          </a>
          <a href="/projects" className="nav-item">
            Projects
          </a>
          <a href="/about" className="nav-item">
            About
          </a>
          <a href="/blog" className="nav-item">
            Blog
          </a>
          {/* Mimicking active state */}
          <a
            href="/contact"
            className="nav-item bg-white text-black hover:bg-white/70 hover:text-gray-900 "
          >
            Contact
          </a>
        </nav>

        <div className="absolute right-0">
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
