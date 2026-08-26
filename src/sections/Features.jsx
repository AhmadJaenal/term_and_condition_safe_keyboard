import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { FEATURES } from '../data/content.js'

export default function Features() {
  return (
    <Section id="fitur">
      <SectionHeading
        eyebrow="Fitur Utama"
        eyebrowIcon="Star"
        title={
          <>
            Satu aplikasi, <span className="text-brand-600">empat lapis perlindungan</span>
          </>
        }
        desc="Safe Keyboard membantu keluarga mengelola ketikan yang lebih aman lewat penyaringan otomatis, kata blokir kustom, level filter, dan pengaturan yang dilindungi PIN orang tua."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 70} className="h-full">
            <FeatureCard {...f} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
