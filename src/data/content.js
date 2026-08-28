// ============================================================
// Semua teks landing page — dipisah dari komponen
// ============================================================

export const TRUST_PILLS = [
  'Deteksi kata dilakukan di perangkat (On-Device)',
  'Ketikan tidak pernah dikirim ke server',
  'Selaras dengan UU PDP No. 27/2022',
]

export const VALUE_TAGLINE = ['Aman', 'Privat', 'Terjaga']

// Strip nilai singkat ala bagian bawah banner
export const VALUE_PROPS = [
  {
    icon: 'ShieldCheck',
    title: 'Lindungi keluarga',
    desc: 'Kenali dan cegah kata berbahaya sebelum terkirim.',
  },
  {
    icon: 'Lock',
    title: 'Privat',
    desc: 'Data diproses di perangkat, bukan di server.',
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Fleksibel',
    desc: 'Atur level filter dan kata blokir sesuai kebutuhan.',
  },
  {
    icon: 'Users',
    title: 'Kontrol orang tua',
    desc: 'Pengaturan penting dikunci dengan PIN.',
  },
]

// --- Bagian "Dunia digital tidak selalu aman" ---
export const RISKS = [
  {
    icon: 'MessageSquareWarning',
    tone: 'danger',
    title: 'Kata Kasar',
    desc: 'Mengandung ujaran kasar & perundungan yang muncul dari chat sehari-hari.',
  },
  {
    icon: 'EyeOff',
    tone: 'amber',
    title: 'Kata Seksual',
    desc: 'Istilah vulgar dan kata bermuatan dewasa yang tidak selalu tampak kasar.',
  },
  {
    icon: 'Globe',
    tone: 'brand',
    title: 'Link Judi Online',
    desc: 'Link atau kata yang mengarah ke situs judi online otomatis terdeteksi dan diblokir saat Anda mengetik.',
  },
  {
    icon: 'Fingerprint',
    tone: 'ink',
    title: 'Jejak Digital',
    desc: 'Kata yang terlanjur terkirim meninggalkan rekam jejak yang sulit dihapus.',
  },
]

// --- Bagian fitur ("Satu Aplikasi, Empat Lapis Perlindungan") ---
export const FEATURES = [
  {
    icon: 'ScanSearch',
    tone: 'brand',
    title: 'Deteksi Otomatis',
    desc: 'Menyaring kata kasar, istilah pornografi, dan link judi online pada teks yang diketik, secara real-time sebelum pesan terkirim.',
  },
  {
    icon: 'Type',
    tone: 'violet',
    title: 'Kata Kustom',
    desc: 'Tambahkan sendiri kata yang ingin diblokir otomatis oleh keyboard, sesuai kebiasaan keluarga Anda.',
  },
  {
    icon: 'SlidersHorizontal',
    tone: 'amber',
    title: 'Level Filter',
    desc: 'Atur tingkat sensitivitas penyaringan dari Longgar hingga Ekstrem, kapan saja lewat pengaturan.',
  },
  {
    icon: 'Lock',
    tone: 'orange',
    title: 'Mode Orang Tua',
    desc: 'Kunci pengaturan penting dengan PIN sehingga perubahan tidak bisa dilakukan sembarangan.',
  },
  {
    icon: 'ShieldCheck',
    tone: 'brand',
    title: 'Privasi Lokal',
    desc: 'Semua proses deteksi kata dilakukan di perangkat Anda (On-Device), bukan di server kami.',
  },
  {
    icon: 'Newspaper',
    tone: 'blue',
    title: 'Fitur Berita',
    desc: 'Kabar seputar keamanan digital anak dan gadget, supaya orang tua waspada lebih dini.',
  },
]

// --- Bagian "Begini Cara Kerjanya" ---
export const STEPS = [
  {
    no: '01',
    title: 'Ketik',
    desc: 'Pengguna mengetik seperti biasa di aplikasi apa pun.',
  },
  {
    no: '02',
    title: 'Deteksi',
    desc: 'Sistem mengenali kata yang berisiko dari Kamus Deteksi dan Kata Kustom.',
  },
  {
    no: '03',
    title: 'Blokir & Hapus',
    desc: 'Kata berbahaya otomatis diblokir dan terhapus sebelum sempat terkirim.',
  },
  {
    no: '04',
    title: 'Aman Terkirim',
    desc: 'Hanya kata yang aman yang diteruskan ke lawan bicara.',
  },
]

// --- Bagian Level Filter ---
export const FILTER_LEVELS = [
  { dot: '#E23636', name: 'Ekstrem', desc: 'Blokir semua kata negatif termasuk yang ringan.' },
  { dot: '#F97316', name: 'Ketat', desc: 'Blokir kata kasar ringan hingga berat.' },
  { dot: '#EAB308', name: 'Sedang', desc: 'Blokir kata kasar umum.', badge: 'Direkomendasikan' },
  { dot: '#22A24C', name: 'Normal', desc: 'Blokir kata kasar berat saja.' },
  { dot: '#9CA3AF', name: 'Longgar', desc: 'Hanya blokir kata kasar sangat berat.' },
]

// --- Bagian Mode Orang Tua ---
export const PARENT_LOCKED = [
  'Level Filter',
  'Kata Terlarang (Kata Kustom)',
  'Kamus Bahasa Daerah',
  'Setel Ulang Keyboard',
  'Riwayat Berlangganan',
]

// --- Bagian Fitur Berita ---
export const NEWS_SAMPLES = [
  {
    tag: 'Keamanan Anak',
    title: 'Anak di bawah umur membuat grup untuk membahas hal-hal dewasa',
    desc: 'Contoh isu yang diangkat Fitur Berita agar orang tua mengenali pola percakapan berisiko sejak awal.',
  },
  {
    tag: 'Judi Online',
    title: 'Link judol menyusup lewat kolom komentar dan pesan pribadi',
    desc: 'Bagaimana tautan berisiko menyebar, dan langkah sederhana untuk menghindarinya.',
  },
  {
    tag: 'Literasi Digital',
    title: 'Kata yang tampak sepele hari ini bisa berdampak besar kemudian',
    desc: 'Mengapa jejak ketikan penting dijaga sejak dari keyboard.',
  },
]

export const NEWS_NOTE =
  'Judul di atas hanyalah contoh. Fitur Berita bersifat edukatif untuk orang tua/wali, bukan nasihat hukum, psikologis, maupun pengasuhan, dan bukan untuk dikonsumsi anak tanpa pendampingan.'

// --- FAQ ---
export const FAQ = [
  {
    q: 'Apakah isi ketikan saya dikirim ke server?',
    a: 'Tidak. Safe Keyboard berjalan sebagai Input Method Editor (IME) dan seluruh pencocokan kata terhadap Kamus Deteksi maupun Kata Kustom dilakukan sepenuhnya di perangkat Anda. Isi ketikan, kata sandi, dan Kata Kustom tidak pernah diunggah ke server kami.',
  },
  {
    q: 'Apa yang terjadi jika langganan saya berakhir?',
    a: 'Akun otomatis kembali ke tier Starter (Gratis). Kata Kustom yang melebihi kuota Starter dinonaktifkan sementara (bukan dihapus) hingga Anda berlangganan kembali. Kuota dari Paket Tambahan Kuota Kata bersifat permanen dan tetap menempel di akun.',
  },
  {
    q: 'Apakah pembayaran diperpanjang otomatis?',
    a: 'Tidak. Setiap tier berbayar adalah sekali bayar untuk durasi yang dipilih (3 bulan, 6 bulan, atau 1 tahun) dan tidak diperpanjang otomatis, kecuali dinyatakan lain pada halaman pembelian.',
  },
  {
    q: 'Bagaimana kebijakan pengembalian dana (refund)?',
    a: 'Seluruh transaksi diproses melalui Google Play Billing dan kebijakan refund mengikuti ketentuan Google Play Store. Safe Keyboard tidak memproses refund secara langsung di luar mekanisme Google Play. Jika ingin mengajukan refund, silakan hubungi Safe Dev Teams melalui menu "Bantuan & Masukan" di aplikasi Safe Keyboard. Proses refund akan dilakukan dalam 1–3 hari kerja.',
  },
  {
    q: 'Apakah Safe Keyboard bisa mendeteksi gambar atau video?',
    a: 'Tidak. Safe Keyboard hanya bekerja pada teks yang diketik. Aplikasi mencocokkan kata yang Anda ketik dengan Kamus Deteksi dan Kata Kustom, lalu memblokirnya dan terhapus sebelum terkirim. Gambar, stiker, video, atau tautan yang isinya tidak berupa teks tidak dipindai.',
  },
  {
    q: 'Apakah Safe Keyboard bisa menggantikan pengawasan orang tua?',
    a: 'Tidak. Aplikasi membantu mengurangi paparan kata berbahaya, tetapi bukan pengganti pengawasan orang tua/wali. Deteksi bergantung pada cakupan kamus dan tidak menjamin seluruh variasi ejaan atau bahasa akan tertangkap.',
  },
  {
    q: 'Bagaimana cara menghapus akun saya?',
    a: 'Buka menu Profil di aplikasi lalu pilih "Hapus Akun", atau kirim email ke ' +
      'safedotdev@gmail.com bila tidak lagi memiliki akses ke aplikasi. Data akun di server dihapus permanen tanpa periode tenggang.',
  },
]
