import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

export function DataSkew() {
  return (
    <section
      id="skew"
      aria-labelledby="skew-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="4" id="skew-title">
          Data Skew
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-zinc-900">
          Tools and resources you can use to get started even faster and
          progress even further.
        </p>
        <p className="mt-4 text-lg tracking-tight text-zinc-700">
          Design assets, icon teardowns, and a community of fellow icon
          designers where you can ask questions, get feedback, and accelerate
          your learning.
        </p>
      </Container>
      <Container size="lg" className="mt-16">

      </Container>
    </section>
  )
}
