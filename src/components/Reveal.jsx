import useInView from '../hooks/useInView.js'

// Membungkus konten agar memudar naik saat masuk viewport.
// `delay` (ms) untuk efek berjenjang pada grid.
export default function Reveal({
  children,
  as: As = 'div',
  delay = 0,
  className = '',
  y = 20,
}) {
  const [ref, inView] = useInView()
  return (
    <As
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${className}`}
      style={{
        transitionDelay: inView ? `${delay}ms` : '0ms',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : `translateY(${y}px)`,
      }}
    >
      {children}
    </As>
  )
}
