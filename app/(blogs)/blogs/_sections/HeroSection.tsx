'use client'
import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import HeroOrbit from '@/components/HeroOrbit'
import { ShootingStars } from '@/components/ui/shotting-star'
import { StarsBackground } from '@/components/ui/star-background'

const HeroSection = () => {
  return (
    <div className='relative z-0 min-h-screen overflow-x-clip py-32'>
      {/* Mask Background with linear-gradient */}
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_82%,transparent)]'>
        {/* Background Noise */}
        {/* <div
          className="absolute inset-0 -z-30 opacity-5  "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div> */}

        {/* Background Rounded Circle */}
        <div className='hero-ring size-[660px]'></div>
        <div className='hero-ring size-[860px]'></div>
        <div className='hero-ring size-[1060px]'></div>
        <div className='hero-ring size-[1260px]'></div>

        {/* Stars Container */}
        <>
          <HeroOrbit
            size={620}
            rotate={95}
            shouldOrbit
            orbitDuration={30}
            shouldSpin
          >
            <StarIcon className='size-8 text-emerald-300' />
          </HeroOrbit>
          <HeroOrbit
            size={600}
            rotate={20}
            shouldOrbit
            shouldSpin
            orbitDuration={30}
          >
            <StarIcon className='size-12 text-emerald-300' />
          </HeroOrbit>
          <HeroOrbit
            size={830}
            rotate={-65}
            shouldOrbit
            shouldSpin
            orbitDuration={30}
          >
            <StarIcon className='size-28 text-emerald-300' />
          </HeroOrbit>

          {/* Sparkles Container */}
          <>
            <HeroOrbit
              size={460}
              rotate={-8}
              shouldOrbit
              shouldSpin
              orbitDuration={40}
              spinDuration={6}
            >
              <SparkleIcon className='size-8 text-emerald-300/20' />
            </HeroOrbit>
            <HeroOrbit
              size={460}
              rotate={75}
              shouldOrbit
              shouldSpin
              orbitDuration={40}
              spinDuration={6}
            >
              <SparkleIcon className='size-5 text-emerald-300/20' />
            </HeroOrbit>
            <HeroOrbit
              size={560}
              rotate={188}
              shouldOrbit
              shouldSpin
              orbitDuration={40}
              spinDuration={6}
            >
              <SparkleIcon className='size-10 text-emerald-300/20' />
            </HeroOrbit>
            <HeroOrbit
              size={700}
              rotate={140}
              shouldOrbit
              shouldSpin
              orbitDuration={40}
              spinDuration={6}
            >
              <SparkleIcon className='size-14 text-emerald-300/20' />
            </HeroOrbit>
          </>

          {/* Dots Container */}
          <>
            <HeroOrbit
              size={540}
              rotate={-36}
              shouldOrbit
              shouldSpin
              orbitDuration={60}
            >
              <div className='size-2 rounded-full bg-emerald-300/20' />
            </HeroOrbit>
            <HeroOrbit
              size={680}
              rotate={0}
              shouldOrbit
              shouldSpin
              orbitDuration={60}
            >
              <div className='size-2 rounded-full bg-emerald-300/20' />
            </HeroOrbit>
            <HeroOrbit
              size={740}
              rotate={84}
              shouldOrbit
              shouldSpin
              orbitDuration={60}
            >
              <div className='size-3 rounded-full bg-emerald-300/20' />
            </HeroOrbit>
          </>
        </>
      </div>

      {/* Hero */}
      <div className='flex flex-col items-center gap-4'>
        {/* Avatar */}
        <Image
          src={memojiImage}
          className='size-[100px]'
          alt='Me peeking from behind the screen'
        />

        {/* Availability */}
        <div className='inline-flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5 text-sm font-semibold'>
          <div className='relative size-2.5 rounded-full bg-green-500'>
            <div className='animate-large-ping absolute inset-0 size-2.5 rounded-full bg-green-500' />
          </div>
          <span>Available for new projects & collabs</span>
        </div>
      </div>

      {/* Hero Contents */}
      <div className='mx-auto mt-10 max-w-2xl text-center'>
        <h1 className='font-serif-play text-4xl leading-tight font-bold tracking-tight md:text-5xl'>
          Notes While I Build — What I'm Learning, Breaking & Figuring Out
        </h1>

        <p className='mt-6 leading-relaxed text-white/70 md:text-lg'>
          This blog is my digital notebook — a place where I write down what I’m
          learning while building stuff. Framework quirks, tools I try, bugs I
          face, questions I Google, and thoughts I want to remember later.
          <br />
          <span className='mt-2 inline-block text-white/60 italic'>
            ✍️ It’s not perfect, polished, or always right — but it’s real. And
            maybe useful to someone else too.
          </span>
        </p>
      </div>

      {/* CTA */}
      <div className='mt-10 flex flex-col items-center justify-center gap-4 md:flex-row'>
        <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6 transition hover:bg-white/10'>
          <span className='font-semibold'>Browse the Logs</span>
          <ArrowDown className='size-4' />
        </button>
        <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900 transition hover:bg-gray-100'>
          <span>👋</span>
          <span className='font-semibold'>Let's Connect</span>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
