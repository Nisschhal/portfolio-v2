// app/dashboard/page.tsx
"use client"

import TiptapEditor from "./_components/editor"
import Toolbar from "./_components/toolbar"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 text-black">
      {/* <Toolbar /> */}
      <TiptapEditor />
    </div>
  )
}

export default Dashboard
