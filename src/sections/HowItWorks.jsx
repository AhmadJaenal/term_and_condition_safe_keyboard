import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StepCard from '../components/StepCard.jsx'
import TypeGuardDemo from '../components/TypeGuardDemo.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'

export default function HowItWorks() {
  const { t } = useI18n()
  const steps = t('how.steps')

  return (
    <Section id="cara-kerja" tone="brand">
      <SectionHeading
        eyebrow={t('how.eyebrow')}
        eyebrowIcon="Zap"
        title={
          <>
            {t('how.titleLead')} <span className="text-brand-600">{t('how.titleAccent')}</span>
          </>
        }
        desc={t('how.desc')}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <StepCard key={s.no} {...s} last={i === steps.length - 1} />
        ))}
      </div>

      <TypeGuardDemo />
    </Section>
  )
}
