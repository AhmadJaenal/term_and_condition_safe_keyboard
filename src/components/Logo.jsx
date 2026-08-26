import { Link } from 'react-router-dom'

// Lambang perisai + keyboard + centang, meniru ikon aplikasi pada banner.
export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Safe Keyboard">
      <defs>
        <linearGradient id="sk-shield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2FB457" />
          <stop offset="1" stopColor="#1B7C39" />
        </linearGradient>
      </defs>
      <path
        d="M24 3.5 8 9.2v12.3C8 32.4 14.6 41.6 24 44.5c9.4-2.9 16-12.1 16-23V9.2L24 3.5Z"
        fill="url(#sk-shield)"
      />
      <rect x="14.5" y="18.5" width="19" height="12.5" rx="2.6" fill="#fff" opacity="0.95" />
      <g fill="#1B7C39">
        <rect x="17" y="21" width="2.4" height="2.4" rx="0.6" />
        <rect x="21.2" y="21" width="2.4" height="2.4" rx="0.6" />
        <rect x="25.4" y="21" width="2.4" height="2.4" rx="0.6" />
        <rect x="29.6" y="21" width="1.9" height="2.4" rx="0.6" />
        <rect x="17" y="25" width="2.4" height="2.4" rx="0.6" />
        <rect x="21.2" y="25" width="2.4" height="2.4" rx="0.6" />
        <rect x="25.4" y="25" width="6.1" height="2.4" rx="0.6" />
      </g>
      <circle cx="34" cy="14" r="7" fill="#fff" />
      <path
        d="m30.7 14 2.2 2.2 4.3-4.6"
        fill="none"
        stroke="#1B7C39"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Logo({ withTagline = false, className = '', mark = 'h-9 w-9', to = '/' }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Safe Keyboard — beranda"
    >
      <LogoMark className={mark} />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-ink">Safe Keyboard</span>
        {withTagline && (
          <span className="mt-1 text-[11px] font-medium text-ink-soft">
            Ketik Aman, Tanpa Kata Kasar
          </span>
        )}
      </span>
    </Link>
  )
}
