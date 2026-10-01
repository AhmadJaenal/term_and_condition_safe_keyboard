import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Button from './Button.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { fmt } from '../i18n/format.js'
import { CONTACT_EMAIL } from '../config.js'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const FIELD =
  'w-full rounded-xl border border-line bg-paper-card px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-100'

export default function ContactForm() {
  const { t } = useI18n()
  const c = t('contactForm')
  const categories = c.categories

  const [form, setForm] = useState({ name: '', email: '', categoryIndex: 0, message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()
    const category = categories[form.categoryIndex] ?? categories[0]

    if (!name || !email || !message) {
      setError(c.errRequired)
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(c.errEmail)
      return
    }
    if (!WEB3FORMS_KEY) {
      setError(fmt(c.errNotConfigured, { email: CONTACT_EMAIL }))
      return
    }
    setError('')
    setSending(true)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `${c.subjectPrefix} ${category} — ${name}`,
          from_name: c.fromName,
          name,
          email,
          category,
          message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError(data.message || c.errGeneric)
      }
    } catch {
      setError(fmt(c.errNetwork, { email: CONTACT_EMAIL }))
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl border border-brand-200 bg-brand-50 p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-ink">{c.successTitle}</h3>
          <p className="mt-1 text-sm text-ink-soft">
            {fmt(c.successBody, { email: form.email })}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setForm({ name: '', email: '', categoryIndex: 0, message: '' })
            setSent(false)
          }}
        >
          {c.writeAgain}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {c.name}
          <input
            type="text"
            className={FIELD}
            value={form.name}
            onChange={update('name')}
            placeholder={c.namePlaceholder}
            required
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {c.email}
          <input
            type="email"
            className={FIELD}
            value={form.email}
            onChange={update('email')}
            placeholder={c.emailPlaceholder}
            required
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        {c.category}
        <select
          className={FIELD}
          value={form.categoryIndex}
          onChange={(e) => setForm((f) => ({ ...f, categoryIndex: Number(e.target.value) }))}
        >
          {categories.map((label, i) => (
            <option key={label} value={i}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        {c.message}
        <textarea
          rows={6}
          className={`${FIELD} resize-y`}
          value={form.message}
          onChange={update('message')}
          placeholder={c.messagePlaceholder}
          required
        />
      </label>

      {error && (
        <p className="rounded-lg bg-danger-soft px-3 py-2 text-sm font-medium text-danger-ink">
          {error}
        </p>
      )}

      <Button
        type="submit"
        iconRight="Send"
        disabled={sending}
        className="w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? c.sending : c.submit}
      </Button>

      <p className="text-xs text-ink-muted">{c.privacyNote}</p>
    </form>
  )
}
