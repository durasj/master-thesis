import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { AssignmentBias } from '@/components/AssignmentBias'
import { Questionnaire } from '@/components/Questionnaire'
import { Efficiency } from '@/components/Efficiency'
import { Participants } from '@/components/Participants'

export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />

      <Participants />

      <Efficiency />

      <Questionnaire />

      <AssignmentBias />

      <About />

      <Footer />
    </>
  )
}
