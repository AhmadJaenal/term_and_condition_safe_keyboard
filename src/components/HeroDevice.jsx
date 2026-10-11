import { useState } from 'react'
import PhoneFrame from './PhoneFrame.jsx'
import ShimmerImage from './ShimmerImage.jsx'
import KeyboardMock from './KeyboardMock.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'

// Perangkat di hero. Gambar di public/images/screen-*.webp adalah render
// layar HP lengkap (sudah termasuk bingkai), jadi ditampilkan apa adanya.
// Bila file gagal dimuat, tampil ilustrasi <KeyboardMock /> berbingkai.
export default function HeroDevice({ src = '/images/screen-pencarian.webp' }) {
  const [failed, setFailed] = useState(false)
  const { t } = useI18n()

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-full bg-brand-300/25 blur-3xl"
      />
      {failed || !src ? (
        <div className="w-[270px] sm:w-[300px]">
          <PhoneFrame fallback={<KeyboardMock />} />
        </div>
      ) : (
        <ShimmerImage
          src={src}
          alt={t('hero.deviceAlt')}
          onError={() => setFailed(true)}
          wrapperClassName="aspect-[1/2] w-[280px] sm:w-[310px]"
          shimmerClassName="rounded-[2.5rem]"
          className="h-full w-full drop-shadow-[0_30px_70px_rgba(16,32,20,0.4)]"
        />
      )}
    </div>
  )
}
