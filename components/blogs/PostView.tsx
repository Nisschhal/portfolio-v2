'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  ArrowLeft,
  Clock,
  Share2,
  Copy, // Changed from Bookmark
  Calendar,
  Layout,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { MDXContent } from './MdxContent'

const PostView = ({ post }: { post: any }) => {
  // --- STATE ---
  const [activeId, setActiveId] = useState('')
  const [progress, setProgress] = useState(0)
  const [indicatorOffset, setIndicatorOffset] = useState(0)

  // NEW LOGIC STATE
  const [toast, setToast] = useState('')
  const [isSharing, setIsSharing] = useState(false)

  // --- REFS ---
  const articleRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // --- LOGIC: SCROLL SPY & PROGRESS BAR ---
  useEffect(() => {
    if (!post?.toc) return

    const sectionIds = post.toc.flatMap((item: any) => [
      item.url.replace('#', ''),
      ...(item.items?.map((sub: any) => sub.url.replace('#', '')) || []),
    ])

    const handleScroll = () => {
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const articleHeight = rect.height
        const scrolled = -rect.top
        const totalScrollable = articleHeight - windowHeight / 2
        const percentage = (scrolled / totalScrollable) * 100
        setProgress(Math.min(Math.max(percentage, 0), 100))
      }

      let currentId = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 250) {
            currentId = `#${id}`
          } else {
            break
          }
        }
      }
      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [post])

  // --- LOGIC: SMOOTH INDICATOR SYNC ---
  useEffect(() => {
    if (activeId && navRef.current) {
      const activeLink = navRef.current.querySelector(
        `a[href="${activeId}"]`
      ) as HTMLElement
      if (activeLink) {
        setIndicatorOffset(activeLink.offsetTop + 2)
      }
    }
  }, [activeId])

  // --- NEW HANDLERS ---
  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2000)
  }

  const handleShare = async () => {
    if (isSharing) return
    setIsSharing(true)
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        showToast('Link Copied')
      }
    } catch (e: any) {
      if (e.name !== 'AbortError') showToast('Error Sharing')
    } finally {
      setIsSharing(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      showToast('Link Copied')
    } catch (err) {
      showToast('Error Copying')
    }
  }

  if (!post) return null

  return (
    <div className='min-h-screen border-b border-white/10 bg-[#030712] font-sans selection:bg-emerald-500/30'>
      {/* 1. PROGRESS BAR (TOP) */}
      <div
        className='fixed top-0 left-0 z-[100] h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]'
        style={{ width: `${progress}%` }}
      />

      {/* 2. HERO SECTION (Cinema View) */}
      <div className='relative flex min-h-[60vh] w-full flex-col overflow-hidden border-b border-white/5'>
        <img
          src={post.image.src}
          className='absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.2] transition-transform duration-[15s]'
          style={{ transform: `scale(1.05) translateY(${progress * 0.1}px)` }} // Subtle parallax
          alt=''
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#030712]/5 via-[#030712]/5 to-[#030712]' />

        <div className='relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-8 pb-16'>
          {/* Top Bar: Navigation */}
          <div className='mb-12 flex items-center justify-between'>
            <Link
              href='/blogs'
              className='group inline-flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 active:scale-95'
            >
              <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1.5' />
              Archive
            </Link>

            <div className='hidden items-center gap-4 text-[10px] font-bold tracking-widest text-gray-500 uppercase sm:flex'>
              <span className='group flex cursor-default items-center gap-2 rounded-lg border border-transparent px-3 py-1.5 transition-all duration-300 hover:border-white/20 hover:bg-white/5'>
                <Calendar className='h-3.5 w-3.5 text-emerald-500 transition-transform group-hover:scale-110' />

                <span className='text-[10px] font-bold text-gray-500 transition-colors group-hover:text-gray-200'>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </span>
              <span className='h-3 w-px bg-white/10'></span>
              <span className='group flex cursor-default items-center gap-2 rounded-lg border border-transparent px-3 py-1.5 transition-all duration-300 hover:border-white/20 hover:bg-white/5'>
                <Clock className='h-3.5 w-3.5 text-emerald-500 transition-transform group-hover:scale-110' />

                <span className='text-[10px] font-bold text-gray-500 transition-colors group-hover:text-gray-200'>
                  {post.readingTime}
                </span>
              </span>
            </div>
          </div>

          {/* Center: Title & Description */}
          <div className='mx-auto max-w-5xl'>
            <div className='mb-6 flex flex-wrap justify-center gap-3'>
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className='rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[9px] font-bold tracking-widest text-emerald-400 uppercase hover:bg-emerald-500/20'
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className='font-space-grotesk mx-auto w-full text-center text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white lg:text-6xl'>
              {post.title}
            </h1>
            <div className='mt-8 flex justify-center gap-6'>
              <div className='w-1 shrink-0 rounded-full bg-gradient-to-b from-emerald-500 to-transparent' />
              <p className='max-w-3xl text-lg leading-relaxed font-light text-gray-400 italic md:text-2xl'>
                "{post.description}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12'>
        {/* LEFT: Author (FIXED STICKY) */}
        <aside className='sticky top-32 order-2 self-start lg:order-1 lg:col-span-3'>
          <div className='relative space-y-4 rounded-2xl border border-white/5 bg-gray-950/50 p-8 backdrop-blur-md transition-all hover:border-white/10'>
            
            {/* TOAST POPUP */}
            <AnimatePresence>
              {toast && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }} 
                  className='absolute -top-12 left-0 right-0 z-50 mx-auto flex w-fit items-center gap-2 bg-emerald-500 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-950 rounded-lg shadow-2xl'
                >
                  <CheckCircle2 size={12} />
                  {toast}
                </motion.div>
              )}
            </AnimatePresence>

            <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500 text-xl font-bold text-gray-950 shadow-lg shadow-emerald-500/20'>
              {post.author.charAt(0).toUpperCase()}
            </div>
            <h4 className='font-space-grotesk text-xl font-bold text-white'>
              {post.author}
            </h4>
            <p className='text-[9px] font-black tracking-widest text-emerald-500 uppercase'>
              Lead Contributor
            </p>
            <div className='flex gap-2 pt-4'>
              <button 
                onClick={handleShare}
                disabled={isSharing}
                className='flex h-10 flex-1 cursor-pointer items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950 active:scale-90 disabled:opacity-50'
              >
                <Share2 size={16} />
              </button>
              <button 
                onClick={handleCopy}
                className='flex h-10 flex-1 cursor-pointer items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950 active:scale-90'
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        </aside>

        {/* CENTER: Blog Content */}
        <main className='order-1 lg:order-2 lg:col-span-6'>
          <article
            ref={articleRef}
            className='prose prose-emerald prose-headings:font-space-grotesk max-w-none'
          >
            <MDXContent code={post.body} />
          </article>
        </main>

        {/* RIGHT: Table of Contents (FIXED STICKY) */}
        <aside className='sticky top-32 hidden self-start lg:order-3 lg:col-span-3 lg:block'>
          <h5 className='mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.5em] text-emerald-500 uppercase opacity-60'>
            <Layout className='h-4 w-4' /> Contents
          </h5>
          <nav
            ref={navRef}
            className='relative flex flex-col gap-6 border-l border-white/5 pl-8'
          >
            <div
              className='absolute left-[-2px] w-[3px] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-300'
              style={{
                height: '14px',
                top: `${indicatorOffset}px`,
                opacity: activeId ? 1 : 0,
              }}
            />

            {post.toc?.map((item: any) => (
              <div key={item.url}>
                <a
                  href={item.url}
                  className={`block cursor-pointer text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    activeId === item.url
                      ? 'translate-x-1 text-emerald-400'
                      : 'text-gray-600 hover:text-gray-400'
                  }`}
                >
                  {item.title}
                </a>
                {item.items?.map((sub: any) => (
                  <a
                    key={sub.url}
                    href={sub.url}
                    className={`mt-3 block cursor-pointer pl-4 text-[10px] font-medium tracking-wide transition-all duration-300 ${
                      activeId === sub.url
                        ? 'text-emerald-400'
                        : 'text-gray-700 hover:text-gray-500'
                    }`}
                  >
                    — {sub.title}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  )
}

export default PostView