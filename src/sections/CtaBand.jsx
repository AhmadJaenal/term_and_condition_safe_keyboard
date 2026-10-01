import { Lock } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import { Ring, Plus } from '../components/Decor.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { PLAY_STORE_URL } from '../config.js'

export default function CtaBand() {
  const { t } = useI18n()
  const tagline = t('valueTagline')

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-4xl bg-brand-600 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <Ring className="left-8 top-8 border-white/30" size={20} />
          <Ring className="right-10 bottom-10 border-white/30" size={28} />
          <Plus className="right-16 top-10 text-white/40" />

          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85">{t('cta.desc')}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={PLAY_STORE_URL} size="lg" variant="dark" icon="Play">
              {t('cta.primary')}
            </Button>
            <Button to="/kontak" size="lg" variant="outline">
              {t('cta.secondary')}
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-white/90">
            <Lock className="h-4 w-4" />
            {tagline.join(' · ')}
          </div>
        </div>
      </Container>
    </section>
  )
}
