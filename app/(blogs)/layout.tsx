import React from 'react'
import { Header } from '@/sections/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Nischal Puri',
  description: "Nischal Puri's Blog - Full Stack Developer and Tech Enthusiast",
  icons: {
    icon: '/memoji-computer.png',
  },
}
export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {/* <Header /> */}
      {children}
    </div>
  )
}
