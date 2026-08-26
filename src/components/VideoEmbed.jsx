import { Play } from 'lucide-react'

// ============================================================
//  BAGIAN VIDEO — diisi oleh pemilik situs
//  Cara pakai (pilih salah satu):
//
//  1. Video YouTube  -> isi `youtubeId` di src/pages/Home.jsx, contoh:
//       <VideoEmbed youtubeId="dQw4w9WgXcQ" title="Demo Safe Keyboard" />
//
//  2. Video sendiri  -> taruh file di public/video/demo.mp4 lalu:
//       <VideoEmbed src="/video/demo.mp4" poster="/video/poster.jpg" />
//
//  Selama keduanya kosong, tampil placeholder di bawah ini.
// ============================================================
export default function VideoEmbed({ youtubeId, src, poster, title = 'Video Safe Keyboard' }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-line bg-[#101312] shadow-card">
      {youtubeId ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : src ? (
        <video className="absolute inset-0 h-full w-full object-cover" src={src} poster={poster} controls playsInline />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white/80">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white shadow-cta">
            <Play className="ml-1 h-7 w-7" fill="currentColor" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Video demo akan segera hadir</p>
            <p className="mt-1 text-xs text-white/60">
              Pemilik situs dapat menautkan video di komponen <code>VideoEmbed</code>.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
