// 'use client'

// import React, { useState, useEffect } from 'react'
// import {
//   ArrowLeft,
//   Clock,
//   Share2,
//   Bookmark,
//   Calendar,
//   Hash,
//   Layout,
// } from 'lucide-react'
// import Link from 'next/link'

// const PostView = ({ post }: { post: any }) => {
//   const [activeId, setActiveId] = useState('')
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     if (!post?.toc) return

//     const handleScroll = () => {
//       const scrollY = window.scrollY
//       const totalHeight =
//         document.documentElement.scrollHeight - window.innerHeight
//       setProgress((scrollY / totalHeight) * 100)

//       const sectionIds = post.toc.flatMap((item: any) => [
//         item.url.replace('#', ''),
//         ...(item.items?.map((sub: any) => sub.url.replace('#', '')) || []),
//       ])

//       const current = sectionIds.find((id: string) => {
//         const el = document.getElementById(id)
//         if (el) {
//           const rect = el.getBoundingClientRect()
//           return rect.top >= 0 && rect.top <= 250
//         }
//         return false
//       })
//       if (current) setActiveId(`#${current}`)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [post])

//   if (!post) return null

//   return (
//     <div className='min-h-screen border border-white bg-[#030712] font-sans selection:bg-emerald-500/30'>
//       <div
//         className='fixed top-0 left-0 z-[100] h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]'
//         style={{ width: `${progress}%` }}
//       />

//       {/* Hero */}
//       <div className='relative flex min-h-[60vh] w-full items-center overflow-hidden md:h-[75vh]'>
//         <img
//           src={post.image.src}
//           className='absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.2]'
//           alt={post.title}
//         />
//         <div className='absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40' />
//         <div className='relative z-10 mx-auto w-full max-w-5xl px-6 py-20'>
//           <Link
//             href='/blogs'
//             className='group mb-8 inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-[10px] font-bold tracking-widest text-emerald-400 uppercase transition-all hover:bg-emerald-500 hover:text-gray-950'
//           >
//             <ArrowLeft className='h-3.5 w-3.5 transition-transform group-hover:-translate-x-1' />{' '}
//             Archive
//           </Link>
//           <div className='mb-6 flex gap-4 text-[10px] font-bold tracking-widest text-emerald-500 uppercase'>
//             <span className='rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1'>
//               {post.tags[0]}
//             </span>
//             <span className='flex items-center gap-2 text-gray-500'>
//               <Clock className='h-4 w-4' /> {post.readingTime.text}
//             </span>
//           </div>
//           <h1 className='font-space-grotesk text-4xl leading-[1] font-extrabold tracking-tight text-white sm:text-6xl md:text-8xl'>
//             {post.title}
//           </h1>
//         </div>
//       </div>

//       <div className='mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12'>
//         {/* Left: Author */}
//         <aside className='order-2 lg:order-1 lg:col-span-3'>
//           <div className='sticky top-32 space-y-8'>
//             <div className='rounded-2xl border border-white/5 bg-gray-950/50 p-6 backdrop-blur-md'>
//               <h4 className='font-space-grotesk mb-1 text-lg font-bold text-white'>
//                 {post.author}
//               </h4>
//               <p className='mb-6 text-[10px] font-bold tracking-widest text-emerald-500 uppercase'>
//                 Contributor
//               </p>
//               <div className='flex gap-2'>
//                 <button className='flex h-10 flex-1 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950'>
//                   <Share2 className='h-4 w-4' />
//                 </button>
//                 <button className='flex h-10 flex-1 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950'>
//                   <Bookmark className='h-4 w-4' />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* Center: Content */}
//         <main className='order-1 lg:order-2 lg:col-span-6'>
//           <article className='prose prose-emerald prose-invert max-w-none'>
//             {/* MDX CONTENT WILL RENDER HERE LATER */}
//             <div className='mb-10 text-gray-400 italic'>
//               Note: MDX content integration pending...
//             </div>

//             {/* Visual helper to see sections for ToC spy */}
//             {post.toc?.map((section: any) => (
//               <div
//                 key={section.url}
//                 id={section.url.replace('#', '')}
//                 className='mb-12 scroll-mt-32'
//               >
//                 <h2 className='font-space-grotesk text-white'>
//                   {section.title}
//                 </h2>
//                 <div className='flex h-64 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-[10px] tracking-widest text-gray-600 uppercase'>
//                   Content Section Placeholder
//                 </div>
//               </div>
//             ))}
//           </article>
//         </main>

//         {/* Right: Table of Contents */}
//         <aside className='hidden lg:order-3 lg:col-span-3 lg:block'>
//           <div className='sticky top-32'>
//             <h5 className='mb-8 flex items-center gap-3 text-[10px] font-black tracking-widest text-emerald-500 uppercase'>
//               <Layout className='h-4 w-4' /> Contents
//             </h5>
//             <nav className='flex flex-col gap-4 border-l border-white/5 pl-6'>
//               {post.toc?.map((item: any) => (
//                 <div key={item.url}>
//                   <a
//                     href={item.url}
//                     className={`block text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:text-emerald-400 ${activeId === item.url ? 'translate-x-2 text-emerald-400' : 'text-gray-600'}`}
//                   >
//                     {item.title}
//                   </a>
//                   {item.items?.map((sub: any) => (
//                     <a
//                       key={sub.url}
//                       href={sub.url}
//                       className={`mt-2 block pl-4 text-[10px] font-medium tracking-wide transition-all duration-300 hover:text-emerald-400 ${activeId === sub.url ? 'text-emerald-400' : 'text-gray-700'}`}
//                     >
//                       — {sub.title}
//                     </a>
//                   ))}
//                 </div>
//               ))}
//             </nav>
//           </div>
//         </aside>
//       </div>
//     </div>
//   )
// }

// export default PostView

'use client'

import React, { useState, useEffect } from 'react'
import {
  ArrowLeft,
  Clock,
  Share2,
  Bookmark,
  Calendar,
  Hash,
  Layout,
  Command,
} from 'lucide-react'
import Link from 'next/link'
// import RenderMdx from '../blog/RenderMdx' // TODO: Implement MDX Rendering later

const PostView = ({ post }: { post: any }) => {
  const [activeId, setActiveId] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!post?.toc) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress((scrollY / totalHeight) * 100)

      const sectionIds = post.toc.flatMap((item: any) => [
        item.url.replace('#', ''),
        ...(item.items?.map((sub: any) => sub.url.replace('#', '')) || []),
      ])

      const current = sectionIds.find((id: string) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top >= 0 && rect.top <= 250
        }
        return false
      })
      if (current) setActiveId(`#${current}`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [post])

  if (!post) return null

  return (
    <div className='min-h-screen bg-[#030712] font-sans selection:bg-emerald-500/30'>
      {/* 1. Slim Progress Bar */}
      <div
        className='fixed top-0 left-0 z-[100] h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]'
        style={{ width: `${progress}%` }}
      />

      {/* 2. Optimized Hero - Top-Anchored for long content support */}
      <div className='relative flex min-h-[60vh] w-full flex-col overflow-hidden border-b border-white/5'>
        {/* Background Layer */}
        <img
          src={post.image.src}
          className='absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.2] transition-transform duration-[10s]'
          alt=''
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-[#030712]/40 to-[#030712]' />

        {/* Content Layer */}
        <div className='relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pt-8 pb-16'>
          {/* Navigation - Always at the top of the hero */}
          <div className='mb-12 flex items-center justify-between'>
            <Link
              href='/blogs'
              className='group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold tracking-widest text-emerald-400 uppercase transition-all hover:bg-emerald-500 hover:text-gray-950'
            >
              <ArrowLeft className='h-3.5 w-3.5 transition-transform group-hover:-translate-x-1' />
              Archive
            </Link>

            <div className='hidden items-center gap-4 text-[10px] font-bold tracking-widest text-gray-500 uppercase sm:flex'>
              <span className='flex items-center gap-2'>
                <Calendar className='h-3 w-3 text-emerald-500' />{' '}
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
              <span className='h-3 w-px bg-white/10'></span>
              <span className='flex items-center gap-2'>
                <Clock className='h-3 w-3 text-emerald-500' />{' '}
                {post.readingTime.text}
              </span>
            </div>
          </div>

          {/* Title & Metadata - Capped for readability */}
          <div className='mx-auto max-w-5xl'>
            <div className='mb-6 flex flex-wrap justify-center gap-3'>
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className='rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[9px] font-bold tracking-widest text-emerald-400 uppercase'
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title - Uses text-balance to prevent ugly line breaks on long titles */}
            <h1 className='font-space-grotesk mx-auto w-full text-center text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white lg:text-6xl'>
              {post.title}
            </h1>

            {/* Description - Positioned below title, separated by a distinct accent line */}
            <div className='mt-8 flex justify-center gap-6'>
              <div className='w-1.5 shrink-0 rounded-full bg-gradient-to-b from-emerald-500 to-transparent' />
              <p className='max-w-3xl text-lg leading-relaxed font-light text-gray-400 italic md:text-2xl'>
                "{post.description}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Reading Grid */}
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12'>
        {/* LEFT: Author Information */}
        <aside className='order-2 lg:order-1 lg:col-span-3'>
          <div className='sticky top-32 space-y-10'>
            <div className='rounded-2xl border border-white/5 bg-gray-950/50 p-8 backdrop-blur-md'>
              <div className='mb-6'>
                <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500 text-xl font-bold text-gray-950 shadow-lg shadow-emerald-500/20'>
                  {post.author.charAt(0).toUpperCase()}
                </div>
              </div>
              <h4 className='font-space-grotesk mb-1 text-xl font-bold text-white'>
                {post.author}
              </h4>
              <p className='mb-8 text-[9px] font-black tracking-[0.3em] text-emerald-500 uppercase'>
                Lead Contributor
              </p>

              <div className='flex gap-2'>
                <button className='flex h-10 flex-1 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950'>
                  <Share2 className='h-4 w-4' />
                </button>
                <button className='flex h-10 flex-1 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-400 transition-all hover:bg-emerald-500 hover:text-gray-950'>
                  <Bookmark className='h-4 w-4' />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER: Main Content Body */}
        <main className='order-1 lg:order-2 lg:col-span-6'>
          <article className='prose prose-emerald prose-invert max-w-none'>
            {/* MDX Rendering Hook (Dummy mapping for now) */}
            <div className='space-y-20'>
              {post.toc?.map((section: any) => (
                <section
                  key={section.url}
                  id={section.url.replace('#', '')}
                  className='group scroll-mt-32'
                >
                  <h2 className='font-space-grotesk mb-6 flex items-center gap-4 text-3xl font-bold text-white'>
                    <span className='text-emerald-500/10 transition-colors group-hover:text-emerald-500'>
                      #
                    </span>
                    {section.title}
                  </h2>
                  <div className='flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/5 bg-white/[0.02] text-[10px] tracking-[0.5em] text-gray-800 uppercase'>
                    Content Segment: {section.title}
                  </div>
                </section>
              ))}
            </div>
          </article>

          {/* Newsletter Box */}
          <div className='relative mt-32 overflow-hidden rounded-3xl border border-emerald-500/10 bg-gradient-to-br from-emerald-600/20 to-transparent p-10 text-center shadow-2xl md:p-20'>
            <div className='relative z-10'>
              <Command className='mx-auto mb-8 h-10 w-10 text-emerald-500' />
              <h3 className='font-space-grotesk text-3xl font-bold tracking-tighter text-white md:text-5xl'>
                Join the Engineering Circle
              </h3>
              <p className='mx-auto mt-4 mb-10 max-w-md font-light text-gray-400'>
                Monthly systems engineering insights. No noise, just
                architectural logic.
              </p>
              <form className='mx-auto flex max-w-md flex-col gap-3 sm:flex-row'>
                <input
                  type='email'
                  placeholder='nischal@puri.dev'
                  className='flex-1 rounded-xl border border-white/5 bg-black/40 px-6 py-4 text-white transition-all outline-none focus:border-emerald-500/50'
                />
                <button className='rounded-xl bg-emerald-500 px-8 py-4 text-[11px] font-black text-gray-950 uppercase transition-all hover:scale-105'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </main>

        {/* RIGHT: Table of Contents */}
        <aside className='hidden lg:order-3 lg:col-span-3 lg:block'>
          <div className='sticky top-32'>
            <h5 className='mb-10 flex items-center gap-3 text-[10px] font-black tracking-[0.5em] text-emerald-500 uppercase'>
              <Layout className='h-4 w-4' /> Contents
            </h5>
            <nav className='relative flex flex-col gap-6 border-l border-white/5 pl-8'>
              {/* Dynamic Indicator Line */}
              <div
                className='absolute left-[-1.5px] w-[3px] rounded-full bg-emerald-500 transition-all duration-300'
                style={{
                  height: '14px',
                  top: `${
                    Math.max(
                      0,
                      post.toc.findIndex((s: any) => s.url === activeId)
                    ) * 44
                  }px`,
                  opacity: activeId ? 1 : 0,
                }}
              />

              {post.toc?.map((item: any) => (
                <div key={item.url}>
                  <a
                    href={item.url}
                    className={`block text-[11px] font-bold tracking-widest uppercase transition-all duration-300 hover:text-emerald-400 ${
                      activeId === item.url
                        ? 'text-emerald-400'
                        : 'text-gray-600'
                    }`}
                  >
                    {item.title}
                  </a>
                  {item.items?.map((sub: any) => (
                    <a
                      key={sub.url}
                      href={sub.url}
                      className={`mt-3 block pl-4 text-[10px] font-medium tracking-wide transition-all duration-300 hover:text-emerald-400 ${
                        activeId === sub.url
                          ? 'text-emerald-400'
                          : 'text-gray-700'
                      }`}
                    >
                      — {sub.title}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PostView
