'use client'
import SectionHeader from '@/components/SectionHeader'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'Full Stack Development',
  'JavaScript & TypeScript',
  'Next.js & React',
  'Node.js & Express',
  'PostgreSQL | MongoDB',
  'UI/UX Design (Figma)',
  'Framer Motion & GSAP',
  'Cybersecurity Fundamentals',
  'Team Mentoring',
  'Agile & Scrum Leadership',
  'Public Speaking',
  'Project Management',
]

export const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className='mt-16 px-4' ref={ref}>
      <SectionHeader
        eyebrow='My Skills'
        title='What I Bring to the Table'
        description='Both soft and hard skills, I bring a unique perspective to every project.'
      />
      {/* <h3 className='title font- mb-6 text-center text-2xl font-semibold text-white md:text-3xl'>
        What I Bring to the Table
      </h3> */}
      <div className='mt-10 grid grid-cols-2 gap-4 text-center text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className='cursor-grab rounded-xl bg-white/10 px-3 py-2 text-white/80 transition-all duration-200 hover:bg-emerald-500/20 hover:text-white hover:shadow-lg'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            // transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(16, 185, 129, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className='mt-16 flex flex-col items-center justify-center gap-4 md:flex-row'
      >
        <a
          href='/nischal-resume.pdf'
          className='inline-flex h-12 items-center gap-2 rounded-xl border border-emerald-300/30 bg-neutral-900 px-6 text-neutral-200 transition hover:bg-emerald-300/20'
          target='_blank'
        >
          Download CV
        </a>
        <a
          href='https://api.whatsapp.com/send?phone=+9779818275115&text=Hello%20there!'
          target='_blank'
          className='inline-flex h-12 items-center gap-2 rounded-xl bg-emerald-300 px-6 text-gray-900 transition hover:bg-emerald-400'
        >
          🚀 Let’s Talk
        </a>
      </motion.div>
    </section>
  )
}
