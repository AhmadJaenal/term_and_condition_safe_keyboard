# Screenshot aplikasi untuk landing page

Section **"Jelajahi Aplikasi"** (`src/sections/AppShowcase.jsx`) dan perangkat
di hero (`src/components/HeroDevice.jsx`) memakai file di sini.

| File | Layar |
|---|---|
| `screen-pencarian.webp` | Pencarian + keyboard (banner warning) — dipakai juga di hero |
| `screen-kata-diblokir.webp` | Layar "Kata Diblokir" / Kata Kustom |
| `screen-pengaturan.webp` | Layar "Pengaturan Keyboard" |
| `screen-mode-orang-tua.webp` | Layar PIN "Mode Orang Tua" |

## Sudah dinormalisasi

Ketiga file berukuran **600 × 1200** dengan **latar transparan** dan HP di
tengah pada tinggi yang sama, supaya ukuran HP tampil **konsisten** di semua
tab. Ditampilkan apa adanya (`object-contain`), tanpa frame CSS tambahan.

## Mengganti / menambah layar

1. Simpan render layar HP baru (PNG, boleh ada latar gelap/terang — akan
   dipangkas otomatis).
2. Jalankan ulang skrip normalisasi (butuh Playwright):
   `node scripts/normalize-screens.mjs`
3. Untuk mengubah urutan / teks / jumlah tab, edit `src/data/screens.js`.
