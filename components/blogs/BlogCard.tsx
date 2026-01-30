// import React from 'react'
// import { Clock, ArrowUpRight } from 'lucide-react'
// import Link from 'next/link'

// const BlogCard = ({ post }: { post: any }) => {
//   return (
//     <Link
//       href={`/blogs/${post.slug}`}
//       className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-2 transition-all duration-500 hover:border-emerald-500/30 hover:bg-white/[0.04]'
//     >
//       {/* Aspect Ratio 16:9 for industrial look */}
//       <div className='relative aspect-video shrink-0 overflow-hidden rounded-xl'>
//         <img
//           src={post.image.src}
//           alt={post.title}
//           className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
//         />
//         <div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent' />
//         <div className='absolute bottom-3 left-3'>
//           <span className='rounded-lg bg-emerald-500 px-3 py-1 text-[10px] font-bold tracking-tighter text-gray-950 uppercase'>
//             {post.tags[0]}
//           </span>
//         </div>
//       </div>

//       <div className='flex flex-1 flex-col px-3 pt-4 pb-2'>
//         <div className='mb-3 flex items-center justify-between text-[10px] font-bold tracking-widest text-gray-500 uppercase'>
//           <div className='flex items-center gap-1.5'>
//             <Clock className='h-3.5 w-3.5 text-emerald-500' />
//             {post.readingTime.text}
//           </div>
//           <span>
//             {new Date(post.publishedAt).toLocaleDateString('en-US', {
//               month: 'short',
//               year: 'numeric',
//             })}
//           </span>
//         </div>

//         <h3 className='font-space-grotesk mb-2 line-clamp-2 text-xl font-bold text-white transition-colors group-hover:text-emerald-400'>
//           {post.title}
//         </h3>

//         <p className='mb-6 line-clamp-2 text-sm leading-relaxed text-gray-400'>
//           {post.description}
//         </p>

//         <div className='mt-auto flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-emerald-500 uppercase'>
//           Open Log{' '}
//           <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default BlogCard

import React from 'react'
import { Clock, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const BlogCard = ({ post }: { post: any }) => {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-2 transition-all duration-500 hover:border-emerald-500/30 hover:bg-white/[0.04]'
    >
      {/* 16:9 Image container */}
      <div className='relative aspect-video shrink-0 overflow-hidden rounded-xl'>
        <img
          src={post.image.src}
          alt={post.title}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent' />
        <div className='absolute bottom-3 left-3'>
          <span className='rounded-lg bg-emerald-500 px-3 py-1 text-[10px] font-bold tracking-tighter text-gray-950 uppercase'>
            {post.tags[0]}
          </span>
        </div>
      </div>

      <div className='flex flex-1 flex-col px-3 pt-4 pb-2'>
        <div className='mb-3 flex items-center justify-between text-[10px] font-bold tracking-widest text-gray-500 uppercase'>
          <div className='flex items-center gap-1.5'>
            <Clock className='h-3.5 w-3.5 text-emerald-500' />
            {post.readingTime}{' '}
            {/* Velite provides the full "6 min read" string */}
          </div>
          <span>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>

        <h3 className='font-space-grotesk mb-2 line-clamp-2 text-xl font-bold text-white transition-colors group-hover:text-emerald-400'>
          {post.title}
        </h3>

        <p className='mb-6 line-clamp-2 text-sm leading-relaxed text-gray-400'>
          {post.description}
        </p>

        <div className='mt-auto flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-emerald-500 uppercase'>
          Open Log{' '}
          <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
