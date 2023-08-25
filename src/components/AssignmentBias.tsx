import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { EducationCorrelationPlot } from './EducationCorrelationPlot'
import { EducationScoreCorrelationPlot } from './EducationScoreCorrelationPlot'
import { OccupationCorrelationPlot } from './OccupationCorrelationPlot'
import { OccupationScoreCorrelationPlot } from './OccupationScoreCorrelationPlot'
import { AgeCorrelationPlot } from './AgeCorrelationPlot'
import { AgeScoreCorrelationPlot } from './AgeScoreCorrelationPlot'

export function AssignmentBias() {
  return (
    <section
      id="bias"
      aria-labelledby="bias-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="4" id="bias-title">
          Assignment Bias
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-zinc-900">
          Considering group differences, plots below explore correlations to
          hint at possible assignment bias.
        </p>
        <p className="mt-4 text-lg tracking-tight text-zinc-700">
          While there was an effort to distribute participants equally between
          the two groups, some differences still remained. Correlation was
          explored between profile attributes that differed the most using
          linear regression (the least sum of squares).
        </p>
      </Container>
      <Container size="lg">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-96">
          <EducationCorrelationPlot />

          <EducationScoreCorrelationPlot />
        </div>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-96">
          <OccupationCorrelationPlot />

          <OccupationScoreCorrelationPlot />
        </div>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-96">
          <AgeCorrelationPlot />

          <AgeScoreCorrelationPlot />
        </div>
      </Container>
    </section>
  )
}
