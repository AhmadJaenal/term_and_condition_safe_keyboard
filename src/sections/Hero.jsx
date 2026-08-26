import { Check } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import Badge from '../components/Badge.jsx'
import HeroDevice from '../components/HeroDevice.jsx'
import { Ring, Plus, DashedCurve, DotGrid } from '../components/Decor.jsx'
import { TRUST_PILLS } from '../data/content.js'
import { PLAY_STORE_URL } from '../config.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-paper pt-10 pb-16 sm:pt-16 lg:pb-24">
      <Ring className="left-[8%] top-24" size={14} />
      <Ring className="right-[12%] top-40" size={22} />
      <Plus className="left-[46%] top-10" />
      <DotGrid className="right-[6%] top-8 hidden lg:block" />
      <DashedCurve className="bottom-10 left-[3%] hidden -scale-x-100 lg:block" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6 animate-fade-up">
          <Badge icon="ShieldCheck">Keyboard Pintar Anti Kata Kasar</Badge>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Dunia digital <span className="text-brand-600">tidak selalu aman</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            Kata kasar, istilah pornografi, dan link judi online bisa muncul dari chat, pencarian,
            hingga kolom komentar. Safe Keyboard mendeteksi dan menghapusnya dari teks yang diketik —
            sebelum pesan sempat terkirim.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href={PLAY_STORE_URL} size="lg" icon="Play">
              Temukan di Play Store
            </Button>
            <Button to="/#cara-kerja" size="lg" variant="outline">
              Lihat Cara Kerja
            </Button>
          </div>

          <ul className="mt-2 flex flex-col gap-2">
            {TRUST_PILLS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <Check className="h-4 w-4 flex-shrink-0 text-brand-500" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <Ring className="-left-2 top-6 hidden sm:block" size={18} />
          <Plus className="-left-4 bottom-16 hidden sm:block" />
          {/* Screenshot di public/screenshot-hero.png (set `framed` bila gambar
              belum punya bingkai ponsel). Fallback ke ilustrasi bila file kosong. */}
          <HeroDevice />
        </div>
      </Container>
    </section>
  )
}
