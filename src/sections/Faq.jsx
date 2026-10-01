import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import FaqItem from '../components/FaqItem.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'

export default function Faq() {
  const { t } = useI18n()

  return (
    <Section id="faq">
      <SectionHeading
        eyebrow={t('faq.eyebrow')}
        eyebrowIcon="MessageSquareWarning"
        title={
          <>
            {t('faq.titleLead')} <span className="text-brand-600">{t('faq.titleAccent')}</span>
          </>
        }
      />

      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
        {t('faq.items').map((item) => (
          <FaqItem key={item.q} {...item} />
        ))}
      </div>
    </Section>
  )
}
