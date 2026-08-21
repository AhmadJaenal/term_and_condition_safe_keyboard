# Safe Keyboard — Dokumen Legal

Struktur project sederhana untuk mengelola Kebijakan Privasi dan Syarat & Ketentuan
Safe Keyboard di tiga tempat sekaligus: aplikasi Android, halaman publik (untuk
Play Console), dan sumber teks yang mudah dibaca/direview.

```
safe-keyboard-legal/
├── README.md                          ← file ini
├── public/                            ← DEPLOY folder ini ke hosting statis
│   ├── index.html                     ← halaman depan, link ke 2 dokumen
│   ├── kebijakan-privasi.html         ← wajib: URL ini didaftarkan di Play Console
│   └── syarat-ketentuan.html          ← opsional: link tambahan di listing app
├── source/
│   └── syarat-ketentuan-safe-keyboard.md   ← sumber teks lengkap, mudah direview
└── app/
    └── TermsAndConditionScreen.kt     ← salin ke project Android:
                                          modules/legal/TermsAndConditionScreen.kt
```

## Cara pakai

### 1. Publikasikan folder `public/`
Upload isi folder `public/` ke hosting statis gratis, contoh:
- **GitHub Pages**: push folder ini ke repo, aktifkan Pages, arahkan ke folder `public/`.
- **Firebase Hosting**: `firebase init hosting` → set public dir ke `public/` → `firebase deploy`.

Setelah live, Anda akan punya URL seperti:
```
https://<domain-anda>/kebijakan-privasi.html
https://<domain-anda>/syarat-ketentuan.html
```

### 2. Daftarkan ke Google Play Console
- **App content → Privacy policy** → isi dengan URL `kebijakan-privasi.html`.
- **Data Safety form** → isi berdasarkan Bagian 3–5 di `kebijakan-privasi.html`
  (data yang dikumpulkan, tujuan, retensi).

### 3. Salin `app/TermsAndConditionScreen.kt` ke project Android
Timpa file yang sama di `modules/legal/TermsAndConditionScreen.kt`.

## Kalau isi kebijakan berubah (harga, fitur, dsb.)

Update di **ketiga tempat**, dengan urutan ini:

1. `source/syarat-ketentuan-safe-keyboard.md` — edit di sini dulu, paling mudah dibaca.
2. `app/TermsAndConditionScreen.kt` — salin isi yang sudah diedit ke `tcSections`.
3. `public/kebijakan-privasi.html` dan `public/syarat-ketentuan.html` — salin bagian
   yang relevan.
4. Naikkan `TC_VERSION` di file `.kt` (mis. `"2.2.1"` → `"2.3.0"`) dan versi di
   header ketiga file lainnya, supaya pengguna lama otomatis diminta re-consent.
5. Deploy ulang folder `public/` ke hosting.

## Kontak resmi di seluruh dokumen
- **Nama Penanggung Jawab / Pengendali Data:** Ahmad Jaenal Aripin
- **Email kontak publik:** safedotdev@gmail.com (bukan email pribadi)

## Versi saat ini
**1.1.0** — Agustus 2026
