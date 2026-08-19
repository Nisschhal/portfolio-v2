'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
  useScroll,
} from 'framer-motion'
import {
  LayoutGrid,
  List,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Assets
import grainImage from '@/assets/images/grain.jpg'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

// Image Imports (Keep your existing imports)
import InkSprout from '@/public/assets/images/projects/ink-sprout.png'
import BookWiz from '@/public/assets/images/projects/bookwiz.png'
import Carhive from '@/public/assets/images/projects/carhive.png'
import Solemate from '@/public/assets/images/projects/solemate.png'
import TailSprout from '@/public/assets/images/projects/tailsprout.png'
import NextAuth from '@/public/assets/images/projects/next-auth.png'
import OldPort from '@/public/assets/images/projects/old-port.png'
import AiChat from '@/public/assets/images/projects/ai-chat.png'
import ZentryGame from '@/public/assets/images/projects/zentry-game.png'
import Spylt from '@/public/assets/images/projects/spylt.png'
import MacBookClone from '@/public/assets/images/projects/mac-landing.png'
import FurnitureStore from '@/public/assets/images/projects/furniture.png'
import WellnessGym from '@/public/assets/images/projects/wellness.png'
import Merobhumi from '@/public/assets/images/projects/merobhumi.png'
import RbsSalon from '@/public/assets/images/projects/rbs-salon.png'
import Gharedi from '@/public/assets/images/projects/gharedi.png'
import { useRef } from 'react'

interface Project {
  company: string
  status: string
  tag?: string
  year: string
  title: string
  subtitle?: string
  results: { title: string }[]
  tech: string[]
  link: string
  image: StaticImageData
}

const portfolioProjects = [
  {
  company: 'Merobhumi',
  status: 'Live',
  tag: 'Client',
  year: '2026',
  title: 'Merobhumi — Real Estate Platform',
  subtitle: 'AI-First Property Platform with Data-Rich Dashboards and Live Listing Search',
  results: [
    {
      title: 'Sole engineer on a complex real estate platform, building dynamic, data-rich dashboards that surface large listing datasets in real time, with Next.js server rendering for the search visibility that drives property discovery.',
    },
    {
      title: 'Split the API into a dedicated Node/Express service with a self-built OAuth layer rather than leaning on framework routes, keeping the backend free to scale independently as the product grows.',
    },
    {
      title: 'Shipped an AI chat interface open to both first-time visitors and signed-in users, built on the AI SDK with tool calling that queries the database directly so property answers and dashboard data reflect live listings.',
    },
    {
      title: 'Stood up the company\'s entire IT infrastructure from scratch — environments, deployments and CI/CD — and integrated a payment gateway alongside SMS and email alerting for the auth and transactional flows.',
    },
  ],
  tech: [
    'Next.js',
    'Node / Express',
    'OAuth',
    'AI SDK',
    'Tool Calling',
    'Cloudinary',
    'Tailwind CSS',
  ],
  link: 'https://www.merobhumi.com/',
  image: Merobhumi,
},
  {
  company: 'WN Wellness Equipment',
  status: 'Live',
  tag: 'Client',
  year: '2025',
  title: 'WN Wellness Equipment',
  subtitle: 'Bold, SEO-Rich B2B Storefront for Nepal\'s Gym Equipment Wholesaler',
  results: [
    {
      title: 'Delivered a client-commissioned marketing site for an industrial gym equipment wholesaler serving gym operators across all 77 districts of Nepal, built around a quote-request model rather than a cart — matching how B2B equipment deals actually close.',
    },
    {
      title: 'Designed a deliberately bold visual identity around the SHAKTI product line, with a structured equipment arsenal spanning Multi-Station, Cardio, Strength and Free Weights, plus a Success Stories portfolio that turns completed gym fit-outs into social proof.',
    },
    {
      title: 'Added an AI chat interface offering an "AI mode" for discovery — buyers describe the setup they need in plain language instead of drilling through categories, and the assistant surfaces matching equipment.',
    },
    {
      title: 'Built on Next.js with server-rendered pages for search visibility, and Cloudinary handling equipment media storage and optimized delivery so a heavily image-driven catalogue stays fast.',
    },
  ],
  tech: [
    'Next.js',
    'SSR / SEO',
    'AI Chat Search',
    'Cloudinary',
    'Tailwind CSS',
    'Framer Motion',
  ],
  link: 'https://www.wnwellnessequipment.com/',
  image: WellnessGym,
},
  {
  company: 'RBS Unisex Salon',
  status: 'WIP',
  tag: 'Client',
  year: '2026',
  title: 'RBS Unisex Salon & Academy',
  subtitle: 'Modern, Premium Booking Site for a Nepali Unisex Salon and Beauty Training Center',
  results: [
    {
      title: 'Building a premium salon site for a Devdaha and Khaireni based business that runs two sides of one brand — ladies and gents salon services, and a professional beauty academy — with parallel Book Appointment and Join Classes paths from the hero.',
    },
    {
      title: 'Designed a clean, modern, premium aesthetic — dark gold-accented palette, elegant serif display type, generous spacing and a light/dark theme toggle — giving a local salon the visual quality of a high-end brand.',
    },
    {
      title: 'Wrote the interface in mixed Nepali and English so the copy reads the way customers actually speak, and structured services into clear entry points: gents haircut, ladies services, bridal makeup, and beauty courses.',
    },
    {
      title: 'Built on Next.js with server-rendered, SEO-rich pages so the salon surfaces in local search — the primary discovery channel for appointment-driven businesses.',
    },
  ],
  tech: [
    'Next.js',
    'SSR / SEO',
    'Tailwind CSS',
    'Dark / Light Theme',
  ],
  link: 'https://rbsunisexsalon.vercel.app/',
  image: RbsSalon,
},
  {
  company: 'Nischal Puri',
  status: 'Completed',
  year: '2026',
  title: 'Gharedi — Real Estate Marketplace',
  subtitle: 'Map-Driven Two-Sided Property Platform with Agent Dashboards and Subscription Billing',
  results: [
    {
      title: 'Built a two-sided marketplace serving both buyers and agents: buyers search, filter and save listings across houses, apartments, condos and townhouses, while agents list properties, work a lead inbox and manage their portfolio from a dedicated dashboard.',
    },
    {
      title: 'Implemented map-based discovery with MapLibre and React Map GL alongside Leaflet, rendering property markers over a live map, with debounced search by city, neighbourhood or ZIP so filtering stays responsive across large result sets.',
    },
    {
      title: 'Modelled content in Sanity with an embedded Studio, type-safe GROQ schema generation and seed scripts, giving the platform a fully managed CMS backend rather than hardcoded listing data.',
    },
    {
      title: 'Secured the app with Clerk behind a custom proxy gatekeeper that enforces public, private and onboarding route rules, and monetised the agent side through Clerk Billing subscription tiers.',
    },
    {
      title: 'Built on Next.js 16 and React 19 with the React Compiler enabled, shadcn/ui on Tailwind CSS v4, React Hook Form with Zod validation, and Recharts for dashboard analytics.',
    },
  ],
  tech: [
    'Next.js 16',
    'React 19',
    'Sanity CMS',
    'Clerk',
    'Clerk Billing',
    'MapLibre',
    'Leaflet',
    'shadcn/ui',
    'Tailwind CSS v4',
    'Zod',
    'Recharts',
    'TypeScript',
  ],
  link: 'https://real-state-gharedi.vercel.app/',
  image: Gharedi,
},
  {
  company: 'Nischal Puri',
  status: 'Completed',
  year: '2025',
  title: 'Nest Store - Furniture E-Commerce',
  subtitle: 'AI-Powered Full-Stack Furniture Store with Real-Time Sync and Shopping Assistant',
  results: [
    {
      title: 'Developed a modern furniture e-commerce platform using Next.js 16 App Router, Sanity CMS for headless content management, and real-time live updates.',
    },
    {
      title: 'Integrated secure Stripe payments with webhooks, Clerk authentication, Zustand cart management, and an AI shopping assistant with natural language queries, product search, and order tracking via tool calling.',
    },
    {
      title: 'Built a custom admin dashboard with multiplayer editing, AI insights, responsive Tailwind CSS + shadcn/ui design, Embla Carousel, and type-safe GROQ queries for seamless inventory and order handling.',
    },
  ],
  tech: [
    'Next.js 16',
    'Sanity CMS',
    'Tailwind CSS',
    'shadcn/ui',
    'Clerk',
    'Stripe',
    'Zustand',
    'Vercel AI SDK',
    'Embla Carousel',
  ],
  link: 'https://ai-e-com.vercel.app/', // ← replace with your actual deployed link
  image: FurnitureStore, // ← replace with your imported image variable
},
  {
    company: 'Nischal Puri',
    status: 'Completed',

    year: '2025',
    title: 'Ink Sprout',
    results: [
      { title: 'Built a scalable e-commerce platform for stationery' },
      { title: 'Integrated secure authentication and payment systems' },
      { title: 'Enhanced state management with Zustand' },
    ],
    tech: ['Next.js', 'Drizzle', 'PostgreSQL', 'Zustand'],
    link: 'https://ink-sprout-v2-nischal.vercel.app',
    image: InkSprout,
  },
  {
    company: 'Nischal Puri',
    status: 'Completed',
    year: '2025',
    title: 'MacBook Pro Landing Page',
    subtitle: 'Apple-Inspired 3D Interactive Website with Scroll Animations',
    results: [
      {
        title:
          "Cloned Apple's MacBook Pro landing page with immersive 3D product showcase.",
      },
      {
        title:
          'Implemented interactive 3D rendering using Three.js with color switching and video textures.',
      },
      {
        title:
          'Enhanced with GSAP scroll animations, pinned sections, and responsive Tailwind CSS.',
      },
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Three.js', 'GSAP', 'Zustand'],
    link: 'https://mac-landing-gsap-3js.vercel.app',
    image: MacBookClone,
  },
  {
    company: 'Nischal Puri',
    status: 'In Progress',
    year: '2025',
    title: 'Spylt Clone',
    subtitle: 'Animation-Rich Site Built with React, Tailwind CSS, and GSAP',
    results: [
      {
        title:
          'Followed a comprehensive tutorial to build a real-world, Awwwards-inspired website from scratch, focusing on beginner-friendly animations and layouts.',
      },
      {
        title:
          'Implemented advanced GSAP features including text reveal animations, scroll-activated highlighting, smooth horizontal scrolling, clip-path reveals, video mask reveals, and element pinning.',
      },
      {
        title:
          'Integrated Tailwind CSS for responsive styling and React for component-based structure, with resources like Figma designs and GitHub code for easy replication.',
      },
    ],
    tech: ['React', 'Tailwind CSS', 'GSAP'],
    link: 'https://syplt-clone-gsap.vercel.app',
    image: Spylt,
  },
  {
    company: 'Nischal Puri',
    status: 'Completed',
    year: '2025',
    title: 'AI Assistant with Tools',
    subtitle: 'Advanced AI Agent with Tool Integration',
    results: [
      {
        title:
          'Developed a Next.js 15 AI agent with real-time tool integration using IBM wxflows.',
      },
      {
        title:
          'Implemented secure authentication with Clerk and real-time data sync with Convex.',
      },
      {
        title:
          'Optimized AI responses with Anthropic’s prompt caching and LangChain/LangGraph.',
      },
    ],
    tech: [
      'Next.js 15',
      'Clerk',
      'Convex',
      'LangChain',
      'LangGraph',
      'IBM wxflows',
      'Anthropic Claude 3.5',
      'TailwindCSS',
      'Shadcn/ui',
    ],
    link: 'https://ai-chatbot-bmxi.vercel.app',
    image: AiChat,
  },
  {
    company: 'Nischal Puri',
    status: 'In Progress',
    year: '2025',
    title: 'Zentry Game',
    subtitle: 'Award-Winning Animated Gaming Website',
    results: [
      {
        title: 'Built an Awwwards-inspired gaming website with React and Vite.',
      },
      {
        title:
          'Implemented smooth animations using Tailwind CSS and custom clip-path effects.',
      },
      {
        title:
          'Created responsive hero, navbar, and Bento grid with 3D tilt effects.',
      },
    ],
    tech: ['React', 'Vite', 'TailwindCSS', 'JavaScript'],
    link: 'https://zentry-game-three.vercel.app',
    image: ZentryGame,
  },
  {
    company: 'Nischal Puri',
    status: 'Completed',

    year: '2025',
    title: 'Book Wiz (Library)',
    results: [
      { title: 'Developed a university library management system' },
      { title: 'Implemented secure user authentication with Clerk' },
      { title: 'Optimized database queries with Prisma' },
    ],
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Clerk'],
    link: 'https://uni-book-wiz.vercel.app',
    image: BookWiz,
  },
  {
    company: 'Nischal Puri',
    status: 'Completed',

    year: '2024',
    title: 'Car Hive',
    results: [
      { title: 'Created a car e-commerce platform with real-time features' },
      { title: 'Integrated Kinde Auth for secure login' },
      { title: 'Managed state with Redux for seamless UX' },
    ],
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Kinde Auth', 'Redux'],
    link: 'https://carhive-dev-nischal.vercel.app',
    image: Carhive,
  },
  {
    company: 'Nischal Puri',
    status: 'Completed',

    year: '2024',
    title: 'Sole Mate',
    results: [
      { title: 'Built a shoe e-commerce platform with dynamic cart' },
      { title: 'Integrated Clerk for secure authentication' },
      { title: 'Optimized performance with Drizzle and Zustand' },
    ],
    tech: ['Next.js', 'Drizzle', 'PostgreSQL', 'Clerk', 'Zustand'],
    link: 'https://sole-mate-dev-nisal.vercel.app',
    image: Solemate,
  },
  {
    company: 'Nischal Puri',
    status: 'Completed',

    year: '2025',
    title: 'Tail Sprout',
    results: [
      { title: 'Designed a modern landing page for plant sales' },
      { title: 'Implemented responsive UI with animations' },
      { title: 'Focused on lightweight, performant code' },
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://tail-sprout-nisal-dev.vercel.app',
    image: TailSprout,
  },
  {
    company: 'Nischal Puri',
    status: 'Completed',

    year: '2025',
    title: 'Next Auth',
    results: [
      { title: 'Developed a secure authentication system' },
      { title: 'Integrated NextAuth.js for Google/GitHub login' },
      { title: 'Ensured robust RBAC with Prisma' },
    ],
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
    link: 'https://next-auth-nisschal.vercel.app',
    image: NextAuth,
  },
  {
    company: 'Nischal Puri',
    status: 'Completed',

    year: '2025',
    title: 'Personal Portfolio',
    subtitle: 'Rich Animations, Best Viewed on Desktop',
    results: [
      {
        title:
          'Built a sleek Next.js portfolio that landed my entry-level role, paving the way to Team Lead.',
      },
      {
        title: 'Boosted UX with vibrant GSAP and Framer Motion animations.',
      },
      {
        title:
          'Showcased full-stack skills for professional and academic impact.',
      },
    ],
    tech: [
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'TailwindCSS',
      'Framer Motion',
      'GSAP',
    ],
    link: 'https://nischal-portfolio-mu.vercel.app/',
    image: OldPort,
  },
]

export const ProjectsSection = () => {
  const [view, setView] = useState<'grid' | 'list' | 'stack'>('stack')

  return (
    <section className='px-6 py-24 lg:py-40' id='projects'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          eyebrow='Registry // Work'
          title='Featured Deployments'
          description='A chronological record of architectural builds and digital systems.'
        />

        {/* --- VIEW SWITCHER --- */}
        <div className='mt-12 flex justify-center'>
          <div className='inline-flex gap-1 rounded-2xl border border-white/5 bg-gray-950/50 p-1.5 shadow-2xl backdrop-blur-xl'>
            {[
              { id: 'grid', icon: LayoutGrid, label: 'Grid' },
              { id: 'list', icon: List, label: 'List' },
              { id: 'stack', icon: Layers, label: 'Stack' },
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setView(type.id as 'grid' | 'list' | 'stack')}
                className={cn(
                  'flex items-center gap-2 rounded-xl px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-300',
                  view === type.id
                    ? 'bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-500/20'
                    : 'text-gray-500 hover:bg-white/5 hover:text-white'
                )}
              >
                <type.icon className='h-3.5 w-3.5' />
                <span className='hidden sm:inline'>{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- STAGE --- */}
        <div className='mt-20'>
          <AnimatePresence mode='wait'>
            {view === 'stack' && <StackView key='stack' />}
            {view === 'grid' && <GridView key='grid' />}
            {view === 'list' && <ListView key='list' />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                            VIEW 1: STACK (Classic)                         */
/* -------------------------------------------------------------------------- */
const StackView = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end end'],
  })

  return (
    <div ref={containerRef} className='flex flex-col gap-16 md:mt-20'>
      {portfolioProjects.map((project, projectIndex) => (
        <Card
          key={project.title}
          className='sticky px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16'
          style={{ top: `calc(64px + ${projectIndex * 25}px)` }}
        >
          <div
            className='absolute inset-0 -z-10 opacity-5'
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
            <div className='lg:pb-16'>
              <div className='inline-flex items-center gap-3'>
                <div className='rounded bg-emerald-400/10 px-2 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase'>
                  {project.status}
                </div>
                {project.tag && (
                  <div className='rounded bg-sky-400/10 px-2 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-sky-400 uppercase'>
                    {project.tag}
                  </div>
                )}
                <span className='font-mono text-[10px] text-gray-500'>
                  {project.company} // {project.year}
                </span>
              </div>
              <h3 className='mt-4 font-serif text-2xl text-white md:text-4xl'>
                {project.title}
              </h3>
              <p className='mt-2 text-sm font-light text-white/70'>
                {project.subtitle}
              </p>
              <hr className='mt-6 border-white/10' />
              <ul className='mt-6 flex flex-col gap-4'>
                {project.results.map((result, idx) => (
                  <li
                    key={idx}
                    className='flex items-start gap-3 text-sm text-white/50'
                  >
                    <CheckCircle2 className='h-5 w-5 shrink-0 text-emerald-500' />
                    <span className='leading-relaxed'>{result.title}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-10 flex flex-wrap gap-2'>
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className='rounded-md border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[9px] font-bold text-gray-400 uppercase'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target='_blank'
                rel='noreferrer'
                className='mt-12 block'
              >
                <button className='flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-8 text-[10px] font-black tracking-widest text-gray-950 uppercase transition-all hover:bg-emerald-50 active:scale-95'>
                  Initialize System <ArrowUpRight className='size-4' />
                </button>
              </a>
            </div>
            <div className='relative mt-12 lg:mt-0'>
              <Image
                src={project.image}
                alt={project.title}
                className='rounded-t-3xl object-cover lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:object-cover'
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                            VIEW 2: GRID (Informative)                      */
/* -------------------------------------------------------------------------- */
const GridView = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className='grid grid-cols-1 gap-8 md:grid-cols-2'
  >
    {portfolioProjects.map(p => (
      <a
        key={p.title}
        href={p.link}
        target='_blank'
        rel='noreferrer'
        className='group rounded-3xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/8'
      >
        <div className='relative mb-6 aspect-video overflow-hidden rounded-2xl'>
          <Image
            src={p.image}
            alt={p.title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <div className='absolute top-4 right-4 flex gap-2'>
            {p.tag && (
              <div className='rounded-full border border-sky-500/20 bg-black/60 px-3 py-1 text-[10px] font-bold text-sky-400 uppercase backdrop-blur'>
                {p.tag}
              </div>
            )}
            <div className='rounded-full border border-emerald-500/20 bg-black/60 px-3 py-1 text-[10px] font-bold text-emerald-400 uppercase backdrop-blur'>
              {p.status}
            </div>
          </div>
        </div>
        <div className='px-2'>
          <span className='font-mono text-[10px] tracking-widest text-emerald-500 uppercase'>
            {p.company} // {p.year}
          </span>
          <h3 className='mt-1 mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400'>
            {p.title}
          </h3>
          <p className='mb-6 line-clamp-2 text-sm font-light text-gray-400'>
            {p.subtitle}
          </p>
          <div className='flex flex-wrap gap-2'>
            {p.tech.map(t => (
              <span
                key={t}
                className='rounded border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-gray-500 uppercase'
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    ))}
  </motion.div>
)

/* -------------------------------------------------------------------------- */
/*                            VIEW 3: LIST (The Registry)                     */
/* -------------------------------------------------------------------------- */
const ListView = () => {
  const [hovered, setHovered] = useState<Project | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 })

  return (
    <motion.div
      onMouseMove={e => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      }}
      className='relative flex flex-col border-t border-white/10'
    >
      {/* Mouse Follower */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            style={{
              position: 'fixed',
              left: springX,
              top: springY,
              x: 20,
              y: '-50%',
              pointerEvents: 'none',
              zIndex: 999,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className='hidden h-64 w-[450px] overflow-hidden rounded-2xl border border-emerald-500/30 bg-gray-900 shadow-2xl lg:block'
          >
            <Image
              src={hovered.image}
              alt=''
              fill
              className='object-cover opacity-80'
            />
            <div className='absolute inset-0 bg-gradient-to-tr from-gray-950/40 to-transparent' />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table-like Header for List (Desktop only) */}
      <div className='hidden grid-cols-[0.5fr_2fr_1.5fr_1.5fr_0.5fr] border-b border-white/5 px-4 py-6 font-mono text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase lg:grid'>
        <span>ID</span>
        <span>Deployment / Title</span>
        <span>Architecture / Core</span>
        <span>Registry / Status</span>
        <span className='text-right'>Link</span>
      </div>

      {portfolioProjects.map((p, i) => (
        <a
          key={p.title}
          href={p.link}
          target='_blank'
          onMouseEnter={() => setHovered(p)}
          onMouseLeave={() => setHovered(null)}
          className='group relative grid grid-cols-1 items-center border-b border-white/5 px-4 py-10 transition-all hover:bg-white/[0.02] lg:grid-cols-[0.5fr_2fr_1.5fr_1.5fr_0.5fr] lg:py-12'
        >
          {/* Column 1: ID */}
          <span className='hidden font-mono text-xs text-gray-700 lg:block'>
            0{i + 1}
          </span>

          {/* Column 2: Title */}
          <div>
            <h3 className='text-xl font-bold text-white transition-colors group-hover:text-emerald-400 lg:text-2xl'>
              {p.title}
            </h3>
            <span className='mt-1 block font-mono text-[10px] text-gray-600 uppercase lg:hidden'>
              {p.company} // {p.year}
            </span>
          </div>

          {/* Column 3: Tech (Primary) */}
          <div className='mt-2 flex flex-col gap-2 lg:flex-row lg:items-center'>
            <Terminal className='size-3 text-emerald-500/50' />
            <div className='flex flex-wrap gap-2'>
              {p.tech.map(t => (
                <span
                  key={t}
                  className='rounded border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-bold text-gray-500 uppercase'
                >
                  {t}
                </span>
              ))}
            </div>
            {/* <span className='font-mono text-[10px] text-gray-600'>
              +{p.tech.length - 1} More
            </span> */}
          </div>

          {/* Column 4: Status Metadata */}
          <div className='hidden flex-col gap-1 lg:flex'>
            <span className='font-mono text-[10px] font-bold text-emerald-500 uppercase'>
              {p.status}
              {p.tag && <span className='ml-2 text-sky-400'>· {p.tag}</span>}
            </span>
            <span className='font-mono text-[9px] text-gray-600 uppercase'>
              {p.company} // {p.year}
            </span>
          </div>

          {/* Column 5: Action */}
          <div className='flex justify-end'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-gray-950'>
              <ArrowUpRight className='h-5 w-5' />
            </div>
          </div>
        </a>
      ))}
    </motion.div>
  )
}

export default ProjectsSection
