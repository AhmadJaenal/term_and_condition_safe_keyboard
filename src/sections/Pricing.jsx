import { useState } from 'react'
import { Check } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PriceCard from '../components/PriceCard.jsx'
import DurationToggle from '../components/DurationToggle.jsx'
import Reveal from '../components/Reveal.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { PLAY_STORE_URL } from '../config.js'

export default function Pricing() {
  const { t } = useI18n()
  const [duration, setDuration] = useState('1t')
  const tiers = t('pricing.tiers')
  const durations = t('pricing.durations')
  const langPacks = t('pricing.langPacks')
  const quotaPacks = t('pricing.quotaPacks')
  const quotaHead = t('pricing.quotaHead')

  return (
    <Section id="harga" tone="brand">
      <SectionHeading
        eyebrow={t('pricing.eyebrow')}
        eyebrowIcon="Tag"
        title={
          <>
            {t('pricing.titleLead')}{' '}
            <span className="text-brand-600">{t('pricing.titleAccent')}</span>
          </>
        }
        desc={t('pricing.desc')}
      />

      <div className="mt-8 flex justify-center">
        <DurationToggle value={duration} onChange={setDuration} options={durations} />
      </div>

      {/* Tier utama */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier, i) => (
          <Reveal key={tier.id} delay={(i % 4) * 70} className="h-full">
            <PriceCard tier={tier} activeDuration={duration} />
          </Reveal>
        ))}
      </div>
      <p className="mt-5 text-center text-xs text-ink-soft">{t('pricing.priceNote')}</p>

      {/* Paket bahasa daerah */}
      <div className="mt-20">
        <h3 className="text-center text-xl font-bold text-ink">{t('pricing.langPacksTitle')}</h3>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-ink-soft">
          {t('pricing.langPacksDesc')}
        </p>
        <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
          {langPacks.map((pack) => (
            <Card key={pack.id} className="flex flex-col gap-4 text-center">
              {pack.badge && (
                <Badge tone="brand" icon="Tag" className="mx-auto">
                  {pack.badge}
                </Badge>
              )}
              <div>
                <p className="text-base font-bold text-ink">{pack.name}</p>
                <p className="mt-2 text-3xl font-extrabold text-brand-600">{pack.price}</p>
                <p className="text-xs text-ink-muted">{pack.note}</p>
              </div>
              <ul className="flex-1 space-y-2 text-left text-sm text-ink">
                {pack.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={PLAY_STORE_URL} variant="outline" className="w-full">
                {t('pricing.choosePackage')}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Paket kuota kata */}
      <div className="mt-20">
        <h3 className="text-center text-xl font-bold text-ink">{t('pricing.quotaTitle')}</h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ink-soft">
          {t('pricing.quotaDesc')}
        </p>

        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border border-line bg-paper-card shadow-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-brand-50 text-xs uppercase tracking-wide text-ink-soft">
                <th className="px-5 py-3 font-bold">{quotaHead.package}</th>
                <th className="px-5 py-3 font-bold">{quotaHead.quota}</th>
                <th className="px-5 py-3 text-right font-bold">{quotaHead.price}</th>
              </tr>
            </thead>
            <tbody>
              {quotaPacks.map((p) => (
                <tr key={p.name} className="border-b border-line last:border-0">
                  <td className="px-5 py-3 font-semibold text-ink">{p.name}</td>
                  <td className="px-5 py-3 text-ink-soft">{p.quota}</td>
                  <td className="px-5 py-3 text-right font-bold text-brand-600">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-line bg-paper-card px-5 py-4 text-xs leading-relaxed text-ink-soft">
          {t('pricing.quotaNote')}
        </p>
      </div>
    </Section>
  )
}
