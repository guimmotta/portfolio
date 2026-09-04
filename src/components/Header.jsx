import { categories } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import './Header.css'

const LANGUAGE_OPTIONS = [
  { code: 'pt', flag: '🇧🇷', label: 'PT' },
  { code: 'en', flag: '🇺🇸', label: 'EN' },
]

export default function Header({ profile, theme, onToggleTheme }) {
  const { t, lang, setLanguage } = useLanguage()

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

          <div className="lang-switch" role="group" aria-label={t.language.groupAriaLabel}>
            {LANGUAGE_OPTIONS.map((option) => (
              <button
                key={option.code}
                type="button"
                className={`lang-switch__btn ${lang === option.code ? 'lang-switch__btn--active' : ''}`}
                onClick={() => setLanguage(option.code)}
                aria-pressed={lang === option.code}
                title={option.label}
              >
                <span className="lang-switch__flag" aria-hidden="true">
                  {option.flag}
                </span>
                <span className="lang-switch__label">{option.label}</span>
              </button>
            ))}
          </div>

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
