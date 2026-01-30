'use client'

import React from 'react'
import Link from 'next/link'
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp,
  Zap,
  Cpu,
  Globe,
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='relative mt-20 overflow-hidden border-t border-white/5 bg-[#030712]/50 py-20 font-sans'>
      {/* 1. Large Background Watermark */}
      <div className='pointer-events-none absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.02] select-none'>
        <h2 className='font-space-grotesk text-[20rem] leading-none font-black text-white uppercase'>
          DEV
        </h2>
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 gap-16 lg:grid-cols-12'>
          {/* --- BRAND COLUMN --- */}
          <div className='flex flex-col items-start lg:col-span-5'>
            <Link href='/' className='group mb-8 flex items-center gap-3'>
              <div className='font-space-grotesk flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-gray-950 shadow-lg shadow-emerald-500/20 transition-all group-hover:rotate-6'>
                N
              </div>
              <span className='font-space-grotesk text-2xl font-bold tracking-tighter text-white'>
                nischal<span className='text-emerald-500'>.dev</span>
              </span>
            </Link>

            <p className='max-w-sm text-lg leading-relaxed font-light text-gray-400'>
              Documenting the raw process of building, breaking, and scaling
              systems. A digital ledger for the future me and the curious
              developer.
            </p>

            {/* Social Grid */}
            <div className='mt-10 flex gap-4'>
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-400 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:text-emerald-400'
                  aria-label={social.label}
                >
                  <social.icon className='h-5 w-5' />
                </a>
              ))}
            </div>
          </div>

          {/* --- NAVIGATION COLUMN --- */}
          <div className='lg:col-span-2'>
            <h5 className='font-space-grotesk mb-8 text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase'>
              Index
            </h5>
            <nav className='flex flex-col gap-5 text-sm font-medium text-gray-400'>
              <Link
                href='/'
                className='transition-all hover:translate-x-1 hover:text-emerald-400'
              >
                Home
              </Link>
              <Link
                href='/blogs'
                className='transition-all hover:translate-x-1 hover:text-emerald-400'
              >
                Archive
              </Link>
              <Link
                href='/#projects'
                className='transition-all hover:translate-x-1 hover:text-emerald-400'
              >
                Projects
              </Link>
              <Link
                href='/#about'
                className='transition-all hover:translate-x-1 hover:text-emerald-400'
              >
                About
              </Link>
            </nav>
          </div>

          {/* --- SYSTEM STATUS COLUMN --- */}
          <div className='lg:col-span-5'>
            <h5 className='font-space-grotesk mb-8 text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase'>
              Terminal Status
            </h5>
            <div className='rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md'>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-500 uppercase'>
                    <Zap className='h-3 w-3 text-emerald-500' /> Availability
                  </span>
                  <span className='text-[10px] font-black text-emerald-400 uppercase'>
                    Open for Collabs
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-500 uppercase'>
                    <Cpu className='h-3 w-3 text-emerald-500' /> Stack
                  </span>
                  <span className='text-[10px] font-black text-white uppercase'>
                    Next.js / TS / Node
                  </span>
                </div>
                <div className='flex items-center justify-between text-gray-500'>
                  <span className='flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase'>
                    <Globe className='h-3 w-3' /> Location
                  </span>
                  <span className='text-[10px] font-black uppercase'>
                    Global / Remote
                  </span>
                </div>
              </div>
              <div className='mt-6 border-t border-white/5 pt-6'>
                <p className='text-[11px] leading-relaxed text-gray-500 italic'>
                  "The best time to document a fix was yesterday. The second
                  best time is now."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className='mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-10 md:flex-row'>
          <div className='flex flex-col gap-2 text-center md:text-left'>
            <p className='text-[11px] font-bold tracking-widest text-gray-500 uppercase'>
              © {new Date().getFullYear()} Nischal Puri
            </p>
            <p className='flex items-center gap-2 text-[9px] font-black tracking-widest text-gray-700 uppercase'>
              Built with <span className='text-emerald-500/50'>Precision</span>{' '}
              & <span className='text-emerald-500/50'>Next.js</span>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className='group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 px-6 py-3 text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase transition-all hover:bg-emerald-500 hover:text-gray-950'
          >
            Back to Top{' '}
            <ArrowUp className='h-4 w-4 transition-transform group-hover:-translate-y-1' />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
