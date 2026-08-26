import { Newspaper } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import { NEWS_SAMPLES, NEWS_NOTE } from '../data/content.js'

export default function NewsFeature() {
  return (
    <Section id="berita" tone="card">
      <SectionHeading
        eyebrow="Fitur Berita"
        eyebrowIcon="Newspaper"
        title={
          <>
            Kenali risiko digital <span className="text-brand-600">sejak dini</span>
          </>
        }
        desc="Fitur Berita menampilkan kabar seputar keamanan penggunaan gawai — seperti anak di bawah umur yang membuat grup untuk membahas adegan dewasa — agar orang tua bisa waspada lebih awal."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {NEWS_SAMPLES.map((n) => (
          <Card key={n.title} hover className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Newspaper className="h-4 w-4" />
              </span>
              <Badge tone="neutral">{n.tag}</Badge>
            </div>
            <h3 className="text-base font-bold leading-snug text-ink">{n.title}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{n.desc}</p>
          </Card>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-line bg-paper px-5 py-4 text-center text-xs leading-relaxed text-ink-soft">
        {NEWS_NOTE}
      </p>
    </Section>
  )
}
