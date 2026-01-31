'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface FeaturedSliderProps {
  posts: any[]
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ posts }) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isAnimating, setIsAnimating] = useState(false)
  const featured = posts[index]

  useEffect(() => {
    const timer = setInterval(handleNext, 8000)
    return () => clearInterval(timer)
  }, [index, posts.length])

  const handleNext = () => {
    if (isAnimating) return
    setDirection('right')
    setIsAnimating(true)
    setTimeout(() => {
      setIndex(prev => (prev + 1) % posts.length)
      setIsAnimating(false)
    }, 450)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setDirection('left')
    setIsAnimating(true)
    setTimeout(() => {
      setIndex(prev => (prev - 1 + posts.length) % posts.length)
      setIsAnimating(false)
    }, 450)
  }

  if (!featured) return null

  return (
    <div className='group relative w-full overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm transition-all duration-700 hover:border-emerald-500/20 md:p-12'>
      {/* 1. Header Area - Height Locked */}
      <div className='mb-8 flex h-10 items-center justify-between md:mb-12'>
        <h2 className='font-space-grotesk flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase md:gap-8'>
          <span className='hidden h-px w-12 bg-gray-800 sm:block' />
          Spotlight Archive
        </h2>
        <div className='flex items-center gap-2'>
          <button
            onClick={handlePrev}
            className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-emerald-500 active:scale-90'
          >
            <ChevronLeft className='h-5 w-5' />
          </button>
          <button
            onClick={handleNext}
            className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-emerald-500 active:scale-90'
          >
            <ChevronRight className='h-5 w-5' />
          </button>
        </div>
      </div>

      {/* 2. Main "Stage" - Fixed Height on Desktop to prevent any jumping */}
      <div className='relative min-h-[550px] lg:min-h-[420px]'>
        <div
          className={`flex flex-col transition-all duration-500 ease-in-out lg:flex-row lg:items-stretch lg:gap-16 ${
            isAnimating
              ? direction === 'right'
                ? '-translate-x-8 opacity-0'
                : 'translate-x-8 opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          {/* IMAGE SIDE: shrink-0 and aspect-video ensure this width/height NEVER changes */}
          <div className='relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl shadow-2xl lg:w-1/2'>
            <img
              src={featured.image.src}
              className='h-full w-full object-cover transition-transform duration-[15s] group-hover:scale-110'
              alt=''
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent' />
          </div>

          {/* TEXT SIDE: flex-col with explicit spacing */}
          <div className='mt-8 flex flex-1 flex-col justify-start lg:mt-0'>
            {/* Tags area: Fixed height */}
            <div className='mb-6 flex h-6 items-center gap-4 text-[10px] font-bold tracking-widest text-emerald-400 uppercase'>
              <span className='rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1'>
                {featured.tags[0]}
              </span>
              <span className='flex items-center gap-2 text-gray-500'>
                <Clock className='h-4 w-4' /> {featured.readingTime.text}
              </span>
            </div>

            {/* Title area: min-h allows 1 or 2 lines without shifting the description */}
            <div className='min-h-[80px] md:min-h-[110px] lg:min-h-[140px]'>
              <h3 className='font-space-grotesk line-clamp-2 text-3xl leading-tight font-extrabold text-white md:text-5xl lg:text-6xl'>
                {featured.title}
              </h3>
            </div>

            {/* Description area: min-h allows up to 3 lines without shifting the button */}
            <div className='mt-4 min-h-[60px] md:min-h-[80px]'>
              <p className='line-clamp-3 text-lg leading-relaxed font-light text-gray-400 md:text-xl'>
                {featured.description}
              </p>
            </div>

            {/* Button area: mt-auto pushes this to the very bottom of the flex container */}
            <div className='mt-auto pt-8'>
              <Link
                href={`/blogs/${featured.slug}`}
                className='group/read flex w-fit items-center gap-4 rounded-xl bg-emerald-500 px-8 py-4 text-[10px] font-black tracking-widest text-gray-950 uppercase shadow-xl transition-all hover:scale-105 hover:bg-emerald-400 active:scale-95'
              >
                Read Analysis
                <ArrowRight className='h-4 w-4 transition-transform group-hover/read:translate-x-2' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Pagination Dots - Fixed position */}
      <div className='mt-12 flex h-4 justify-center gap-2'>
        {posts.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 cursor-pointer rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-emerald-500' : 'w-2 bg-white/10 hover:bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedSlider
