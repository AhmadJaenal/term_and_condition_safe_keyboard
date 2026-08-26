import { Check } from 'lucide-react'
import IconTile from './IconTile.jsx'
import Badge from './Badge.jsx'
import Button from './Button.jsx'
import { DURATIONS } from '../data/pricing.js'
import { PLAY_STORE_URL } from '../config.js'

export default function PriceCard({ tier, activeDuration = '1t' }) {
  const { name, icon, free, priceLabel, prices, tagline, features, cta, featured, badge } = tier
  const durLabel = DURATIONS.find((d) => d.id === activeDuration)?.label ?? ''

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border bg-paper-card p-6 shadow-card sm:p-7 ${
        featured ? 'border-brand-500 ring-1 ring-brand-500' : 'border-line'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-6">
          <Badge tone="brand" icon="Star">
            {badge}
          </Badge>
        </div>
      )}

      <div className="flex items-center gap-3">
        <IconTile name={icon} tone={featured ? 'brand' : 'brand'} />
        <h3 className="text-lg font-bold text-ink">{name}</h3>
      </div>
      {tagline && <p className="mt-2 text-sm text-ink-soft">{tagline}</p>}

      <div className="my-5 border-t border-line pt-5">
        {free ? (
          <p className="text-3xl font-extrabold text-brand-600">{priceLabel}</p>
        ) : (
          <div key={activeDuration} className="animate-fade-in">
            <p className="text-3xl font-extrabold text-ink">{prices[activeDuration]}</p>
            <p className="mt-1 text-xs text-ink-soft">untuk {durLabel} · sekali bayar</p>
          </div>
        )}
      </div>

      <ul className="mb-6 flex-1 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" strokeWidth={3} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href={PLAY_STORE_URL}
        variant={featured ? 'primary' : 'outline'}
        className="w-full"
      >
        {cta}
      </Button>
    </div>
  )
}
