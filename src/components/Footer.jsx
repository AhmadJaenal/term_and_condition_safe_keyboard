import { Lock } from 'lucide-react'
import Container from './Container.jsx'
import HashLink from './HashLink.jsx'
import { LogoMark } from './Logo.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { fmt } from '../i18n/format.js'
import { APP_VERSION, COMPANY, LEGAL_LINKS, CONTACT_EMAIL } from '../config.js'

function FooterLink({ link }) {
  const cls = 'text-sm text-ink-soft transition-colors hover:text-brand-700'
  if (link.to) {
    return (
      <HashLink to={link.to} className={cls}>
        {link.label}
      </HashLink>
    )
  }
  const href = link.mailto
    ? `mailto:${CONTACT_EMAIL}`
    : link.legal
      ? LEGAL_LINKS[link.legal]
      : link.href
  const label = link.mailto ? CONTACT_EMAIL : link.label
  return (
    <a href={href} className={cls}>
      {label}
    </a>
  )
}

export default function Footer() {
  const { t } = useI18n()
  const columns = t('footer.columns')
  const tagline = t('valueTagline')

  return (
    <footer className="border-t border-line bg-paper-card">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="text-lg font-extrabold tracking-tight text-ink">Safe Keyboard</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t('footer.desc')}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-700">
              <Lock className="h-4 w-4" />
              {tagline.join(' · ')}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                {col.title}
              </p>
              {col.links.map((link) => (
                <FooterLink key={link.label} link={link} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {fmt(t('footer.rights'), {
              year: COMPANY.year,
              team: COMPANY.team,
              version: APP_VERSION,
            })}
          </p>
          <p>{fmt(t('footer.responsible'), { owner: COMPANY.owner, email: CONTACT_EMAIL })}</p>
        </div>
      </Container>
    </footer>
  )
}
