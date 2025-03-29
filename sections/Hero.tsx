import memojiImage from "@/assets/images/memoji-computer.png"
import Image from "next/image"
import ArrowDown from "@/assets/icons/arrow-down.svg"
export const HeroSection = () => {
  return (
    <div className="py-[88] md:py-39 lg:py-50">
      <div className="container">
        {/* Hero */}
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />

          {/* Content */}
          <div className=" inline-flex items-center bg-gray-950 px-4 py-1.5 border border-gray-800 text-sm font-semibold gap-4 rounded-lg">
            {/* ping */}
            <div className="bg-green-500 rounded-full size-2.5"></div>
            <div className=" ">Available for new projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Headline */}
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          {/* Description */}
          <p className="mt-4 text-center text-white/60 md:text-lg ">
            I design and develop seamless, high-performing user interfaces
            tailored to your needs. Whether you&apos;re a startup, agency, or
            enterprise, my goal is to turn your ideas into exceptional digital
            experiences that drive results.
            <span> 🚀 Let&apos;s bring your vision to life.</span>
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
