import { TracingBeam } from '@/components/ui/tracing-beam'
import { AboutSection } from '@/sections/About'
import { AboutMe } from '@/sections/About-me'
import { ContactSection } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { HeroSection } from '@/sections/Hero'
import { ProjectsSection } from '@/sections/Projects'
import { TapeSection } from '@/sections/Tape'
import { TestimonialsSection } from '@/sections/Testimonials'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />

      <ProjectsSection />

      <TapeSection />

      <TestimonialsSection />

      <AboutSection />

      <ContactSection />

      <Footer />
    </div>
  )
}
