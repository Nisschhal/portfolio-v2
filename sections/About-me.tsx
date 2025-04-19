'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import memojiImage from '@/assets/images/memoji-computer.png'
import React, { useEffect, useRef, useState } from 'react'
import { Timeline } from '@/components/ui/timeline'
import SectionHeader from '@/components/SectionHeader'

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
          className='w-full'
        >
          <Timeline data={timelineData} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 flex flex-col items-center justify-center gap-4 md:flex-row'
        >
          <a
            href='/resume.pdf'
            className='inline-flex h-12 items-center gap-2 rounded-xl border border-emerald-300/30 bg-neutral-900 px-6 text-neutral-200 transition hover:bg-emerald-300/20'
          >
            Download CV
          </a>
          <a
            href='#contact'
            className='inline-flex h-12 items-center gap-2 rounded-xl bg-emerald-300 px-6 text-gray-900 transition hover:bg-emerald-400'
          >
            🚀 Let’s Talk
          </a>
        </motion.div>
        <div className='mt-16'>
          <h3 className='mb-4 text-center text-xl font-semibold text-white'>
            What I Bring to the Table
          </h3>
          <div className='grid grid-cols-2 gap-4 text-center text-sm sm:grid-cols-3 md:grid-cols-4'>
            {[
              'Full Stack Development',
              'UI/UX Design',
              'Leadership',
              'Agile/SCRUM',
              'Open Source Contributor',
              'Cybersecurity Basics',
            ].map(skill => (
              <span
                key={skill}
                className='rounded-lg bg-white/10 py-2 text-white/80 transition hover:bg-white/20'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
