import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// Kelola posisi scroll saat pindah route / berpindah ke anchor (#id).
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Elemen target mungkin belum ter-render (mis. datang dari halaman lain).
      // Coba beberapa kali sebentar sampai muncul.
      const id = hash.slice(1)
      let tries = 0
      let timer
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (tries++ < 12) {
          timer = setTimeout(tryScroll, 50)
        }
      }
      const raf = requestAnimationFrame(tryScroll)
      return () => {
        cancelAnimationFrame(raf)
        clearTimeout(timer)
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
