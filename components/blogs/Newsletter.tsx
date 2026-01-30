'use client'

import React, { useState } from 'react'
import { Send, X, Terminal, Zap, ShieldAlert, Cpu } from 'lucide-react'

const NewsletterSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsOpen(true)
    }
  }

  return (
    <>
      <section className='relative mx-auto max-w-7xl px-6 py-24 md:py-40'>
        {/* Deep Glow Background */}
        <div className='absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[140px]' />

        <div className='relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.01] p-8 backdrop-blur-sm md:p-24'>
          {/* Corner Framing */}
          <div className='absolute top-0 left-0 h-16 w-16 border-t border-l border-emerald-500/10' />
          <div className='absolute right-0 bottom-0 h-16 w-16 border-r border-b border-emerald-500/10' />

          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-10 inline-flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] font-black tracking-[0.5em] text-emerald-400 uppercase'>
              <Terminal className='h-3.5 w-3.5' /> Direct Feed V.01
            </div>

            <h2 className='font-space-grotesk mb-8 text-4xl font-bold tracking-tighter text-white md:text-6xl'>
              Synchronize with the <br />
              <span className='text-emerald-500 italic'>Build Journey.</span>
            </h2>

            <p className='mx-auto mb-14 max-w-xl text-lg leading-relaxed font-light text-gray-400 md:text-xl'>
              I spend hundreds of hours debugging, architectural planning, and
              failing so you don't have to. Get the raw engineering logs and the{' '}
              <span className='font-medium text-white italic'>Logic</span> I
              capture while building systems.
            </p>

            <form
              onSubmit={handleSubscribe}
              className='relative mx-auto flex max-w-md flex-col gap-3 sm:flex-row'
            >
              <input
                type='email'
                required
                placeholder='Enter your protocol address...'
                className='flex-1 rounded-xl border border-white/10 bg-black/60 px-6 py-4 text-white placeholder-gray-700 transition-all outline-none focus:border-emerald-500/50'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button
                type='submit'
                className='group flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-10 py-4 text-[11px] font-black tracking-widest text-gray-950 uppercase shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:scale-105 hover:bg-emerald-400 active:scale-95'
              >
                Sync Logic
              </button>
            </form>

            <div className='mt-10 flex items-center justify-center gap-8 opacity-40'>
              <span className='flex items-center gap-2 text-[9px] font-bold tracking-widest text-gray-500 uppercase'>
                <Zap className='h-3 w-3 text-emerald-500' /> One email / Month
              </span>
              <span className='flex items-center gap-2 text-[9px] font-bold tracking-widest text-gray-500 uppercase'>
                <ShieldAlert className='h-3 w-3 text-emerald-500' /> Zero Noise
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- PENDING DEPLOYMENT MODAL --- */}
      {isOpen && (
        <div className='fixed inset-0 z-[200] flex items-center justify-center px-6'>
          <div
            className='absolute inset-0 bg-[#030712]/90 backdrop-blur-xl transition-opacity'
            onClick={() => setIsOpen(false)}
          />

          <div className='relative w-full max-w-lg overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-900 p-8 shadow-2xl md:p-14'>
            {/* Modal Content */}
            <div className='text-center'>
              <div className='mx-auto mb-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.1)]'>
                <Cpu className='h-10 w-10 animate-pulse text-emerald-500' />
              </div>

              <h3 className='font-space-grotesk mb-6 text-3xl font-bold tracking-tighter text-white uppercase italic'>
                Protocol Pending
              </h3>

              <p className='mb-10 text-lg leading-relaxed font-light text-gray-400'>
                Your sync request has been{' '}
                <span className='font-medium text-emerald-400'>logged.</span>{' '}
                I'm currently finalizing the backend transmission engine to
                ensure these logs arrive with 100% uptime.
              </p>

              <div className='mb-10 rounded-lg border border-white/5 bg-black/40 p-4'>
                <p className='text-left font-mono text-[10px] tracking-tighter text-emerald-500/70 uppercase'>
                  {'>'} status: deploying_v1.0.0...
                  <br />
                  {'>'} task: newsletter_automation_active
                  <br />
                  {'>'} error: backend_connection_not_established
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className='w-full rounded-xl bg-white py-4 text-[10px] font-black tracking-widest text-gray-950 uppercase transition-all hover:bg-emerald-50 active:scale-95'
              >
                Acknowledge Protocol
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsletterSection
