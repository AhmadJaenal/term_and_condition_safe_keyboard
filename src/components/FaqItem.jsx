import { ChevronDown } from 'lucide-react'

// Pakai <details>/<summary> supaya tetap berfungsi tanpa JavaScript.
export default function FaqItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-line bg-paper-card px-5 py-4 shadow-card [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink">
        {q}
        <ChevronDown className="h-5 w-5 flex-shrink-0 text-brand-500 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a}</p>
    </details>
  )
}
