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
// ============================================================================

export const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    folder: 'frontend/',
    description: 'Interfaces, experiência de usuário e integração com APIs.',
  },
  {
    id: 'backend',
    label: 'Backend',
    folder: 'backend/',
    description: 'APIs, persistência de dados e regras de negócio.',
  },
  {
    id: 'java',
    label: 'Java',
    folder: 'java/',
    description: 'Aplicações Java standalone, desktop e Java EE.',
  },
]

export const projects = [
  // ---------------------------------------------------------------------
  // FRONTEND
  // ---------------------------------------------------------------------
  {
    id: 'efood',
    category: 'frontend',
    title: 'efood',
    description:
      'Aplicação de delivery de comida com listagem de restaurantes, carrinho e fluxo completo de checkout integrado a uma API.',
    stack: ['React', 'Styled Components', 'React Router'],
    status: 'concluido', // 'concluido' | 'em-andamento'
    deployUrl: '',
    githubUrl: '',
    image: '',
  },
  {
    id: 'bussola2026',
    category: 'frontend',
    title: 'Bússola 2026',
    description:
      'Landing page freelance para cliente, com layout responsivo e ajustes de UI sob demanda.',
    stack: ['React', 'CSS'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: '',
    image: '',
  },
  {
    id: 'frontend-slot-1',
    category: 'frontend',
    title: 'Novo projeto',
    description: 'Descreva aqui o projeto: o problema que resolve e o que você construiu.',
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
    title: 'Sistema Genérico DAO/Service',
    description:
      'Camada de acesso a dados construída com padrões de projeto (DAO e Service genéricos) para reduzir duplicação de código entre entidades.',
    stack: ['Java', 'JDBC', 'Design Patterns'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: '',
    image: '',
  },
  {
    id: 'jpa-hibernate-migration',
    category: 'backend',
    title: 'Migração JDBC → JPA/Hibernate',
    description:
      'Migração de uma camada de persistência JDBC para JPA/Hibernate, com mapeamento de entidades e relacionamentos.',
    stack: ['Java', 'JPA', 'Hibernate'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: '',
    image: '',
  },
  {
    id: 'catalogo-produtos',
    category: 'backend',
    title: 'Catálogo de Produtos (API REST)',
    description:
      'API REST de e-commerce simples com Spring Boot: cadastro de produtos, categorias e autenticação.',
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
    title: 'CadastroClientes',
    description:
      'Aplicação Java EE para cadastro e gestão de clientes, com camada web em JSF rodando em WildFly.',
    stack: ['Java', 'JSF', 'WildFly'],
    status: 'concluido',
    deployUrl: '',
    githubUrl: '',
    image: '',
  },
  {
    id: 'java-slot-1',
    category: 'java',
    title: 'Novo projeto',
    description: 'Descreva aqui o projeto: o problema que resolve e o que você construiu.',
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
  role: 'Full Stack Java Developer em formação',
  location: 'Pouso Alegre, MG — Brasil',
  bio: 'Formação intensiva em Java com EBAC, professor de inglês para devs e em transição para uma vaga júnior fullstack.',
  stack: ['Java', 'Spring Boot', 'JPA/Hibernate', 'React', 'SQL', 'Git'],
  links: {
    github: '',
    linkedin: '',
    email: '',
  },
}
