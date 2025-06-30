import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import Link from 'next/link'

export const ContactSection = () => {
  return (
    <section className='py-16 pt-14 lg:py-24 lg:pt-20' id='contact'>
      <div className='container'>
        <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-300 px-8 py-10 text-center text-gray-900 md:text-left'>
          {/* Grain Image */}

          <div
            className='pointer-events-none absolute inset-0 opacity-5'
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          {/* Responsive Div col md:row */}
          <div className='flex flex-col items-center gap-8 md:flex-row md:gap-16'>
            {/* Heading */}
            <div>
              <h2 className='font-serif text-2xl md:flex-1 md:text-3xl'>
                Let's create something amazing together
              </h2>
              <p className='mt-2 text-sm md:text-base'>
                Ready to bring your next project to life? Lets&apos;s connect
                and discuss how I can help you achieve your goals
              </p>
            </div>
            <div className='md:self-end'>
              <Link
                href='https://api.whatsapp.com/send?phone=9818275115'
                target='_blank'
                className='mt-8 inline-flex h-12 w-max items-center gap-2 rounded-xl bg-gray-900 px-6 text-white'
              >
                <span>Contact Me</span>
                <ArrowUpRightIcon className='size-4' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
