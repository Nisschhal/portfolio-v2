// 'use client'
// import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png'
// import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png'
// import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png'
// import Image from 'next/image'
// import CheckCircle from '@/assets/icons/check-circle.svg'
// import UpRightArrow from '@/assets/icons/arrow-up-right.svg'
// import grainImage from '@/assets/images/grain.jpg'
// import SectionHeader from '@/components/SectionHeader'
// import Card from '@/components/Card'
// import { useScroll, useTransform } from 'motion/react'
// import { useRef } from 'react'
// const portfolioProjects = [
//   {
//     company: 'Acme Corp',
//     year: '2022',
//     title: 'Dark Saas Landing Page',
//     results: [
//       { title: 'Enhanced user experience by 40%' },
//       { title: 'Improved site speed by 50%' },
//       { title: 'Increased mobile traffic by 35%' },
//     ],
//     link: 'https://youtu.be/4k7IdSLxh6w',
//     image: darkSaasLandingPage,
//   },
//   {
//     company: 'Innovative Co',
//     year: '2021',
//     title: 'Light Saas Landing Page',
//     results: [
//       { title: 'Boosted sales by 20%' },
//       { title: 'Expanded customer reach by 35%' },
//       { title: 'Increased brand awareness by 15%' },
//     ],
//     link: 'https://youtu.be/7hi5zwO75yc',
//     image: lightSaasLandingPage,
//   },
//   {
//     company: 'Quantum Dynamics',
//     year: '2023',
//     title: 'AI Startup Landing Page',
//     results: [
//       { title: 'Enhanced user experience by 40%' },
//       { title: 'Improved site speed by 50%' },
//       { title: 'Increased mobile traffic by 35%' },
//     ],
//     link: 'https://youtu.be/Z7I5uSRHMHg',
//     image: aiStartupLandingPage,
//   },
// ]

// export const ProjectsSection = () => {
//   const { scrollY } = useScroll()

//   const containerRef = useRef<HTMLDivElement>(null)

//   // Using useScroll hook to track the scroll progress
//   const { scrollYProgress } = useScroll({
//     target: containerRef, // Targeting the image container
//     offset: ['start 0.8', 'end end'], // Setting the scroll offsets
//   })

//   // Defining transformations based on scroll progress
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]) // Mapping scroll progress to opacity
//   const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0]) // Mapping scroll progress to rotateX angle

//   return (
//     <section className='pb-16 lg:py-24'>
//       <div className='container'>
//         {/* Section Header */}
//         <SectionHeader
//           eyebrow='Real-world Results'
//           title='Featured Projects'
//           description='See how I transformed concepts into engaging digitial experiences.'
//         />
//         {/* Section Content */}
//         <div className='mt-10 flex flex-col gap-16 md:mt-20' ref={containerRef}>
//           {portfolioProjects.map((project, projectIndex) => (
//             // Card will stack untill scroll of project section is complete as sticky will only work upto the scroll last and then it moves up and no longer sticky in last card
//             <Card
//               key={project.title}
//               className='sticky px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16'
//               style={{
//                 top: `calc(64px + ${projectIndex * 50}px)`,
//               }}
//             >
//               {/* Background noise image */}
//               <div
//                 className='absolute inset-0 -z-10 opacity-5'
//                 style={{
//                   backgroundImage: `url(${grainImage.src})`,
//                 }}
//               />
//               {/* lg:grid lg:grid-cols-2 */}
//               <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
//                 {/* lg:Left Column */}
//                 <div className='lg:pb-16'>
//                   {/* Project Company * year */}
//                   <div className='inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-sm tracking-widest text-transparent'>
//                     <span className='font-semibold uppercase'>
//                       {project.company}
//                     </span>
//                     <span>&bull;</span>
//                     <span className='font-semibold uppercase'>
//                       {project.year}
//                     </span>
//                   </div>

//                   {/* Project Title */}
//                   <h3 className='mt-2 font-serif text-2xl md:mt-5 md:text-4xl'>
//                     {project.title}
//                   </h3>

//                   {/* Seperator */}
//                   <hr className='mt-4 border border-white/10 md:mt-4.5' />

//                   {/* Project Results */}
//                   <ul className='mt-4 flex flex-col gap-4 md:mt-6'>
//                     {project.results.map(result => (
//                       <li
//                         key={result.title}
//                         className='flex items-center gap-2 text-sm text-white/50 md:text-base'
//                       >
//                         <span>
//                           <CheckCircle className='inline-block size-5 md:size-6' />
//                         </span>
//                         {result.title}
//                       </li>
//                     ))}
//                   </ul>
//                   <a href={project.link}>
//                     <button className='mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 md:mt-10 md:w-auto md:px-6'>
//                       <span> View Live Site</span>
//                       <UpRightArrow className='size-4' />
//                     </button>
//                   </a>
//                 </div>

//                 {/* Lg: Right column */}
//                 <div className='relative'>
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     className='mt-8 -mb-4 md:-mb-2 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none lg:object-cover'
//                   />
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// 'use client'
// import InkSprout from '@/public/assets/images/projects/ink-sprout.png'
// import BookWiz from '@/public/assets/images/projects/bookwiz.png'
// import Carhive from '@/public/assets/images/projects/carhive.png'
// import Solemate from '@/public/assets/images/projects/solemate.png'
// import TailSprout from '@/public/assets/images/projects/tailsprout.png'
// import NextAuth from '@/public/assets/images/projects/next-auth.png'
// import OldPort from '@/public/assets/images/projects/old-port.png'
// import CheckCircle from '@/assets/icons/check-circle.svg'
// import UpRightArrow from '@/assets/icons/arrow-up-right.svg'
// import grainImage from '@/assets/images/grain.jpg'
// import SectionHeader from '@/components/SectionHeader'
// import Card from '@/components/Card'
// import { useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'
// import Image from 'next/image'

// const portfolioProjects = [
//   {
//     company: 'Nischal Puri',
//     year: '2025',
//     title: 'Ink Sprout',
//     results: [
//       { title: 'Built a scalable e-commerce platform for stationery' },
//       { title: 'Integrated secure authentication and payment systems' },
//       { title: 'Enhanced state management with Zustand' },
//     ],
//     tech: ['Next.js', 'Drizzle', 'PostgreSQL', 'Zustand'],
//     link: 'https://ink-sprout-v2-nischal.vercel.app',
//     image: InkSprout,
//   },
//   {
//     company: 'Nischal Puri',
//     year: '2025',
//     title: 'Book Wiz (Library)',
//     results: [
//       { title: 'Developed a university library management system' },
//       { title: 'Implemented secure user authentication with Clerk' },
//       { title: 'Optimized database queries with Prisma' },
//     ],
//     tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Clerk'],
//     link: 'https://uni-book-wiz.vercel.app',
//     image: BookWiz,
//   },
//   {
//     company: 'Nischal Puri',
//     year: '2024',
//     title: 'Car Hive',
//     results: [
//       { title: 'Created a car e-commerce platform with real-time features' },
//       { title: 'Integrated Kinde Auth for secure login' },
//       { title: 'Managed state with Redux for seamless UX' },
//     ],
//     tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Kinde Auth', 'Redux'],
//     link: 'https://carhive-dev-nischal.vercel.app',
//     image: Carhive,
//   },
//   {
//     company: 'Nischal Puri',
//     year: '2024',
//     title: 'Sole Mate',
//     results: [
//       { title: 'Built a shoe e-commerce platform with dynamic cart' },
//       { title: 'Integrated Clerk for secure authentication' },
//       { title: 'Optimized performance with Drizzle and Zustand' },
//     ],
//     tech: ['Next.js', 'Drizzle', 'PostgreSQL', 'Clerk', 'Zustand'],
//     link: 'https://sole-mate-dev-nisal.vercel.app',
//     image: Solemate,
//   },
//   {
//     company: 'Nischal Puri',
//     year: '2025',
//     title: 'Tail Sprout',
//     results: [
//       { title: 'Designed a modern landing page for plant sales' },
//       { title: 'Implemented responsive UI with animations' },
//       { title: 'Focused on lightweight, performant code' },
//     ],
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     link: 'https://tail-sprout-nisal-dev.vercel.app',
//     image: TailSprout,
//   },
//   {
//     company: 'Nischal Puri',
//     year: '2025',
//     title: 'Next Auth',
//     results: [
//       { title: 'Developed a secure authentication system' },
//       { title: 'Integrated NextAuth.js for Google/GitHub login' },
//       { title: 'Ensured robust RBAC with Prisma' },
//     ],
//     tech: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
//     link: 'https://next-auth-nisschal.vercel.app',
//     image: NextAuth,
//   },
//   {
//     company: 'Nischal Puri',
//     year: '2025',
//     title: 'Personal Portfolio',
//     results: [
//       {
//         title:
//           'Built a sleek Next.js portfolio that landed my entry-level role, paving the way to Team Lead.',
//       },
//       {
//         title: 'Boosted UX with vibrant GSAP and Framer Motion animations.',
//       },
//       {
//         title:
//           'Showcased full-stack skills for professional and academic impact.',
//       },
//     ],
//     tech: [
//       'Next.js',
//       'Prisma',
//       'PostgreSQL',
//       'NextAuth.js',
//       'TailwindCSS',
//       'Framer Motion',
//     ],
//     link: 'https://nischal-portfolio-mu.vercel.app/',
//     image: OldPort,
//   },
// ]

// export const ProjectsSection = () => {
//   const containerRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start 0.8', 'end end'],
//   })
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
//   const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0])

//   return (
//     <section className='pb-16 lg:py-24' id='projects'>
//       <div className='container'>
//         <SectionHeader
//           eyebrow='My Creations'
//           title='Featured Projects'
//           description='Explore how I turned ideas into impactful digital solutions.'
//         />
//         <div className='mt-10 flex flex-col gap-16 md:mt-20' ref={containerRef}>
//           {portfolioProjects.map((project, projectIndex) => (
//             <Card
//               key={project.title}
//               className='sticky px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16'
//               style={{
//                 top: `calc(64px + ${projectIndex * 25}px)`,
//               }}
//             >
//               <div
//                 className='absolute inset-0 -z-10 opacity-5'
//                 style={{
//                   backgroundImage: `url(${grainImage.src})`,
//                 }}
//               />
//               <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
//                 <div className='lg:pb-16'>
//                   <div className='inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-sm tracking-widest text-transparent'>
//                     <span className='font-semibold uppercase'>
//                       {project.company}
//                     </span>
//                     <span>•</span>
//                     <span className='font-semibold uppercase'>
//                       {project.year}
//                     </span>
//                   </div>
//                   <h3 className='mt-2 font-serif text-2xl md:mt-5 md:text-4xl'>
//                     {project.title}
//                   </h3>
//                   <hr className='mt-4 border border-white/10 md:mt-4.5' />
//                   <ul className='mt-4 flex flex-col gap-4 md:mt-6'>
//                     {project.results.map(result => (
//                       <li
//                         key={result.title}
//                         className='flex items-start gap-2 text-sm text-white/50 md:text-base'
//                       >
//                         <CheckCircle className='inline-block size-5 md:size-6' />
//                         <span>{result.title}</span>
//                       </li>
//                     ))}
//                     <li className='flex items-center gap-2 border border-white text-sm text-white/50 md:text-base'>
//                       <span className='text-white/90'>Tech Stack:</span>{' '}
//                       {project.tech.map(tech => (
//                         <span key={tech}>{tech}</span>
//                       ))}
//                     </li>
//                   </ul>
//                   <a href={project.link}>
//                     <button className='mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 md:mt-10 md:w-auto md:px-6'>
//                       <span>View Live Site</span>
//                       <UpRightArrow className='size-4' />
//                     </button>
//                   </a>
//                 </div>
//                 <div className='relative'>
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     className='mt-8 -mb-4 md:-mb-2 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none lg:object-cover'
//                   />
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import InkSprout from '@/public/assets/images/projects/ink-sprout.png'
import BookWiz from '@/public/assets/images/projects/bookwiz.png'
import Carhive from '@/public/assets/images/projects/carhive.png'
import Solemate from '@/public/assets/images/projects/solemate.png'
import TailSprout from '@/public/assets/images/projects/tailsprout.png'
import NextAuth from '@/public/assets/images/projects/next-auth.png'
import OldPort from '@/public/assets/images/projects/old-port.png'
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
      'NextAuth.js',
      'TailwindCSS',
      'Framer Motion',
    ],
    link: 'https://nischal-portfolio-mu.vercel.app/',
    image: OldPort,
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
