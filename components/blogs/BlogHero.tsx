'use client'
import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import HeroOrbit from '@/components/HeroOrbit'
import { useRouter } from 'next/navigation'
import { LayoutGrid, Sparkles } from 'lucide-react'

const BlogHero = () => {
  const router = useRouter()

  return (
    // Changed to h-screen and removed large padding
    <div className='relative z-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden'>
      {/* 1. Background Visuals (Strictly contained) */}
      <div className='pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'>
        <div className='hero-ring size-[600px] opacity-80'></div>
        <div className='hero-ring size-[900px] opacity-60'></div>
        <div className='hero-ring size-[1100px] opacity-40'></div>

        <HeroOrbit
          size={760}
          rotate={52}
          shouldOrbit
          orbitDuration={20}
          shouldSpin
        >
          <StarIcon className='size-8 text-emerald-300/40' />
        </HeroOrbit>
        <HeroOrbit
          size={620}
          rotate={95}
          shouldOrbit
          orbitDuration={30}
          shouldSpin
        >
          <StarIcon className='size-8 text-emerald-300/40' />
        </HeroOrbit>
        <HeroOrbit
          size={560}
          rotate={188}
          shouldOrbit
          shouldSpin
          orbitDuration={40}
        >
          <SparkleIcon className='size-10 text-emerald-300/20' />
        </HeroOrbit>
        <>
          {/* Sparkles */}
          <HeroOrbit
            size={460}
            rotate={-8}
            shouldOrbit
            orbitDuration={40}
            spinDuration={6}
            shouldSpin
          >
            <SparkleIcon className='size-8 text-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit
            size={460}
            rotate={75}
            shouldOrbit
            orbitDuration={40}
            spinDuration={6}
            shouldSpin
          >
            <SparkleIcon className='size-5 text-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit
            size={560}
            rotate={188}
            shouldOrbit
            orbitDuration={40}
            spinDuration={6}
            shouldSpin
          >
            <SparkleIcon className='size-10 text-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit
            size={700}
            rotate={140}
            shouldOrbit
            orbitDuration={40}
            spinDuration={6}
            shouldSpin
          >
            <SparkleIcon className='size-14 text-emerald-300/20' />
          </HeroOrbit>

          {/* Dots */}
          <HeroOrbit
            size={540}
            rotate={-36}
            shouldOrbit
            orbitDuration={60}
            shouldSpin
          >
            <div className='size-2 rounded-full bg-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit
            size={680}
            rotate={0}
            shouldOrbit
            orbitDuration={60}
            shouldSpin
          >
            <div className='size-2 rounded-full bg-emerald-300/20' />
          </HeroOrbit>
          <HeroOrbit
            size={740}
            rotate={84}
            shouldOrbit
            orbitDuration={60}
            shouldSpin
          >
            <div className='size-3 rounded-full bg-emerald-300/20' />
          </HeroOrbit>
        </>
      </div>

      {/* 2. Main Content Stack */}
      <div className='relative z-10 flex max-w-4xl flex-col items-center px-6 text-center'>
        {/* Top Meta Group */}
        <div className='mb-8 flex flex-col items-center gap-6'>
          {/* Version Badge */}
          <div className='animate-float inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 text-[9px] font-black tracking-[0.4em] text-emerald-400 uppercase backdrop-blur-md'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
              <span className='h-2 w-2 rounded-full bg-emerald-500'></span>
            </span>
            V.2026 LOGS || GETTING STARTED
          </div>

          {/* Avatar */}
          <div className='relative'>
            <div className='absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl' />
            <Image
              src={memojiImage}
              className='relative size-[90px] md:size-[110px]'
              alt='Nischal Puri'
            />
          </div>

          {/* Status Badge */}
          <div className='inline-flex items-center gap-3 rounded-full border border-gray-800 bg-gray-950/50 px-4 py-1.5 text-[10px] font-bold tracking-tight backdrop-blur-md'>
            <div className='relative size-2 rounded-full bg-green-500'>
              <div className='animate-large-ping absolute inset-0 size-2 rounded-full bg-green-500' />
            </div>
            <span className='tracking-widest text-white/70 uppercase'>
              Open for Collabs
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className='font-serif-play text-4xl leading-[1.1] font-bold tracking-tight text-pretty text-white md:text-6xl'>
          Notes While I Build — What I'm Learning, Breaking & Figuring Out
        </h1>

        {/* Philosophy Copy */}
        <div className='mt-6 max-w-2xl space-y-3'>
          <p className='text-base leading-relaxed font-light text-white/60 md:text-lg'>
            This blog is my digital notebook where I write down framework
            quirks, tools I try, bugs I face, and technical thoughts I want to
            remember later.
          </p>
          <p className='text-sm font-light text-emerald-400/80 italic md:text-base'>
            ✍️ It’s not perfect or polished — but it’s real. And maybe useful to
            you too.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <button
            onClick={() =>
              document
                .getElementById('explorer')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='group inline-flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 transition-all hover:bg-white/10'
          >
            <span className='text-[10px] font-bold tracking-widest text-white uppercase'>
              Browse Logs
            </span>
            <ArrowDown className='size-3.5 text-emerald-500 transition-transform group-hover:translate-y-0.5' />
          </button>

          <button
            onClick={() => router.push('/blogs/archive')}
            className='inline-flex h-12 items-center gap-3 rounded-xl bg-white px-8 text-gray-950 shadow-xl shadow-emerald-500/10 transition-all hover:scale-105 hover:bg-emerald-50 active:scale-95'
          >
            <LayoutGrid className='size-3.5' />
            <span className='text-[10px] font-bold tracking-widest uppercase'>
              Explore Vault
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Hint - Anchor to the bottom of the 100vh */}
      <div className='absolute bottom-8 flex animate-pulse flex-col items-center gap-2 opacity-30'>
        <span className='text-[9px] font-black tracking-[0.5em] uppercase'>
          Scroll
        </span>
        <div className='h-8 w-px bg-gradient-to-b from-emerald-500 to-transparent' />
      </div>
    </div>
  )
}

export default BlogHero