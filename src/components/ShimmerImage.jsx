import { useEffect, useRef, useState } from 'react'

// Gambar dengan placeholder shimmer berukuran sama selama memuat.
// Ukuran diatur lewat `wrapperClassName` (lebar/tinggi/aspect) agar layout tidak bergeser.
export default function ShimmerImage({
  src,
  alt = '',
  onError,
  wrapperClassName = '',
  className = '',
  shimmerClassName = 'rounded-2xl',
  ...rest
}) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setLoaded(false)
    // Gambar dari cache bisa selesai sebelum handler onLoad terpasang
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true)
  }, [src])

  return (
    <div className={`relative ${wrapperClassName}`}>
      {!loaded && (
        <div aria-hidden="true" className={`shimmer absolute inset-0 ${shimmerClassName}`} />
      )}
      <img
        ref={ref}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={onError}
        className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...rest}
      />
    </div>
  )
}
