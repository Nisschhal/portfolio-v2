import React, { Fragment } from "react"
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
    // 1. flex for loop effect
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      {/* 2. flex for flex-none to take up required space for soomth animation without hiccups */}
      <div
        className={twMerge(
          "flex flex-none gap-6 pr-6 py-0.5",
          itemWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((item, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className={twMerge(
                  "inline-flex gap-4 items-center px-3 py-2 outline-2 outline-white/20 rounded-lg"
                )}
              >
                <TechIcon iconComponent={item.iconType} />
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Toolbox
