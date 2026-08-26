import { forwardRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Link internal yang menangani anchor "#id" dengan andal.
//
// Masalah <Link> biasa: kalau hash tujuan sama dengan hash sekarang
// (mis. klik "Cara Kerja" dua kali), lokasi router tak berubah sehingga
// tak ada yang menggeser layar. HashLink selalu menggeser manual saat
// target berada di halaman yang sedang dibuka.
//
// Untuk target di halaman lain, biarkan router menavigasi; ScrollManager
// di App.jsx yang menggeser setelah halaman termuat.
const HashLink = forwardRef(function HashLink({ to, onClick, children, ...rest }, ref) {
  const { pathname } = useLocation()
  const [rawPath, hash] = String(to).split('#')
  const targetPath = rawPath || '/'

  const handleClick = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || !hash || targetPath !== pathname) return

    const el = document.getElementById(hash)
    if (!el) return

    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Sinkronkan URL tanpa memuat ulang / menavigasi.
    window.history.replaceState(window.history.state, '', to)
  }

  return (
    <Link ref={ref} to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
})

export default HashLink
