import React from "react"
import TechIcon from "./TechIcon"
import { twMerge } from "tailwind-merge"
const Toolbox = ({
  items,
  className,
  itemWrapperClassName,
}: {
  items: {
    title: string
    iconType: React.ElementType
  }[]
  className?: string
  itemWrapperClassName?: string
}) => {
  return (
    <div
      className={twMerge(
        "flex  px-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className={twMerge("flex flex-none gap-6", itemWrapperClassName)}>
        {items.map((item) => (
          <div
            key={item.title}
            className={twMerge(
              "inline-flex gap-2 items-center px-3 py-2 outline outline-white/20 rounded-lg"
            )}
          >
            <TechIcon iconComponent={item.iconType} />
            <p className="font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Toolbox
