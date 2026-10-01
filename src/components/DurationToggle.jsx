import { useI18n } from '../i18n/LanguageContext.jsx'

// Segmented control untuk memilih durasi langganan pada bagian harga.
export default function DurationToggle({ value, onChange, options, className = '' }) {
  const { t } = useI18n()
  return (
    <div
      role="group"
      aria-label={t('a11y.durationGroup')}
      className={`inline-flex rounded-full border border-line bg-paper-card p-1 shadow-card ${className}`}
    >
      {options.map((o) => {
        const on = value === o.id
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              on ? 'bg-brand-500 text-white shadow-cta' : 'text-ink-soft hover:text-brand-700'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
