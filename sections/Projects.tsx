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
import { useRef } from 'react'

interface Project {
  company: string
  status: string
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
          <div className='absolute top-4 right-4 rounded-full border border-emerald-500/20 bg-black/60 px-3 py-1 text-[10px] font-bold text-emerald-400 uppercase backdrop-blur'>
            {p.status}
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
