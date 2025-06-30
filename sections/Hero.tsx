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

export const HeroSection = () => {
  return (
    <div className='relative overflow-x-clip py-32 md:py-48 lg:py-60' id='hero'>
      {/* Orbit Background Mask */}
      <div className='absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_82%,transparent)]'>
        {/* Rings */}
        <div className='hero-ring size-[660px]'></div>
        <div className='hero-ring size-[860px]'></div>
        <div className='hero-ring size-[1060px]'></div>
        <div className='hero-ring size-[1260px]'></div>

        {/* Stars */}
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
            orbitDuration={30}
            shouldSpin
          >
            <StarIcon className='size-12 text-emerald-300' />
          </HeroOrbit>
          <HeroOrbit
            size={830}
            rotate={-65}
            shouldOrbit
            orbitDuration={30}
            shouldSpin
          >
            <StarIcon className='size-28 text-emerald-300' />
          </HeroOrbit>

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

      {/* Hero Content */}
      <div className='container'>
        {/* Avatar & Status */}
        <div className='flex flex-col items-center'>
          <Image
            src={memojiImage}
            alt='Illustration of a person with laptop'
            title="That's me — your next developer!"
            className='size-[100px]'
          />
          <div className='inline-flex w-[390px] items-center gap-3 rounded-full border border-gray-800 bg-gray-950 px-4 py-1.5 text-sm font-medium text-white shadow-sm md:max-w-max'>
            <div className='relative size-2.5 rounded-full bg-green-500'>
              <div className='animate-large-ping absolute inset-0 rounded-full bg-green-500' />
            </div>
            <span className=''>
              Navigating ideas through code, one star at a time
              {/* <StarIcon className='ml-0.5 inline-block size-4 animate-spin [animation-duration:10s]' /> */}
            </span>
          </div>
        </div>

        {/* Text */}
        <div className='mx-auto mt-10 max-w-2xl text-center'>
          <h1 className='font-serif-play text-center text-3xl md:text-5xl'>
            Your vision. My mission. <br /> A journey through digital space.
          </h1>
          <p className='mt-4 px-1 text-center text-white/60 md:text-lg'>
            I turn your vision into intuitive, high-performance websites — with
            code that speaks and design that connects.
            <br />
            <span className='font-space-grotesk mt-2 block text-sm italic'>
              🚀 Ready to launch something meaningful? Let’s build it —
              together.
            </span>
          </p>
        </div>

        {/* CTAs */}
        <div className='mt-10 flex flex-col items-center justify-center gap-4 md:flex-row'>
          <button
            aria-label='Explore My Work'
            className='hover:inset-shadow-glass inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl border border-white/15 px-6 text-white transition hover:bg-white/10'
          >
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='group inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900 transition hover:bg-white/90'>
            <span className='transition-transform duration-200 group-hover:rotate-90'>
              👋
            </span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}
// 'use client'
// import memojiImage from '@/assets/images/memoji-computer.png'
// import Image from 'next/image'
// import ArrowDown from '@/assets/icons/arrow-down.svg'
// import grainImage from '@/assets/images/grain.jpg'
// import StarIcon from '@/assets/icons/star.svg'
// import SparkleIcon from '@/assets/icons/sparkle.svg'
// import HeroOrbit from '@/components/HeroOrbit'
// import { ShootingStars } from '@/components/ui/shotting-star'
// import { StarsBackground } from '@/components/ui/star-background'

// export const HeroSection = () => {
//   return (
//     <div className='relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60'>
//       {/* Mask Background with linear-gradient */}
//       <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_82%,transparent)]'>
//         {/* Background Noise */}
//         {/* <div
//           className="absolute inset-0 -z-30 opacity-5  "
//           style={{ backgroundImage: `url(${grainImage.src})` }}
//         ></div> */}

//         {/* Background Rounded Circle */}
//         <div className='hero-ring size-[660px]'></div>
//         <div className='hero-ring size-[860px]'></div>
//         <div className='hero-ring size-[1060px]'></div>
//         <div className='hero-ring size-[1260px]'></div>

//         {/* Stars Container */}
//         <>
//           <HeroOrbit
//             size={620}
//             rotate={95}
//             shouldOrbit
//             orbitDuration={30}
//             shouldSpin
//           >
//             <StarIcon className='size-8 text-emerald-300' />
//           </HeroOrbit>
//           <HeroOrbit
//             size={600}
//             rotate={20}
//             shouldOrbit
//             shouldSpin
//             orbitDuration={30}
//           >
//             <StarIcon className='size-12 text-emerald-300' />
//           </HeroOrbit>
//           <HeroOrbit
//             size={830}
//             rotate={-65}
//             shouldOrbit
//             shouldSpin
//             orbitDuration={30}
//           >
//             <StarIcon className='size-28 text-emerald-300' />
//           </HeroOrbit>

//           {/* Sparkles Container */}
//           <>
//             <HeroOrbit
//               size={460}
//               rotate={-8}
//               shouldOrbit
//               shouldSpin
//               orbitDuration={40}
//               spinDuration={6}
//             >
//               <SparkleIcon className='size-8 text-emerald-300/20' />
//             </HeroOrbit>
//             <HeroOrbit
//               size={460}
//               rotate={75}
//               shouldOrbit
//               shouldSpin
//               orbitDuration={40}
//               spinDuration={6}
//             >
//               <SparkleIcon className='size-5 text-emerald-300/20' />
//             </HeroOrbit>
//             <HeroOrbit
//               size={560}
//               rotate={188}
//               shouldOrbit
//               shouldSpin
//               orbitDuration={40}
//               spinDuration={6}
//             >
//               <SparkleIcon className='size-10 text-emerald-300/20' />
//             </HeroOrbit>
//             <HeroOrbit
//               size={700}
//               rotate={140}
//               shouldOrbit
//               shouldSpin
//               orbitDuration={40}
//               spinDuration={6}
//             >
//               <SparkleIcon className='size-14 text-emerald-300/20' />
//             </HeroOrbit>
//           </>

//           {/* Dots Container */}
//           <>
//             <HeroOrbit
//               size={540}
//               rotate={-36}
//               shouldOrbit
//               shouldSpin
//               orbitDuration={60}
//             >
//               <div className='size-2 rounded-full bg-emerald-300/20' />
//             </HeroOrbit>
//             <HeroOrbit
//               size={680}
//               rotate={0}
//               shouldOrbit
//               shouldSpin
//               orbitDuration={60}
//             >
//               <div className='size-2 rounded-full bg-emerald-300/20' />
//             </HeroOrbit>
//             <HeroOrbit
//               size={740}
//               rotate={84}
//               shouldOrbit
//               shouldSpin
//               orbitDuration={60}
//             >
//               <div className='size-3 rounded-full bg-emerald-300/20' />
//             </HeroOrbit>
//           </>
//         </>
//       </div>

//       {/* Container */}
//       <div className='container'>
//         {/* Hero */}
//         <div className='flex flex-col items-center'>
//           {/* Avatar */}
//           <Image
//             src={memojiImage}
//             className='size-[100px]'
//             alt='Person peeking from behind laptop'
//           />

//           {/* Availability */}
//           <div className='inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5 text-sm font-semibold'>
//             {/* ping */}
//             <div className='relative size-2.5 rounded-full bg-green-500'>
//               <div className='animate-large-ping absolute inset-0 size-2.5 rounded-full bg-green-500' />
//             </div>
//             <div className=' '>Available for new projects</div>
//           </div>
//         </div>

//         {/* Hero Contents */}
//         <div className='mx-auto max-w-lg'>
//           {/* Headline */}
//           <h1 className='mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl'>
//             Building Exceptional User Experiences
//           </h1>
//           {/* Description */}
//           <p className='mt-4 text-center text-white/60 md:text-lg'>
//             I create high-performing, user-friendly websites for startups,
//             agencies, and businesses of all sizes. Whether you’re just starting
//             or scaling up. <br />
//             <span className='mt-1 inline-block italic'>
//               🚀 Let&apos;s build something exceptional. 🚀
//             </span>
//           </p>
//         </div>

//         {/* CTA */}
//         <div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
//           <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6'>
//             <span className='font-semibold'>Explore My Work</span>
//             <ArrowDown className='size-4' />
//           </button>
//           <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900'>
//             <span>👋</span>
//             <span className='font-semibold'>Let&apos;s Connect</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
