// 'use client'

// import React from 'react'
// import FeaturedSlider from '@/components/blogs/FeaturedSlider'
// import BlogGrid from '@/components/blogs/BlogGrid'
// import { ALL_BLOGS } from '@/data/blogs'
// import { Activity, History, Flame, UserCheck } from 'lucide-react'

// export default function ArchivePage() {
//   const featuredPosts = ALL_BLOGS.slice(0, 3)

//   return (
//     <main className='relative min-h-screen bg-[#030712] font-sans selection:bg-emerald-500/30'>
//       {/* --- HERO SECTION --- */}
//       <section className='relative flex flex-col items-center justify-center overflow-hidden border-b border-white/5 px-6 pt-32 pb-24 md:pt-48'>
//         <div className='pointer-events-none absolute inset-0'>
//           <div className='absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]' />
//           <div className='absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]' />
//           <div className='absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]' />
//         </div>

//         <div className='relative z-10 w-full max-w-7xl'>
//           <div className='mb-16 flex flex-col items-start md:mb-24'>
//             <div className='mb-6 flex items-center gap-3'>
//               <span className='h-[1px] w-8 bg-emerald-500'></span>
//               <span className='font-space-grotesk text-[10px] font-black tracking-[0.5em] text-emerald-500 uppercase'>
//                 The Long Trail
//               </span>
//             </div>

//             <div className='relative'>
//               {/* Background text changed to "HISTORY" for authenticity */}
//               <span className='font-space-grotesk absolute -top-16 -left-4 text-8xl font-black tracking-tighter text-white/[0.03] uppercase italic select-none md:text-9xl lg:text-[14rem]'>
//                 History
//               </span>
//               <h1 className='font-space-grotesk relative text-6xl leading-none font-black tracking-tighter text-white uppercase md:text-8xl lg:text-9xl'>
//                 The <span className='text-emerald-500 italic'>Archive</span>
//               </h1>
//             </div>

//             <p className='mt-8 max-w-2xl text-left text-lg leading-relaxed font-light text-gray-500 md:text-xl'>
//               A raw collection of every "aha!" moment and every night spent
//               debugging. This is my repository of technical shifts, build notes,
//               codes and the logic I've captured while figuring it all out.
//             </p>
//           </div>

//           {/* Authentic Journey Stats */}
//           <div className='font-space-grotesk mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-4xl'>
//             {[
//               {
//                 label: 'Knowledge Units',
//                 value: ALL_BLOGS.length,
//                 icon: History,
//               },
//               { label: 'Build Journey', value: '4+ Years', icon: Activity },
//               { label: 'Bugs Smashed', value: 'Countless', icon: Flame },
//               { label: 'Mental State', value: 'Curious', icon: UserCheck },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className='flex flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-md'
//               >
//                 <stat.icon className='mb-1 h-3.5 w-3.5 text-emerald-500/50' />
//                 <span className='text-xl font-bold text-white uppercase'>
//                   {stat.value}
//                 </span>
//                 <span className='text-[9px] font-black tracking-widest text-gray-600 uppercase'>
//                   {stat.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Label for the Spotlight section */}
//           <div className='mb-6 flex items-center gap-4'>
//             <span className='font-space-grotesk text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase'>
//               Featured Notes
//             </span>
//             <div className='h-px flex-1 bg-white/5'></div>
//           </div>

//           <FeaturedSlider posts={featuredPosts} />
//         </div>
//       </section>

//       {/* Grid Explorer */}
//       <section id='explorer' className='scroll-mt-24'>
//         <BlogGrid posts={ALL_BLOGS} isArchive />
//       </section>

//       {/* Sublte bottom fade to finish the page */}
//       <div className='pointer-events-none h-32 bg-gradient-to-t from-emerald-500/[0.02] to-transparent' />
//     </main>
//   )
// }

'use client'

import React from 'react'

import { History, Activity, Flame, UserCheck } from 'lucide-react'
import { posts } from '@velite' // 1. Import real data
import BlogGrid from '@/components/blogs/BlogGrid'
import FeaturedSlider from '@/components/blogs/FeatureSlider'

export default function ArchivePage() {
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  const featuredPosts = sortedPosts.slice(0, 3)

  return (
    // REMOVED: bg-[#030712] and min-h-screen
    // This allows the stars and layout background to work correctly
    <div className='relative flex flex-col font-sans'>
      {/* --- HERO SECTION --- */}
      <section className='relative flex flex-col items-center justify-center overflow-hidden border-b border-white/5 px-6 pt-32 pb-24 md:pt-48'>
        {/* Atmosphere is now handled by Layout, but we keep the local radial grid for extra depth */}
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]' />
          <div className='absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]' />
        </div>

        <div className='relative z-10 w-full max-w-7xl'>
          <div className='mb-16 flex flex-col items-start md:mb-24'>
            <div className='mb-6 flex items-center gap-3'>
              <span className='h-[1px] w-8 bg-emerald-500'></span>
              <span className='font-space-grotesk text-[10px] font-black tracking-[0.5em] text-emerald-500 uppercase'>
                The Long Trail
              </span>
            </div>

            <div className='relative'>
              <span className='font-space-grotesk absolute -top-16 -left-4 text-8xl font-black tracking-tighter text-white/[0.03] uppercase italic select-none md:text-9xl lg:text-[14rem]'>
                History
              </span>
              <h1 className='font-space-grotesk relative text-6xl leading-none font-black tracking-tighter text-white uppercase md:text-8xl lg:text-9xl'>
                The <span className='text-emerald-500 italic'>Archive</span>
              </h1>
            </div>

            <p className='mt-8 max-w-2xl text-left text-lg leading-relaxed font-light text-gray-500 md:text-xl'>
              A raw collection of every "aha!" moment and every night spent
              debugging. This is my repository of technical shifts, build notes,
              codes and the logic I've captured while figuring it all out.
            </p>
          </div>

          {/* Authentic Journey Stats */}
          <div className='font-space-grotesk mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-4xl'>
            {[
              {
                label: 'Knowledge Units',
                value: sortedPosts.length,
                icon: History,
              },
              { label: 'Build Journey', value: '4+ Years', icon: Activity },
              { label: 'Bugs Smashed', value: 'Countless', icon: Flame },
              { label: 'Mental State', value: 'Curious', icon: UserCheck },
            ].map((stat, i) => (
              <div
                key={i}
                className='flex flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-md'
              >
                <stat.icon className='mb-1 h-3.5 w-3.5 text-emerald-500/50' />
                <span className='text-xl font-bold text-white uppercase'>
                  {stat.value}
                </span>
                <span className='text-[9px] font-black tracking-widest text-gray-600 uppercase'>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <FeaturedSlider posts={featuredPosts} />
        </div>
      </section>

      {/* Grid Explorer - isArchive tells the grid to reset instead of redirect */}
      <section id='explorer' className='scroll-mt-24'>
        <BlogGrid posts={sortedPosts} isArchive={true} />
      </section>

      <div className='pointer-events-none h-32 bg-gradient-to-t from-emerald-500/[0.02] to-transparent' />
    </div>
  )
}
