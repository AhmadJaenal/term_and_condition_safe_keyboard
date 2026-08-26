import { useState } from 'react'
import PhoneMockup from './PhoneMockup.jsx'
import KeyboardMock from './KeyboardMock.jsx'

// Menampilkan screenshot aplikasi di hero.
//
//  Taruh gambar Anda di:  public/screenshot-hero.png
//  - Jika gambar sudah termasuk bingkai ponsel (device mockup), biarkan
//    `framed={false}` (default) — gambar ditampilkan apa adanya + bayangan.
//  - Jika gambar berupa screenshot polos (tanpa bingkai), set `framed`
//    supaya dibungkus bingkai ponsel CSS.
//  - Jika file belum ada / gagal dimuat, otomatis memakai ilustrasi
//    <KeyboardMock /> sebagai cadangan.
export default function HeroDevice({
  src = '/screenshot-hero.png',
  alt = 'Safe Keyboard menghapus kata tidak baik saat mengetik',
  framed = false,
}) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <PhoneMockup>
        <KeyboardMock />
      </PhoneMockup>
    )
  }

  if (framed) {
    return (
      <PhoneMockup screenClassName="min-h-[520px]">
        <img src={src} alt={alt} className="block w-full" onError={() => setFailed(true)} />
      </PhoneMockup>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="w-[270px] rounded-[2.25rem] shadow-[0_30px_70px_-20px_rgba(16,32,20,0.45)] sm:w-[300px]"
    />
  )
}
