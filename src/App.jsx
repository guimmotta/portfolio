import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import { profile } from './data/projects'

const THEME_KEY = 'portfolio-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'

  const attr = document.documentElement.getAttribute('data-theme')
  if (attr === 'light' || attr === 'dark') return attr

  try {
    const stored = window.localStorage.getItem(THEME_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Ignora erros de storage (ex.: modo privado)
  }

  return 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem(THEME_KEY, theme)
    } catch {
      // Ignora erros de storage
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Header profile={profile} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero profile={profile} />
        <ProjectsSection />
      </main>
      <Footer profile={profile} />
    </>
  )
}
