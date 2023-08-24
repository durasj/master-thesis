import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { Participants } from '@/components/Participants'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />
      <Participants />

      <Screencasts />

      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />

      <Footer />
    </>
  )
}
