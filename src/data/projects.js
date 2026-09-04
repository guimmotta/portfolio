// ============================================================================
// DADOS DOS PROJETOS
// ============================================================================
// Preencha os campos "deployUrl", "githubUrl" e "image" de cada projeto.
// Deixe como string vazia ("") o que ainda não tiver pronto — o card mostra
// automaticamente um estado "adicionar link" / "adicionar imagem" enquanto
// o campo estiver vazio.
//
// image: coloque o arquivo em /public/projects/ e referencie como
// "/projects/nome-do-arquivo.png" (ou .jpg, .webp).
//
// Textos (título, descrição, nome/descrição das categorias, bio do perfil)
// ficam em src/i18n/translations.js, para que existam em PT e EN.
// Ao adicionar um novo projeto ou categoria, use o mesmo "id" nos dois
// idiomas dentro de translations.projects.items / translations.projects.categories.
// ============================================================================

export const categories = [
  { id: 'frontend' },
  { id: 'backend' },
]

export const projects = [
  // ---------------------------------------------------------------------
  // FRONTEND
  // ---------------------------------------------------------------------
  {
    id: 'efood',
    category: 'frontend',
    stack: ['React', 'Styled Components', 'React Router'],
    status: 'concluido', // 'concluido' | 'em-andamento'
    deployUrl: 'https://efood-p4-sable.vercel.app',
    githubUrl: 'https://github.com/guimmotta/efood',
    image: '../../public/projects/efood.png',
  },
  {
    id: 'biolink',
    category: 'frontend',
    stack: ['React', 'CSS'],
    status: 'concluido',
    deployUrl: 'https://biolink-chi-six.vercel.app/',
    githubUrl: 'https://github.com/guimmotta/biolink',
    image: '../../public/projects/biolink.png',
  },
  {
    id: 'portfolio',
    category: 'frontend',
    stack: ['React', 'CSS', 'Vite'],
    status: 'em-andamento',
    deployUrl: 'https://portfolio-green-seven-71.vercel.app/',
    githubUrl: 'https://github.com/guimmotta/portfolio',
    image: '../../public/projects/portfolio.png',
  },

  // ---------------------------------------------------------------------
  // BACKEND
  // ---------------------------------------------------------------------
  {
    id: 'dao-service',
    category: 'backend',
    stack: ['Java', 'JDBC', 'Design Patterns'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: 'https://github.com/guimmotta/guimmotta-backend_project2',
    image: '../../public/projects/dao-service.png',
  },
  {
    id: 'jpa-hibernate-migration',
    category: 'backend',
    stack: ['Java', 'JPA', 'Hibernate'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: 'https://github.com/guimmotta/BackendProject4',
    image: '../../public/projects/jpa-hibernate-migration.png',
  },
  {
    id: 'catalogo-produtos',
    category: 'backend',
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    status: 'em-andamento',
    deployUrl: '',
    githubUrl: 'https://github.com/guimmotta/backendProject3',
    image: '../../public/projects/catalogo-produtos.png',
  },
  {
    id: 'cadastro-clientes',
    category: 'backend',
    stack: ['Java', 'JSF', 'WildFly'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: 'https://github.com/guimmotta/CadastroClienteSwing',
    image: '../../public/projects/cadastro-clientes.png',
  },
]

export const profile = {
  name: 'Aguinaldo',
  stack: ['Java', 'Spring Boot', 'JPA/Hibernate', 'React', 'SQL', 'Git'],
  links: {
    github: '',
    linkedin: '',
    email: '',
  },
}
