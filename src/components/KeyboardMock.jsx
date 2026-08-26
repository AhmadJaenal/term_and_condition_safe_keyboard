import { Search, X, Settings, Delete } from 'lucide-react'

const ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
]

const DEFAULT_RESULTS = [
  'kamu tsundere',
  'kamu membuangku aku dikasihi dia',
  'kamu tsundere ya',
  'kamu tercatat dalam antrian dana cicil',
]

// Ilustrasi layar keyboard: kolom pencarian, daftar saran, banner peringatan
// merah "Kata-kata tidak baik, kami hapus.", strip saran, lalu papan ketik.
export default function KeyboardMock({
  query = 'Kamu goblok',
  warning = 'Kata-kata tidak baik, kami hapus.',
  strip = ['geblok', 'goblok', 'goglok'],
  results = DEFAULT_RESULTS,
}) {
  return (
    <div className="flex h-full flex-col bg-[#101312] text-white">
      {/* Search field */}
      <div className="flex items-center gap-2 px-3 pb-2 pt-11">
        <span className="text-lg leading-none text-white/60">+</span>
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-white/5 px-2.5 py-2">
          <span className="text-[13px]">{query}</span>
          <span className="ml-0.5 h-4 w-px animate-pulse bg-brand-400" />
        </div>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
          <X className="h-3.5 w-3.5 text-white/70" />
        </span>
      </div>

      {/* Result list */}
      <div className="flex-1 space-y-3 overflow-hidden px-4 py-2">
        {results.map((r) => (
          <div key={r} className="flex items-center gap-3 text-[12px] text-white/70">
            <Search className="h-3.5 w-3.5 flex-shrink-0 text-white/40" />
            <span className="truncate">{r}</span>
          </div>
        ))}
      </div>

      {/* Warning banner */}
      <div className="mx-3 flex items-center justify-center gap-2 rounded-lg bg-danger-soft px-3 py-2 text-center text-[11px] font-semibold text-danger-ink">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] text-white">
          !
        </span>
        {warning}
      </div>

      {/* Suggestion strip */}
      <div className="mt-2 flex items-center justify-between px-3 text-[12px] text-white/80">
        {strip.map((s, i) => (
          <span key={s} className={i === 1 ? 'font-semibold text-white' : ''}>
            {s}
          </span>
        ))}
        <Settings className="h-4 w-4 text-white/50" />
      </div>

      {/* Keyboard */}
      <div className="space-y-1.5 bg-[#1c1f1e] px-1.5 py-2">
        {ROWS.map((row, idx) => (
          <div key={idx} className="flex justify-center gap-1">
            {idx === 2 && <Key className="flex-[1.4]" label="⇧" />}
            {row.map((k) => (
              <Key key={k} label={k} />
            ))}
            {idx === 2 && (
              <Key className="flex-[1.4]">
                <Delete className="h-3.5 w-3.5" />
              </Key>
            )}
          </div>
        ))}
        <div className="flex justify-center gap-1">
          <Key className="flex-[1.6] text-[10px]">?123</Key>
          <Key label="," />
          <Key className="flex-[4]" label="" />
          <Key label="." />
          <Key className="flex-[1.6] bg-brand-500 text-white">→</Key>
        </div>
      </div>
    </div>
  )
}

function Key({ label, children, className = '' }) {
  return (
    <span
      className={`flex h-8 flex-1 items-center justify-center rounded-[5px] bg-white/[0.09] text-[12px] font-medium text-white/90 ${className}`}
    >
      {children ?? label}
    </span>
  )
}
