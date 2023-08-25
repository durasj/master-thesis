import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { CumulativeProfilePlot } from './CumulativeProfilePlot'
import { AgeProfilePlot } from './AgeProfilePlot'
import { PlatformProfilePlot } from './PlatformProfilePlot'

export function Participants() {
  return (
    <section
      id="participants"
      aria-labelledby="participants-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="participants-title">
          Participants
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-zinc-900">
          In total, 24 participants, divided equally into Group A and Group B,
          participated in a comparative study.
        </p>
        <p className="mt-4 text-lg tracking-tight text-zinc-700">
          Both groups were shown the same short introduction to Boolean gates.
          Group A used a{' '}
          <a
            href="https://side-a.chipsandcode.pages.dev"
            target="_blank"
            className="text-violet-800 hover:underline"
          >
            version with the embedded Hardware IDE
          </a>
          . Group B used a{' '}
          <a
            href="https://side-b.chipsandcode.pages.dev"
            target="_blank"
            className="text-violet-800 hover:underline"
          >
            version with the existing desktop learning tool
          </a>
          . Below is the summary of participant profiles showing differences in
          the make-up of each group.
        </p>
      </Container>

      <Container>
        <CumulativeProfilePlot />
        <AgeProfilePlot />
        <PlatformProfilePlot />
      </Container>
    </section>
  )
}
