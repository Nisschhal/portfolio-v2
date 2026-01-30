// 'use client'

// import React, { useState, useMemo } from 'react'
// import { Search, Command } from 'lucide-react'
// import CategorySlider from './CategorySlider'
// import BlogCard from './BlogCard'

// const BlogGrid = ({ posts }: { posts: any[] }) => {
//   const [search, setSearch] = useState('')
//   const [activeCategory, setActiveCategory] = useState('all')

//   const categories = useMemo(() => {
//     const tags = posts.flatMap(p => p.tags)
//     return [
//       { id: 'all', name: 'All Archive', slug: 'all' },
//       ...Array.from(new Set(tags)).map(tag => ({
//         id: tag,
//         name: tag,
//         slug: tag,
//       })),
//     ]
//   }, [posts])

//   const filtered = posts.filter(post => {
//     const matchesSearch =
//       post.title.toLowerCase().includes(search.toLowerCase()) ||
//       post.description.toLowerCase().includes(search.toLowerCase())
//     const matchesCategory =
//       activeCategory === 'all' || post.tags.includes(activeCategory)
//     return matchesSearch && matchesCategory
//   })

//   return (
//     <section className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
//       {/* Search and Filter UI - Slimmer & More Modern */}
//       <div className='sticky top-4 z-[40] mb-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-gray-950/80 p-3 shadow-2xl backdrop-blur-md'>
//         <div className='flex flex-col gap-3'>
//           <div className='group relative flex-1'>
//             <Search className='absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-600 transition-colors group-focus-within:text-emerald-500' />
//             <input
//               type='text'
//               placeholder='Search archives...'
//               className='w-full rounded-xl border border-white/5 bg-black/40 py-3 pr-4 pl-12 text-base text-white transition-all outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20'
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//             />
//           </div>

//           <CategorySlider
//             categories={categories}
//             active={activeCategory}
//             onChange={setActiveCategory}
//             onViewAll={() => {
//               setActiveCategory('all')
//               setSearch('')
//             }}
//           />
//         </div>
//       </div>

//       {/* Grid Results - Denser Gap */}
//       {filtered.length > 0 ? (
//         <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
//           {filtered.map(post => (
//             <BlogCard key={post.slug} post={post} />
//           ))}
//         </div>
//       ) : (
//         <div className='rounded-2xl border border-dashed border-white/10 bg-white/[0.01] py-32 text-center'>
//           <Command className='mx-auto mb-6 h-12 w-12 text-gray-800' />
//           <h3 className='mb-2 text-2xl font-bold text-white uppercase'>
//             Null Result
//           </h3>
//           <p className='text-gray-500'>No logs found matching your query.</p>
//         </div>
//       )}
//     </section>
//   )
// }

// export default BlogGrid

'use client'

import React, { useState, useMemo } from 'react'
import { Search, Command } from 'lucide-react'
import CategorySlider from './CategorySlider'
import BlogCard from './BlogCard'

interface BlogGridProps {
  posts: any[]
  isArchive?: boolean // Add this prop
}

const BlogGrid = ({ posts, isArchive = false }: BlogGridProps) => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  // Generate dynamic categories from JSON tags
  const categories = useMemo(() => {
    const tags = posts.flatMap(p => p.tags || [])
    const uniqueTags = Array.from(new Set(tags))
    return [
      { id: 'all', name: 'Digital Archive', slug: 'all' },
      ...uniqueTags.map(tag => ({ id: tag, name: tag, slug: tag })),
    ]
  }, [posts])

  // Filtering Logic
  const filtered = posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      activeCategory === 'all' || post.tags.includes(activeCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <section className='mx-auto max-w-7xl px-4 py-12 md:px-6'>
      {/* Sticky Industrial Filter Bar */}
      <div className='sticky top-4 z-[40] mb-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#030712]/80 p-3 shadow-2xl backdrop-blur-md'>
        <div
          className={`flex flex-col gap-4 ${!isArchive ? 'lg:flex-row lg:items-center' : ''}`}
        >
          <div className='group relative flex-1'>
            <Search className='absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-600 transition-colors group-focus-within:text-emerald-500' />
            <input
              type='text'
              placeholder='Search systems archives...'
              className='w-full rounded-xl border border-white/5 bg-black/40 py-3 pr-4 pl-12 text-base text-white transition-all outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className=''>
            <CategorySlider
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
              onViewAll={() => {
                setActiveCategory('all')
                setSearch('')
              }}
              isArchive={isArchive}
            />
          </div>
        </div>
      </div>

      {/* Grid Results - Tight Spacing */}
      {filtered.length > 0 ? (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className='rounded-2xl border border-dashed border-white/10 py-32 text-center'>
          <Command className='mx-auto mb-6 h-12 w-12 text-gray-800' />
          <h3 className='mb-2 text-2xl font-bold tracking-tighter text-white uppercase italic'>
            Null Result
          </h3>
          <p className='text-gray-500'>Query returned no matching logs.</p>
        </div>
      )}
    </section>
  )
}

export default BlogGrid
