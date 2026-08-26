import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StepCard from '../components/StepCard.jsx'
import { STEPS } from '../data/content.js'

export default function HowItWorks() {
  return (
    <Section id="cara-kerja" tone="brand">
      <SectionHeading
        eyebrow="Cara Kerja"
        eyebrowIcon="Zap"
        title={
          <>
            Begini <span className="text-brand-600">cara kerjanya</span>
          </>
        }
        desc="Safe Keyboard bekerja otomatis sejak kata mulai diketik hingga sebelum kata berisiko terkirim."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <StepCard key={s.no} {...s} last={i === STEPS.length - 1} />
        ))}
      </div>
    </Section>
  )
}
