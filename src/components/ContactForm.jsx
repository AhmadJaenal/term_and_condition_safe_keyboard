import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import Button from './Button.jsx'
import { CONTACT_EMAIL } from '../config.js'

const CATEGORIES = [
  'Pertanyaan umum',
  'Bantuan langganan & pembayaran',
  'Laporan bug / masalah teknis',
  'Permintaan hak atas data pribadi',
  'Laporan perlindungan anak',
  'Kerja sama / lainnya',
]

const FIELD =
  'w-full rounded-xl border border-line bg-paper-card px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-100'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    category: CATEGORIES[0],
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      setError('Mohon lengkapi nama, email, dan pesan Anda.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Format email tidak valid.')
      return
    }
    setError('')

    const subject = `[Safe Keyboard] ${form.category} — ${name}`
    const body = `Nama: ${name}\nEmail: ${email}\nKategori: ${form.category}\n\n${message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl border border-brand-200 bg-brand-50 p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-ink">Aplikasi email Anda sedang dibuka</h3>
          <p className="mt-1 text-sm text-ink-soft">
            Pesan sudah disiapkan dan ditujukan ke <strong>{CONTACT_EMAIL}</strong>. Jika aplikasi
            email tidak terbuka otomatis, silakan kirim manual ke alamat tersebut.
          </p>
        </div>
        <Button variant="outline" onClick={() => setSent(false)}>
          Tulis pesan lagi
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Nama
          <input
            type="text"
            className={FIELD}
            value={form.name}
            onChange={update('name')}
            placeholder="Nama lengkap Anda"
            required
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Email
          <input
            type="email"
            className={FIELD}
            value={form.email}
            onChange={update('email')}
            placeholder="nama@email.com"
            required
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Kategori
        <select className={FIELD} value={form.category} onChange={update('category')}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Pesan
        <textarea
          rows={6}
          className={`${FIELD} resize-y`}
          value={form.message}
          onChange={update('message')}
          placeholder="Tuliskan pertanyaan atau keluhan Anda selengkap mungkin."
          required
        />
      </label>

      {error && (
        <p className="rounded-lg bg-danger-soft px-3 py-2 text-sm font-medium text-danger-ink">
          {error}
        </p>
      )}

      <Button type="submit" iconRight="Send" className="w-full sm:w-auto">
        Kirim lewat Email
      </Button>

      <p className="text-xs text-ink-muted">
        Tombol ini membuka aplikasi email Anda dengan pesan yang sudah terisi. Isi form tidak
        dikirim ke server mana pun.
      </p>
    </form>
  )
}
