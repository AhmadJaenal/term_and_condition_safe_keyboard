import Icon from './Icon.jsx'

const TONES = {
  brand: 'bg-brand-100 text-brand-700',
  amber: 'bg-amber-soft text-amber-ink',
  danger: 'bg-danger-soft text-danger-ink',
  neutral: 'bg-paper text-ink-soft ring-1 ring-line',
  white: 'bg-white/90 text-brand-700 ring-1 ring-brand-100',
}

export default function Badge({ children, tone = 'brand', icon, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${TONES[tone]} ${className}`}
    >
      {icon && <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2.5} />}
      {children}
    </span>
  )
}
