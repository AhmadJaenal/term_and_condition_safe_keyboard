import { useState } from 'react'
import { ImageOff } from 'lucide-react'

const WIDTHS = {
  sm: 'w-[210px] sm:w-[230px]',
  md: 'w-[248px] sm:w-[268px]',
  lg: 'w-[270px] sm:w-[300px]',
}

// Bingkai ponsel minimalis untuk menampilkan screenshot aplikasi.
// Screenshot sudah memuat status bar / dynamic island-nya sendiri,
// jadi bingkai ini tidak menggambar notch palsu.
//
//  - `src`      : path gambar (mis. "/screenshots/pengaturan.svg")
//  - `fallback` : node yang tampil bila `src` kosong / gagal dimuat
//  - `size`     : 'sm' | 'md' | 'lg'
export default function PhoneFrame({
  src,
  alt = '',
  size = 'lg',
  className = '',
  imgClassName = '',
  fallback = null,
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false)
  const showImg = src && !failed

  return (
    <div
      className={`relative ${WIDTHS[size] || WIDTHS.lg} shrink-0 rounded-[2.5rem] border border-white/10 bg-[#0c0e0d] p-[0.38rem] shadow-[0_36px_80px_-24px_rgba(11,26,15,0.5)] ring-1 ring-black/5 ${className}`}
    >
      <div className="relative aspect-[376/792] overflow-hidden rounded-[2.15rem] bg-[#101312]">
        {showImg ? (
          <img
            src={src}
            alt={alt}
            loading={loading}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover object-top ${imgClassName}`}
          />
        ) : fallback ? (
          <div className="absolute inset-0">{fallback}</div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-white/45">
            <ImageOff className="h-8 w-8" aria-hidden="true" />
            <p className="text-xs font-medium leading-relaxed">
              Screenshot menyusul
              <br />
              <span className="text-white/30">{src}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
