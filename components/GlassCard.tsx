'use client'

export const BackgroundGlassWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='min-h-screen w-full bg-gray-900 bg-gradient-to-b from-gray-900/95 to-gray-900 transition-all duration-300 dark:bg-black dark:from-black/95 dark:to-black'>
      <div className='mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8'>
        {children}
      </div>
    </div>
  )
}
