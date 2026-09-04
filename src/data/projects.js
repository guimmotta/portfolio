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
  { id: 'java' },
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
    deployUrl: '',
    githubUrl: '',
    image: '',
  },
  {
    id: 'bussola2026',
    category: 'frontend',
    stack: ['React', 'CSS'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: '',
    image: '',
  },
  {
    id: 'frontend-slot-1',
    category: 'frontend',
    stack: [],
    status: 'em-andamento',
    deployUrl: '',
    githubUrl: '',
    image: '',
    isPlaceholder: true,
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
    githubUrl: '',
    image: '',
  },
  {
    id: 'jpa-hibernate-migration',
    category: 'backend',
    stack: ['Java', 'JPA', 'Hibernate'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: '',
    image: '',
  },
  {
    id: 'catalogo-produtos',
    category: 'backend',
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
    status: 'em-andamento',
    deployUrl: '',
    githubUrl: '',
    image: '',
  },

  // ---------------------------------------------------------------------
  // JAVA
  // ---------------------------------------------------------------------
  {
    id: 'cadastro-clientes',
    category: 'java',
    stack: ['Java', 'JSF', 'WildFly'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: '',
    image: '',
  },
  {
    id: 'java-slot-1',
    category: 'java',
    stack: [],
    status: 'em-andamento',
    deployUrl: '',
    githubUrl: '',
    image: '',
    isPlaceholder: true,
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
