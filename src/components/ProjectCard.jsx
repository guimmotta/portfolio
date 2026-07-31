import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { title, description, stack, status, deployUrl, githubUrl, image, isPlaceholder } = project

  return (
    <article className={`card ${isPlaceholder ? 'card--placeholder' : ''}`}>
      <div className="card__media">
        {image ? (
          <img src={image} alt={`Captura de tela do projeto ${title}`} />
        ) : (
          <div className="card__media-empty">
            <span>+ imagem</span>
            <span className="card__media-hint">/public/projects/</span>
          </div>
        )}
        <span className={`card__status card__status--${status}`}>
          {status === 'em-andamento' ? 'em andamento' : 'concluído'}
        </span>
      </div>

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>

        {stack.length > 0 && (
          <div className="card__stack">
            {stack.map((tech) => (
              <span key={tech} className="card__stack-item">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="card__links">
          <CardLink href={deployUrl} label="deploy" filledLabel="ver deploy ↗" />
          <CardLink href={githubUrl} label="github" filledLabel="ver código ↗" />
        </div>
      </div>
    </article>
  )
}

function CardLink({ href, label, filledLabel }) {
  if (!href) {
    return <span className="card__link card__link--empty">+ adicionar {label}</span>
  }
  return (
    <a className="card__link card__link--filled" href={href} target="_blank" rel="noreferrer">
      {filledLabel}
    </a>
  )
}
