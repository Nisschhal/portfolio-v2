'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import memojiImage from '@/assets/images/memoji-computer.png'
import React, { useEffect, useRef, useState } from 'react'
import { Timeline } from '@/components/ui/timeline'
import SectionHeader from '@/components/SectionHeader'

// const Timeline = ({ data }) => {
//   const ref = useRef(null)
//   const containerRef = useRef(null)
//   const [height, setHeight] = useState(0)

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect()
//       setHeight(rect.height)
//     }
//   }, [ref])

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end end'], // Start at top of timeline, end at bottom
//   })

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1])

//   return (
//     <div className='w-full font-sans' ref={containerRef}>
//       <div className='relative mx-auto max-w-5xl px-4 pb-20'>
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className='flex justify-start pt-12 md:gap-12 md:pt-32'
//           >
//             <div className='sticky top-32 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm'>
//               <div className='absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-300/20'>
//                 <div className='h-3 w-3 rounded-full bg-emerald-300 shadow-md' />
//               </div>
//               <h3 className='hidden text-2xl font-bold text-emerald-300 md:block md:pl-16 md:text-4xl'>
//                 {item.title}
//               </h3>
//             </div>
//             <div className='relative w-full pr-4 pl-16 md:pl-4'>
//               <h3 className='mb-4 block text-xl font-bold text-emerald-300 md:hidden'>
//                 {item.title}
//               </h3>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 {item.content}
//               </motion.div>
//             </div>
//           </div>
//         ))}
//         <div
//           style={{ height: height + 'px' }}
//           className='absolute top-0 left-10 z-10 w-[2px] bg-gray-900 [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] dark:bg-black'
//         >
//           <motion.div
//             style={{ height: heightTransform, opacity: opacityTransform }}
//             className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.5)]'
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

export const AboutMe = () => {
  const timelineData = [
    {
      title: '2024 - Present',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white dark:text-white'>
            Team Lead & Full Stack Developer at Neutorline
          </p>
          <p className='mb-6 text-sm text-neutral-400 dark:text-neutral-400'>
            Leading a team to build scalable full-stack applications for a
            US-based startup. Driving projects with Next.js, Node.js, and AWS to
            create impactful solutions.
          </p>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <img
              src='/assets/neutorline-project.jpg'
              alt='Neutorline project screenshot'
              width={500}
              height={500}
              className='h-32 w-full rounded-lg object-cover shadow-[0_0_16px_rgba(0,_0,_0,_0.1)] transition-transform hover:scale-105 md:h-48'
            />
            <img
              src='/assets/neutorline-dashboard.jpg'
              alt='Neutorline dashboard'
              width={500}
              height={500}
              className='h-32 w-full rounded-lg object-cover shadow-[0_0_16px_rgba(0,_0,_0,_0.1)] transition-transform hover:scale-105 md:h-48'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white dark:text-white'>
            Graduated BSc (Hons) Computing
          </p>
          <p className='mb-6 text-sm text-neutral-400 dark:text-neutral-400'>
            Earned my degree from Coventry University via Softwarica College,
            specializing in software engineering and blockchain technology.
          </p>
          <div className='grid grid-cols-1 gap-4'>
            <img
              src='/assets/graduation.jpg'
              alt='Graduation ceremony'
              width={500}
              height={500}
              className='h-32 w-full rounded-lg object-cover shadow-[0_0_16px_rgba(0,_0,_0,_0.1)] transition-transform hover:scale-105 md:h-48'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2022',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white dark:text-white'>
            e-Voting Dissertation Project
          </p>
          <p className='mb-6 text-sm text-neutral-400 dark:text-neutral-400'>
            Built a secure blockchain-based voting system using Ethereum and
            Hardhat, ensuring transparency and immutability.{' '}
            <a
              href='https://github.com/nischalpuri/evoting-project'
              className='text-emerald-300 hover:underline'
            >
              View on GitHub
            </a>
          </p>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <img
              src='/assets/evoting-screenshot.jpg'
              alt='e-Voting project screenshot'
              width={500}
              height={500}
              className='h-32 w-full rounded-lg object-cover shadow-[0_0_16px_rgba(0,_0,_0,_0.1)] transition-transform hover:scale-105 md:h-48'
            />
            <img
              src='/assets/blockchain-diagram.jpg'
              alt='Blockchain architecture diagram'
              width={500}
              height={500}
              className='h-32 w-full rounded-lg object-cover shadow-[0_0_16px_rgba(0,_0,_0,_0.1)] transition-transform hover:scale-105 md:h-48'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2020 - 2021',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white dark:text-white'>
            Leadership Roles at Rotaract
          </p>
          <p className='mb-6 text-sm text-neutral-400 dark:text-neutral-400'>
            Served as Vice President, Secretary, and Project Lead, organizing
            community initiatives like health camps and educational programs.
          </p>
          <div className='grid grid-cols-1 gap-4'>
            <img
              src='/assets/rotaract-event.jpg'
              alt='Rotaract community event'
              width={500}
              height={500}
              className='h-32 w-full rounded-lg object-cover shadow-[0_0_16px_rgba(0,_0,_0,_0.1)] transition-transform hover:scale-105 md:h-48'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2018',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white dark:text-white'>
            A-Level Graduate
          </p>
          <p className='mb-6 text-sm text-neutral-400 dark:text-neutral-400'>
            Completed high school with a focus on science and computer science,
            igniting my passion for coding.
          </p>
          <div className='grid grid-cols-1 gap-4'>
            <img
              src='/assets/highschool-graduation.jpg'
              alt='High school graduation'
              width={500}
              height={500}
              className='h-32 w-full rounded-lg object-cover shadow-[0_0_16px_rgba(0,_0,_0,_0.1)] transition-transform hover:scale-105 md:h-48'
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className='py-16 lg:py-24'>
      <div className='container mx-auto max-w-5xl px-4'>
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center'
        >
          {/* Section Header */}
          <SectionHeader
            eyebrow='About Me'
            title='Crafting Code, Creating Impact'
            description=" I'm Nischal Puri, a full-stack developer and team lead driven
            by a passion for building innovative solutions and fostering
            community impact."
          />
          {/* <h2 className='mt-2 font-serif text-3xl font-bold md:text-5xl dark:text-white'>
            Crafting Code, Creating Impact
          </h2> */}
          {/* <p className='mx-auto mt-4 max-w-2xl text-base text-neutral-400 md:text-lg dark:text-neutral-400'>
            I&apos;m Nischal Puri, a full-stack developer and team lead driven
            by a passion for building innovative solutions and fostering
            community impact.
          </p> */}
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-12 flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12'
        >
          <Image
            src={memojiImage}
            alt='Nischal Puri Avatar'
            className='size-32 rounded-full border border-emerald-300/20 shadow-lg'
          />
          {/* Quote */}
          <div className='relative max-w-2xl pl-6'>
            {/* Fake left gradient border */}
            <div className='absolute top-0 left-0 h-full w-1 rounded bg-gradient-to-b from-emerald-300 to-sky-400' />

            {/* Actual quote block */}
            <blockquote className='text-lg font-light text-neutral-200 italic'>
              “Code is my tool to simplify the world and amplify impact.”
            </blockquote>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='mt-20 w-full'
        >
          <Timeline data={timelineData} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 flex justify-center gap-4'
        >
          <a
            href='/resume.pdf'
            className='inline-flex h-12 items-center gap-2 rounded-xl border border-emerald-300/30 bg-neutral-900 px-6 text-neutral-200 transition hover:bg-emerald-300/20 dark:bg-neutral-900 dark:text-neutral-200'
          >
            Download CV
          </a>
          <a
            href='#contact'
            className='inline-flex h-12 items-center gap-2 rounded-xl bg-emerald-300 px-6 text-gray-900 transition hover:bg-emerald-400 dark:bg-emerald-300 dark:text-gray-900'
          >
            Let’s Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}
