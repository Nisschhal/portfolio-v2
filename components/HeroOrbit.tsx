import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

// no need to define children as node rather define props as object generic

const HeroOrbit = ({
  children,
  size,
  rotate,
  shouldOrbit = false,
  shouldSpin = false,
  orbitDuration = 40,
  spinDuration = 20,
}: PropsWithChildren<{
  size: number
  rotate: number
  shouldOrbit?: boolean
  shouldSpin?: boolean
  orbitDuration?: number
  spinDuration?: number
}>) => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      {/* handle big container rotation-spin */}
      {/* new container because animate-spin reset the inital rotate value to 0 which distort the orbit formation */}
      <div
        className={twMerge('', shouldOrbit && 'animate-spin')}
        style={{
          animationDuration: `${orbitDuration}s`,
        }}
      >
        {/* handle big container flex-item-justify-start to stick at same point and not rotate randomly */}
        <div
          className='flex items-start justify-start'
          style={{
            transform: `rotate(${rotate}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          {/* handle star container rotation-spin */}
          {/* new container because animate-spin reset the inital rotate value to 0 which distort the spin */}
          <div
            className={twMerge('', shouldSpin && 'animate-spin')}
            style={{
              animationDuration: `${spinDuration}s`,
            }}
          >
            {/* handle star container */}
            <div
              className='inline-flex'
              style={{
                transform: `rotate(${rotate * -1}deg)`,
              }}
            >
              {/* handle single star */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroOrbit
