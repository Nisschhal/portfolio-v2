import { Header } from "@/sections/Header"

export default async function ThemeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      {children}

      {/* Star Effect */}
    </div>
  )
}
