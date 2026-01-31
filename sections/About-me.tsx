'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import memojiImage from '@/assets/images/memoji-computer.png'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import SectionHeader from '@/components/SectionHeader'
import { SkillsSection } from './On-the-table'

export const AboutMe = () => {
  const timelineData = [
    {
      title: 'Oct — Dec, 2025',
      content: (
        <div className="group">
          <p className='mb-2 text-lg font-semibold text-white'>
            Frontend Architect — <span className="text-emerald-300">Supreme IT Solutions</span>
          </p>
          <div className='mb-6 text-sm text-neutral-400 leading-relaxed'>
            <p className="mb-4">
              Led the design and launch of high-performance web platforms, focusing on making complex business tools feel <span className="text-white font-medium">simple, fast, and modern.</span>
            </p>
            
            <div className="space-y-3 border-l border-emerald-500/20 pl-4">
              <div>
                <span className='text-emerald-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Deployment 01: All-in-One Service Hub</span>
                <p>
                  Built <span className='text-white font-medium'>NetoGroup AI</span> from the ground up—a massive platform that combines education, exam prep, and travel into one seamless experience.
                </p>
              </div>

              <div>
                <span className='text-emerald-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Deployment 02: Enterprise Control Centers</span>
                <p>
                  Designed powerful <span className='text-sky-300'>Admin Dashboards</span> that allow managers to organize and filter massive amounts of business data instantly.
                </p>
              </div>

              <div>
                <span className='text-emerald-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Deployment 03: High-Speed E-Commerce</span>
                <p>
                  Created a modern online store for <span className='text-white font-medium'>BT Planet</span> (major electronics retailer). Optimized the code so the site loads <span className="text-sky-300">instantly</span>, even with thousands of products.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2024 — 2025',
      content: (
        <div className="group">
          <p className='mb-2 text-lg font-semibold text-white'>
            Full Stack Developer & Team Lead — <span className="text-emerald-300">Neutroline (US Enterprise)</span>
          </p>
          <div className='mb-6 text-sm text-neutral-400 leading-relaxed'>
            <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1'>
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className='text-[10px] font-bold text-emerald-300 uppercase tracking-widest'>Promoted to Tech Lead in 3 Months</span>
            </div>

            <p className="mb-4">
              Took full ownership of technical decisions for a <span className="text-white">US-based startup</span>, bridging the gap between artificial intelligence and real-world business needs.
            </p>

            <div className="space-y-3 border-l border-sky-500/20 pl-4">
              <p>
                <span className='text-sky-300 font-medium'>AI-Powered Systems:</span> Directed the build of an intelligent appointment manager using <span className='text-white'>AI Agents</span> to automate client scheduling.
              </p>
              <p>
                <span className='text-sky-300 font-medium'>Team Leadership:</span> Hired and mentored a <span className='text-white'>cross-functional team of 8+</span> designers and developers to maintain high development speed.
              </p>
              <p>
                <span className='text-sky-300 font-medium'>Workflow Automation:</span> Implemented "smart" background tasks that handle complex business logic automatically without slowing down the user.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2022 — 2023',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white'>
            Technical Assistant & Strategy — <span className="text-emerald-300">Excellence Institution Center</span>
          </p>
          <p className='mb-6 text-sm text-neutral-400 leading-relaxed'>
            Helped a traditional education business move entirely online. I modernized their IT systems and created a <span className='text-emerald-300'>digital roadmap</span> that allowed them to scale and reach more students across the web.
          </p>
        </div>
      ),
    },
    {
      title: '2020 — 2023',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white'>
            Academic Core — <span className="text-emerald-300">BSc (Hons) Computing</span>
          </p>
          <div className='mb-6 text-sm text-neutral-400 leading-relaxed'>
            Graduated from <span className="text-white">Softwarica / Coventry University</span> with a focus on building secure, decentralized software.
            <div className="mt-2 flex flex-wrap gap-2">
              {['Blockchain e-Voting', 'E-Commerce Logic', 'IoT Security'].map((tag) => (
                <span key={tag} className="text-[10px] border border-white/10 bg-white/5 px-2 py-0.5 rounded text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2018 — 2023',
      content: (
        <div>
          <p className='mb-2 text-lg font-semibold text-white'>
            Leadership & Community — <span className="text-emerald-300">Rotaract Vice President</span>
          </p>
          <p className='mb-6 text-sm text-neutral-400 leading-relaxed'>
            Dedicated 5 years to social impact. Led <span className='text-emerald-300'>national-level fundraising</span> and technical training projects, helping public school teachers gain essential digital skills.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section className='py-16 lg:py-24' id='about'>
      <div className='container mx-auto max-w-5xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <SectionHeader
            eyebrow='Registry // Journey'
            title='The Evolution of an Engineer'
            description="A chronological record of high-impact systems, leadership roles, and technical milestones."
          />
        </motion.div>

        {/* Quote & Avatar Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-12 flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12'
        >
          <div className="relative group">
             {/* Glowing effect behind avatar */}
             <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full group-hover:bg-emerald-500/40 transition-all duration-500" />
             <Image
                src={memojiImage}
                alt='Nischal Puri Avatar'
                className='relative size-32 rounded-full border border-emerald-300/20 shadow-lg'
              />
          </div>

          <div className='relative max-w-2xl pl-6'>
            <div className='absolute top-0 left-0 h-full w-1 rounded bg-gradient-to-b from-emerald-300 to-sky-400' />
            <blockquote className='text-lg font-light text-neutral-200 italic leading-relaxed'>
              “I believe code shouldn’t just work—it should create <span className="text-emerald-300 font-medium">real-world value</span> and solve problems before they even happen.”
            </blockquote>
          </div>
        </motion.div>

        {/* Timeline Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='w-full mt-10'
        >
          <Timeline data={timelineData} />
        </motion.div>
        
        <SkillsSection />
      </div>
    </section>
  )
}