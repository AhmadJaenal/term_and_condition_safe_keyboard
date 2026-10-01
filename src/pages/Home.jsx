import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Container from '../components/Container.jsx'
import ValueStrip from '../components/ValueStrip.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'
import Hero from '../sections/Hero.jsx'
import Risks from '../sections/Risks.jsx'
import Features from '../sections/Features.jsx'
import AppShowcase from '../sections/AppShowcase.jsx'
import HowItWorks from '../sections/HowItWorks.jsx'
import ProtectionControls from '../sections/ProtectionControls.jsx'
import NewsFeature from '../sections/NewsFeature.jsx'
import VideoSection from '../sections/VideoSection.jsx'
import Pricing from '../sections/Pricing.jsx'
import Faq from '../sections/Faq.jsx'
import CtaBand from '../sections/CtaBand.jsx'

export default function Home() {
  const { t } = useI18n()
  useDocumentTitle(t('docTitles.home'))

  return (
    <>
      <Hero />
      <Container className="relative z-10 -mt-8 pb-4">
        <ValueStrip items={t('valueProps')} />
      </Container>
      <Risks />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <ProtectionControls />
      <NewsFeature />
      <VideoSection />
      <Pricing />
      <Faq />
      <CtaBand />
    </>
  )
}
