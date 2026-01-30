'use client'

import React from 'react'
import { LayoutGrid, Hash, RotateCcw } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface CategorySliderProps {
  categories: any[]
  active: string
  onChange: (s: string) => void
  onViewAll: () => void // Reset function passed from parent
  isArchive?: boolean // Prop to distinguish layout/behavior
}

const CategorySlider: React.FC<CategorySliderProps> = ({
  categories,
  active,
  onChange,
  onViewAll,
  isArchive = false,
}) => {
  const router = useRouter()

  const handleArchiveClick = () => {
    if (isArchive) {
      // Logic for Archive Page: Reset all filters
      onViewAll()
    } else {
      // Logic for Blog Page: Redirect to the dedicated Archive route
      router.push('/blogs/archive')
    }
  }

  return (
    <div className='flex w-full items-center gap-4'>
      {/* Left Icon - Visual context for the slider */}
      <div className='hidden items-center justify-center rounded-lg border border-white/5 bg-white/5 p-2 md:flex'>
        <Hash className='h-4 w-4 text-emerald-500' />
      </div>

      <div className='group relative flex-1 overflow-hidden'>
        {/* Edge Gradients for polished scrolling */}
        <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#030712] to-transparent' />
        <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#030712] to-transparent' />

        {/* Scrollable Container */}
        <div className='no-scrollbar flex items-center gap-2 overflow-x-auto scroll-smooth border border-white/20 py-1'>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onChange(cat.slug)}
              className={`relative rounded-lg px-5 py-2 text-[10px] font-bold tracking-[0.1em] whitespace-nowrap uppercase transition-all duration-300 ${
                active === cat.slug
                  ? 'bg-emerald-500 text-gray-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400/50'
                  : 'border border-white/5 bg-white/5 text-gray-500 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400'
              } `}
            >
              {cat.name}
              {/* Pulse Indicator for Active State */}
              {active === cat.slug && (
                <span className='absolute -top-1 -right-1 flex h-2 w-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500'></span>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className='mx-1 hidden h-6 w-px bg-white/10 sm:block' />

      {/* 
        Dynamic Action Button:
        - If isArchive: Shows "Reset" and clears filters
        - If !isArchive: Shows "Full Archive" and redirects
      */}
      <button
        onClick={handleArchiveClick}
        className='flex shrink-0 items-center justify-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-[10px] font-black tracking-widest text-emerald-400 uppercase transition-all hover:bg-emerald-500 hover:text-gray-950 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95'
      >
        {isArchive ? (
          <>
            <RotateCcw className='h-3.5 w-3.5' />
            <span>Reset</span>
          </>
        ) : (
          <>
            <LayoutGrid className='h-3.5 w-3.5' />
            <span className='hidden md:inline'>Full Archive</span>
            <span className='md:hidden'>All</span>
          </>
        )}
      </button>
    </div>
  )
}

export default CategorySlider
