# Safe Keyboard — Web

Landing page + dokumen legal Safe Keyboard, di-deploy ke Firebase Hosting
(project `safekeyboard-7bb17`).

- **Landing page** dibangun dengan **Vite + React + Tailwind** (SPA), memakai
  konsep komponen supaya tidak ada duplikasi markup.
- **Dokumen legal** (Kebijakan Privasi, Syarat & Ketentuan, Hapus Akun) tetap
  berupa **HTML statis** di `public/`, sehingga URL-nya **tidak berubah** dan
  tetap sesuai yang terdaftar di Google Play Console.

```
safe-keyboard-legal/
├── index.html                  ← entry Vite (shell React)
├── package.json / vite.config.js / tailwind.config.js
├── firebase.json               ← hosting: { public: "dist" }
├── src/
│   ├── main.jsx / App.jsx      ← routing: "/" dan "/kontak"
│   ├── config.js               ← URL Play Store, email, versi (EDIT DI SINI)
│   ├── data/                   ← teks & harga (satu sumber, dipakai ulang)
│   ├── components/             ← Navbar, Footer, Card, PriceCard, dll.
│   ├── sections/               ← section landing page (Hero, Pricing, ...)
│   └── pages/                  ← Home, Contact, NotFound
├── public/                     ← disalin apa adanya ke dist/ oleh Vite
│   ├── kebijakan-privasi.html  ← URL didaftarkan di Play Console
│   ├── syarat-ketentuan.html
│   ├── hapus-akun.html
│   ├── css/legal.css           ← stylesheet dokumen legal
│   ├── favicon.svg / og-image.svg / robots.txt / sitemap.xml
├── source/
│   └── syarat-ketentuan-safe-keyboard.md   ← sumber teks S&K yang mudah direview
└── dist/                       ← hasil build (di-.gitignore)
```

## Pengembangan

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # menghasilkan dist/
npm run preview    # cek hasil build
```

## Deploy

CI (`.github/workflows/`) menjalankan `npm ci && npm run build` lalu deploy
otomatis saat push ke `master`. Manual:

```bash
npm run build
firebase deploy --only hosting
```

## Yang perlu diedit setelah rilis

| Hal | Lokasi |
|---|---|
| URL Play Store | `src/config.js` → `PLAY_STORE_URL` |
| Video demo | `src/sections/VideoSection.jsx` → `<VideoEmbed youtubeId="..." />` |
| Email kontak / versi | `src/config.js` |
| Teks fitur / FAQ | `src/data/content.js` |
| Harga & paket | `src/data/pricing.js` |

Contact form memakai `mailto:` — membuka aplikasi email pengguna dengan pesan
terisi ke alamat pada `CONTACT_EMAIL`. Tidak ada backend.

## Kalau isi kebijakan berubah (harga, fitur, dsb.)

Update berurutan:

1. `source/syarat-ketentuan-safe-keyboard.md` — edit di sini dulu.
2. `public/kebijakan-privasi.html` & `public/syarat-ketentuan.html` — salin bagian relevan.
3. `src/data/pricing.js` — kalau harga di landing page ikut berubah.
4. Naikkan nomor versi di header ketiga file legal + `LEGAL_VERSION` di `src/config.js`.
5. Deploy ulang.

## Kontak resmi di seluruh dokumen
- **Penanggung Jawab / Pengendali Data:** Ahmad Jaenal
- **Email kontak publik:** safedotdev@gmail.com
