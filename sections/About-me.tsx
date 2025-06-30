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
      title: '2025 – Present',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white'>
            Team Lead & Full Stack Developer — Neutorline Pvt. Ltd.
          </p>
          <p className='mb-6 text-sm text-neutral-400'>
            Leading the end-to-end development of{' '}
            <span className='font-semibold text-white'>Appointege</span>, an
            AI-powered appointment management platform built for the US-based
            Neutrosys group. I oversee a multidisciplinary team of developers
            and UI/UX designers — uniting technical architecture with seamless
            user experience design.
            <br />
            <br />
            <span className='text-white/90'>Engineering Focus:</span>
            <br />• Built with <span className='text-white'>Next.js</span>,{' '}
            <span className='text-white'>React</span>,{' '}
            <span className='text-white'>PostgreSQL</span>,{' '}
            <span className='text-white'>Prisma</span>, and{' '}
            <span className='text-white'>TailwindCSS</span>.
            <br />• Integrated secure authentication, calendar logic, and
            automated notifications.
            <br />• CI/CD managed via <span className='text-white'>
              Vercel
            </span>{' '}
            and <span className='text-white'>GitHub Actions</span>.
            <br />
            <br />
            <span className='text-white/90'>UI/UX & Team Leadership:</span>
            <br />• Collaborating with designers to create intuitive, responsive
            user flows.
            <br />• Leading both frontend and backend teams across Agile
            sprints, with regular code reviews and design critiques.
            <br />
            <br />
            <span className='text-white/90'>AI Edge:</span> Integrated{' '}
            <span className='text-white'>LangChain</span>,{' '}
            <span className='text-white'>LangGraph</span>, and{' '}
            <span className='text-white'>Anthropic</span> APIs to deliver
            agentic workflows and intelligent in-app suggestions — optimizing
            the appointment experience for enterprise admins.
          </p>
        </div>
      ),
    },
    {
      title: '2022 – 2023',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white'>
            Technical Assistant & Digital Strategy Lead — Excellence Institution
            Center
          </p>
          <p className='mb-6 text-sm text-neutral-400'>
            Digitally transformed a Loksewa prep startup during college.
            <br />
            <br />
            <span className='text-white/90'>Key Highlights:</span>
            <br />• Collaborated on official website dev & UX.
            <br />• Managed IT infra & trained non-tech staff.
            <br />• Drove digital marketing and automation.
            <br />
            <br />
            <span className='text-white/90'>Outcome:</span> Enabled a
            traditional education setup to scale online and improve operational
            efficiency.
          </p>
        </div>
      ),
    },
    {
      title: '2020 – 2023',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white'>
            BSc (Hons) Computing — Coventry University (via Softwarica College)
          </p>
          <p className='mb-6 text-sm text-neutral-400'>
            Specialized in Software Engineering, Blockchain, and Full Stack Dev.
            <br />
            <br />
            <span className='text-white/90'>Notable Projects:</span>
            <br />• <strong className='text-white'>e-Voting:</strong>
            Decentralized system using{' '}
            <span className='text-white'>Ethereum</span>,{' '}
            <span className='text-white'>Hardhat</span>,{' '}
            <span className='text-white'>MetaMask</span>.{' '}
            <a
              href='https://github.com/nischalpuri/evoting-project'
              className='text-emerald-300 hover:underline'
            >
              GitHub →
            </a>
            <br />• <strong className='text-white'>Ink Sprout:</strong>
            E-commerce with auth, product search, and Stripe.
            <br />• <strong className='text-white'>Fodery:</strong>
            Food delivery app with live tracking and agile flow.
            <br />• <strong className='text-white'>Sensor Detector:</strong>
            IoT-based intruder alert using{' '}
            <span className='text-white'>Raspberry Pi</span>.
          </p>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <img
              src='/assets/graduation.jpg'
              alt='Graduation'
              className='h-32 w-full rounded-lg object-cover shadow-lg transition-transform hover:scale-105 md:h-48'
            />
            <img
              src='/assets/evoting-screenshot.jpg'
              alt='e-Voting project'
              className='h-32 w-full rounded-lg object-cover shadow-lg transition-transform hover:scale-105 md:h-48'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2018 – 2023',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white'>
            Leadership & Service — Rotaract Club of Dillibazar-Kathmandu
          </p>
          <p className='mb-6 text-sm text-neutral-400'>
            Served in multiple leadership roles in one of Nepal’s most active
            Rotaract clubs.
            <br />
            <br />
            <span className='text-white/90'>Roles:</span>
            <br />• IT & Publication Officer (2018–2019)
            <br />• Secretary (2019–2020)
            <br />• Vice President (2020–2021)
            <br />• Community Adviser (2021–2023)
            <br />
            <br />
            <span className='text-white/90'>Projects:</span>
            <br />• PUBG Charity Tournament (National) — Fundraised for orphan
            support.
            <br />• Digital Dillibazar — Promoted QR & digital payment
            awareness.
            <br />• TEACH — Trained public school teachers in tech & literacy.
            <br />• Self-Defense Workshop — School safety & empowerment event.
          </p>
          <div className='grid grid-cols-1 gap-4'>
            <img
              src='/assets/rotaract-event.jpg'
              alt='Rotaract event'
              className='h-32 w-full rounded-lg object-cover shadow-lg transition-transform hover:scale-105 md:h-48'
            />
          </div>
        </div>
      ),
    },
    {
      title: '2016 – 2018',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white'>
            A-Level Graduate — Chelsea International Academy
          </p>
          <p className='mb-6 text-sm text-neutral-400'>
            Completed A-Levels in Physics, Chemistry, Math, and Computer
            Science.
            <br />
            <br />
            <span className='text-white/90'>What I Gained:</span>
            <br />• First exposure to structured programming.
            <br />• Built foundational logic & academic discipline.
          </p>
          <div className='grid grid-cols-1 gap-4'>
            <img
              src='/assets/highschool-graduation.jpg'
              alt='High school graduation'
              className='h-32 w-full rounded-lg object-cover shadow-lg transition-transform hover:scale-105 md:h-48'
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className='py-16 lg:py-24' id='about'>
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
