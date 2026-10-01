import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'

export default function Features() {
  const { t } = useI18n()

  return (
    <Section id="fitur">
      <SectionHeading
        eyebrow={t('features.eyebrow')}
        eyebrowIcon="Star"
        title={
          <>
            {t('features.titleLead')}{' '}
            <span className="text-brand-600">{t('features.titleAccent')}</span>
          </>
        }
        desc={t('features.desc')}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t('features.items').map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 70} className="h-full">
            <FeatureCard {...f} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
