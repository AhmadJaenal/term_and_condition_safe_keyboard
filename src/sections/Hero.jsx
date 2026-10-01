import { Check } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import Badge from '../components/Badge.jsx'
import HeroDevice from '../components/HeroDevice.jsx'
import { Ring, Plus, DashedCurve, DotGrid } from '../components/Decor.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { PLAY_STORE_URL } from '../config.js'

export default function Hero() {
  const { t } = useI18n()
  const trustPills = t('hero.trustPills')

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-paper pt-10 pb-16 sm:pt-16 lg:pb-24">
      <Ring className="left-[8%] top-24" size={14} />
      <Ring className="right-[12%] top-40" size={22} />
      <Plus className="left-[46%] top-10" />
      <DotGrid className="right-[6%] top-8 hidden lg:block" />
      <DashedCurve className="bottom-10 left-[3%] hidden -scale-x-100 lg:block" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6 animate-fade-up">
          <Badge icon="ShieldCheck">{t('hero.badge')}</Badge>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {t('hero.titleLead')} <span className="text-brand-600">{t('hero.titleAccent')}</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{t('hero.desc')}</p>

          <div className="flex flex-wrap gap-3">
            <Button href={PLAY_STORE_URL} size="lg" icon="Play">
              {t('hero.ctaPrimary')}
            </Button>
            <Button to="/#cara-kerja" size="lg" variant="outline">
              {t('hero.ctaSecondary')}
            </Button>
          </div>

          <ul className="mt-2 flex flex-col gap-2">
            {trustPills.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <Check className="h-4 w-4 flex-shrink-0 text-brand-500" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <Ring className="-left-2 top-6 hidden sm:block" size={18} />
          <Plus className="-left-4 bottom-16 hidden sm:block" />
          <HeroDevice />
        </div>
      </Container>
    </section>
  )
}
