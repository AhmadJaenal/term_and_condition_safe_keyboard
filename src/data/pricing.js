// ============================================================
// Data harga — sumber tunggal untuk seluruh kartu & tabel harga
// ============================================================

export const DURATIONS = [
  { id: '3b', label: '3 Bulan' },
  { id: '6b', label: '6 Bulan' },
  { id: '1t', label: '1 Tahun' },
]

// Tier langganan utama
export const TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    icon: 'ShieldCheck',
    free: true,
    priceLabel: 'GRATIS',
    tagline: 'Cocok untuk mulai memakai proteksi dasar.',
    features: ['Tambah hingga 20 Kata Kustom', 'Blokir kata-kata umum (Bahasa Indonesia)'],
    cta: 'Mulai Gratis',
  },
  {
    id: 'dasar',
    name: 'Proteksi Dasar',
    icon: 'Shield',
    prices: { '3b': 'Rp15.000', '6b': 'Rp25.000', '1t': 'Rp39.000' },
    tagline: 'Perlindungan kata dasar yang handal.',
    features: [
      'Blokir otomatis kata judi & pornografi',
      'Tambah hingga 500 Kata Kustom',
      'Kamus Deteksi dasar yang diperbarui berkala',
    ],
    cta: 'Pilih Paket',
  },
  {
    id: 'ekstra',
    name: 'Proteksi Ekstra',
    icon: 'Star',
    featured: true,
    badge: 'Rekomendasi',
    prices: { '3b': 'Rp22.000', '6b': 'Rp39.000', '1t': 'Rp59.000' },
    tagline: 'Perlindungan Dasar plus bahasa daerah.',
    features: [
      'Semua perlindungan paket Proteksi Dasar',
      'Bebas pilih 2 kamus Bahasa Daerah',
      'Kuota Kata Kustom hingga 1.500 kata',
    ],
    cta: 'Pilih Paket',
  },
  {
    id: 'total',
    name: 'Proteksi Total',
    icon: 'Crown',
    prices: { '3b': 'Rp35.000', '6b': 'Rp59.000', '1t': 'Rp89.000' },
    tagline: 'Perlindungan maksimal, akses penuh.',
    features: [
      'Akses penuh ke semua fitur & bahasa daerah',
      'Bebas pilih 2 kamus Bahasa Daerah',
      'Kuota Kata Kustom hingga 3.000 kata',
      'Prioritas update kosakata bahasa terbaru',
    ],
    cta: 'Pilih Paket',
  },
]

// Paket bahasa daerah (pembelian sekali bayar)
export const LANGUAGE_PACKS = [
  {
    id: 'lang-single',
    name: 'Bahasa Daerah Only',
    price: 'Rp15.000',
    note: 'Sekali beli',
    features: ['1 paket kamus bahasa daerah', 'Tanpa biaya berulang'],
  },
  {
    id: 'lang-bundle',
    name: 'Bundle 8 Bahasa Daerah',
    price: 'Rp59.000',
    note: 'Sekali beli',
    badge: 'Lebih Hemat',
    features: ['8 paket kamus bahasa daerah', 'Cocok untuk proteksi lebih lengkap'],
  },
]

// Paket tambahan kuota Kata Terlarang (sekali bayar, permanen, akumulatif)
export const QUOTA_PACKS = [
  { name: 'Starter', quota: '+50 kata', price: 'Rp9.000' },
  { name: 'Medium', quota: '+150 kata', price: 'Rp19.000' },
  { name: 'Large', quota: '+500 kata', price: 'Rp49.000' },
  { name: 'Max', quota: '+1.000 kata', price: 'Rp79.000' },
]

export const QUOTA_NOTE =
  'Paket ini bersifat pembelian sekali bayar (bukan langganan) yang menambah kuota Kata Terlarang (Kata Kustom) di luar batas kuota tier utama yang sedang aktif. Kuota tambahan bersifat permanen selama akun masih aktif dan tidak hilang meski tier utama diturunkan atau langganan berakhir. Paket dapat dibeli lebih dari satu kali, dan kuota setiap pembelian akan terakumulasi (menjumlah), bukan saling menggantikan.'
