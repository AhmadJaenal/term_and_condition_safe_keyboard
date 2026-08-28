import { Mail } from 'lucide-react'
import Container from '../components/Container.jsx'
import Section from '../components/Section.jsx'
import Badge from '../components/Badge.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { Ring, Plus } from '../components/Decor.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { CONTACT_EMAIL, COMPANY, LEGAL_LINKS } from '../config.js'

export default function Contact() {
  useDocumentTitle('Hubungi Kami — Safe Keyboard')

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-paper py-12 sm:py-16">
        <Ring className="left-[10%] top-10" size={16} />
        <Plus className="right-[14%] top-16" />
        <Container className="relative flex max-w-2xl flex-col items-start gap-4">
          <Badge icon="Mail">Kontak</Badge>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Hubungi <span className="text-brand-600">kami</span>
          </h1>
          <p className="text-lg leading-relaxed text-ink-soft">
            Punya pertanyaan, keluhan, atau permintaan terkait data pribadi? Kirim pesan lewat form
            di bawah, atau langsung ke email kami.
          </p>
        </Container>
      </section>

      <Section className="!pt-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-xl font-bold text-ink">Kirim pesan</h2>
            <p className="mt-1 text-sm text-ink-soft">
              Semua kolom bertanda wajib diisi. Kami biasanya membalas dalam 1–3 hari kerja.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl bg-[#161616] p-7 text-white">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-300">Email langsung</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 block text-lg font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-4 text-sm text-white/70">
                {COMPANY.owner} ({COMPANY.role}).
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-paper-card p-7">
              <h3 className="text-base font-bold text-ink">Tautan terkait</h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm font-medium text-brand-700">
                <li>
                  <a className="hover:underline" href={LEGAL_LINKS.privacy}>
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href={LEGAL_LINKS.terms}>
                    Syarat &amp; Ketentuan
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href={LEGAL_LINKS.deleteAccount}>
                    Permintaan Penghapusan Akun
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                Untuk permintaan hak atas data pribadi (akses, perbaikan, penghapusan, penarikan
                persetujuan), sebutkan email yang terdaftar pada akun Safe Keyboard Anda.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
