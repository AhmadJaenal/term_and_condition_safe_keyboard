import Icon from './Icon.jsx'

// Kotak ikon dengan sudut membulat, warna sesuai tone (mengikuti gaya banner).
const TONES = {
  brand: 'bg-brand-100 text-brand-700',
  amber: 'bg-amber-soft text-amber',
  orange: 'bg-orange-100 text-orange-600',
  violet: 'bg-violet-100 text-violet-600',
  blue: 'bg-blue-100 text-blue-600',
  danger: 'bg-danger-soft text-danger',
  ink: 'bg-ink/5 text-ink',
}

const SIZES = {
  md: 'h-11 w-11 rounded-xl',
  lg: 'h-14 w-14 rounded-2xl',
}

export default function IconTile({ name, tone = 'brand', size = 'md', className = '' }) {
  const icon = size === 'lg' ? 'h-7 w-7' : 'h-5 w-5'
  return (
    <span
      className={`inline-flex flex-shrink-0 items-center justify-center ${SIZES[size]} ${TONES[tone] || TONES.brand} ${className}`}
    >
      <Icon name={name} className={icon} strokeWidth={2.2} />
    </span>
  )
}
