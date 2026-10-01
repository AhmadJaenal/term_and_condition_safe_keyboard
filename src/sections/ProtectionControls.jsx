import { Lock } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'

export default function ProtectionControls() {
  const { t } = useI18n()
  const filterLevels = t('controls.filterLevels')
  const parentLocked = t('controls.parentLocked')

  return (
    <Section id="kontrol">
      <SectionHeading
        eyebrow={t('controls.eyebrow')}
        eyebrowIcon="SlidersHorizontal"
        title={
          <>
            {t('controls.titleLead')}{' '}
            <span className="text-brand-600">{t('controls.titleAccent')}</span>
          </>
        }
        desc={t('controls.desc')}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Level Filter */}
        <Card className="flex flex-col gap-5">
          <div>
            <h3 className="text-lg font-bold text-ink">{t('controls.filterTitle')}</h3>
            <p className="mt-1 text-sm text-ink-soft">{t('controls.filterDesc')}</p>
          </div>
          <ul className="flex flex-col divide-y divide-line">
            {filterLevels.map((lvl) => (
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
            <h3 className="text-lg font-bold text-ink">{t('controls.parentTitle')}</h3>
          </div>
          <p className="text-sm text-ink-soft">{t('controls.parentDesc')}</p>

          <div className="flex justify-center gap-2.5 py-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="h-4 w-4 rounded-full border-2 border-brand-400" />
            ))}
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
              {t('controls.lockedLabel')}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {parentLocked.map((item) => (
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
