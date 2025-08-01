'use client'
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      console.log('Timeline height:', rect.height)
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className='w-full font-sans md:px-10' ref={containerRef}>
      {/* <div className='mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10'>
        <h2 className='mb-4 max-w-4xl text-lg text-black md:text-4xl dark:text-white'>
          Changelog from my journey
        </h2>
        <p className='max-w-sm text-sm text-neutral-700 md:text-base dark:text-neutral-300'>
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div> */}

      <div ref={ref} className='relative mx-auto max-w-7xl'>
        {data.map((item, index) => (
          //  Individual Timeline Entry
          <div key={index} className='group flex justify-start pt-10 md:gap-10'>
            {/* Timeline Dot & Date */}
            <div className='sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm'>
              {/* Timeline Dot */}
              <div className='absolute left-3 flex h-10 w-10 items-center justify-center rounded-full md:left-3 dark:bg-black'>
                <div className='glass h-4 w-4 rounded-full border border-neutral-300 bg-neutral-300 p-2 group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-sky-300 dark:border-neutral-700' />
              </div>
              {/* Timeline Date */}
              <h3 className='gradient-text hidden text-xl font-bold md:block md:pl-20 md:text-2xl'>
                {item.title}
              </h3>
            </div>

            {/* Timeline Content: cursor-pointer and TODO: link to the project */}
            <div className='relative w-full cursor-pointer pr-4 pl-20 md:pl-4'>
              {/* Feature Title */}
              <h3 className='gradient-text mb-4 block text-left text-2xl font-bold md:hidden'>
                {item.title}
              </h3>
              {/* Feature Content as React Node */}
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute top-0 left-8 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent'
          />
        </div>
      </div>
    </div>
  )
}
