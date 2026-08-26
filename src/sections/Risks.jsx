import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Card from '../components/Card.jsx'
import IconTile from '../components/IconTile.jsx'
import Reveal from '../components/Reveal.jsx'
import { RISKS } from '../data/content.js'

export default function Risks() {
  return (
    <Section id="risiko" tone="card">
      <SectionHeading
        eyebrow="Kenapa Ini Penting"
        eyebrowIcon="MessageSquareWarning"
        title={
          <>
            Risikonya dimulai dari <span className="text-brand-600">kata yang diketik</span>
          </>
        }
        desc="Paparan digital tidak selalu datang dari layar utama. Sering kali, risikonya dimulai dari kata yang diketik, dicari, atau dikirim setiap hari."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {RISKS.map((r, i) => (
          <Reveal key={r.title} delay={(i % 4) * 70} className="h-full">
            <Card hover className="flex h-full flex-col gap-4">
              <IconTile name={r.icon} tone={r.tone} size="lg" />
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-ink">{r.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{r.desc}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
