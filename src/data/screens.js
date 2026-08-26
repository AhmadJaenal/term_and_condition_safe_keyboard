// ============================================================
//  Screenshot aplikasi untuk section "Jelajahi Aplikasi".
//
//  File di public/images/screen-*.webp sudah dinormalisasi:
//  ukuran kanvas 600x1200 (rasio sama) + latar transparan, sehingga
//  ukuran HP tampil konsisten untuk ketiganya.
//  Cara mengganti: lihat public/images/README.md
// ============================================================
export const APP_SCREENS = [
  {
    id: 'pencarian',
    icon: 'ScanSearch',
    tab: 'Deteksi Ketik',
    title: 'Kata berisiko dihapus sebelum terkirim',
    caption:
      'Saat mengetik di pencarian, chat, atau kolom komentar, kata tidak baik langsung dikenali dan dihapus dari teks.',
    src: '/images/screen-pencarian.webp',
    points: [
      'Bekerja real-time saat mengetik',
      'Banner "Kata-kata tidak baik, kami hapus."',
      'Berlaku lintas aplikasi',
    ],
  },
  {
    id: 'kata-diblokir',
    icon: 'Type',
    tab: 'Kata Kustom',
    title: 'Tambah kata blokir versi Anda',
    caption:
      'Ketik kata yang ingin diblokir lalu tambahkan ke daftar. Semua tersimpan lokal di perangkat, tidak diunggah ke server.',
    src: '/images/screen-kata-diblokir.webp',
    points: [
      'Kuota mengikuti tier + paket tambahan',
      'Peringatan agar tidak memasukkan data sensitif',
      'Lihat, ubah, dan hapus daftar kapan saja',
    ],
  },
  {
    id: 'pengaturan',
    icon: 'SlidersHorizontal',
    tab: 'Pengaturan',
    title: 'Semua kontrol dalam satu layar',
    caption:
      'Kelola kata terlarang, kamus bahasa, level filter, tema, dan Mode Orang Tua dari satu halaman pengaturan yang rapi.',
    src: '/images/screen-pengaturan.webp',
    points: [
      'Kata Terlarang & Kamus Bahasa terkunci PIN',
      'Tutorial aktivasi keyboard bawaan',
      'Getaran tombol & tema aplikasi',
    ],
  },
]
