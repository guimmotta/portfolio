import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations, SUPPORTED_LANGUAGES } from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'portfolio-lang'

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'pt'

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGUAGES.includes(stored)) return stored
  } catch {
    // Ignora erros de storage (ex.: modo privado)
  }

  const browserLang = window.navigator.language?.toLowerCase() || ''
  return browserLang.startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignora erros de storage
    }

    const t = translations[lang]
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = t.meta.title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t.meta.description)
    }
  }, [lang])

  const toggleLanguage = () => {
    setLang((current) => (current === 'pt' ? 'en' : 'pt'))
  }

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      toggleLanguage,
      setLanguage: setLang,
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage precisa ser usado dentro de um LanguageProvider')
  }
  return context
}
