"use client"
import React from "react"


import SideBar from "./_components/sidebar"
import Dashboard from "./_components/dashboard"

const MyDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true)

  return (
    <div className="bg-stone-100 p-4  text-stone-900">
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: sidebarOpen ? "200px 1fr" : "100px 1fr",
        }}
      >
        <SideBar />
        <Dashboard />
      </div>
    </div>
  )
}

export default MyDashboard
