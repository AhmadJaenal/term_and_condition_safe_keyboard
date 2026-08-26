import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Memberi tahu saat elemen masuk viewport (sekali saja).
// Tahan banting: kalau sudah terlihat saat mount -> langsung true;
// kalau IntersectionObserver tak tersedia / pengurangan gerak -> langsung true;
// ada pengaman timeout supaya konten tak pernah tersembunyi permanen.
export default function useInView({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    if (inView || !ref.current) return
    const el = ref.current

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    obs.observe(el)

    const safety = setTimeout(() => setInView(true), 1500)

    return () => {
      obs.disconnect()
      clearTimeout(safety)
    }
  }, [inView, threshold, rootMargin])

  return [ref, inView]
}
