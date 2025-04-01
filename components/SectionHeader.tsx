import React from "react"

const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string
  eyebrow: string
  description: string
}) => {
  return (
    <div>
      {/* flex to only select the text content */}
      <div className="flex justify-center">
        {/* Feature Title */}
        <p className=" uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      {/* 3xl md:5x */}
      <h2 className="text-3xl md:text-5xl font-serif text-center mt-6">
        {title}
      </h2>
      {/* text-normal md:text-xl */}
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </div>
  )
}

export default SectionHeader
