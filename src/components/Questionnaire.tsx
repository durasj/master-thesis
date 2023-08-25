import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { SusBoxPlot } from './SusBoxPlot'
import { SusCurvePlot } from './SusCurvePlot'
import { TimeUsabilityPlot } from './TimeUsabilityPlot'

export function Questionnaire() {
  return (
    <section
      id="sus"
      aria-labelledby="sus-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
    >
      <Container>
        <SectionHeading number="3" id="sus-title">
          Questionnaire
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-zinc-900">
          At the end of the session, participants judged the subjective
          usability using Standard Usability Questionnaire (SUS).
        </p>
        <p className="mt-4 text-lg tracking-tight text-zinc-700">
          SUS scores showed a difference of 7 points in favour of Chips and
          Code. However, both tools scored very highly, and due to the small
          difference and sample size, the probability Chips and Code can
          consistently score better is only 77.9% (below the industry standard
          of 90-95%).
        </p>
      </Container>
      <Container>
        <SusBoxPlot />

        <SusCurvePlot />

        <TimeUsabilityPlot />
      </Container>
    </section>
  )
}
