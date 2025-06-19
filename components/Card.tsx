import React, { ComponentPropsWithRef, PropsWithChildren } from 'react'
import grainImage from '@/assets/images/grain.jpg'
import { twMerge } from 'tailwind-merge'

// ComponentPropsWithRef is used to pass the default style for dynamic props to the Card component
const Card = ({
  children,
  className,
  ...other
}: PropsWithChildren<ComponentPropsWithRef<'div'>>) => {
  return (
    <div
      className={twMerge(
        "relative z-0 overflow-hidden rounded-3xl bg-gray-900 p-6 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-[''] dark:bg-black",
        className
      )}
      {...other}
    >
      {/* <div
      className="rounded-3xl relative z-0
              bg-gray-800
              overflow-hidden px-8 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16 outline-2 outline-white/20"
    > */}
      {/* Background noise image */}
      <div
        className='absolute inset-0 -z-10 opacity-5'
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      {children}
    </div>
  )
}

export default Card
