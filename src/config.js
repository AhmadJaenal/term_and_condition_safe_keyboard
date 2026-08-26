// ============================================================
// Konfigurasi situs — ubah nilai di sini, dipakai di seluruh web
// ============================================================

// TODO: ganti dengan URL halaman Play Store aplikasi Anda setelah rilis.
// Selama masih '#', tombol "Play Store" tampil sebagai placeholder.
export const PLAY_STORE_URL = '#'

export const CONTACT_EMAIL = 'safedotdev@gmail.com'

export const APP_VERSION = '1.0.0'
export const LEGAL_VERSION = '1.6.0'

export const COMPANY = {
  team: 'SafeDev Team',
  owner: 'Ahmad Jaenal Aripin',
  role: 'Developer & Founder',
  year: 2026,
}

// Dokumen legal disajikan sebagai file statis dari folder public/,
// sehingga URL-nya tetap sama dengan yang terdaftar di Google Play Console.
export const LEGAL_LINKS = {
  privacy: '/kebijakan-privasi.html',
  terms: '/syarat-ketentuan.html',
  deleteAccount: '/hapus-akun.html',
}

export const isPlaceholderStore = () => !PLAY_STORE_URL || PLAY_STORE_URL === '#'
