import { Check } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PriceCard from '../components/PriceCard.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import { TIERS, LANGUAGE_PACKS, QUOTA_PACKS, QUOTA_NOTE } from '../data/pricing.js'
import { PLAY_STORE_URL } from '../config.js'

export default function Pricing() {
  return (
    <Section id="harga" tone="brand">
      <SectionHeading
        eyebrow="Harga"
        eyebrowIcon="Tag"
        title={
          <>
            Pilih paket <span className="text-brand-600">sesuai kebutuhan</span>
          </>
        }
        desc="Semakin tinggi paket, semakin banyak perlindungan dan kuota kata yang bisa Anda nikmati. Mulai dari Starter gratis, tingkatkan kapan saja tanpa kehilangan data."
      />

      {/* Tier utama */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((tier) => (
          <PriceCard key={tier.id} tier={tier} />
        ))}
      </div>
      <p className="mt-5 text-center text-xs text-ink-soft">
        Seluruh harga dalam Rupiah, sekali bayar untuk durasi yang dipilih, tanpa perpanjangan
        otomatis. Transaksi diproses melalui Google Play Billing.
      </p>

      {/* Paket bahasa daerah */}
      <div className="mt-20">
        <h3 className="text-center text-xl font-bold text-ink">Paket Tambahan Bahasa Daerah</h3>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-ink-soft">
          Beli sekali, gunakan sesuai kebutuhan. Cocok untuk perlindungan bahasa daerah yang lebih
          spesifik.
        </p>
        <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
          {LANGUAGE_PACKS.map((pack) => (
            <Card key={pack.id} className="flex flex-col gap-4 text-center">
              {pack.badge && (
                <Badge tone="brand" icon="Tag" className="mx-auto">
                  {pack.badge}
                </Badge>
              )}
              <div>
                <p className="text-base font-bold text-ink">{pack.name}</p>
                <p className="mt-2 text-3xl font-extrabold text-brand-600">{pack.price}</p>
                <p className="text-xs text-ink-muted">{pack.note}</p>
              </div>
              <ul className="flex-1 space-y-2 text-left text-sm text-ink">
                {pack.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={PLAY_STORE_URL} variant="outline" className="w-full">
                Pilih Paket
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Paket kuota kata */}
      <div className="mt-20">
        <h3 className="text-center text-xl font-bold text-ink">
          Paket Tambahan Kuota Kata Terlarang
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-ink-soft">
          Pembelian sekali bayar untuk menambah kuota Kata Kustom di luar batas tier utama.
        </p>

        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border border-line bg-paper-card shadow-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-brand-50 text-xs uppercase tracking-wide text-ink-soft">
                <th className="px-5 py-3 font-bold">Paket</th>
                <th className="px-5 py-3 font-bold">Kuota</th>
                <th className="px-5 py-3 text-right font-bold">Harga</th>
              </tr>
            </thead>
            <tbody>
              {QUOTA_PACKS.map((p) => (
                <tr key={p.name} className="border-b border-line last:border-0">
                  <td className="px-5 py-3 font-semibold text-ink">{p.name}</td>
                  <td className="px-5 py-3 text-ink-soft">{p.quota}</td>
                  <td className="px-5 py-3 text-right font-bold text-brand-600">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-line bg-paper-card px-5 py-4 text-xs leading-relaxed text-ink-soft">
          {QUOTA_NOTE}
        </p>
      </div>
    </Section>
  )
}
