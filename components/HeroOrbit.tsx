import React, { PropsWithChildren } from "react"

// no need to define children as node rather define props as object generic

const HeroOrbit = ({
  children,
  size,
  rotate,
}: PropsWithChildren<{ size: number; rotate: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      {/* handle big container */}
      <div
        className={`  rotate-${rotate} `}
        style={{
          transform: `rotate(${rotate}deg)`,

          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        {/* handle start container */}
        <div
          className=" inline-flex "
          style={{
            transform: `rotate(-${rotate}deg)`,
          }}
        >
          {/* handle single star */}
          {children}
        </div>
      </div>
    </div>
  )
}

export default HeroOrbit
