// // 'use client'

// // import React, { useState, useEffect } from 'react'
// // import {
// //   ArrowLeft,
// //   Clock,
// //   Share2,
// //   Bookmark,
// //   Calendar,
// //   Hash,
// //   Layout,
// // } from 'lucide-react'
// // import Link from 'next/link'

// // const PostView = ({ post }: { post: any }) => {
// //   const [activeId, setActiveId] = useState('')
// //   const [progress, setProgress] = useState(0)

// //   useEffect(() => {
// //     if (!post?.toc) return

// //     const handleScroll = () => {
// //       const scrollY = window.scrollY
// //       const totalHeight =
// //         document.documentElement.scrollHeight - window.innerHeight
// //       setProgress((scrollY / totalHeight) * 100)

// //       const sectionIds = post.toc.flatMap((item: any) => [
// //         item.url.replace('#', ''),
// //         ...(item.items?.map((sub: any) => sub.url.replace('#', '')) || []),
// //       ])

// //       const current = sectionIds.find((id: string) => {
// //         const el = document.getElementById(id)
// //         if (el) {
// //           const rect = el.getBoundingClientRect()
// //           return rect.top >= 0 && rect.top <= 250
// //         }
// //         return false
// //       })
// //       if (current) setActiveId(`#${current}`)
// //     }

// //     window.addEventListener('scroll', handleScroll)
// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [post])

// //   if (!post) return null

// //   return (
// //     <div className='min-h-screen border border-white bg-[#030712] font-sans selection:bg-emerald-500/30'>
// //       <div
// //         className='fixed top-0 left-0 z-[100] h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]'
// //         style={{ width: `${progress}%` }}
// //       />

// //       {/* Hero */}
// //       <div className='relative flex min-h-[60vh] w-full items-center overflow-hidden md:h-[75vh]'>
// //         <img
// //           src={post.image.src}
// //           className='absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.2]'
// //           alt={post.title}
// //         />
// //         <div className='absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40' />
// //         <div className='relative z-10 mx-auto w-full max-w-5xl px-6 py-20'>
// //           <Link
// //             href='/blogs'
// //             className='group mb-8 inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-[10px] font-bold tracking-widest text-emerald-400 uppercase transition-all hover:bg-emerald-500 hover:text-gray-950'
// //           >
// //             <ArrowLeft className='h-3.5 w-3.5 transition-transform group-hover:-translate-x-1' />{' '}
// //             Archive
// //           </Link>
// //           <div className='mb-6 flex gap-4 text-[10px] font-bold tracking-widest text-emerald-500 uppercase'>
// //             <span className='rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1'>
// //               {post.tags[0]}
// //             </span>
// //             <span className='flex items-center gap-2 text-gray-500'>
// //               <Clock className='h-4 w-4' /> {post.readingTime.text}
// //             </span>
// //           </div>
// //           <h1 className='font-space-grotesk text-4xl leading-[1] font-extrabold tracking-tight text-white sm:text-6xl md:text-8xl'>
// //             {post.title}
// //           </h1>
// //         </div>
// //       </div>

// //       <div className='mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12'>
// //         {/* Left: Author */}
// // <aside className='order-2 lg:order-1 lg:col-span-3'>
// //   <div className='sticky top-32 space-y-8'>
// //     <div className='rounded-2xl border border-white/5 bg-gray-950/50 p-6 backdrop-blur-md'>
// //       <h4 className='font-space-grotesk mb-1 text-lg font-bold text-white'>
// //         {post.author}
// //       </h4>
// //       <p className='mb-6 text-[10px] font-bold tracking-widest text-emerald-500 uppercase'>
// //         Contributor
// //       </p>
// //       <div className='flex gap-2'>
// //         <button className='flex h-10 flex-1 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950'>
// //           <Share2 className='h-4 w-4' />
// //         </button>
// //         <button className='flex h-10 flex-1 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950'>
// //           <Bookmark className='h-4 w-4' />
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// // </aside>

// //         {/* Center: Content */}
// //         <main className='order-1 lg:order-2 lg:col-span-6'>
// //           <article className='prose prose-emerald prose-invert max-w-none'>
// //             {/* MDX CONTENT WILL RENDER HERE LATER */}
// //             <div className='mb-10 text-gray-400 italic'>
// //               Note: MDX content integration pending...
// //             </div>

// //             {/* Visual helper to see sections for ToC spy */}
// //             {post.toc?.map((section: any) => (
// //               <div
// //                 key={section.url}
// //                 id={section.url.replace('#', '')}
// //                 className='mb-12 scroll-mt-32'
// //               >
// //                 <h2 className='font-space-grotesk text-white'>
// //                   {section.title}
// //                 </h2>
// //                 <div className='flex h-64 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-[10px] tracking-widest text-gray-600 uppercase'>
// //                   Content Section Placeholder
// //                 </div>
// //               </div>
// //             ))}
// //           </article>
// //         </main>

// //         {/* Right: Table of Contents */}
// //         <aside className='hidden lg:order-3 lg:col-span-3 lg:block'>
// //           <div className='sticky top-32'>
// //             <h5 className='mb-8 flex items-center gap-3 text-[10px] font-black tracking-widest text-emerald-500 uppercase'>
// //               <Layout className='h-4 w-4' /> Contents
// //             </h5>
// //             <nav className='flex flex-col gap-4 border-l border-white/5 pl-6'>
// //               {post.toc?.map((item: any) => (
// //                 <div key={item.url}>
// //                   <a
// //                     href={item.url}
// //                     className={`block text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:text-emerald-400 ${activeId === item.url ? 'translate-x-2 text-emerald-400' : 'text-gray-600'}`}
// //                   >
// //                     {item.title}
// //                   </a>
// //                   {item.items?.map((sub: any) => (
// //                     <a
// //                       key={sub.url}
// //                       href={sub.url}
// //                       className={`mt-2 block pl-4 text-[10px] font-medium tracking-wide transition-all duration-300 hover:text-emerald-400 ${activeId === sub.url ? 'text-emerald-400' : 'text-gray-700'}`}
// //                     >
// //                       — {sub.title}
// //                     </a>
// //                   ))}
// //                 </div>
// //               ))}
// //             </nav>
// //           </div>
// //         </aside>
// //       </div>
// //     </div>
// //   )
// // }

// // export default PostView
// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import {
//   ArrowLeft,
//   Clock,
//   Share2,
//   Bookmark,
//   Calendar,
//   Layout,
//   Command,
// } from 'lucide-react'
// import Link from 'next/link'
// import { MDXContent } from './Mdx-content'

// const PostView = ({ post }: { post: any }) => {
//   const [activeId, setActiveId] = useState('')
//   const [progress, setProgress] = useState(0)
//   const [indicatorOffset, setIndicatorOffset] = useState(0)

//   // REFS: Required for the "Brains" of the page
//   const articleRef = useRef<HTMLElement>(null)
//   const navRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!post?.toc) return

//     const sectionIds = post.toc.flatMap((item: any) => [
//       item.url.replace('#', ''),
//       ...(item.items?.map((sub: any) => sub.url.replace('#', '')) || []),
//     ])

//     const handleScroll = () => {
//       // 1. PROGRESS BAR LOGIC
//       if (articleRef.current) {
//         const rect = articleRef.current.getBoundingClientRect()
//         const windowHeight = window.innerHeight
//         const articleHeight = rect.height
//         const scrolled = -rect.top
//         // Progress finishes exactly when MDX content finishes
//         const totalScrollable = articleHeight - windowHeight / 2
//         const percentage = (scrolled / totalScrollable) * 100
//         setProgress(Math.min(Math.max(percentage, 0), 100))
//       }

//       // 2. SCROLL SPY (HIGHLIGHTING) LOGIC
//       let currentId = ''
//       for (const id of sectionIds) {
//         const el = document.getElementById(id)
//         if (el) {
//           const rect = el.getBoundingClientRect()
//           if (rect.top <= 250) {
//             // Trigger point
//             currentId = `#${id}`
//           } else {
//             break
//           }
//         }
//       }
//       setActiveId(currentId)
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     handleScroll()
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [post])

//   // 3. SLIDING INDICATOR LOGIC
//   useEffect(() => {
//     if (activeId && navRef.current) {
//       const activeLink = navRef.current.querySelector(
//         `a[href="${activeId}"]`
//       ) as HTMLElement
//       if (activeLink) {
//         // Moves the green line to the exact pixel of the active link
//         setIndicatorOffset(activeLink.offsetTop + 2)
//       }
//     }
//   }, [activeId])

//   if (!post) return null

//   return (
//     <div className='min-h-screen font-sans selection:bg-emerald-500/30'>
//       {/* Progress Bar */}
//       <div
//         className='fixed top-0 left-0 z-[100] h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]'
//         style={{ width: `${progress}%` }}
//       />

//       {/* Hero Section */}
//       <div className='relative flex min-h-[60vh] w-full flex-col overflow-hidden border-b border-white/5'>
//         <img
//           src={post.image.src}
//           className='absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.2] transition-transform duration-[10s]'
//           alt=''
//         />
//         <div className='absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-[#030712]/40 to-[#030712]' />

//         <div className='relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-8 pb-16'>
//           <div className='mb-12 flex items-center justify-between'>
//             <Link
//               href='/blogs'
//               className='group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold tracking-widest text-emerald-400 uppercase transition-all hover:bg-emerald-500 hover:text-gray-950'
//             >
//               <ArrowLeft className='h-3.5 w-3.5 transition-transform group-hover:-translate-x-1' />
//               Archive
//             </Link>

//             <div className='hidden items-center gap-4 text-[10px] font-bold tracking-widest text-gray-500 uppercase sm:flex'>
//               <span className='flex items-center gap-2'>
//                 <Calendar className='h-3 w-3 text-emerald-500' />{' '}
//                 {new Date(post.publishedAt).toLocaleDateString()}
//               </span>
//               <span className='h-3 w-px bg-white/10'></span>
//               <span className='flex items-center gap-2'>
//                 <Clock className='h-3 w-3 text-emerald-500' />{' '}
//                 {post.readingTime}
//               </span>
//             </div>
//           </div>

//           <div className='mx-auto max-w-5xl'>
//             <div className='mb-6 flex flex-wrap justify-center gap-3'>
//               {post.tags.map((tag: string) => (
//                 <span
//                   key={tag}
//                   className='rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[9px] font-bold tracking-widest text-emerald-400 uppercase'
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <h1 className='font-space-grotesk mx-auto w-full text-center text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white lg:text-6xl'>
//               {post.title}
//             </h1>
//             <div className='mt-8 flex justify-center gap-6'>
//               <div className='w-1.5 shrink-0 rounded-full bg-gradient-to-b from-emerald-500 to-transparent' />
//               <p className='max-w-3xl text-lg leading-relaxed font-light text-gray-400 italic md:text-2xl'>
//                 "{post.description}"
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12'>
//         {/* LEFT: Author (STICKY ENABLED) */}
//         <aside className='sticky top-32 order-2 self-start lg:order-1 lg:col-span-3'>
//           <div className='space-y-2 rounded-2xl border border-white/5 bg-gray-950/50 p-8 backdrop-blur-md'>
//             <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500 text-xl font-bold text-gray-950'>
//               {post.author.charAt(0).toUpperCase()}
//             </div>
//             <h4 className='font-space-grotesk text-xl font-bold text-white'>
//               {post.author}
//             </h4>
//             <p className='text-[9px] font-black tracking-widest text-emerald-500 uppercase'>
//               Lead Contributor
//             </p>
//             <div className='flex gap-2'>
//               <button className='flex h-10 flex-1 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-400 hover:bg-emerald-500 hover:text-gray-950'>
//                 <Share2 size={16} />
//               </button>
//               <button className='flex h-10 flex-1 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-400 hover:bg-emerald-500 hover:text-gray-950'>
//                 <Bookmark size={16} />
//               </button>
//             </div>
//           </div>
//         </aside>

//         {/* CENTER: MDX Content */}
//         <main className='order-1 lg:order-2 lg:col-span-6'>
//           <article
//             ref={articleRef}
//             className='prose prose-emerald prose-invert max-w-none'
//           >
//             <MDXContent code={post.body} />
//           </article>
//         </main>

//         {/* RIGHT: Table of Contents (STICKY ENABLED + SLIDING INDICATOR) */}
//         <aside className='sticky top-32 hidden self-start lg:order-3 lg:col-span-3 lg:block'>
//           <h5 className='mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.5em] text-emerald-500 uppercase'>
//             <Layout className='h-4 w-4' /> Contents
//           </h5>
//           <nav
//             ref={navRef}
//             className='relative flex flex-col gap-6 border-l border-white/5 pl-8'
//           >
//             {/* THE SLIDING INDICATOR LINE */}
//             <div
//               className='absolute left-[-1.5px] w-[3px] rounded-full bg-emerald-500 transition-all duration-300'
//               style={{
//                 height: '14px',
//                 top: `${indicatorOffset}px`,
//                 opacity: activeId ? 1 : 0,
//               }}
//             />

//             {post.toc?.map((item: any) => (
//               <div key={item.url}>
//                 <a
//                   href={item.url}
//                   className={`block text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:text-emerald-400 ${
//                     activeId === item.url
//                       ? 'translate-x-1 text-emerald-400'
//                       : 'text-gray-600'
//                   }`}
//                 >
//                   {item.title}
//                 </a>
//                 {item.items?.map((sub: any) => (
//                   <a
//                     key={sub.url}
//                     href={sub.url}
//                     className={`mt-3 block pl-4 text-[10px] font-medium tracking-wide transition-all duration-300 hover:text-emerald-400 ${
//                       activeId === sub.url
//                         ? 'text-emerald-400'
//                         : 'text-gray-700'
//                     }`}
//                   >
//                     — {sub.title}
//                   </a>
//                 ))}
//               </div>
//             ))}
//           </nav>
//         </aside>
//       </div>
//     </div>
//   )
// }

// export default PostView

'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  ArrowLeft,
  Clock,
  Share2,
  Bookmark,
  Calendar,
  Layout,
} from 'lucide-react'
import Link from 'next/link'
import { MDXContent } from './Mdx-content'

const PostView = ({ post }: { post: any }) => {
  // --- STATE ---
  const [activeId, setActiveId] = useState('') // Stores the ID of the heading currently being read
  const [progress, setProgress] = useState(0) // Stores scroll percentage (0 to 100)
  const [indicatorOffset, setIndicatorOffset] = useState(0) // Precise pixel position of the TOC green line

  // --- REFS ---
  const articleRef = useRef<HTMLElement>(null) // Measures the actual height of your blog text
  const navRef = useRef<HTMLDivElement>(null) // Used to find the position of links in the TOC sidebar

  // --- LOGIC: SCROLL SPY & PROGRESS BAR ---
  useEffect(() => {
    if (!post?.toc) return

    // Flatten the Table of Contents to get a simple list of all heading IDs
    const sectionIds = post.toc.flatMap((item: any) => [
      item.url.replace('#', ''),
      ...(item.items?.map((sub: any) => sub.url.replace('#', '')) || []),
    ])

    const handleScroll = () => {
      // 1. PROGRESS BAR LOGIC
      // We calculate progress based ONLY on the article's position, not the whole website
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const articleHeight = rect.height
        const scrolled = -rect.top // How many pixels of the article have gone past the top

        // This ensures 100% is reached exactly when the last line of text is at the bottom of the screen
        const totalScrollable = articleHeight - windowHeight / 2
        const percentage = (scrolled / totalScrollable) * 100
        setProgress(Math.min(Math.max(percentage, 0), 100))
      }

      // 2. SCROLL SPY LOGIC (Highlighter)
      // Loop through all headings. If one is near the top (250px), it becomes the 'active' one.
      let currentId = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 250) {
            currentId = `#${id}`
          } else {
            break // Stop looking once we find a heading that is still below the trigger line
          }
        }
      }
      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Run once on load
    return () => window.removeEventListener('scroll', handleScroll)
  }, [post])

  // --- LOGIC: SMOOTH INDICATOR SYNC ---
  // When 'activeId' changes, we find the TOC link in the sidebar and move the green line to it
  useEffect(() => {
    if (activeId && navRef.current) {
      // Find the <a> tag that matches the active heading
      const activeLink = navRef.current.querySelector(
        `a[href="${activeId}"]`
      ) as HTMLElement
      if (activeLink) {
        // offsetTop tells us exactly where the link is inside the sidebar
        setIndicatorOffset(activeLink.offsetTop + 2)
      }
    }
  }, [activeId])

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
        <div className='absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/40 to-[#030712]' />

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
        {/* self-start is the MAGIC: It prevents the sidebar from stretching to full page height */}
        <aside className='sticky top-32 order-2 self-start lg:order-1 lg:col-span-3'>
          <div className='space-y-4 rounded-2xl border border-white/5 bg-gray-950/50 p-8 backdrop-blur-md transition-all hover:border-white/10'>
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
              <button className='flex h-10 flex-1 cursor-pointer items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950 active:scale-90'>
                <Share2 size={16} />
              </button>
              <button className='flex h-10 flex-1 cursor-pointer items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950 active:scale-90'>
                <Bookmark size={16} />
              </button>
            </div>
          </div>
        </aside>

        {/* CENTER: Blog Content */}
        <main className='order-1 lg:order-2 lg:col-span-6'>
          {/* articleRef tracks the height for the progress bar logic */}
          <article
            ref={articleRef}
            className='prose prose-emerald prose-headings:font-space-grotesk max-w-none'
          >
            <MDXContent code={post.body} />
          </article>
        </main>

        {/* RIGHT: Table of Contents (FIXED STICKY) */}
        {/* self-start is required here as well so the sidebar can 'float' */}
        <aside className='sticky top-32 hidden self-start lg:order-3 lg:col-span-3 lg:block'>
          <h5 className='mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.5em] text-emerald-500 uppercase opacity-60'>
            <Layout className='h-4 w-4' /> Contents
          </h5>
          <nav
            ref={navRef}
            className='relative flex flex-col gap-6 border-l border-white/5 pl-8'
          >
            {/* THE DYNAMIC GREEN INDICATOR LINE */}
            <div
              className='absolute left-[-2px] w-[3px] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-300'
              style={{
                height: '14px',
                top: `${indicatorOffset}px`, // Moves exactly to the link offset
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
