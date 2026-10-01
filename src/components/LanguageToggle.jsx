import { useI18n } from '../i18n/LanguageContext.jsx'

// Segmented control ID / EN untuk mengganti bahasa situs.
export default function LanguageToggle({ className = '' }) {
  const { lang, setLang, t } = useI18n()
  const options = [
    { id: 'id', label: t('langToggle.id') },
    { id: 'en', label: t('langToggle.en') },
  ]

  return (
    <div
      role="group"
      aria-label={t('langToggle.label')}
      className={`inline-flex rounded-full border border-line bg-paper-card p-0.5 ${className}`}
    >
      {options.map((o) => {
        const on = lang === o.id
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={on}
            onClick={() => setLang(o.id)}
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
              on ? 'bg-brand-500 text-white' : 'text-ink-soft hover:text-brand-700'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
