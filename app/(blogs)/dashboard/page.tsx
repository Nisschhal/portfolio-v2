// app/dashboard/page.tsx
"use client"

import TiptapEditor from "./_components/editor"
import { ReactTipTapEditor } from "./_components/react-tip-tap"
import Toolbar from "./_components/toolbar"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 text-black">
      {/* <Toolbar /> */}
      <TiptapEditor />
      {/* <ReactTipTapEditor /> */}
    </div>
  )
}

export default Dashboard
