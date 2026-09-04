import { categories } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import './Header.css'

export default function Header({ profile, theme, onToggleTheme }) {
  const { t, toggleLanguage } = useLanguage()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const targetThemeLabel = theme === 'dark' ? t.theme.light : t.theme.dark

  return (
    <header className="header">
      <div className="container header__inner">
        <button className="header__brand" onClick={() => scrollTo('top')}>
          <span className="header__brand-prompt">~/</span>
          {profile.name.toLowerCase()}
        </button>

        <nav className="header__nav">
          {categories.map((cat) => (
            <button key={cat.id} className="header__nav-item" onClick={() => scrollTo(cat.id)}>
              {t.projects.categories[cat.id]?.label.toLowerCase() ?? cat.id}
            </button>
          ))}

          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={t.theme.toggleAriaLabel(targetThemeLabel)}
            title={t.theme.toggleAriaLabel(targetThemeLabel)}
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {theme === 'dark' ? '☀' : '☾'}
            </span>
            <span className="theme-toggle__label">{targetThemeLabel}</span>
          </button>

          <button
            className="lang-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={t.language.ariaLabel}
            title={t.language.ariaLabel}
          >
            <span className="lang-toggle__flag" aria-hidden="true">
              {t.language.switchToFlag}
            </span>
            <span className="lang-toggle__label">{t.language.switchToLabel}</span>
          </button>

          <a
            className="header__nav-item header__nav-item--cta"
            href={profile.links.email ? `mailto:${profile.links.email}` : '#contato'}
          >
            {t.header.contact}
          </a>
        </nav>
      </div>
    </header>
  )
}
