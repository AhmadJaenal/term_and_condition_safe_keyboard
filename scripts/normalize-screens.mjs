// ============================================================
//  Normalisasi render layar HP untuk section "Jelajahi Aplikasi".
//
//  Input : PNG render HP mentah (boleh ada latar gelap/terang, ukuran bebas).
//  Output : public/images/screen-<id>.webp berukuran 600x1200, latar
//           transparan, HP di tengah pada tinggi yang sama -> ukuran HP
//           tampil konsisten di semua tab.
//
//  Pakai  : node scripts/normalize-screens.mjs <src.png> <id> [<src.png> <id> ...]
//  Contoh : node scripts/normalize-screens.mjs raw/keyboard.png pencarian raw/setting.png pengaturan
//
//  Butuh  : Playwright (sudah jadi devDependency lewat @playwright/test / playwright).
// ============================================================
import { chromium } from 'playwright'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const OUT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../public/images')
const TARGET_ASPECT = 0.5 // w/h kanvas keluaran
const OUT_H = 1200 // tinggi kanvas keluaran (px)
const PHONE_H_RATIO = 0.94 // tinggi HP relatif tinggi kanvas
const LUMA_THRESHOLD = 36 // piksel di atas ini dianggap "isi" (HP), bukan latar

const args = process.argv.slice(2)
if (args.length < 2 || args.length % 2 !== 0) {
  console.error('Pakai: node scripts/normalize-screens.mjs <src.png> <id> [<src.png> <id> ...]')
  process.exit(1)
}

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setContent('<canvas id="c"></canvas>')

for (let i = 0; i < args.length; i += 2) {
  const srcPath = resolve(args[i])
  const id = args[i + 1]
  const data = readFileSync(srcPath).toString('base64')

  const url = await page.evaluate(
    async ({ data, thr, TARGET_ASPECT, OUT_H, PHONE_H_RATIO }) => {
      const img = new Image()
      img.src = 'data:image/png;base64,' + data
      await img.decode()
      const W = img.naturalWidth
      const H = img.naturalHeight
      const c = document.getElementById('c')
      c.width = W
      c.height = H
      const ctx = c.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const d = ctx.getImageData(0, 0, W, H).data

      let minX = W
      let minY = H
      let maxX = 0
      let maxY = 0
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const p = (y * W + x) * 4
          if (d[p + 3] < 16) continue
          const luma = 0.299 * d[p] + 0.587 * d[p + 1] + 0.114 * d[p + 2]
          const chroma =
            Math.max(d[p], d[p + 1], d[p + 2]) - Math.min(d[p], d[p + 1], d[p + 2])
          if (luma > thr || chroma > 24) {
            if (x < minX) minX = x
            if (x > maxX) maxX = x
            if (y < minY) minY = y
            if (y > maxY) maxY = y
          }
        }
      }

      const phoneW = maxX - minX + 1
      const phoneH = maxY - minY + 1
      const scale = (PHONE_H_RATIO * OUT_H) / phoneH
      const outW = Math.round(OUT_H * TARGET_ASPECT)
      const oc = document.createElement('canvas')
      oc.width = outW
      oc.height = OUT_H
      const octx = oc.getContext('2d')
      const dw = phoneW * scale
      const dh = phoneH * scale
      octx.drawImage(c, minX, minY, phoneW, phoneH, (outW - dw) / 2, (OUT_H - dh) / 2, dw, dh)
      return oc.toDataURL('image/webp', 0.92)
    },
    { data, thr: LUMA_THRESHOLD, TARGET_ASPECT, OUT_H, PHONE_H_RATIO },
  )

  const outPath = resolve(OUT_DIR, `screen-${id}.webp`)
  writeFileSync(outPath, Buffer.from(url.split(',')[1], 'base64'))
  console.log('wrote', outPath)
}

await browser.close()
