import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShimmerImage from './ShimmerImage.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'

// Lambang perisai + centang + keyboard, mengikuti ikon aplikasi Safe Keyboard.
// Dipakai sebagai fallback bila file gambar logo belum tersedia.
export function LogoGlyph({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 512 512" className={className} role="img" aria-label="Safe Keyboard">
      <defs>
        <linearGradient id="sk-shield" x1="0.15" y1="0" x2="0.72" y2="1">
          <stop offset="0" stopColor="#93DD24" />
          <stop offset="0.5" stopColor="#37A63F" />
          <stop offset="1" stopColor="#1C8138" />
        </linearGradient>
      </defs>
      <path
        d="M256 46C232 66 176 92 118 100c-18 2.5-32 18-32 36v114c0 100 68 188 170 220 102-32 170-120 170-220V136c0-18-14-33.5-32-36-58-8-114-34-138-54Z"
        fill="url(#sk-shield)"
      />
      <path
        d="M188 178l44 44 98-92"
        fill="none"
        stroke="#fff"
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="150" y="232" width="212" height="134" rx="30" fill="#fff" />
      <g fill="#2E9A42">
        <rect x="172" y="258" width="30" height="22" rx="6" />
        <rect x="218" y="258" width="30" height="22" rx="6" />
        <rect x="264" y="258" width="30" height="22" rx="6" />
        <rect x="310" y="258" width="30" height="22" rx="6" />
        <rect x="172" y="292" width="30" height="22" rx="6" />
        <rect x="218" y="292" width="30" height="22" rx="6" />
        <rect x="264" y="292" width="30" height="22" rx="6" />
        <rect x="310" y="292" width="30" height="22" rx="6" />
        <rect x="172" y="326" width="168" height="20" rx="10" />
      </g>
    </svg>
  )
}

// Taruh file logo Anda di public/logo-mark.png (atau .svg dan ubah src di bawah).
// Selama file belum ada, otomatis memakai <LogoGlyph /> di atas.
export function LogoMark({ className = 'h-9 w-9' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <LogoGlyph className={className} />
  return (
    <ShimmerImage
      src="/logo-mark.png"
      alt="Safe Keyboard"
      wrapperClassName={`shrink-0 ${className}`}
      shimmerClassName="rounded-lg"
      className="h-full w-full"
      onError={() => setFailed(true)}
    />
  )
}

export default function Logo({ withTagline = false, className = '', mark = 'h-9 w-9', to = '/' }) {
  const { t } = useI18n()
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={t('a11y.homeAria')}
    >
      <LogoMark className={mark} />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-ink">Safe Keyboard</span>
        {withTagline && (
          <span className="mt-1 text-[11px] font-medium text-ink-soft">{t('logo.tagline')}</span>
        )}
      </span>
    </Link>
  )
}
