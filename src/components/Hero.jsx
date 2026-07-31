import { useEffect, useState } from 'react'
import './Hero.css'

const CODE_LINES = [
  { indent: 0, text: 'public class Aguinaldo extends Developer {' },
  { indent: 1, text: 'String role = "Full Stack Java Developer em formação";' },
  { indent: 1, text: 'String[] stack = { "Java", "Spring Boot", "React", "SQL" };' },
  { indent: 1, text: 'boolean disponivel = true;' },
  { indent: 0, text: '}' },
]

export default function Hero({ profile }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charsInLine, setCharsInLine] = useState(0)

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return
    const currentLine = CODE_LINES[visibleLines].text
    if (charsInLine < currentLine.length) {
      const t = setTimeout(() => setCharsInLine((c) => c + 1), 14)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1)
      setCharsInLine(0)
    }, 220)
    return () => clearTimeout(t)
  }, [charsInLine, visibleLines])

  const done = visibleLines >= CODE_LINES.length

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__intro">
          <p className="eyebrow">// portfólio</p>
          <h1 className="hero__title">
            Olá, eu sou <span className="hero__title-accent">{profile.name}</span>
          </h1>
          <p className="hero__subtitle">{profile.bio}</p>

          <div className="hero__tags">
            {profile.stack.map((tech) => (
              <span key={tech} className="hero__tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#projetos">
              ver projetos
            </a>
            <a
              className="hero__btn hero__btn--ghost"
              href={profile.links.linkedin || '#'}
              target={profile.links.linkedin ? '_blank' : undefined}
              rel="noreferrer"
            >
              linkedin ↗
            </a>
          </div>
        </div>

        <div className="hero__editor" aria-hidden="true">
          <div className="hero__editor-tabbar">
            <span className="hero__editor-tab hero__editor-tab--active">Aguinaldo.java</span>
            <span className="hero__editor-tab">README.md</span>
          </div>
          <div className="hero__editor-body">
            {CODE_LINES.map((line, i) => {
              const isVisible = i < visibleLines || (i === visibleLines && charsInLine > 0)
              const text = i < visibleLines ? line.text : i === visibleLines ? line.text.slice(0, charsInLine) : ''
              return (
                <div className="hero__editor-line" key={i}>
                  <span className="hero__editor-lineno">{i + 1}</span>
                  <span className="hero__editor-code" style={{ paddingLeft: `${line.indent * 20}px` }}>
                    {isVisible ? highlight(text) : '\u00A0'}
                    {i === visibleLines && !done && <span className="hero__cursor" />}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Realce simples de palavras-chave Java, só para dar vida ao bloco de código
function highlight(text) {
  const keywords = ['public', 'class', 'extends', 'String', 'boolean', 'true']
  const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'g'))
  return parts.map((part, i) =>
    keywords.includes(part) ? (
      <span className="hero__kw" key={i}>
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}
