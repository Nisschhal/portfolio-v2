'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react'

// Interface matching your JSON structure
interface Blog {
  title: string
  description: string
  tags: string[]
  image:
    | {
        src: string
        blurDataURL?: string
      }
    | string
  readingTime:
    | {
        text: string
      }
    | string
  slug: string
  url: string
}

interface SliderProps {
  posts: Blog[]
  onSelect: (post: Blog) => void
}

const Slider: React.FC<SliderProps> = ({ posts, onSelect }) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isAnimating, setIsAnimating] = useState(false)

  const featured = posts[index]

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(handleNext, 8000)
    return () => clearInterval(timer)
  }, [index, posts.length])

  const handleNext = () => {
    if (isAnimating || posts.length <= 1) return
    setDirection('right')
    setIsAnimating(true)
    setTimeout(() => {
      setIndex(prev => (prev + 1) % posts.length)
      setIsAnimating(false)
    }, 450)
  }

  const handlePrev = () => {
    if (isAnimating || posts.length <= 1) return
    setDirection('left')
    setIsAnimating(true)
    setTimeout(() => {
      setIndex(prev => (prev - 1 + posts.length) % posts.length)
      setIsAnimating(false)
    }, 450)
  }

  // Helper to extract image source and text info from your specific JSON format
  const getImageSrc = (img: Blog['image']) =>
    typeof img === 'string' ? img : img.src
  const getReadTime = (rt: Blog['readingTime']) =>
    typeof rt === 'string' ? rt : rt.text
  const getCategory = (tags: string[]) => tags[0] || 'Update'

  if (!posts.length) return null

  return (
    <div className='group relative w-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-gray-900/30 p-6 shadow-2xl transition-all duration-700 hover:border-emerald-500/20 md:rounded-[4rem] lg:p-12'>
      {/* Header Section */}
      <div className='mb-8 flex items-center justify-between md:mb-10'>
        <h2 className='font-space flex items-center gap-4 text-[10px] font-black tracking-[0.6em] text-gray-400 uppercase md:gap-8'>
          <span className='hidden h-px w-20 bg-gray-800 sm:block' />
          Spotlight
        </h2>
        <div className='flex items-center gap-2 md:gap-4'>
          <button
            onClick={handlePrev}
            className='group/btn flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-xl transition-all hover:bg-emerald-500 active:scale-90 md:h-14 md:w-14'
          >
            <ChevronLeft className='h-5 w-5 md:h-7 md:w-7' />
          </button>
          <button
            onClick={handleNext}
            className='group/btn flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-xl transition-all hover:bg-emerald-500 active:scale-90 md:h-14 md:w-14'
          >
            <ChevronRight className='h-5 w-5 md:h-7 md:w-7' />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`flex flex-col transition-all duration-500 ease-in-out lg:flex-row lg:items-center lg:gap-24 ${
          isAnimating
            ? direction === 'right'
              ? '-translate-x-10 scale-95 opacity-0'
              : 'translate-x-10 scale-95 opacity-0'
            : 'translate-x-0 scale-100 opacity-100'
        }`}
      >
        {/* Left: Image Card */}
        <div className='relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10 md:rounded-[3rem] lg:w-[50%]'>
          <img
            src={getImageSrc(featured.image)}
            className='h-full w-full object-cover transition-transform duration-[20s] group-hover:scale-110'
            alt={featured.title}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent' />
        </div>

        {/* Right: Text Content */}
        <div className='mt-8 flex flex-1 flex-col lg:mt-0'>
          <div className='mb-4 flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-emerald-400 uppercase md:mb-6'>
            <span className='rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5'>
              {getCategory(featured.tags)}
            </span>
            <span className='flex items-center gap-2'>
              <Clock className='h-4 w-4' /> {getReadTime(featured.readingTime)}
            </span>
          </div>

          <h3
            className='font-space mb-6 line-clamp-2 cursor-pointer text-3xl leading-[1.1] font-black text-white transition-colors hover:text-emerald-400 md:mb-10 md:text-5xl lg:text-6xl'
            onClick={() => onSelect(featured)}
          >
            {featured.title}
          </h3>

          <p className='mb-10 line-clamp-3 text-lg leading-relaxed font-light text-gray-400 md:mb-14 md:text-2xl'>
            {featured.description}
          </p>

          <button
            onClick={() => onSelect(featured)}
            className='group/read flex w-fit items-center gap-6 rounded-2xl bg-emerald-500 px-10 py-4 text-[10px] font-black tracking-[0.2em] text-white uppercase shadow-2xl transition-all hover:scale-105 hover:bg-emerald-600 active:scale-95 md:rounded-[2rem] md:px-14 md:py-6 md:text-xs'
          >
            Read Now
            <ArrowRight className='h-5 w-5 transition-transform group-hover/read:translate-x-3' />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className='absolute bottom-8 left-1/2 hidden -translate-x-1/2 gap-3 sm:flex'>
        {posts.map((_, i) => (
          <div
            key={i}
            onClick={() => !isAnimating && setIndex(i)}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-700 ${
              index === i
                ? 'w-12 bg-emerald-500'
                : 'w-3 bg-white/10 hover:bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
