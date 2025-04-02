import React from "react"

const TechIcon = ({ iconComponent }: { iconComponent: React.ElementType }) => {
  const Component = iconComponent
  return (
    <>
      {/* Global SVG Gradient Definition */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient
            id="tech-icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgb(52, 211, 153)" />
            <stop offset="100%" stopColor="rgb(69, 160, 230)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Icon Using Gradient */}
      <Component
        className="size-10"
        style={{ fill: "url(#tech-icon-gradient)" }}
      />
    </>
  )
}

export default TechIcon
