import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { useI18n } from '../i18n/LanguageContext.jsx'

export default function NotFound() {
  const { t } = useI18n()
  useDocumentTitle(t('docTitles.notFound'))
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-5 text-center">
      <p className="text-6xl font-extrabold text-brand-500">404</p>
      <h1 className="text-2xl font-bold text-ink">{t('notFound.title')}</h1>
      <p className="max-w-md text-sm text-ink-soft">{t('notFound.desc')}</p>
      <Button to="/" icon="ArrowRight">
        {t('notFound.back')}
      </Button>
    </Container>
  )
}
