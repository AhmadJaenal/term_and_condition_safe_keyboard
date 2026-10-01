import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import VideoEmbed from '../components/VideoEmbed.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'

export default function VideoSection() {
  const { t } = useI18n()

  return (
    <Section id="video">
      <SectionHeading
        eyebrow={t('video.eyebrow')}
        eyebrowIcon="Play"
        title={
          <>
            {t('video.titleLead')} <span className="text-brand-600">{t('video.titleAccent')}</span>
          </>
        }
        desc={t('video.desc')}
      />

      <div className="mx-auto mt-12 max-w-4xl">
        {/*
          Ganti placeholder dengan video Anda:
          - YouTube : <VideoEmbed youtubeId="ID_VIDEO_ANDA" title="Demo Safe Keyboard" />
          - File mp4: <VideoEmbed src="/video/demo.mp4" poster="/video/poster.jpg" />
        */}
        <VideoEmbed />
      </div>
    </Section>
  )
}
