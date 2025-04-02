import React from "react"

const TechIcon = ({ iconComponent }: { iconComponent: React.ElementType }) => {
  const Component = iconComponent
  return (
    <div>
      <Component className="size-10" />
    </div>
  )
}

export default TechIcon
