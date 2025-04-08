import { Header } from "@/sections/Header"

export default async function ThemeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}

      {/* Star Effect */}
    </div>
  )
}
