import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

export const ContactSection = () => {
  return (
    <section className="py-16 pt-14 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-300 to-sky-300 py-10 px-8 rounded-3xl text-center md:text-left text-gray-900">
          {/* Grain Image */}

          <div
            className="absolute inset-0 opacity-5 pointer-events-none "
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col items-center md:flex-row gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl md:flex-1">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Lets&apos;s connect
                and discuss how I can help you achieve your goals
              </p>
            </div>
            <div className="md:self-end">
              <button className="mt-8 text-white inline-flex items-center gap-2 bg-gray-900 px-6 w-max h-12 rounded-xl">
                <span>Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
