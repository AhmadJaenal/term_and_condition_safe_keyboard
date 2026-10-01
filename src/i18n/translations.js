// ============================================================
//  Semua teks yang tampil di UI — dua bahasa (id / en).
//  Struktur kedua bahasa harus sama persis.
// ============================================================

const id = {
  langToggle: { label: 'Bahasa', id: 'ID', en: 'EN', switchTo: 'Ganti ke English' },

  nav: {
    links: [
      { label: 'Fitur', to: '/#fitur' },
      { label: 'Aplikasi', to: '/#aplikasi' },
      { label: 'Cara Kerja', to: '/#cara-kerja' },
      { label: 'Video', to: '/#video' },
      { label: 'Harga', to: '/#harga' },
      { label: 'FAQ', to: '/#faq' },
      { label: 'Kontak', to: '/kontak' },
    ],
    download: 'Unduh Aplikasi',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
  },

  a11y: {
    skipToContent: 'Lewati ke konten',
    backToTop: 'Kembali ke atas',
    prevScreen: 'Layar sebelumnya',
    nextScreen: 'Layar berikutnya',
    appScreensLabel: 'Layar aplikasi Safe Keyboard',
    showScreen: 'Tampilkan',
    durationGroup: 'Pilih durasi langganan',
    homeAria: 'Safe Keyboard — beranda',
  },

  docTitles: {
    home: 'Safe Keyboard',
    contact: 'Hubungi Kami — Safe Keyboard',
    notFound: 'Halaman tidak ditemukan — Safe Keyboard',
  },

  logo: { tagline: 'Ketik Aman, Tanpa Kata Kasar' },

  hero: {
    badge: 'Keyboard Pintar Anti Kata Kasar',
    titleLead: 'Dunia digital',
    titleAccent: 'tidak selalu aman',
    desc: 'Kata kasar, istilah pornografi, dan link judi online bisa muncul dari chat, pencarian, hingga kolom komentar. Safe Keyboard mendeteksi dan menghapusnya dari teks yang diketik sebelum di proses pada pesan, pencarian atau lainya.',
    ctaPrimary: 'Temukan di Play Store',
    ctaSecondary: 'Lihat Cara Kerja',
    trustPills: [
      'Deteksi kata dilakukan di perangkat (On-Device)',
      'Ketikan tidak pernah dikirim ke server',
      'Selaras dengan UU PDP No. 27/2022',
    ],
    deviceAlt: 'Safe Keyboard menghapus kata tidak baik saat mengetik di kolom pencarian',
  },

  valueTagline: ['Aman', 'Privat', 'Terjaga'],

  valueProps: [
    { icon: 'ShieldCheck', title: 'Lindungi keluarga', desc: 'Kenali dan cegah kata berbahaya sebelum terkirim.' },
    { icon: 'Lock', title: 'Privat', desc: 'Data diproses di perangkat, bukan di server.' },
    { icon: 'SlidersHorizontal', title: 'Fleksibel', desc: 'Atur level filter dan kata blokir sesuai kebutuhan.' },
    { icon: 'Users', title: 'Kontrol orang tua', desc: 'Pengaturan penting dikunci dengan PIN.' },
  ],

  risks: {
    eyebrow: 'Kenapa Ini Penting',
    titleLead: 'Risikonya dimulai dari',
    titleAccent: 'kata yang diketik',
    desc: 'Paparan digital tidak selalu datang dari layar utama. Sering kali, risikonya dimulai dari kata yang diketik, dicari, atau dikirim setiap hari.',
    items: [
      { icon: 'MessageSquareWarning', tone: 'danger', title: 'Kata Kasar', desc: 'Mengandung ujaran kasar & perundungan yang muncul dari chat sehari-hari.' },
      { icon: 'EyeOff', tone: 'amber', title: 'Kata Seksual', desc: 'Istilah vulgar dan kata bermuatan dewasa yang tidak selalu tampak kasar.' },
      { icon: 'Globe', tone: 'brand', title: 'Link Judi Online', desc: 'Link atau kata yang mengarah ke situs judi online otomatis terdeteksi dan diblokir saat Anda mengetik.' },
      { icon: 'Fingerprint', tone: 'ink', title: 'Jejak Digital', desc: 'Kata yang terlanjur terkirim meninggalkan rekam jejak yang sulit dihapus.' },
    ],
  },

  features: {
    eyebrow: 'Fitur Utama',
    titleLead: 'Satu aplikasi,',
    titleAccent: 'empat lapis perlindungan',
    desc: 'Safe Keyboard membantu keluarga mengelola ketikan yang lebih aman lewat penyaringan otomatis, kata blokir kustom, level filter, dan pengaturan yang dilindungi PIN orang tua.',
    items: [
      { icon: 'ScanSearch', tone: 'brand', title: 'Deteksi Otomatis', desc: 'Menyaring kata kasar, istilah pornografi, dan link judi online pada teks yang diketik, secara real-time sebelum pesan terkirim.' },
      { icon: 'Type', tone: 'violet', title: 'Kata Kustom', desc: 'Tambahkan sendiri kata yang ingin diblokir otomatis oleh keyboard, sesuai kebiasaan keluarga Anda.' },
      { icon: 'SlidersHorizontal', tone: 'amber', title: 'Level Filter', desc: 'Atur tingkat sensitivitas penyaringan dari Longgar hingga Ekstrem, kapan saja lewat pengaturan.' },
      { icon: 'Lock', tone: 'orange', title: 'Mode Orang Tua', desc: 'Kunci pengaturan penting dengan PIN sehingga perubahan tidak bisa dilakukan sembarangan.' },
      { icon: 'ShieldCheck', tone: 'brand', title: 'Privasi Lokal', desc: 'Semua proses deteksi kata dilakukan di perangkat Anda (On-Device), bukan di server kami.' },
      { icon: 'Newspaper', tone: 'blue', title: 'Fitur Berita', desc: 'Kabar seputar keamanan digital anak dan gadget, supaya orang tua waspada lebih dini.' },
    ],
  },

  showcase: {
    eyebrow: 'Jelajahi Aplikasi',
    titleLead: 'Lihat langsung',
    titleAccent: 'tampilan aplikasinya',
    desc: 'Geser layar atau pilih tab untuk menelusuri halaman utama Safe Keyboard.',
    screenshotComing: 'Screenshot menyusul',
    screens: [
      {
        id: 'pencarian',
        icon: 'ScanSearch',
        tab: 'Deteksi Ketik',
        title: 'Kata berisiko dihapus sebelum terkirim',
        caption: 'Saat mengetik di pencarian, chat, atau kolom komentar, kata tidak baik langsung dikenali dan dihapus dari teks.',
        src: '/images/screen-pencarian.webp',
        points: ['Bekerja real-time saat mengetik', 'Banner "Kata-kata tidak baik, kami hapus."', 'Berlaku lintas aplikasi'],
      },
      {
        id: 'kata-diblokir',
        icon: 'Type',
        tab: 'Kata Kustom',
        title: 'Tambah kata blokir versi Anda',
        caption: 'Ketik kata yang ingin diblokir lalu tambahkan ke daftar. Semua tersimpan lokal di perangkat, tidak diunggah ke server.',
        src: '/images/screen-kata-diblokir.webp',
        points: ['Kuota mengikuti tier + paket tambahan', 'Peringatan agar tidak memasukkan data sensitif', 'Lihat, ubah, dan hapus daftar kapan saja'],
      },
      {
        id: 'pengaturan',
        icon: 'SlidersHorizontal',
        tab: 'Pengaturan',
        title: 'Semua kontrol dalam satu layar',
        caption: 'Kelola kata terlarang, kamus bahasa, level filter, tema, dan Mode Orang Tua dari satu halaman pengaturan yang rapi.',
        src: '/images/screen-pengaturan.webp',
        points: ['Kata Terlarang & Kamus Bahasa terkunci PIN', 'Tutorial aktivasi keyboard bawaan', 'Getaran tombol & tema aplikasi'],
      },
      {
        id: 'mode-orang-tua',
        icon: 'Lock',
        tab: 'Mode Orang Tua',
        title: 'Pengaturan penting dikunci PIN',
        caption: 'Level filter, kata terlarang, kamus bahasa, dan setelan keamanan hanya bisa diakses dengan PIN yang dibuat orang tua. PIN disimpan terenkripsi di perangkat.',
        src: '/images/screen-mode-orang-tua.webp',
        points: ['PIN 6 digit dibuat sendiri oleh orang tua', 'Pemulihan lewat verifikasi ulang akun', 'Perlindungan tetap aktif meski terkunci'],
      },
    ],
  },

  how: {
    eyebrow: 'Cara Kerja',
    titleLead: 'Begini',
    titleAccent: 'cara kerjanya',
    desc: 'Safe Keyboard bekerja otomatis sejak kata mulai diketik hingga sebelum kata berisiko terkirim.',
    steps: [
      { no: '01', title: 'Ketik', desc: 'Pengguna mengetik seperti biasa di aplikasi apa pun.' },
      { no: '02', title: 'Deteksi', desc: 'Sistem mengenali kata yang berisiko dari Kamus Deteksi dan Kata Kustom.' },
      { no: '03', title: 'Blokir & Hapus', desc: 'Kata berbahaya otomatis diblokir dan terhapus sebelum sempat terkirim.' },
      { no: '04', title: 'Aman Terkirim', desc: 'Hanya kata yang aman yang diteruskan ke lawan bicara.' },
    ],
    demo: {
      title: 'Coba sendiri',
      subtitle: 'Ketik kalimat berisi kata kasar, lalu lihat Safe Keyboard menghapusnya.',
      inputAria: 'Ketik kalimat percobaan',
      inputPlaceholder: 'Ketik sesuatu…',
      defaultText: 'kamu goblok banget',
      toast: 'Kata-kata tidak baik, kami hapus.',
      typedLabel: 'Yang diketik',
      forwardedLabel: 'Yang diteruskan',
      emptyForwarded: '(kosong)',
      blockedSuffix: 'diblokir',
      footnote: 'Simulasi ringkas dengan sedikit contoh kata. Aplikasi asli mencocokkan ribuan kata pada Kamus Deteksi ditambah Kata Kustom Anda, sepenuhnya di perangkat.',
    },
  },

  controls: {
    eyebrow: 'Kontrol Perlindungan',
    titleLead: 'Atur sendiri',
    titleAccent: 'tingkat proteksinya',
    desc: 'Sesuaikan sensitivitas penyaringan, lalu kunci pengaturan penting dengan PIN agar tidak diubah sembarangan.',
    filterTitle: 'Level Filter',
    filterDesc: 'Lima tingkat sensitivitas, bekerja otomatis saat mengetik. Semakin tinggi level, semakin ketat penyaringannya.',
    filterLevels: [
      { dot: '#E23636', name: 'Ekstrem', desc: 'Blokir semua kata negatif termasuk yang ringan.' },
      { dot: '#F97316', name: 'Ketat', desc: 'Blokir kata kasar ringan hingga berat.' },
      { dot: '#EAB308', name: 'Sedang', desc: 'Blokir kata kasar umum.', badge: 'Direkomendasikan' },
      { dot: '#22A24C', name: 'Normal', desc: 'Blokir kata kasar berat saja.' },
      { dot: '#9CA3AF', name: 'Longgar', desc: 'Hanya blokir kata kasar sangat berat.' },
    ],
    parentTitle: 'Mode Orang Tua',
    parentDesc: 'Fitur penting hanya bisa diakses dengan PIN yang telah diatur orang tua. PIN disimpan terenkripsi di perangkat, tidak pernah dikirim ke server.',
    lockedLabel: 'Dikunci dengan PIN',
    parentLocked: ['Level Filter', 'Kata Terlarang (Kata Kustom)', 'Kamus Bahasa Daerah', 'Setel Ulang Keyboard', 'Riwayat Berlangganan'],
  },

  news: {
    eyebrow: 'Fitur Berita',
    titleLead: 'Kenali risiko digital',
    titleAccent: 'sejak dini',
    desc: 'Fitur Berita menampilkan kabar seputar keamanan penggunaan gadget (seperti anak di bawah umur yang membuat grup untuk membahas hal-hal dewasa) agar orang tua bisa waspada lebih awal.',
    samples: [
      { tag: 'Keamanan Anak', title: 'Anak di bawah umur membuat grup untuk membahas hal-hal dewasa', desc: 'Contoh isu yang diangkat Fitur Berita agar orang tua mengenali pola percakapan berisiko sejak awal.' },
      { tag: 'Judi Online', title: 'Link judol menyusup lewat kolom komentar dan pesan pribadi', desc: 'Bagaimana tautan berisiko menyebar, dan langkah sederhana untuk menghindarinya.' },
      { tag: 'Literasi Digital', title: 'Kata yang tampak sepele hari ini bisa berdampak besar kemudian', desc: 'Mengapa jejak ketikan penting dijaga sejak dari keyboard.' },
    ],
    note: 'Judul di atas hanyalah contoh. Fitur Berita bersifat edukatif untuk orang tua/wali, bukan nasihat hukum, psikologis, maupun pengasuhan, dan bukan untuk dikonsumsi anak tanpa pendampingan.',
  },

  video: {
    eyebrow: 'Lihat Langsung',
    titleLead: 'Safe Keyboard',
    titleAccent: 'bekerja',
    desc: 'Tonton bagaimana kata berisiko dikenali dan dihapus otomatis, sejak diketik hingga sebelum terkirim.',
    comingSoon: 'Video demo akan segera hadir',
    embedTitle: 'Video Safe Keyboard',
  },

  pricing: {
    eyebrow: 'Harga',
    titleLead: 'Pilih paket',
    titleAccent: 'sesuai kebutuhan',
    desc: 'Semakin tinggi paket, semakin banyak perlindungan dan kuota kata yang bisa Anda nikmati. Mulai dari Starter gratis, tingkatkan kapan saja tanpa kehilangan data.',
    durations: [
      { id: '3b', label: '3 Bulan' },
      { id: '6b', label: '6 Bulan' },
      { id: '1t', label: '1 Tahun' },
    ],
    perDuration: 'untuk {duration} · sekali bayar',
    priceNote: 'Seluruh harga dalam Rupiah, sekali bayar untuk durasi yang dipilih, tanpa perpanjangan otomatis. Transaksi diproses melalui Google Play Billing.',
    tiers: [
      {
        id: 'starter', name: 'Starter', icon: 'ShieldCheck', free: true, priceLabel: 'GRATIS',
        tagline: 'Cocok untuk mulai memakai proteksi dasar.',
        features: ['Tambah hingga 20 Kata Kustom', 'Blokir kata-kata umum (Bahasa Indonesia)'],
        cta: 'Mulai Gratis',
      },
      {
        id: 'dasar', name: 'Proteksi Dasar', icon: 'Shield',
        prices: { '3b': 'Rp15.000', '6b': 'Rp25.000', '1t': 'Rp39.000' },
        tagline: 'Perlindungan kata dasar yang handal.',
        features: ['Blokir otomatis kata judi & pornografi', 'Tambah hingga 500 Kata Kustom', 'Kamus Deteksi dasar yang diperbarui berkala'],
        cta: 'Pilih Paket',
      },
      {
        id: 'ekstra', name: 'Proteksi Ekstra', icon: 'Star', featured: true, badge: 'Rekomendasi',
        prices: { '3b': 'Rp22.000', '6b': 'Rp39.000', '1t': 'Rp59.000' },
        tagline: 'Perlindungan Dasar plus bahasa daerah.',
        features: ['Semua perlindungan paket Proteksi Dasar', 'Bebas pilih 2 kamus Bahasa Daerah', 'Kuota Kata Kustom hingga 1.500 kata'],
        cta: 'Pilih Paket',
      },
      {
        id: 'total', name: 'Proteksi Total', icon: 'Crown',
        prices: { '3b': 'Rp35.000', '6b': 'Rp59.000', '1t': 'Rp89.000' },
        tagline: 'Perlindungan maksimal, akses penuh.',
        features: ['Akses penuh ke semua fitur & bahasa daerah', 'Bebas pilih 2 kamus Bahasa Daerah', 'Kuota Kata Kustom hingga 3.000 kata', 'Prioritas update kosakata bahasa terbaru'],
        cta: 'Pilih Paket',
      },
    ],
    langPacksTitle: 'Paket Tambahan Bahasa Daerah',
    langPacksDesc: 'Beli sekali, gunakan sesuai kebutuhan. Cocok untuk perlindungan bahasa daerah yang lebih spesifik.',
    langPacks: [
      { id: 'lang-single', name: 'Bahasa Daerah Only', price: 'Rp15.000', note: 'Sekali beli', features: ['1 paket kamus bahasa daerah', 'Tanpa biaya berulang'] },
      { id: 'lang-bundle', name: 'Bundle 8 Bahasa Daerah', price: 'Rp59.000', note: 'Sekali beli', badge: 'Lebih Hemat', features: ['8 paket kamus bahasa daerah', 'Cocok untuk proteksi lebih lengkap'] },
    ],
    choosePackage: 'Pilih Paket',
    quotaTitle: 'Paket Tambahan Kuota Kata Terlarang',
    quotaDesc: 'Pembelian sekali bayar untuk menambah kuota Kata Kustom di luar batas tier utama.',
    quotaHead: { package: 'Paket', quota: 'Kuota', price: 'Harga' },
    quotaPacks: [
      { name: 'Starter', quota: '+50 kata', price: 'Rp9.000' },
      { name: 'Medium', quota: '+150 kata', price: 'Rp19.000' },
      { name: 'Large', quota: '+500 kata', price: 'Rp49.000' },
      { name: 'Max', quota: '+1.000 kata', price: 'Rp79.000' },
    ],
    quotaNote: 'Paket ini bersifat pembelian sekali bayar (bukan langganan) yang menambah kuota Kata Terlarang (Kata Kustom) di luar batas kuota tier utama yang sedang aktif. Kuota tambahan bersifat permanen selama akun masih aktif dan tidak hilang meski tier utama diturunkan atau langganan berakhir. Paket dapat dibeli lebih dari satu kali, dan kuota setiap pembelian akan terakumulasi (menjumlah), bukan saling menggantikan.',
  },

  faq: {
    eyebrow: 'Pertanyaan Umum',
    titleLead: 'Yang sering',
    titleAccent: 'ditanyakan',
    items: [
      { q: 'Apakah isi ketikan saya dikirim ke server?', a: 'Tidak. Safe Keyboard berjalan sebagai Input Method Editor (IME) dan seluruh pencocokan kata terhadap Kamus Deteksi maupun Kata Kustom dilakukan sepenuhnya di perangkat Anda. Isi ketikan, kata sandi, dan Kata Kustom tidak pernah diunggah ke server kami.' },
      { q: 'Apa yang terjadi jika langganan saya berakhir?', a: 'Akun otomatis kembali ke tier Starter (Gratis). Kata Kustom yang melebihi kuota Starter dinonaktifkan sementara (bukan dihapus) hingga Anda berlangganan kembali. Kuota dari Paket Tambahan Kuota Kata bersifat permanen dan tetap menempel di akun.' },
      { q: 'Apakah pembayaran diperpanjang otomatis?', a: 'Tidak. Setiap tier berbayar adalah sekali bayar untuk durasi yang dipilih (3 bulan, 6 bulan, atau 1 tahun) dan tidak diperpanjang otomatis, kecuali dinyatakan lain pada halaman pembelian.' },
      { q: 'Bagaimana kebijakan pengembalian dana (refund)?', a: 'Seluruh transaksi diproses melalui Google Play Billing dan kebijakan refund mengikuti ketentuan Google Play Store. Safe Keyboard tidak memproses refund secara langsung di luar mekanisme Google Play. Jika ingin mengajukan refund, silakan hubungi Safe Dev Teams melalui menu "Bantuan & Masukan" di aplikasi Safe Keyboard. Proses refund akan dilakukan dalam 1–3 hari kerja.' },
      { q: 'Apakah Safe Keyboard bisa mendeteksi gambar atau video?', a: 'Tidak. Safe Keyboard hanya bekerja pada teks yang diketik. Aplikasi mencocokkan kata yang Anda ketik dengan Kamus Deteksi dan Kata Kustom, lalu memblokirnya dan terhapus sebelum terkirim. Gambar, stiker, video, atau tautan yang isinya tidak berupa teks tidak dipindai.' },
      { q: 'Apakah Safe Keyboard bisa menggantikan pengawasan orang tua?', a: 'Tidak. Aplikasi membantu mengurangi paparan kata berbahaya, tetapi bukan pengganti pengawasan orang tua/wali. Deteksi bergantung pada cakupan kamus dan tidak menjamin seluruh variasi ejaan atau bahasa akan tertangkap.' },
      { q: 'Bagaimana cara menghapus akun saya?', a: 'Buka menu Profil di aplikasi lalu pilih "Hapus Akun", atau kirim email ke safedotdev@gmail.com bila tidak lagi memiliki akses ke aplikasi. Data akun di server dihapus permanen tanpa periode tenggang.' },
    ],
  },

  cta: {
    title: 'Mulai lindungi ketikan keluarga',
    desc: 'Unduh Safe Keyboard di Play Store, pilih perlindungan yang sesuai, dan tetap tenang karena semua proses berjalan di perangkat Anda.',
    primary: 'Temukan di Play Store',
    secondary: 'Hubungi Kami',
  },

  footer: {
    desc: 'Keyboard Android pintar yang mendeteksi dan menghapus kata kasar, istilah pornografi, dan link judi online dari teks yang diketik sepenuhnya di perangkat Anda (On-Device).',
    columns: [
      {
        title: 'Produk',
        links: [
          { label: 'Fitur', to: '/#fitur' },
          { label: 'Cara Kerja', to: '/#cara-kerja' },
          { label: 'Video', to: '/#video' },
          { label: 'Harga', to: '/#harga' },
          { label: 'FAQ', to: '/#faq' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Kebijakan Privasi', legal: 'privacy' },
          { label: 'Syarat & Ketentuan', legal: 'terms' },
          { label: 'Permintaan Hapus Akun', legal: 'deleteAccount' },
        ],
      },
      {
        title: 'Dukungan',
        links: [
          { label: 'Hubungi Kami', to: '/kontak' },
          { label: '__CONTACT_EMAIL__', mailto: true },
        ],
      },
    ],
    rights: '© {year} {team} · Safe Keyboard v{version}',
    responsible: 'Penanggung jawab: {owner} · {email}',
  },

  contactPage: {
    docTitle: 'Hubungi Kami — Safe Keyboard',
    badge: 'Kontak',
    titleLead: 'Hubungi',
    titleAccent: 'kami',
    intro: 'Punya pertanyaan, keluhan, atau permintaan terkait data pribadi? Kirim pesan lewat form di bawah, atau langsung ke email kami.',
    sendHeading: 'Kirim pesan',
    sendSub: 'Semua kolom bertanda wajib diisi. Kami biasanya membalas dalam 1–3 hari kerja.',
    directEmailTitle: 'Email langsung',
    ownerLine: '{owner} ({role}).',
    relatedTitle: 'Tautan terkait',
    relatedLinks: {
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      deleteAccount: 'Permintaan Penghapusan Akun',
    },
    relatedNote: 'Untuk permintaan hak atas data pribadi (akses, perbaikan, penghapusan, penarikan persetujuan), sebutkan email yang terdaftar pada akun Safe Keyboard Anda.',
  },

  contactForm: {
    categories: [
      'Pertanyaan umum',
      'Bantuan langganan & pembayaran',
      'Laporan bug / masalah teknis',
      'Permintaan hak atas data pribadi',
      'Laporan perlindungan anak',
      'Kerja sama / lainnya',
    ],
    name: 'Nama',
    namePlaceholder: 'Nama lengkap Anda',
    email: 'Email',
    emailPlaceholder: 'nama@email.com',
    category: 'Kategori',
    message: 'Pesan',
    messagePlaceholder: 'Tuliskan pertanyaan atau keluhan Anda selengkap mungkin.',
    submit: 'Kirim Pesan',
    sending: 'Mengirim…',
    errRequired: 'Mohon lengkapi nama, email, dan pesan Anda.',
    errEmail: 'Format email tidak valid.',
    errNotConfigured: 'Formulir belum dikonfigurasi. Silakan kirim email langsung ke {email}.',
    errNetwork: 'Terjadi masalah jaringan. Silakan coba lagi atau kirim email langsung ke {email}.',
    errGeneric: 'Gagal mengirim pesan. Silakan coba lagi atau kirim email langsung.',
    successTitle: 'Pesan Anda terkirim',
    successBody: 'Terima kasih. Kami sudah menerima pesan Anda dan biasanya membalas dalam 1–3 hari kerja ke {email}.',
    writeAgain: 'Tulis pesan lagi',
    privacyNote: 'Pesan dikirim dengan aman melalui Web3Forms. Kami hanya menggunakan data Anda untuk membalas pertanyaan ini.',
    subjectPrefix: '[Safe Keyboard]',
    fromName: 'Safe Keyboard — Formulir Kontak',
  },

  notFound: {
    title: 'Halaman tidak ditemukan',
    desc: 'Tautan yang Anda buka mungkin sudah berubah atau tidak tersedia.',
    back: 'Kembali ke beranda',
  },
}

const en = {
  langToggle: { label: 'Language', id: 'ID', en: 'EN', switchTo: 'Switch to Indonesian' },

  nav: {
    links: [
      { label: 'Features', to: '/#fitur' },
      { label: 'App', to: '/#aplikasi' },
      { label: 'How It Works', to: '/#cara-kerja' },
      { label: 'Video', to: '/#video' },
      { label: 'Pricing', to: '/#harga' },
      { label: 'FAQ', to: '/#faq' },
      { label: 'Contact', to: '/kontak' },
    ],
    download: 'Download App',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  a11y: {
    skipToContent: 'Skip to content',
    backToTop: 'Back to top',
    prevScreen: 'Previous screen',
    nextScreen: 'Next screen',
    appScreensLabel: 'Safe Keyboard app screens',
    showScreen: 'Show',
    durationGroup: 'Choose subscription duration',
    homeAria: 'Safe Keyboard — home',
  },

  docTitles: {
    home: 'Safe Keyboard',
    contact: 'Contact Us — Safe Keyboard',
    notFound: 'Page not found — Safe Keyboard',
  },

  logo: { tagline: 'Type Safely, Without Profanity' },

  hero: {
    badge: 'Smart Keyboard Against Profanity',
    titleLead: 'The digital world',
    titleAccent: 'is not always safe',
    desc: 'Profanity, pornographic terms, and online gambling links can show up in chats, searches, and comment sections. Safe Keyboard detects and removes them from the text you type before it is processed in your message, search, or anywhere else.',
    ctaPrimary: 'Find it on Play Store',
    ctaSecondary: 'See How It Works',
    trustPills: [
      'Word detection runs on your device (On-Device)',
      'Your keystrokes are never sent to a server',
      'Aligned with Indonesia’s PDP Law No. 27/2022',
    ],
    deviceAlt: 'Safe Keyboard removing inappropriate words while typing in a search field',
  },

  valueTagline: ['Safe', 'Private', 'Protected'],

  valueProps: [
    { icon: 'ShieldCheck', title: 'Protect your family', desc: 'Spot and stop harmful words before they are sent.' },
    { icon: 'Lock', title: 'Private', desc: 'Data is processed on your device, not on a server.' },
    { icon: 'SlidersHorizontal', title: 'Flexible', desc: 'Set the filter level and blocked words to fit your needs.' },
    { icon: 'Users', title: 'Parental control', desc: 'Key settings are locked with a PIN.' },
  ],

  risks: {
    eyebrow: 'Why This Matters',
    titleLead: 'The risk starts with',
    titleAccent: 'the words you type',
    desc: 'Digital exposure does not always come from the main screen. Often, the risk begins with the words typed, searched, or sent every day.',
    items: [
      { icon: 'MessageSquareWarning', tone: 'danger', title: 'Profanity', desc: 'Harsh language and bullying that surface in everyday chats.' },
      { icon: 'EyeOff', tone: 'amber', title: 'Sexual Terms', desc: 'Vulgar and adult-themed words that do not always look offensive.' },
      { icon: 'Globe', tone: 'brand', title: 'Online Gambling Links', desc: 'Links or words pointing to online gambling sites are detected and blocked automatically as you type.' },
      { icon: 'Fingerprint', tone: 'ink', title: 'Digital Footprint', desc: 'Words that have already been sent leave a trail that is hard to erase.' },
    ],
  },

  features: {
    eyebrow: 'Core Features',
    titleLead: 'One app,',
    titleAccent: 'four layers of protection',
    desc: 'Safe Keyboard helps families keep typing safer through automatic filtering, custom blocked words, filter levels, and settings protected by a parental PIN.',
    items: [
      { icon: 'ScanSearch', tone: 'brand', title: 'Automatic Detection', desc: 'Filters profanity, pornographic terms, and online gambling links in typed text, in real time before the message is sent.' },
      { icon: 'Type', tone: 'violet', title: 'Custom Words', desc: 'Add your own words for the keyboard to block automatically, tailored to your family’s habits.' },
      { icon: 'SlidersHorizontal', tone: 'amber', title: 'Filter Levels', desc: 'Adjust filtering sensitivity from Loose to Extreme, anytime from settings.' },
      { icon: 'Lock', tone: 'orange', title: 'Parent Mode', desc: 'Lock important settings with a PIN so changes cannot be made carelessly.' },
      { icon: 'ShieldCheck', tone: 'brand', title: 'Local Privacy', desc: 'All word detection happens on your device (On-Device), not on our servers.' },
      { icon: 'Newspaper', tone: 'blue', title: 'News Feature', desc: 'Updates on children’s and gadget digital safety, so parents stay alert early.' },
    ],
  },

  showcase: {
    eyebrow: 'Explore the App',
    titleLead: 'See the app’s',
    titleAccent: 'interface for yourself',
    desc: 'Swipe the screen or pick a tab to browse Safe Keyboard’s main pages.',
    screenshotComing: 'Screenshot coming soon',
    screens: [
      {
        id: 'pencarian',
        icon: 'ScanSearch',
        tab: 'Type Detection',
        title: 'Risky words removed before they are sent',
        caption: 'While you type in search, chat, or comment fields, inappropriate words are recognized and removed from the text instantly.',
        src: '/images/screen-pencarian.webp',
        points: ['Works in real time as you type', 'Banner: “Inappropriate words removed.”', 'Works across apps'],
      },
      {
        id: 'kata-diblokir',
        icon: 'Type',
        tab: 'Custom Words',
        title: 'Add your own blocked words',
        caption: 'Type a word you want to block, then add it to the list. Everything is stored locally on your device and never uploaded to a server.',
        src: '/images/screen-kata-diblokir.webp',
        points: ['Quota follows your tier + add-on packs', 'Warning against entering sensitive data', 'View, edit, and delete the list anytime'],
      },
      {
        id: 'pengaturan',
        icon: 'SlidersHorizontal',
        tab: 'Settings',
        title: 'Every control on one screen',
        caption: 'Manage blocked words, language dictionaries, filter level, theme, and Parent Mode from one tidy settings page.',
        src: '/images/screen-pengaturan.webp',
        points: ['Blocked Words & Language Dictionaries locked by PIN', 'Built-in keyboard activation tutorial', 'Key vibration & app theme'],
      },
      {
        id: 'mode-orang-tua',
        icon: 'Lock',
        tab: 'Parent Mode',
        title: 'Important settings locked by PIN',
        caption: 'Filter level, blocked words, language dictionaries, and security settings can only be accessed with a PIN set by the parent. The PIN is stored encrypted on the device.',
        src: '/images/screen-mode-orang-tua.webp',
        points: ['6-digit PIN set by the parent', 'Recovery via account re-verification', 'Protection stays active even when locked'],
      },
    ],
  },

  how: {
    eyebrow: 'How It Works',
    titleLead: 'Here is',
    titleAccent: 'how it works',
    desc: 'Safe Keyboard works automatically from the moment a word is typed until just before a risky word is sent.',
    steps: [
      { no: '01', title: 'Type', desc: 'The user types as usual in any app.' },
      { no: '02', title: 'Detect', desc: 'The system recognizes risky words from the Detection Dictionary and Custom Words.' },
      { no: '03', title: 'Block & Remove', desc: 'Harmful words are blocked and removed automatically before they can be sent.' },
      { no: '04', title: 'Sent Safely', desc: 'Only safe words are passed on to the other person.' },
    ],
    demo: {
      title: 'Try it yourself',
      subtitle: 'Type a sentence with profanity, then watch Safe Keyboard remove it.',
      inputAria: 'Type a test sentence',
      inputPlaceholder: 'Type something…',
      defaultText: 'kamu goblok banget',
      toast: 'Inappropriate words removed.',
      typedLabel: 'What you typed',
      forwardedLabel: 'What is forwarded',
      emptyForwarded: '(empty)',
      blockedSuffix: 'blocked',
      footnote: 'A short simulation with a few sample words. The real app matches thousands of words in the Detection Dictionary plus your Custom Words, entirely on your device.',
    },
  },

  controls: {
    eyebrow: 'Protection Controls',
    titleLead: 'Set the protection',
    titleAccent: 'level yourself',
    desc: 'Adjust the filtering sensitivity, then lock important settings with a PIN so they cannot be changed carelessly.',
    filterTitle: 'Filter Level',
    filterDesc: 'Five sensitivity levels, working automatically as you type. The higher the level, the stricter the filtering.',
    filterLevels: [
      { dot: '#E23636', name: 'Extreme', desc: 'Block all negative words, including mild ones.' },
      { dot: '#F97316', name: 'Strict', desc: 'Block mild to severe profanity.' },
      { dot: '#EAB308', name: 'Medium', desc: 'Block common profanity.', badge: 'Recommended' },
      { dot: '#22A24C', name: 'Normal', desc: 'Block severe profanity only.' },
      { dot: '#9CA3AF', name: 'Loose', desc: 'Block only very severe profanity.' },
    ],
    parentTitle: 'Parent Mode',
    parentDesc: 'Important features can only be accessed with a PIN set by the parent. The PIN is stored encrypted on the device and never sent to a server.',
    lockedLabel: 'Locked with a PIN',
    parentLocked: ['Filter Level', 'Blocked Words (Custom Words)', 'Regional Language Dictionaries', 'Reset Keyboard', 'Subscription History'],
  },

  news: {
    eyebrow: 'News Feature',
    titleLead: 'Recognize digital risks',
    titleAccent: 'early on',
    desc: 'The News Feature surfaces updates about gadget-usage safety (such as minors creating groups to discuss adult topics) so parents can stay alert sooner.',
    samples: [
      { tag: 'Child Safety', title: 'Minors create a group to discuss adult topics', desc: 'An example of an issue raised by the News Feature so parents can recognize risky conversation patterns early.' },
      { tag: 'Online Gambling', title: 'Gambling links slip in through comment sections and private messages', desc: 'How risky links spread, and simple steps to avoid them.' },
      { tag: 'Digital Literacy', title: 'A word that seems trivial today can have a big impact later', desc: 'Why the trail of what you type is worth protecting right from the keyboard.' },
    ],
    note: 'The headlines above are examples only. The News Feature is educational for parents/guardians, not legal, psychological, or parenting advice, and is not meant for children to read without guidance.',
  },

  video: {
    eyebrow: 'See It Live',
    titleLead: 'Safe Keyboard',
    titleAccent: 'in action',
    desc: 'Watch how risky words are recognized and removed automatically, from the moment they are typed to just before they are sent.',
    comingSoon: 'Demo video coming soon',
    embedTitle: 'Safe Keyboard Video',
  },

  pricing: {
    eyebrow: 'Pricing',
    titleLead: 'Choose the plan',
    titleAccent: 'that fits your needs',
    desc: 'The higher the plan, the more protection and word quota you get. Start with the free Starter and upgrade anytime without losing data.',
    durations: [
      { id: '3b', label: '3 Months' },
      { id: '6b', label: '6 Months' },
      { id: '1t', label: '1 Year' },
    ],
    perDuration: 'for {duration} · one-time payment',
    priceNote: 'All prices are in Rupiah, a one-time payment for the chosen duration, with no auto-renewal. Transactions are processed through Google Play Billing.',
    tiers: [
      {
        id: 'starter', name: 'Starter', icon: 'ShieldCheck', free: true, priceLabel: 'FREE',
        tagline: 'Great for getting started with basic protection.',
        features: ['Add up to 20 Custom Words', 'Block common words (Indonesian)'],
        cta: 'Start Free',
      },
      {
        id: 'dasar', name: 'Basic Protection', icon: 'Shield',
        prices: { '3b': 'Rp15.000', '6b': 'Rp25.000', '1t': 'Rp39.000' },
        tagline: 'Reliable basic word protection.',
        features: ['Auto-block gambling & pornographic words', 'Add up to 500 Custom Words', 'Basic Detection Dictionary updated regularly'],
        cta: 'Choose Plan',
      },
      {
        id: 'ekstra', name: 'Extra Protection', icon: 'Star', featured: true, badge: 'Recommended',
        prices: { '3b': 'Rp22.000', '6b': 'Rp39.000', '1t': 'Rp59.000' },
        tagline: 'Basic Protection plus regional languages.',
        features: ['Everything in Basic Protection', 'Freely pick 2 Regional Language dictionaries', 'Custom Word quota up to 1,500 words'],
        cta: 'Choose Plan',
      },
      {
        id: 'total', name: 'Total Protection', icon: 'Crown',
        prices: { '3b': 'Rp35.000', '6b': 'Rp59.000', '1t': 'Rp89.000' },
        tagline: 'Maximum protection, full access.',
        features: ['Full access to all features & regional languages', 'Freely pick 2 Regional Language dictionaries', 'Custom Word quota up to 3,000 words', 'Priority updates for the latest vocabulary'],
        cta: 'Choose Plan',
      },
    ],
    langPacksTitle: 'Regional Language Add-on Packs',
    langPacksDesc: 'Buy once, use as needed. Ideal for more specific regional-language protection.',
    langPacks: [
      { id: 'lang-single', name: 'Regional Language Only', price: 'Rp15.000', note: 'One-time purchase', features: ['1 regional language dictionary pack', 'No recurring fee'] },
      { id: 'lang-bundle', name: 'Bundle of 8 Regional Languages', price: 'Rp59.000', note: 'One-time purchase', badge: 'Better Value', features: ['8 regional language dictionary packs', 'Great for more complete protection'] },
    ],
    choosePackage: 'Choose Plan',
    quotaTitle: 'Blocked Word Quota Add-on Packs',
    quotaDesc: 'A one-time purchase to add Custom Word quota beyond your main tier’s limit.',
    quotaHead: { package: 'Pack', quota: 'Quota', price: 'Price' },
    quotaPacks: [
      { name: 'Starter', quota: '+50 words', price: 'Rp9.000' },
      { name: 'Medium', quota: '+150 words', price: 'Rp19.000' },
      { name: 'Large', quota: '+500 words', price: 'Rp49.000' },
      { name: 'Max', quota: '+1,000 words', price: 'Rp79.000' },
    ],
    quotaNote: 'This pack is a one-time purchase (not a subscription) that adds Blocked Word (Custom Word) quota beyond the limit of your currently active main tier. The extra quota is permanent as long as the account is active and is not lost even if the main tier is downgraded or the subscription ends. The pack can be bought more than once, and the quota from each purchase accumulates (adds up) rather than replacing one another.',
  },

  faq: {
    eyebrow: 'Frequently Asked',
    titleLead: 'What people',
    titleAccent: 'often ask',
    items: [
      { q: 'Is what I type sent to a server?', a: 'No. Safe Keyboard runs as an Input Method Editor (IME), and all word matching against the Detection Dictionary and Custom Words happens entirely on your device. Your keystrokes, passwords, and Custom Words are never uploaded to our servers.' },
      { q: 'What happens when my subscription ends?', a: 'The account automatically returns to the Starter (Free) tier. Custom Words beyond the Starter quota are temporarily disabled (not deleted) until you subscribe again. Quota from the Word Quota Add-on Pack is permanent and stays attached to the account.' },
      { q: 'Is payment auto-renewed?', a: 'No. Every paid tier is a one-time payment for the chosen duration (3 months, 6 months, or 1 year) and is not auto-renewed, unless stated otherwise on the purchase page.' },
      { q: 'What is the refund policy?', a: 'All transactions are processed through Google Play Billing and the refund policy follows Google Play Store terms. Safe Keyboard does not process refunds directly outside the Google Play mechanism. To request a refund, please contact Safe Dev Teams via the "Help & Feedback" menu in the Safe Keyboard app. The refund process takes 1–3 business days.' },
      { q: 'Can Safe Keyboard detect images or videos?', a: 'No. Safe Keyboard only works on typed text. The app matches the words you type against the Detection Dictionary and Custom Words, then blocks and removes them before they are sent. Images, stickers, videos, or links whose content is not text are not scanned.' },
      { q: 'Can Safe Keyboard replace parental supervision?', a: 'No. The app helps reduce exposure to harmful words, but it is not a substitute for parental/guardian supervision. Detection depends on dictionary coverage and does not guarantee that every spelling or language variation will be caught.' },
      { q: 'How do I delete my account?', a: 'Open the Profile menu in the app and choose "Delete Account", or email safedotdev@gmail.com if you no longer have access to the app. Account data on the server is permanently deleted with no grace period.' },
    ],
  },

  cta: {
    title: 'Start protecting your family’s typing',
    desc: 'Download Safe Keyboard on the Play Store, choose the protection that fits, and stay at ease because everything runs on your device.',
    primary: 'Find it on Play Store',
    secondary: 'Contact Us',
  },

  footer: {
    desc: 'A smart Android keyboard that detects and removes profanity, pornographic terms, and online gambling links from typed text entirely on your device (On-Device).',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', to: '/#fitur' },
          { label: 'How It Works', to: '/#cara-kerja' },
          { label: 'Video', to: '/#video' },
          { label: 'Pricing', to: '/#harga' },
          { label: 'FAQ', to: '/#faq' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', legal: 'privacy' },
          { label: 'Terms & Conditions', legal: 'terms' },
          { label: 'Account Deletion Request', legal: 'deleteAccount' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Contact Us', to: '/kontak' },
          { label: '__CONTACT_EMAIL__', mailto: true },
        ],
      },
    ],
    rights: '© {year} {team} · Safe Keyboard v{version}',
    responsible: 'Responsible: {owner} · {email}',
  },

  contactPage: {
    docTitle: 'Contact Us — Safe Keyboard',
    badge: 'Contact',
    titleLead: 'Contact',
    titleAccent: 'us',
    intro: 'Have a question, complaint, or a request about personal data? Send a message via the form below, or email us directly.',
    sendHeading: 'Send a message',
    sendSub: 'All marked fields are required. We usually reply within 1–3 business days.',
    directEmailTitle: 'Email directly',
    ownerLine: '{owner} ({role}).',
    relatedTitle: 'Related links',
    relatedLinks: {
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      deleteAccount: 'Account Deletion Request',
    },
    relatedNote: 'For personal data rights requests (access, correction, deletion, withdrawal of consent), please mention the email registered to your Safe Keyboard account.',
  },

  contactForm: {
    categories: [
      'General question',
      'Subscription & payment help',
      'Bug report / technical issue',
      'Personal data rights request',
      'Child protection report',
      'Partnership / other',
    ],
    name: 'Name',
    namePlaceholder: 'Your full name',
    email: 'Email',
    emailPlaceholder: 'name@email.com',
    category: 'Category',
    message: 'Message',
    messagePlaceholder: 'Describe your question or concern in as much detail as possible.',
    submit: 'Send Message',
    sending: 'Sending…',
    errRequired: 'Please fill in your name, email, and message.',
    errEmail: 'Invalid email format.',
    errNotConfigured: 'The form is not configured yet. Please email us directly at {email}.',
    errNetwork: 'A network problem occurred. Please try again or email us directly at {email}.',
    errGeneric: 'Failed to send the message. Please try again or email us directly.',
    successTitle: 'Your message was sent',
    successBody: 'Thank you. We have received your message and usually reply within 1–3 business days to {email}.',
    writeAgain: 'Write another message',
    privacyNote: 'The message is sent securely via Web3Forms. We only use your data to reply to this inquiry.',
    subjectPrefix: '[Safe Keyboard]',
    fromName: 'Safe Keyboard — Contact Form',
  },

  notFound: {
    title: 'Page not found',
    desc: 'The link you opened may have changed or is no longer available.',
    back: 'Back to home',
  },
}

export const translations = { id, en }
