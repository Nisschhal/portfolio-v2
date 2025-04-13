'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Card from '@/components/Card'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Server Components',
    excerpt:
      "A deep dive into RSC and why it's changing the way we build apps.",
    tags: ['React', 'RSC'],
    category: 'Frontend',
    image: '/images/rsc.jpg',
    date: 'Apr 1, 2025',
    author: 'Nischal Puri',
  },
  {
    id: 2,
    title: 'Dockerizing a Node.js App the Right Way',
    excerpt:
      'Learn how to optimize and containerize your Node apps effectively.',
    tags: ['Docker', 'Node.js'],
    category: 'DevOps',
    image: '/images/docker.jpg',
    date: 'Apr 5, 2025',
    author: 'Nischal Puri',
  },
  {
    id: 3,
    title: 'Next.js vs Remix: A Real-World Comparison',
    excerpt: 'Comparing two modern React meta-frameworks head-to-head.',
    tags: ['Next.js', 'Remix'],
    category: 'Frontend',
    image: '/images/remix-vs-next.jpg',
    date: 'Apr 9, 2025',
    author: 'Nischal Puri',
  },
]

const categories = ['All', 'Frontend', 'Backend', 'DevOps']

export default function BlogGrid() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className='light:text-white container py-16 lg:py-24'>
      {/* Filters */}
      <div className='mb-10 flex flex-col items-center justify-between gap-4 md:flex-row'>
        <Input
          type='text'
          placeholder='Search through my learning logs, notes, and technical reflections...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='w-full md:w-1/2'
        />
        <div className='flex flex-wrap gap-2'>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'border-white bg-white text-black'
                  : 'border-white/20 bg-transparent text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {filteredPosts.map(post => (
          <Card key={post.id} className='rounded-xs p-0'>
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className='h-48 w-full object-cover'
            />
            <div className='p-2'>
              <h2 className='mb-1 text-xl font-semibold'>{post.title}</h2>
              <p className='mb-3 text-sm text-white/70'>{post.excerpt}</p>
              <div className='mb-2 text-xs text-white/40'>
                <span>{post.date}</span> · <span>By {post.author}</span>
              </div>
              <div className='flex flex-wrap gap-2'>
                {post.tags.map((tag, index) => (
                  <Badge key={index} className='bg-white/10 text-white'>
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
