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
      title: '2026 — Present',
      content: (
        <div className="group">
          <div className='mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1'>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className='text-[10px] font-bold text-emerald-300 uppercase tracking-widest'>Currently Available</span>
          </div>

          <p className='mb-2 text-lg font-semibold text-white'>
            AI-First Full Stack Developer — <span className="text-emerald-300">Remote Contract</span>
          </p>
          <div className='mb-6 text-sm text-neutral-400 leading-relaxed'>
            <p className="mb-5">
              Working directly with clients to ship <span className="text-white font-medium">production web platforms and AI-powered workflows</span>—owning architecture, infrastructure, and delivery end to end.
            </p>

            <div className='mb-2 flex items-baseline gap-2'>
              <span className='text-white font-semibold text-sm'>Merobhumi</span>
              <span className='text-[10px] font-mono text-neutral-500 uppercase tracking-widest'>2026 — Present · Remote · Real Estate</span>
            </div>
            <p className="mb-3">
              Engaged as the <span className="text-white font-medium">sole engineer</span> on a real estate platform—owning the product end to end and standing up the entire IT infrastructure <span className="text-white font-medium">from scratch.</span>
            </p>

            <div className="space-y-3 border-l border-emerald-500/20 pl-4">
              <div>
                <span className='text-emerald-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Deployment 01: Real Estate Platform</span>
                <p>
                  Building a complex property application with <span className='text-sky-300'>data-rich, dynamic dashboards</span> that surface large listing datasets in real time. Built on <span className='text-white font-medium'>Next.js</span> so listings render server-side—critical for search visibility in a market where discovery happens on Google.
                </p>
              </div>

              <div>
                <span className='text-emerald-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Deployment 02: Dedicated Backend</span>
                <p>
                  Deliberately split the API into a standalone <span className='text-white font-medium'>Node / Express</span> service instead of leaning on framework routes, with a <span className='text-sky-300'>self-built OAuth</span> layer—keeping the backend free to scale independently as the product grows.
                </p>
              </div>

              <div>
                <span className='text-emerald-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Deployment 03: Auth & Access Control</span>
                <p>
                  Built authentication end to end—<span className='text-white font-medium'>JWT tokens backed by server-side sessions</span>—with <span className='text-sky-300'>role-aware middleware</span> that resolves who the caller is on every request and redirects them to the right surface, so no one lands on a route outside their permissions. Property submissions are validated before they reach the database, keeping the dashboards and AI search trustworthy at the source.
                </p>
              </div>

              <div>
                <span className='text-emerald-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Deployment 04: Infrastructure From Zero</span>
                <p>
                  Architected and now maintain the company&apos;s full <span className='text-white font-medium'>IT infrastructure</span>—environments, deployments, and CI/CD—built from the ground up.
                </p>
              </div>

              <div>
                <span className='text-emerald-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Deployment 05: Payments & Notifications</span>
                <p>
                  Integrated a <span className='text-white font-medium'>payment gateway</span> alongside <span className='text-sky-300'>SMS and email alerting</span>, powering both the authentication flow and transactional updates to users.
                </p>
              </div>

              <div>
                <span className='text-emerald-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Approach: AI-First</span>
                <p>
                  Shipped an in-product <span className='text-sky-300'>AI chat interface</span>—open to first-time visitors and signed-in users alike—that answers property questions and surfaces dashboard data on request. Built with the AI SDK, using <span className='text-white font-medium'>tool calling</span> to query the database directly so results reflect live listings rather than a stale snapshot.
                </p>
              </div>
            </div>

            <div className='mt-6 mb-2 flex items-baseline gap-2'>
              <span className='text-white font-semibold text-sm'>WN Wellness Equipment</span>
              <span className='text-[10px] font-mono text-neutral-500 uppercase tracking-widest'>2025 · Contract · B2B Wholesale</span>
            </div>
            <p className="mb-3">
              Delivered a <span className='text-white font-medium'>bold, SEO-rich storefront</span> for an industrial gym equipment wholesaler serving all 77 districts of Nepal.
            </p>

            <div className="space-y-3 border-l border-sky-500/20 pl-4">
              <div>
                <span className='text-sky-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>Built For How B2B Actually Sells</span>
                <p>
                  Designed around a <span className='text-white font-medium'>quote-request flow</span> rather than a cart—equipment deals close through conversation, not checkout—with server-rendered pages so buyers find them on Google.
                </p>
              </div>

              <div>
                <span className='text-sky-300 font-mono text-[10px] uppercase tracking-widest block mb-1'>AI Mode Discovery</span>
                <p>
                  Added an <span className='text-sky-300'>AI chat</span> that lets buyers describe the setup they need in plain language instead of drilling through equipment categories.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <span className='text-neutral-500 font-mono text-[10px] uppercase tracking-widest block mb-2'>Stack</span>
              <div className="flex flex-wrap gap-2">
                {['Next.js (SSR + SEO)', 'Node / Express', 'OAuth', 'AI SDK', 'Tool Calling', 'Cloudinary', 'Payment Gateway', 'SMS / Email', 'CI/CD'].map((tag) => (
                  <span key={tag} className="text-[10px] border border-white/10 bg-white/5 px-2 py-0.5 rounded text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
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