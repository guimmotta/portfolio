import { SiReact, SiReactrouter, SiStyledcomponents, SiJavascript, SiSpringboot, SiHibernate, SiPostgresql, SiGit } from 'react-icons/si'
import { DiJava, DiCss3 } from 'react-icons/di'
import { FaDatabase, FaCubes, FaLayerGroup } from 'react-icons/fa6'

// ============================================================================
// ÍCONES DE TECNOLOGIA
// ============================================================================
// Mapeia o nome (texto) usado em `stack` (src/data/projects.js) para um
// ícone + cor de marca. Para tecnologias sem um ícone oficial disponível na
// biblioteca, usamos um ícone genérico (banco de dados, camadas, etc).
//
// Para adicionar uma tecnologia nova: acrescente uma linha no array abaixo.
// A busca é por correspondência (regex, case-insensitive) no nome do texto.
// ============================================================================

const ICON_MAP = [
  { match: /^java$/i, Icon: DiJava, color: '#ED8B00' },
  { match: /^react$/i, Icon: SiReact, color: '#61DAFB' },
  { match: /react router/i, Icon: SiReactrouter, color: '#CA4245' },
  { match: /styled components/i, Icon: SiStyledcomponents, color: '#DB7093' },
  { match: /^css$/i, Icon: DiCss3, color: '#264DE4' },
  { match: /javascript/i, Icon: SiJavascript, color: '#F0DB4F' },
  { match: /spring boot/i, Icon: SiSpringboot, color: '#6DB33F' },
  { match: /jpa|hibernate/i, Icon: SiHibernate, color: '#BCA163' },
  { match: /postgresql/i, Icon: SiPostgresql, color: '#4169E1' },
  { match: /^git$/i, Icon: SiGit, color: '#F05032' },
  { match: /^(sql|jdbc)$/i, Icon: FaDatabase, color: '#8b98ac' },
  { match: /design patterns/i, Icon: FaCubes, color: '#8b98ac' },
  { match: /^(jsf|wildfly)$/i, Icon: FaLayerGroup, color: '#EC7A08' },
]

export default function TechIcon({ name, className }) {
  const entry = ICON_MAP.find((item) => item.match.test(name))
  if (!entry) return null

  const { Icon, color } = entry
  return <Icon className={className} style={{ color }} aria-hidden="true" />
}
