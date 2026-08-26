import Container from './Container.jsx'

// Pembungkus section dengan padding vertikal konsisten.
// tone: 'default' (transparan) | 'card' (putih) | 'brand' (hijau lembut)
const TONES = {
  default: '',
  card: 'bg-paper-card',
  brand: 'bg-brand-50',
}

export default function Section({
  id,
  tone = 'default',
  className = '',
  containerClassName = '',
  children,
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-28 ${TONES[tone]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
