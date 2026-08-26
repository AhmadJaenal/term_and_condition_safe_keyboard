import { Lock } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import { FILTER_LEVELS, PARENT_LOCKED } from '../data/content.js'

export default function ProtectionControls() {
  return (
    <Section id="kontrol">
      <SectionHeading
        eyebrow="Kontrol Perlindungan"
        eyebrowIcon="SlidersHorizontal"
        title={
          <>
            Atur sendiri <span className="text-brand-600">tingkat proteksinya</span>
          </>
        }
        desc="Sesuaikan sensitivitas penyaringan, lalu kunci pengaturan penting dengan PIN agar tidak diubah sembarangan."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Level Filter */}
        <Card className="flex flex-col gap-5">
          <div>
            <h3 className="text-lg font-bold text-ink">Level Filter</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Lima tingkat sensitivitas, bekerja otomatis saat mengetik. Semakin tinggi level,
              semakin ketat penyaringannya.
            </p>
          </div>
          <ul className="flex flex-col divide-y divide-line">
            {FILTER_LEVELS.map((lvl) => (
              <li key={lvl.name} className="flex items-start gap-3 py-3">
                <span
                  className="mt-1 h-3 w-3 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: lvl.dot }}
                />
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                    {lvl.name}
                    {lvl.badge && <Badge tone="brand">{lvl.badge}</Badge>}
                  </p>
                  <p className="text-xs text-ink-soft">{lvl.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Mode Orang Tua */}
        <Card className="flex flex-col gap-5 bg-amber-soft/60">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber text-white">
              <Lock className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold text-ink">Mode Orang Tua</h3>
          </div>
          <p className="text-sm text-ink-soft">
            Fitur penting hanya bisa diakses dengan PIN yang telah diatur orang tua. PIN disimpan
            terenkripsi di perangkat, tidak pernah dikirim ke server.
          </p>

          <div className="flex justify-center gap-2.5 py-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="h-4 w-4 rounded-full border-2 border-brand-400" />
            ))}
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              Dikunci dengan PIN
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {PARENT_LOCKED.map((item) => (
                <li key={item}>
                  <Badge tone="amber">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </Section>
  )
}
