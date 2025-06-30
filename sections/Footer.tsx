import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
const footerLinks = [
  { title: 'YouTube', href: '#' },
  { title: 'Twitter', href: '#' },
  { title: 'Instagram', href: '#' },
  { title: 'LinkedIn', href: '#' },
]
export const Footer = () => {
  return (
    <footer className='relative -z-10 overflow-hidden'>
      {/* Gradient Effect */}
      <div className='absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/35 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] dark:bg-gray-300/35'></div>

      {/* Content */}
      <div className='z-0 container'>
        <div className='flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm'>
          <div className='text-white/40'>&copy; 2025. All rights reserved.</div>
          <nav className='flex flex-col items-center gap-8'>
            {footerLinks.map(link => (
              <a
                href={link.href}
                key={link.title}
                className='inline-flex items-center gap-1.5'
              >
                <span className='font-semibold'> {link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
