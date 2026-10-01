import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations.js'

const STORAGE_KEY = 'sk-lang'
export const LANGUAGES = ['id', 'en']
const DEFAULT_LANG = 'id'

const LanguageContext = createContext(null)

function readInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && LANGUAGES.includes(saved)) return saved
  } catch {
    /* localStorage tidak tersedia — pakai default */
  }
  if (typeof navigator !== 'undefined' && navigator.language) {
    const code = navigator.language.toLowerCase()
    if (code.startsWith('id')) return 'id'
    if (code.startsWith('en')) return 'en'
  }
  return DEFAULT_LANG
}

// Ambil nilai bersarang lewat path bertitik, mis. "hero.trustPills".
function lookup(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLang)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* abaikan */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  const setLang = useCallback((next) => {
    if (LANGUAGES.includes(next)) setLangState(next)
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((cur) => (cur === 'id' ? 'en' : 'id'))
  }, [])

  const value = useMemo(() => {
    const dict = translations[lang] ?? translations[DEFAULT_LANG]
    const fallback = translations[DEFAULT_LANG]
    const t = (path) => {
      const found = lookup(dict, path)
      if (found !== undefined) return found
      return lookup(fallback, path)
    }
    return { lang, setLang, toggleLang, t, dict }
  }, [lang, setLang, toggleLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n harus dipakai di dalam <LanguageProvider>')
  return ctx
}
