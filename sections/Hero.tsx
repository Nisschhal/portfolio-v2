import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image"
import ArrowDown from "@/assets/icons/arrow-down.svg"
import grainImage from "@/assets/images/grain.jpg"
import StarIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"
import HeroOrbit from "@/components/HeroOrbit"

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* Mask Background with linear-gradient */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Background Noise */}
        <div
          className="absolute inset-0 -z-30 opacity-5  "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        {/* Background Rounded Circle */}
        <div className="size-[660px] hero-ring"></div>
        <div className="size-[860px] hero-ring"></div>
        <div className="size-[1060px] hero-ring"></div>
        <div className="size-[1260px] hero-ring"></div>

        {/* Stars Container */}
        <>
          <HeroOrbit size={830} rotate={-65}>
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={600} rotate={20}>
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={620} rotate={95}>
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>

          {/* Sparkles Container */}
          <>
            <HeroOrbit size={460} rotate={-8}>
              <SparkleIcon className="size-8 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={460} rotate={75}>
              <SparkleIcon className="size-5 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={560} rotate={188}>
              <SparkleIcon className="size-10 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={700} rotate={140}>
              <SparkleIcon className="size-14 text-emerald-300/20" />
            </HeroOrbit>
          </>

          {/* Dots Container */}
          <>
            <HeroOrbit size={740} rotate={84}>
              <div className="size-3 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={540} rotate={-36}>
              <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={680} rotate={0}>
              <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
          </>
        </>
      </div>

      {/* Container */}
      <div className="container">
        {/* Hero */}
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />

          {/* Availability */}
          <div className=" inline-flex items-center bg-gray-950 px-4 py-1.5 border border-gray-800 text-sm font-semibold gap-4 rounded-lg">
            {/* ping */}
            <div className="bg-green-500 rounded-full size-2.5"></div>
            <div className=" ">Available for new projects</div>
          </div>
        </div>

        {/* Hero Contents */}
        <div className="max-w-lg mx-auto">
          {/* Headline */}
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          {/* Description */}
          <p className="mt-4 text-center text-white/60 md:text-lg ">
            I create high-performing, user-friendly websites for startups,
            agencies, and businesses of all sizes. Whether you’re just starting
            or scaling up. <br />
            <span className="italic inline-block mt-1">
              🚀 Let&apos;s build something exceptional. 🚀
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border bg-white text-gray-900 border-white px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}
