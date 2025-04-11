"use client"
import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image"
import ArrowDown from "@/assets/icons/arrow-down.svg"
import grainImage from "@/assets/images/grain.jpg"
import StarIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"
import HeroOrbit from "@/components/HeroOrbit"
import { ShootingStars } from "@/components/ui/shotting-star"
import { StarsBackground } from "@/components/ui/star-background"

const HeroSection = () => {
  return (
    <div className="py-32  relative z-0 overflow-x-clip">
      {/* Mask Background with linear-gradient */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_82%,transparent)]">
        {/* Background Noise */}
        {/* <div
          className="absolute inset-0 -z-30 opacity-5  "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div> */}

        {/* Background Rounded Circle */}
        <div className="size-[660px] hero-ring"></div>
        <div className="size-[860px] hero-ring"></div>
        <div className="size-[1060px] hero-ring"></div>
        <div className="size-[1260px] hero-ring"></div>

        {/* Stars Container */}
        <>
          <HeroOrbit
            size={620}
            rotate={95}
            shouldOrbit
            orbitDuration={30}
            shouldSpin
          >
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit
            size={600}
            rotate={20}
            shouldOrbit
            shouldSpin
            orbitDuration={30}
          >
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit
            size={830}
            rotate={-65}
            shouldOrbit
            shouldSpin
            orbitDuration={30}
          >
            <StarIcon className="size-28 text-emerald-300" />
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
              <SparkleIcon className="size-8 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit
              size={460}
              rotate={75}
              shouldOrbit
              shouldSpin
              orbitDuration={40}
              spinDuration={6}
            >
              <SparkleIcon className="size-5 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit
              size={560}
              rotate={188}
              shouldOrbit
              shouldSpin
              orbitDuration={40}
              spinDuration={6}
            >
              <SparkleIcon className="size-10 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit
              size={700}
              rotate={140}
              shouldOrbit
              shouldSpin
              orbitDuration={40}
              spinDuration={6}
            >
              <SparkleIcon className="size-14 text-emerald-300/20" />
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
              <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit
              size={680}
              rotate={0}
              shouldOrbit
              shouldSpin
              orbitDuration={60}
            >
              <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit
              size={740}
              rotate={84}
              shouldOrbit
              shouldSpin
              orbitDuration={60}
            >
              <div className="size-3 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
          </>
        </>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <Image
          src={memojiImage}
          className="size-[100px]"
          alt="Me peeking from behind the screen"
        />

        {/* Availability */}
        <div className="inline-flex items-center bg-gray-950 px-4 py-1.5 border border-gray-800 text-sm font-semibold gap-3 rounded-lg">
          <div className="bg-green-500 rounded-full size-2.5 relative">
            <div className="absolute inset-0 bg-green-500 rounded-full size-2.5 animate-large-ping" />
          </div>
          <span>Available for new projects & collabs</span>
        </div>
      </div>

      {/* Hero Contents */}
      <div className="max-w-2xl mx-auto text-center mt-10">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
          Notes While I Build — What I'm Learning, Breaking & Figuring Out
        </h1>

        <p className="mt-6 text-white/70 md:text-lg leading-relaxed">
          This blog is my digital notebook — a place where I write down what I’m
          learning while building stuff. Framework quirks, tools I try, bugs I
          face, questions I Google, and thoughts I want to remember later.
          <br />
          <span className="italic mt-2 inline-block text-white/60">
            ✍️ It’s not perfect, polished, or always right — but it’s real. And
            maybe useful to someone else too.
          </span>
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 transition">
          <span className="font-semibold">Browse the Logs</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border bg-white text-gray-900 border-white px-6 h-12 rounded-xl hover:bg-gray-100 transition">
          <span>👋</span>
          <span className="font-semibold">Let's Connect</span>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
