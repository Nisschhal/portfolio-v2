'use client'
import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import StarIcon from '@/assets/icons/star.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
// Icons
import JavaScript from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import GithubIcon from '@/assets/icons/github.svg'
import NextIcon from '@/assets/icons/nextjs.svg'
import TailwindIcon from '@/assets/icons/tailwindcss.svg'
import GitIcon from '@/assets/icons/git.svg'
import FigmaIcon from '@/assets/icons/figma.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'

// Image
import bookImage from '@/assets/images/book-cover.png'
import mapImage from '@/assets/images/map-small.png'
import mapBigImage from '@/assets/images/nepal-map.png'
import smileImage from '@/assets/images/memoji-smile.png'

// Component
import TechIcon from '@/components/TechIcon'
import CardHeader from '@/components/CardHeader'
import Toolbox from '@/components/Toolbox'
import { map } from 'motion/react-client'
import { useRef } from 'react'
const toolBoxItems = [
  { title: 'JavaScript', iconType: JavaScript },
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'TypeScript', iconType: JavaScript },
  { title: 'React', iconType: ReactIcon },
  { title: 'Chrome', iconType: ChromeIcon },
  { title: 'Next.js', iconType: NextIcon },
  { title: 'Tailwind', iconType: TailwindIcon },
  { title: 'Git', iconType: GitIcon },
  { title: 'Github', iconType: GithubIcon },
  { title: 'Figma', iconType: FigmaIcon },
]

const hobbies = [
  { title: 'Reading', emoji: '📚', left: '5%', top: '10%' },
  { title: 'UI/UX Design', emoji: '🎨', left: '35%', top: '25%' },
  { title: 'Writing', emoji: '✍️', left: '50%', top: '5%' },
  { title: 'Fitness', emoji: '🏋️', left: '8%', top: '35%' },
  { title: 'Cooking', emoji: '🍳', left: '50%', top: '50%' },
  { title: 'Communication', emoji: '🗣️', left: '5%', top: '65%' },
  { title: 'Self-Improvement', emoji: '🧘', left: '45%', top: '75%' },
  // { title: "", emoji: "💪", left: "35%", top: "46%" },
]

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <section className='py-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='About Me'
          title='A Glimpse into My World'
          description='Learn more about who I am and what I do, and what I bring to the table.'
        />

        <div className='mt-20 flex flex-col gap-8'>
          {/* Bento Grid */}
          <div className='grid gap-8 md:grid-cols-5 lg:grid-cols-3'>
            {/* Book Card */}
            <Card className='h-80 backdrop-blur-sm hover:bg-white/5 md:col-span-2 lg:col-span-1 hover:dark:bg-white/10'>
              {/* Card Header */}
              <CardHeader
                title='My Reads'
                description='Explore the books shaping my perspectives.'
              />
              {/* Card Content */}
              <div className='mx-auto mt-8 w-40'>
                <Image src={bookImage} alt='Book Cover' />
              </div>
            </Card>
            {/* Tool Card */}
            <Card className='h-80 p-0 backdrop-blur-sm hover:bg-white/5 md:col-span-3 lg:col-span-2 hover:dark:bg-white/10'>
              {/* Card Header */}
              <CardHeader
                title='My ToolKits'
                description='Explore the tools and technologies I use to bring ideas to life.'
                className='px-8 pt-8'
              />
              {/* Card Content */}
              <div className=' '>
                {/* Tools */}
                <Toolbox
                  items={toolBoxItems}
                  className='mt-6'
                  itemWrapperClassName='animate-move-left [animation-duration:30s]'
                />
                <Toolbox
                  items={toolBoxItems}
                  className='mt-6'
                  itemWrapperClassName=' animate-move-right [animation-duration:30s]'
                />
              </div>
            </Card>
          </div>
          {/* Bento Grid 2 */}
          <div className='grid gap-8 md:grid-cols-5 lg:grid-cols-3'>
            {/* Beyond Coding */}
            <Card className='flex h-80 flex-col p-0 backdrop-blur-sm hover:bg-white/5 md:col-span-3 lg:col-span-2 hover:dark:bg-white/10'>
              <CardHeader
                title='Beyond the Code'
                description='Explore my interests and hobbies beyond coding realm.'
                className='px-6 py-6'
              />

              {/* Hobbies */}
              <div className='relative flex-1' ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title}
                    className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5'
                    style={{
                      position: 'absolute',
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <div className='flex-none space-x-2'>
                      <span className='font-medium text-gray-950'>
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/* Map */}
            <Card className='relative h-80 p-0 md:col-span-2 lg:col-span-1'>
              <Image
                src={mapBigImage}
                alt='Map'
                className='objec-top-left size-full object-cover'
              />
              {/* Big Size */}
              {/* <Image
              src={mapBigImage}
              alt="Map"
              className="size-full object-cover objec-top-left hidden sm:block"
            /> */}
              <div className='absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 outline-2 outline-gray-950/30'>
                <Image src={smileImage} alt='Smile' className='size-20' />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
function ref(arg0: null) {
  throw new Error('Function not implemented.')
}
