// import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
// import grainImage from '@/assets/images/grain.jpg'
// import Link from 'next/link'

// export const ContactSection = () => {
//   return (
//     <section className='py-16 pt-14 lg:py-24 lg:pt-20' id='contact'>
//       <div className='container'>
//         <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-300 px-8 py-10 text-center text-gray-900 md:text-left'>
//           {/* Grain Image */}

//           <div
//             className='pointer-events-none absolute inset-0 opacity-5'
//             style={{ backgroundImage: `url(${grainImage.src})` }}
//           />
//           {/* Responsive Div col md:row */}
//           <div className='flex flex-col items-center gap-8 md:flex-row md:gap-16'>
//             {/* Heading */}
//             <div>
//               <h2 className='font-serif text-2xl md:flex-1 md:text-3xl'>
//                 Let's create something amazing together
//               </h2>
//               <p className='mt-2 text-sm md:text-base'>
//                 Ready to bring your next project to life? Lets&apos;s connect
//                 and discuss how I can help you achieve your goals
//               </p>
//             </div>
//             <div className='md:self-end'>
//               <Link
//                 href='https://api.whatsapp.com/send?phone=9818275115'
//                 target='_blank'
//                 className='mt-8 inline-flex h-12 w-max items-center gap-2 rounded-xl bg-gray-900 px-6 text-white'
//               >
//                 <span>Contact Me</span>
//                 <ArrowUpRightIcon className='size-4' />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import React from 'react'
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export const ContactSection = () => {
  return (
    <section id='contact' className='mx-auto max-w-7xl px-6 py-24 md:py-40'>
      <div className='relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md md:p-16'>
        {/* Decorative elements */}
        <div className='absolute top-0 right-0 p-8 opacity-20'>
          <Send className='h-24 w-24 text-emerald-500' />
        </div>

        <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
          {/* Left Side: Copy */}
          <div>
            <div className='mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-black tracking-[0.4em] text-emerald-400 uppercase'>
              Terminal // Request
            </div>
            <h2 className='font-space-grotesk mb-6 text-4xl font-bold tracking-tighter text-white md:text-6xl'>
              Initiate a{' '}
              <span className='text-emerald-500 italic'>Project</span>
            </h2>
            <p className='mb-10 text-lg leading-relaxed font-light text-gray-400'>
              Ready to scale your next system? Whether you have a specific
              technical challenge or just want to discuss architectural logic,
              my transmission lines are open.
            </p>

            <div className='space-y-6'>
              <div className='flex items-center gap-4 text-gray-300'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5'>
                  <Mail className='h-4 w-4 text-emerald-500' />
                </div>
                <span className='text-sm font-medium'>
                  nischal@yourdomain.com
                </span>
              </div>
              <div className='flex items-center gap-4 text-gray-300'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5'>
                  <MapPin className='h-4 w-4 text-emerald-500' />
                </div>
                <span className='text-sm font-medium'>
                  Kathmandu, Nepal (GMT +5:45)
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form (Industrial Style) */}
          <form className='flex flex-col gap-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <input
                type='text'
                placeholder='Identification (Name)'
                className='rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-white transition-all outline-none focus:border-emerald-500/50'
              />
              <input
                type='email'
                placeholder='Protocol Address (Email)'
                className='rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-white transition-all outline-none focus:border-emerald-500/50'
              />
            </div>
            <input
              type='text'
              placeholder='Subject'
              className='rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-white transition-all outline-none focus:border-emerald-500/50'
            />
            <textarea
              placeholder='System requirements or message...'
              rows={5}
              className='resize-none rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-white transition-all outline-none focus:border-emerald-500/50'
            />
            <button className='group flex items-center justify-center gap-3 rounded-2xl bg-white py-5 text-[11px] font-black tracking-widest text-gray-950 uppercase shadow-xl transition-all hover:scale-[1.02] hover:bg-emerald-50 active:scale-95'>
              Transmit Message
              <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
