import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { TimeLinerPlot } from './TimeLinerPlot'
import { TimeBarPlot } from './TimeBarPlot'
import { ConfusionsBoxPlot } from './ConfusionsBoxPlot'

export function Efficiency() {
  return (
    <section
      id="efficiency"
      aria-labelledby="efficiency-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="efficiency-title">
          Efficiency
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-zinc-900">
          Participants were observed to determine the time spent on tasks and the number of times they got confused.
        </p>
        <p className="mt-4 text-lg tracking-tight text-zinc-700">
          The collected data included the time it took to get productive with the learning tool, the time it took to perform individual tasks, and the number of times the participant got confused and either asked for help or was offered help.
          Presented is the mean of the collected data points.
        </p>
      </Container>
      <Container>
        <TimeLinerPlot />

        <TimeBarPlot />

        <ConfusionsBoxPlot />
      </Container>
    </section>
  )
}
