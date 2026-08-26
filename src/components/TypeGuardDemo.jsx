import { useEffect, useMemo, useRef, useState } from 'react'
import { ShieldCheck, Send } from 'lucide-react'

// Contoh kata untuk simulasi (sengaja ringkas). Aplikasi asli memakai
// ribuan kata pada Kamus Deteksi + Kata Kustom pengguna.
const BLOCK = [
  'goblok', 'tolol', 'bego', 'bangsat', 'kampret', 'anjir', 'anjing',
  'judi', 'judol', 'slot', 'bokep', 'sabu', 'ganja',
]

const normalize = (w) => w.toLowerCase().replace(/[^a-z0-9]/g, '')
const isBad = (w) => {
  const n = normalize(w)
  return n.length > 0 && BLOCK.includes(n)
}
const mask = (w) => {
  const core = w.replace(/[^A-Za-z0-9]/g, '')
  if (core.length <= 2) return '••'
  return core[0] + '•'.repeat(core.length - 2) + core[core.length - 1]
}

export default function TypeGuardDemo() {
  const [text, setText] = useState('kamu goblok banget')
  const [toast, setToast] = useState(false)
  const prevCount = useRef(-1) // -1: lewati render pertama supaya tak toast saat load

  // Pisah tapi pertahankan spasi agar bisa dirender ulang.
  const tokens = useMemo(() => text.split(/(\s+)/), [text])
  const blockedCount = useMemo(
    () => tokens.filter((t) => isBad(t)).length,
    [tokens],
  )
  const sanitized = useMemo(
    () =>
      tokens
        .map((t) => (isBad(t) ? '' : t))
        .join('')
        .replace(/\s{2,}/g, ' ')
        .trim(),
    [tokens],
  )

  useEffect(() => {
    const prev = prevCount.current
    prevCount.current = blockedCount
    if (prev >= 0 && blockedCount > prev) {
      setToast(true)
      const id = setTimeout(() => setToast(false), 2200)
      return () => clearTimeout(id)
    }
  }, [blockedCount])

  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl border border-line bg-paper-card p-6 shadow-card sm:p-8">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold text-ink">Coba sendiri</p>
          <p className="text-xs text-ink-soft">
            Ketik kalimat berisi kata kasar, lalu lihat Safe Keyboard menghapusnya.
          </p>
        </div>
      </div>

      <div className="relative mt-5">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
          autoComplete="off"
          aria-label="Ketik kalimat percobaan"
          placeholder="Ketik sesuatu…"
          className="w-full rounded-2xl border border-line bg-paper px-4 py-3 pr-11 text-sm text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
        <Send className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500" />
      </div>

      <div className="flex h-9 items-center justify-center">
        {toast && (
          <div className="flex animate-shake items-center gap-2 rounded-xl bg-danger-soft px-3 py-2 text-xs font-semibold text-danger-ink">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] leading-none text-white">
              !
            </span>
            Kata-kata tidak baik, kami hapus.
          </div>
        )}
      </div>

      <div className="rounded-2xl bg-paper p-4">
        <p className="text-[11px] font-bold uppercase tracking-wider text-ink-muted">Yang diketik</p>
        <p className="mt-1.5 min-h-[1.25rem] whitespace-pre-wrap break-words text-sm leading-relaxed text-ink">
          {tokens.map((t, i) =>
            isBad(t) ? (
              <span
                key={i}
                className="rounded bg-danger-soft px-1 font-semibold text-danger-ink line-through decoration-2"
              >
                {mask(t)}
              </span>
            ) : (
              <span key={i}>{t}</span>
            ),
          )}
        </p>
      </div>

      <div className="mt-3 flex items-start gap-2.5 rounded-2xl border border-brand-100 bg-brand-50 p-4">
        <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
            Yang diteruskan
          </p>
          <p className="mt-1 break-words text-sm text-ink">
            {sanitized || <span className="text-ink-muted">(kosong)</span>}
          </p>
        </div>
        <span className="ml-auto flex-shrink-0 self-center rounded-full bg-white px-2.5 py-1 text-xs font-bold text-danger-ink ring-1 ring-danger-soft">
          {blockedCount} diblokir
        </span>
      </div>

      <p className="mt-4 text-center text-[11px] leading-relaxed text-ink-muted">
        Simulasi ringkas dengan sedikit contoh kata. Aplikasi asli mencocokkan ribuan kata pada Kamus
        Deteksi ditambah Kata Kustom Anda, sepenuhnya di perangkat.
      </p>
    </div>
  )
}
