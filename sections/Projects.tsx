'use client'
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png'
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png'
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png'
import Image from 'next/image'
import CheckCircle from '@/assets/icons/check-circle.svg'
import UpRightArrow from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'
import { useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: darkSaasLandingPage,
  },
  {
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: lightSaasLandingPage,
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
  },
]

export const ProjectsSection = () => {
  const { scrollY } = useScroll()

  const containerRef = useRef<HTMLDivElement>(null)

  // Using useScroll hook to track the scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef, // Targeting the image container
    offset: ['start 0.8', 'end end'], // Setting the scroll offsets
  })

  // Defining transformations based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]) // Mapping scroll progress to opacity
  const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0]) // Mapping scroll progress to rotateX angle

  return (
    <section className='pb-16 lg:py-24'>
      <div className='container'>
        {/* Section Header */}
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digitial experiences.'
        />
        {/* Section Content */}
        <div className='mt-10 flex flex-col gap-16 md:mt-20' ref={containerRef}>
          {portfolioProjects.map((project, projectIndex) => (
            // Card will stack untill scroll of project section is complete as sticky will only work upto the scroll last and then it moves up and no longer sticky in last card
            <Card
              key={project.title}
              className='sticky px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16'
              style={{
                top: `calc(64px + ${projectIndex * 50}px)`,
              }}
            >
              {/* Background noise image */}
              <div
                className='absolute inset-0 -z-10 opacity-5'
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />
              {/* lg:grid lg:grid-cols-2 */}
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                {/* lg:Left Column */}
                <div className='lg:pb-16'>
                  {/* Project Company * year */}
                  <div className='inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-sm tracking-widest text-transparent'>
                    <span className='font-semibold uppercase'>
                      {project.company}
                    </span>
                    <span>&bull;</span>
                    <span className='font-semibold uppercase'>
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className='mt-2 font-serif text-2xl md:mt-5 md:text-4xl'>
                    {project.title}
                  </h3>

                  {/* Seperator */}
                  <hr className='mt-4 border border-white/10 md:mt-4.5' />

                  {/* Project Results */}
                  <ul className='mt-4 flex flex-col gap-4 md:mt-6'>
                    {project.results.map(result => (
                      <li
                        key={result.title}
                        className='flex items-center gap-2 text-sm text-white/50 md:text-base'
                      >
                        <span>
                          <CheckCircle className='inline-block size-5 md:size-6' />
                        </span>
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className='mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 md:mt-10 md:w-auto md:px-6'>
                      <span> View Live Site</span>
                      <UpRightArrow className='size-4' />
                    </button>
                  </a>
                </div>

                {/* Lg: Right column */}
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
