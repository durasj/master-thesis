import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import dynamic from 'next/dynamic'
import { ParticipantPlots } from './ParticipantPlots'

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
          Below is the summary of participant profiles showing differences in
          the make-up of each group.
        </p>
      </Container>

      <Container>
          <ParticipantPlots />
      </Container>
    </section>
  )
}
