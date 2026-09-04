import { useLanguage } from '../i18n/LanguageContext'
import TechIcon from './TechIcon'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { t } = useLanguage()
  const { id, stack, status, deployUrl, githubUrl, image, isPlaceholder } = project
  const itemText = t.projects.items[id] ?? { title: id, description: '' }
  const { title, description } = itemText

  return (
    <article className={`card ${isPlaceholder ? 'card--placeholder' : ''}`}>
      <div className="card__media">
        {image ? (
          <img src={image} alt={t.projects.screenshotAlt(title)} />
        ) : (
          <div className="card__media-empty">
            <span>{t.projects.addImage}</span>
            <span className="card__media-hint">{t.projects.imageHint}</span>
          </div>
        )}
        <span className={`card__status card__status--${status}`}>
          {status === 'em-andamento' ? t.projects.statusInProgress : t.projects.statusDone}
        </span>
      </div>

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>

        {stack.length > 0 && (
          <div className="card__stack">
            {stack.map((tech) => (
              <span key={tech} className="card__stack-item">
                <TechIcon name={tech} className="card__stack-icon" />
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="card__links">
          <CardLink
            href={deployUrl}
            label={t.projects.deployLabel}
            filledLabel={t.projects.viewDeploy}
            addPrefix={t.projects.addLinkPrefix}
          />
          <CardLink
            href={githubUrl}
            label={t.projects.githubLabel}
            filledLabel={t.projects.viewCode}
            addPrefix={t.projects.addLinkPrefix}
          />
        </div>
      </div>
    </article>
  )
}

function CardLink({ href, label, filledLabel, addPrefix }) {
  if (!href) {
    return (
      <span className="card__link card__link--empty">
        {addPrefix} {label}
      </span>
    )
  }
  return (
    <a className="card__link card__link--filled" href={href} target="_blank" rel="noreferrer">
      {filledLabel}
    </a>
  )
}
