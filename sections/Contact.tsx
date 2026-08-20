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
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

const EMAIL = 'nischal.dev@gmail.com'

const inputStyles =
  'rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-gray-500 transition-all outline-none focus:border-emerald-500/50'

export const ContactSection = () => {
  return (
    <section id='contact' className='px-6 py-24 lg:py-40'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          eyebrow='Terminal // Request'
          title='Initiate a Project'
          description='Ready to scale your next system? Whether you have a specific technical challenge or just want to discuss architectural logic, my transmission lines are open.'
        />

        <Card className='mt-20 px-8 py-8 md:px-10 md:py-12 lg:px-20 lg:py-16'>
          {/* Decorative element */}
          <div className='pointer-events-none absolute top-0 right-0 p-8 opacity-20'>
            <Send className='h-24 w-24 text-emerald-500' />
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16'>
            {/* Left Side: Direct channels */}
            <div>
              <div className='inline-flex items-center gap-3'>
                <div className='rounded bg-emerald-400/10 px-2 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase'>
                  Available
                </div>
                <span className='font-mono text-[10px] text-gray-500'>
                  Direct Channels
                </span>
              </div>

              <hr className='mt-6 border-white/10' />

              <div className='mt-6 flex flex-col gap-4'>
                <a
                  href={`mailto:${EMAIL}`}
                  className='group flex items-center gap-4 text-gray-300 transition-colors hover:text-emerald-400'
                >
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-emerald-500/40'>
                    <Mail className='h-4 w-4 text-emerald-500' />
                  </div>
                  <span className='text-sm font-medium'>{EMAIL}</span>
                </a>
                <div className='flex items-center gap-4 text-gray-300'>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5'>
                    <MapPin className='h-4 w-4 text-emerald-500' />
                  </div>
                  <span className='text-sm font-medium'>
                    Kathmandu, Nepal (GMT +5:45)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <form className='flex flex-col gap-4'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <input
                  type='text'
                  placeholder='Identification (Name)'
                  className={inputStyles}
                />
                <input
                  type='email'
                  placeholder='Protocol Address (Email)'
                  className={inputStyles}
                />
              </div>
              <input
                type='text'
                placeholder='Subject'
                className={inputStyles}
              />
              <textarea
                placeholder='System requirements or message...'
                rows={5}
                className={`${inputStyles} resize-none`}
              />
              <button className='mt-2 flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-8 text-[10px] font-black tracking-widest text-gray-950 uppercase transition-all hover:bg-emerald-50 active:scale-95'>
                Transmit Message <ArrowUpRight className='size-4' />
              </button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  )
}
