import React, { ComponentPropsWithRef, PropsWithChildren } from "react"
import grainImage from "@/assets/images/grain.jpg"
import { twMerge } from "tailwind-merge"

// ComponentPropsWithRef is used to pass the default style for dynamic props to the Card component
const Card = ({
  children,
  className,
  ...other
}: PropsWithChildren<ComponentPropsWithRef<"div">>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-900 dark:bg-black rounded-3xl relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 overflow-hidden p-6 after:pointer-events-none",
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
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      {children}
    </div>
  )
}

export default Card
