import Icon from './Icon.jsx'

// Kartu langkah dengan nomor besar + konektor panah ke langkah berikutnya.
export default function StepCard({ no, title, desc, last = false }) {
  return (
    <div className="relative flex flex-col gap-3 rounded-3xl border border-line bg-paper-card p-6 shadow-card">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
          {no}
        </span>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
      {!last && (
        <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-brand-500 text-white shadow-cta lg:flex">
          <Icon name="ArrowRight" className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
      )}
    </div>
  )
}
