import { categories } from '../data/projects'
import './Header.css'

export default function Header({ profile }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
              {cat.folder}
            </button>
          ))}
          <a
            className="header__nav-item header__nav-item--cta"
            href={profile.links.email ? `mailto:${profile.links.email}` : '#contato'}
          >
            contato
          </a>
        </nav>
      </div>
    </header>
  )
}
