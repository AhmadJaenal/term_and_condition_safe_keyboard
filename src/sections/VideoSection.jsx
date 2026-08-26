import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import VideoEmbed from '../components/VideoEmbed.jsx'

export default function VideoSection() {
  return (
    <Section id="video">
      <SectionHeading
        eyebrow="Lihat Langsung"
        eyebrowIcon="Play"
        title={
          <>
            Safe Keyboard <span className="text-brand-600">bekerja</span>
          </>
        }
        desc="Tonton bagaimana kata berisiko dikenali dan dihapus otomatis, sejak diketik hingga sebelum terkirim."
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
