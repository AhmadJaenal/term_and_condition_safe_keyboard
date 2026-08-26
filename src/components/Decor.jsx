// Ornamen latar bergaya banner: cincin, tanda plus, kurva putus-putus.
// Murni dekoratif — disembunyikan dari pembaca layar & tidak menangkap klik.

export function Ring({ className = '', size = 16 }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full border-2 border-brand-200 ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export function Plus({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute h-4 w-4 text-brand-300 ${className}`}
    >
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function DashedCurve({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 80"
      fill="none"
      className={`pointer-events-none absolute h-16 w-24 text-brand-300 ${className}`}
    >
      <path
        d="M4 76C4 30 40 4 116 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
      <path d="M104 4l14 8-14 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function DotGrid({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 60 60" className={`pointer-events-none absolute h-12 w-12 text-brand-200 ${className}`}>
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <circle key={`${r}-${c}`} cx={6 + c * 16} cy={6 + r * 16} r="3" fill="currentColor" />
        )),
      )}
    </svg>
  )
}
