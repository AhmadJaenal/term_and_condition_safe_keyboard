import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function NotFound() {
  useDocumentTitle('Halaman tidak ditemukan — Safe Keyboard')
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-5 text-center">
      <p className="text-6xl font-extrabold text-brand-500">404</p>
      <h1 className="text-2xl font-bold text-ink">Halaman tidak ditemukan</h1>
      <p className="max-w-md text-sm text-ink-soft">
        Tautan yang Anda buka mungkin sudah berubah atau tidak tersedia.
      </p>
      <Button to="/" icon="ArrowRight">
        Kembali ke beranda
      </Button>
    </Container>
  )
}
