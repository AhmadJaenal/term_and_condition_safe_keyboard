import { Link } from 'react-router-dom'
import { Lock } from 'lucide-react'
import Container from './Container.jsx'
import { LogoMark } from './Logo.jsx'
import { VALUE_TAGLINE } from '../data/content.js'
import { APP_VERSION, COMPANY, LEGAL_LINKS, CONTACT_EMAIL } from '../config.js'

const COLUMNS = [
  {
    title: 'Produk',
    links: [
      { label: 'Fitur', to: '/#fitur' },
      { label: 'Cara Kerja', to: '/#cara-kerja' },
      { label: 'Video', to: '/#video' },
      { label: 'Harga', to: '/#harga' },
      { label: 'FAQ', to: '/#faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Kebijakan Privasi', href: LEGAL_LINKS.privacy },
      { label: 'Syarat & Ketentuan', href: LEGAL_LINKS.terms },
      { label: 'Permintaan Hapus Akun', href: LEGAL_LINKS.deleteAccount },
    ],
  },
  {
    title: 'Dukungan',
    links: [
      { label: 'Hubungi Kami', to: '/kontak' },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
]

function FooterLink({ link }) {
  const cls = 'text-sm text-ink-soft transition-colors hover:text-brand-700'
  if (link.to) {
    return (
      <Link to={link.to} className={cls}>
        {link.label}
      </Link>
    )
  }
  return (
    <a href={link.href} className={cls}>
      {link.label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-card">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="text-lg font-extrabold tracking-tight text-ink">Safe Keyboard</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Keyboard Android pintar yang mendeteksi dan menghapus kata kasar, istilah pornografi,
              dan link judi online dari teks yang diketik sepenuhnya di perangkat Anda (On-Device).
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-700">
              <Lock className="h-4 w-4" />
              {VALUE_TAGLINE.join(' · ')}
            </div>
          </div>

          {COLUMNS.map((col) => (
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
            © {COMPANY.year} {COMPANY.team} · Safe Keyboard v{APP_VERSION}
          </p>
          <p>
            Penanggung jawab: {COMPANY.owner} · {CONTACT_EMAIL}
          </p>
        </div>
      </Container>
    </footer>
  )
}
