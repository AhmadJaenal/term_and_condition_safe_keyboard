import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import HashLink from './HashLink.jsx'
import Container from './Container.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { PLAY_STORE_URL } from '../config.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const { t } = useI18n()
  const navLinks = t('nav.links')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup menu mobile setiap kali pindah halaman / anchor
  useEffect(() => setOpen(false), [pathname, hash])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'border-b border-line bg-paper/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <HashLink
              key={l.to}
              to={l.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </HashLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Button href={PLAY_STORE_URL} icon="Play" size="md">
            {t('nav.download')}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-brand-50"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper-card lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <HashLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </HashLink>
            ))}
            <Button href={PLAY_STORE_URL} icon="Play" className="mt-2 w-full">
              {t('nav.download')}
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
