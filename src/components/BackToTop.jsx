import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext.jsx'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('a11y.backToTop')}
      className={`fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white shadow-cta transition-all hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  )
}
