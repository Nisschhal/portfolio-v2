import React from "react"
// Icons
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go"
import AccountToggle from "./accountToggle"
const toggleBar = {
  open: <GoSidebarExpand />,
  close: <GoSidebarCollapse />,
}
const SideBar = () => {
  return (
    <div>
      {/* Scrollable Side Bar Content */}
      <div className="overflow-y-scroll h-[calc(100vh-32px-48px)] sticky top-4 ">
        <AccountToggle />
      </div>
      {/* Setting  */}
    </div>
  )
}

export default SideBar
