// 'use client'
// import React, { useRef } from 'react'
// import { motion } from 'framer-motion'
// import Card from '@/components/Card'
// import CardHeader from '@/components/CardHeader'
// import SectionHeader from '@/components/SectionHeader'
// import Toolbox from '@/components/Toolbox'

// // Icons
// import JavaScript from '@/assets/icons/square-js.svg'
// import ReactIcon from '@/assets/icons/react.svg'
// import NextIcon from '@/assets/icons/nextjs.svg'
// import TailwindIcon from '@/assets/icons/tailwindcss.svg'
// import FigmaIcon from '@/assets/icons/figma.svg'
// import GithubIcon from '@/assets/icons/github.svg'
// import { Cpu, Zap, Rocket, Terminal, ShieldCheck, Download, MessageCircle } from 'lucide-react'

// const coreTools = [
//   { title: 'Next.js', iconType: NextIcon },
//   { title: 'React', iconType: ReactIcon },
//   { title: 'TypeScript', iconType: JavaScript },
//   { title: 'Tailwind', iconType: TailwindIcon },
//   { title: 'Figma', iconType: FigmaIcon },
//   { title: 'GitHub', iconType: GithubIcon },
// ]

// const aiSkills = [
//   { title: 'LangChain', emoji: '🦜', left: '5%', top: '10%' },
//   { title: 'RAG Pipelines', emoji: '🧠', left: '35%', top: '25%' },
//   { title: 'AI Agents', emoji: '🤖', left: '10%', top: '65%' },
//   { title: 'Vector DBs', emoji: '📁', left: '55%', top: '10%' },
//   { title: 'OpenAI/Claude', emoji: '✨', left: '45%', top: '50%' },
//   { title: 'Semantic Search', emoji: '🔍', left: '5%', top: '40%' },
// ]

// export const SkillsSection = () => {
//   const constraintRef = useRef(null)

//   return (
//     <section className='py-16 lg:py-24' id='skills'>
//       <div className='container'>
//         <SectionHeader
//           eyebrow='Technical Registry'
//           title='The Engineering Stack'
//           description='A high-performance toolkit designed for intelligence, extreme scalability, and leadership.'
//         />

//         <div className='mt-20 flex flex-col gap-8'>
          
//           {/* Row 1: AI (Interactive) & Leadership */}
//           <div className='grid gap-8 md:grid-cols-5 lg:grid-cols-3'>
            
//             {/* AI CARD - Matches "Beyond Code" Style */}
//             <Card className='flex h-80 flex-col p-0 backdrop-blur-sm hover:bg-white/5 md:col-span-3 lg:col-span-2'>
//               <CardHeader
//                 title='Intelligence & AI'
//                 description='Interactive view of my expertise in LLM orchestration and Agentic workflows.'
//                 className='px-6 py-6'
//               />
//               <div className='relative flex-1 cursor-grab active:cursor-grabbing overflow-hidden' ref={constraintRef}>
//                 {aiSkills.map(skill => (
//                   <motion.div
//                     key={skill.title}
//                     className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5 shadow-xl'
//                     style={{ position: 'absolute', left: skill.left, top: skill.top }}
//                     drag
//                     dragConstraints={constraintRef}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <span className='font-bold text-gray-950 text-xs uppercase'>{skill.title}</span>
//                     <span>{skill.emoji}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </Card>

//             {/* LEADERSHIP CARD - Matches "Book" Style spacing */}
            // <Card className='h-80 backdrop-blur-sm hover:bg-white/5 md:col-span-2 lg:col-span-1'>
            //   <CardHeader
            //     title='Technical Leadership'
            //     description='Leading squads to deliver US-enterprise solutions.'
            //   />
            //   <div className='pr-6 mt-4 space-y-4'>
            //     <div className='flex items-center gap-4 group'>
            //         <ShieldCheck className='size-5 text-emerald-400' />
            //         <span className='text-sm text-neutral-300 font-mono uppercase tracking-tighter'>Mentoring 8+ Engineers</span>
            //     </div>
            //     <div className='flex items-center gap-4 group'>
            //         <Zap className='size-5 text-sky-400' />
            //         <span className='text-sm text-neutral-300 font-mono uppercase tracking-tighter'>Agile & Scrum Ops</span>
            //     </div>
            //     <div className='flex items-center gap-4 group'>
            //         <Terminal className='size-5 text-purple-400' />
            //         <span className='text-sm text-neutral-300 font-mono uppercase tracking-tighter'>System Architecture</span>
            //     </div>
            //   </div>
            // </Card>
//           </div>

//           {/* Row 2: Infrastructure & Current Focus */}
//           <div className='grid gap-8 md:grid-cols-5 lg:grid-cols-3'>
            
//             {/* TOOLBOX CARD - Matches "My Toolkits" Style */}
//             <Card className='h-80 p-0 backdrop-blur-sm hover:bg-white/5 md:col-span-3 lg:col-span-2'>
//               <CardHeader
//                 title='Core Infrastructure & DevOps'
//                 description='Automated CI/CD, Cloud deployments, and secure architectures.'
//                 className='px-8 pt-8'
//               />
//               <Toolbox
//                 items={coreTools}
//                 className='mt-10'
//                 itemWrapperClassName='animate-move-left [animation-duration:30s]'
//               />
//               <div className='px-8 mt-6 flex flex-wrap gap-2'>
//                 {["AWS", "Docker", "K8s", "GitHub Actions", "Terraform"].map(infra => (
//                    <span key={infra} className="px-2 py-1 rounded-md border border-white/5 bg-white/5 text-[10px] font-mono text-neutral-500 uppercase">{infra}</span>
//                 ))}
//               </div>
//             </Card>

//             {/* CURRENT FOCUS CARD - Highlights Next Steps */}
//             <Card className='relative h-80 p-0 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center group overflow-hidden border-emerald-500/20 bg-emerald-500/5'>
//                <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 opacity-50 group-hover:opacity-100 transition-opacity' />
               
//                <div className="z-10 text-center px-8">
//                  <div className='flex justify-center mb-4'>
//                     <div className='relative flex h-3 w-3 items-center justify-center'>
//                         <div className='animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75' />
//                         <div className='relative h-2 w-2 rounded-full bg-emerald-500' />
//                     </div>
//                  </div>
//                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em] mb-2">Current Focus</h4>
//                  <h3 className='text-xl font-bold text-white mb-4'>Scalable Microservices</h3>
//                  <p className='text-xs text-neutral-400 leading-relaxed mb-6 font-mono'>
//                     Actively upskilling in <span className='text-white'>NestJS Microservices</span>, <span className='text-white'>Kafka</span> event streaming, and cloud-native architecture.
//                  </p>
//                  <div className='flex gap-2 justify-center'>
//                     <Rocket className='size-5 text-sky-400' />
//                     <Cpu className='size-5 text-emerald-400' />
//                  </div>
//                </div>
//             </Card>
//           </div>
//         </div>

//         {/* CTA Engineering Request - Consistent with Hero CTAs */}
//         <div className='mt-20 flex flex-col items-center justify-center gap-4 md:flex-row'>
//           <a
//             href='/resume.pdf'
//             target='_blank'
//             className='hover:inset-shadow-glass inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-8 text-sm font-bold text-white transition hover:bg-white/10'
//           >
//             <Download className="size-4" />
//             Download CV
//           </a>
//           <a
//             href='https://api.whatsapp.com/send?phone=+9779818275115'
//             target='_blank'
//             className='inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-sm font-bold text-gray-950 transition hover:bg-emerald-50 active:scale-95'
//           >
//             <MessageCircle className="size-4" />
//             🚀 Initialize Talk
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import React, { useRef } from 'react'
import { motion, easeInOut } from 'framer-motion'
import Card from '@/components/Card'
import CardHeader from '@/components/CardHeader'
import SectionHeader from '@/components/SectionHeader'

import { Cpu, Zap, Rocket, Terminal, ShieldCheck, Download, MessageCircle, Database } from 'lucide-react'

const floatAnimation = (delay: number) => ({
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: easeInOut,
    delay: delay
  }
})

const infraTools = [
  { title: 'AWS', icon: <Terminal className="size-5" /> },
  { title: 'Docker', icon: <Database className="size-5" /> },
  { title: 'NestJS', icon: <Zap className="size-5" /> },
  { title: 'Kafka', icon: <Rocket className="size-5" /> },
  { title: 'PostgreSQL', icon: <Database className="size-5" /> },
  { title: 'Kubernetes', icon: <ShieldCheck className="size-5" /> },
]

const aiSkills = [
  { title: 'LangChain', emoji: '🦜', left: '5%', top: '15%' },
  { title: 'RAG Pipelines', emoji: '🧠', left: '35%', top: '35%' },
  { title: 'AI Agents', emoji: '🤖', left: '10%', top: '65%' },
  { title: 'Vector DBs', emoji: '📁', left: '55%', top: '15%' },
  { title: 'OpenAI', emoji: '✨', left: '45%', top: '60%' },
  { title: 'IBM wxflows', emoji: '☁️', left: '65%', top: '40%' },
]

export const SkillsSection = () => {
  const constraintRef = useRef(null)

  return (
    <section className='py-16 lg:pt-48' id='skills'>
      <div className='container mx-auto max-w-5xl px-4'>
        <SectionHeader
          eyebrow='My Expertise'
          title='What I Bring to the Table'
          description='A comprehensive look at the tools, technologies, and leadership skills I use to build modern, high-impact solutions.'
        />

        <div className='mt-20 flex flex-col gap-8'>
          <div className='grid gap-8 md:grid-cols-5 lg:grid-cols-3'>
            {/* AI CARD */}
            <Card className='flex h-80 flex-col p-0 backdrop-blur-sm hover:bg-white/5 md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Intelligence & AI'
                description='Building smart AI agents and automated systems.'
                className='px-6 py-6'
              />
              <div className='relative flex-1 cursor-grab active:cursor-grabbing overflow-hidden' ref={constraintRef}>
                {aiSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.title}
                    animate={floatAnimation(idx * 0.5)}
                    className='absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5 shadow-xl'
                    style={{ left: skill.left, top: skill.top }}
                    drag
                    dragConstraints={constraintRef}
                    whileHover={{ scale: 1.1, zIndex: 50 }}
                  >
                    <span className='font-bold text-gray-950 text-[11px] uppercase tracking-tight'>{skill.title}</span>
                    <span>{skill.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* EXPERIENCE CARD */}
            <Card className='h-80 backdrop-blur-sm hover:bg-white/5 md:col-span-2 lg:col-span-1 border-white/10'>
              <CardHeader
                title='Experience'
                description='Leadership & real-world impact.'

              />
              <div className='pr-6 mt-2 space-y-6'>
                <div className='relative pl-4 border-l-2 border-emerald-500/30 group/item'>
                  <div className='absolute -left-[5px] top-0 size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' />
                  <p className='text-[10px] font-mono text-emerald-400/70 uppercase tracking-widest mb-1'>Leadership</p>
                  <p className='text-sm font-bold text-white'>Leading 8+ Engineers</p>
                  <p className='text-[10px] text-neutral-500'>Mentoring teams & coordinating projects.</p>
                </div>

                <div className='relative pl-4 border-l-2 border-sky-500/30 group/item'>
                  <div className='absolute -left-[5px] top-0 size-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]' />
                  <p className='text-[10px] font-mono text-sky-400/70 uppercase tracking-widest mb-1'>Agile Strategy</p>
                  <p className='text-sm font-bold text-white'>Scrum & Sprint Planning</p>
                  <p className='text-[10px] text-neutral-500'>Fast delivery with high quality code.</p>
                </div>

                <div className='relative pl-4 border-l-2 border-purple-500/30 group/item'>
                  <div className='absolute -left-[5px] top-0 size-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]' />
                  <p className='text-[10px] font-mono text-purple-400/70 uppercase tracking-widest mb-1'>Market Expertise</p>
                  <p className='text-sm font-bold text-white'>Foreign Enterprise Projects</p>
                  <p className='text-[10px] text-neutral-500'>Building software for global startups.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className='grid gap-8 md:grid-cols-5 lg:grid-cols-3'>
            {/* CORE STACK CARD */}
            <Card className='h-80 p-0 backdrop-blur-sm hover:bg-white/5 md:col-span-3 lg:col-span-2'>
              <CardHeader
                title='Modern Tech Stack'
                description='The reliable foundation of my engineering work.'
                className='px-8 pt-8'
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-8 mt-4">
                {infraTools.map((tool, idx) => (
                    <motion.div 
                        key={tool.title}
                        animate={floatAnimation(idx * 0.7)}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5"
                    >
                        <div className="text-emerald-400">{tool.icon}</div>
                        <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">{tool.title}</span>
                    </motion.div>
                ))}
              </div>
            </Card>

            {/* GROWTH CARD */}
            <Card className='relative h-80 p-0 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center group overflow-hidden border-emerald-500/30 bg-emerald-500/5'>
               <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 opacity-50' />
               <div className="z-10 text-center px-8">
                 <div className='flex justify-center mb-6'>
                    <div className='relative flex h-4 w-4 items-center justify-center'>
                        <div className='animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75' />
                        <div className='relative h-2.5 w-2.5 rounded-full bg-emerald-500' />
                    </div>
                 </div>
                 <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-3">What&apos;s Next?</h4>
                 <h3 className='text-xl font-bold text-white mb-4'>Scalable Microservices</h3>
                 <p className='text-xs text-neutral-400 leading-relaxed font-mono'>
                    Currently mastering <span className='text-white'>NestJS</span>, <span className='text-white'>Kafka</span> streaming, and cloud architectures.
                 </p>
               </div>
            </Card>
          </div>
        </div>

        <div className='mt-20 flex flex-col items-center justify-center gap-4 md:flex-row'>
          <a href='/resume.pdf' target='_blank' className='inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-neutral-900 px-10 text-sm font-bold text-white transition hover:bg-white/10'>
            <Download className="size-4" /> Download CV
          </a>
          <a href='https://api.whatsapp.com/send?phone=+9779818275115' target='_blank' className='inline-flex h-12 items-center gap-2 rounded-xl bg-white px-10 text-sm font-bold text-gray-950 transition hover:bg-emerald-50 active:scale-95'>
            <MessageCircle className="size-4" /> 🚀 Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  )
}