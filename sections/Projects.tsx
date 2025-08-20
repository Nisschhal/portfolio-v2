'use client'
import InkSprout from '@/public/assets/images/projects/ink-sprout.png'
import BookWiz from '@/public/assets/images/projects/bookwiz.png'
import Carhive from '@/public/assets/images/projects/carhive.png'
import Solemate from '@/public/assets/images/projects/solemate.png'
import TailSprout from '@/public/assets/images/projects/tailsprout.png'
import NextAuth from '@/public/assets/images/projects/next-auth.png'
import OldPort from '@/public/assets/images/projects/old-port.png'
import AiChat from '@/public/assets/images/projects/ai-chat.png'
import ZentryGame from '@/public/assets/images/projects/zentry-game.png'
import CheckCircle from '@/assets/icons/check-circle.svg'
import UpRightArrow from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const portfolioProjects = [
  {
    company: 'Nischal Puri',
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

  {
    company: 'Nischal Puri',
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
]

export const ProjectsSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end end'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <section className='pb-16 lg:py-24' id='projects'>
      <div className='container'>
        <SectionHeader
          eyebrow='My Creations'
          title='Featured Projects'
          description='Explore how I turned ideas into impactful digital solutions.'
        />
        <div className='mt-10 flex flex-col gap-16 md:mt-20' ref={containerRef}>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='sticky px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16'
              style={{
                top: `calc(64px + ${projectIndex * 25}px)`,
              }}
            >
              <div
                className='absolute inset-0 -z-10 opacity-5'
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-sm tracking-widest text-transparent'>
                    <span className='font-semibold uppercase'>
                      {project.company}
                    </span>
                    <span>•</span>
                    <span className='font-semibold uppercase'>
                      {project.year}
                    </span>
                  </div>
                  <h3 className='mt-2 font-serif text-2xl md:mt-5 md:text-4xl'>
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className='mt-1 text-sm text-white/70 md:text-base'>
                      {project.subtitle}
                    </p>
                  )}
                  <hr className='mt-4 border border-white/10 md:mt-4.5' />
                  <ul className='mt-4 flex flex-col gap-4 md:mt-6'>
                    {project.results.map(result => (
                      <li
                        key={result.title}
                        className='flex min-h-[24px] items-start gap-3 text-sm text-white/50 md:text-base'
                      >
                        <span className='size-5 pt-0.5'>
                          <CheckCircle className='h-5 w-5 flex-shrink-0 md:h-6 md:w-6' />
                        </span>
                        <span className='leading-relaxed'>{result.title}</span>
                      </li>
                    ))}
                    <li className='flex items-start gap-2 text-sm text-white/50 md:text-base'>
                      <span className='text-white/90'>Tech Stack:</span>
                      <div className='flex flex-wrap gap-2'>
                        {project.tech.map(tech => (
                          <span
                            key={tech}
                            className='cursor-default rounded-full bg-white/10 px-2 py-1 text-xs text-white/70 transition-colors duration-200 hover:bg-emerald-500 hover:text-black md:text-sm'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>
                  </ul>
                  <a href={project.link} target='_blank'>
                    <button className='mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 md:mt-10 md:w-auto md:px-6'>
                      <span>View Live Site</span>
                      <UpRightArrow className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:-mb-2 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none lg:object-cover'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
