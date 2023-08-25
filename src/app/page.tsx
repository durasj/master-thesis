import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { DataSkew } from '@/components/DataSkew'
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

      <DataSkew />

      <Author />

      <Footer />
    </>
  )
}
