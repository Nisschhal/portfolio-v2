import React from 'react'

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
      <div className='flex justify-center'>
        {/* Feature Title */}
        <p className='gradient-text font-semibold tracking-widest uppercase'>
          {eyebrow}
        </p>
      </div>
      {/* 3xl md:5x */}
      <h2 className='mt-6 text-center font-serif text-3xl md:text-5xl'>
        {title}
      </h2>
      {/* text-normal md:text-xl */}
      <p className='mx-auto mt-4 max-w-md text-center text-base text-white/60 md:text-lg lg:max-w-2xl'>
        {description}
      </p>
    </div>
  )
}

export default SectionHeader
