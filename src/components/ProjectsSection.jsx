import { categories, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './ProjectsSection.css'

export default function ProjectsSection() {
  return (
    <section id="projetos" className="projects">
      <div className="container">
        <p className="eyebrow">// projetos</p>
        <h2 className="projects__title">explorador de projetos</h2>

        {categories.map((cat) => {
          const items = projects.filter((p) => p.category === cat.id)
          if (items.length === 0) return null

          return (
            <div key={cat.id} id={cat.id} className="projects__group">
              <div className="projects__folder-tab">
                <span className="projects__folder-icon">▾</span>
                <span className="projects__folder-name">{cat.folder}</span>
                <span className="projects__folder-desc">{cat.description}</span>
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
