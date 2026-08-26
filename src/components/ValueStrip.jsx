import Icon from './Icon.jsx'

// Strip nilai di bagian bawah banner: ikon bulat hijau lembut + label + teks kecil.
export default function ValueStrip({ items, className = '' }) {
  return (
    <div
      className={`grid gap-6 rounded-3xl border border-line bg-paper-card p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4 sm:p-8 ${className}`}
    >
      {items.map((item) => (
        <div key={item.title} className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
            <Icon name={item.icon} className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <div>
            <p className="text-sm font-bold text-ink">{item.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
