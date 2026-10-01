import { Mail } from 'lucide-react'
import Container from '../components/Container.jsx'
import Section from '../components/Section.jsx'
import Badge from '../components/Badge.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { Ring, Plus } from '../components/Decor.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { fmt } from '../i18n/format.js'
import { CONTACT_EMAIL, COMPANY, LEGAL_LINKS } from '../config.js'

export default function Contact() {
  const { t } = useI18n()
  useDocumentTitle(t('docTitles.contact'))
  const relatedLinks = t('contactPage.relatedLinks')

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-paper py-12 sm:py-16">
        <Ring className="left-[10%] top-10" size={16} />
        <Plus className="right-[14%] top-16" />
        <Container className="relative flex max-w-2xl flex-col items-start gap-4">
          <Badge icon="Mail">{t('contactPage.badge')}</Badge>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            {t('contactPage.titleLead')}{' '}
            <span className="text-brand-600">{t('contactPage.titleAccent')}</span>
          </h1>
          <p className="text-lg leading-relaxed text-ink-soft">{t('contactPage.intro')}</p>
        </Container>
      </section>

      <Section className="!pt-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-xl font-bold text-ink">{t('contactPage.sendHeading')}</h2>
            <p className="mt-1 text-sm text-ink-soft">{t('contactPage.sendSub')}</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl bg-[#161616] p-7 text-white">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-300">
                {t('contactPage.directEmailTitle')}
              </h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 block text-lg font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-4 text-sm text-white/70">
                {fmt(t('contactPage.ownerLine'), { owner: COMPANY.owner, role: COMPANY.role })}
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-paper-card p-7">
              <h3 className="text-base font-bold text-ink">{t('contactPage.relatedTitle')}</h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm font-medium text-brand-700">
                <li>
                  <a className="hover:underline" href={LEGAL_LINKS.privacy}>
                    {relatedLinks.privacy}
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href={LEGAL_LINKS.terms}>
                    {relatedLinks.terms}
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href={LEGAL_LINKS.deleteAccount}>
                    {relatedLinks.deleteAccount}
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                {t('contactPage.relatedNote')}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
