import { categories, projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import ProjectCard from './ProjectCard'
import './ProjectsSection.css'

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projetos" className="projects">
      <div className="container">
        <p className="eyebrow">{t.projects.eyebrow}</p>
        <h2 className="projects__title">{t.projects.title}</h2>

        {categories.map((cat) => {
          const items = projects.filter((p) => p.category === cat.id)
          if (items.length === 0) return null

          const catText = t.projects.categories[cat.id]

          return (
            <div key={cat.id} id={cat.id} className="projects__group">
              <div className="projects__folder-tab">
                <span className="projects__folder-icon">▾</span>
                <span className="projects__folder-name">{catText?.label.toLowerCase()}/</span>
                <span className="projects__folder-desc">{catText?.description}</span>
              </div>

              <div className="projects__grid">
                {items.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
