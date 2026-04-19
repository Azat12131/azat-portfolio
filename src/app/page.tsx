import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main className="pb-[calc(96px+env(safe-area-inset-bottom))] md:pb-0">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>
  )
}