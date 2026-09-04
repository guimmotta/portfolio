// ============================================================================
// TRADUÇÕES
// ============================================================================
// Todo o texto visível do site vive aqui, organizado por idioma.
// Para adicionar um novo projeto, lembre-se de criar a entrada correspondente
// dentro de `projects.items` em AMBOS os idiomas (mesmo `id` usado em
// src/data/projects.js).
// ============================================================================

export const translations = {
  pt: {
    meta: {
      title: 'Aguinaldo — Full Stack Java Developer',
      description:
        'Portfólio de Aguinaldo — Full Stack Java Dveleoper em formação. Projetos de Front-end, Back-end e Java.',
    },
    header: {
      contact: 'contato',
    },
    theme: {
      light: 'claro',
      dark: 'escuro',
      toggleAriaLabel: (target) => `Ativar tema ${target}`,
    },
    language: {
      code: 'PT',
      flag: '🇧🇷',
      switchToLabel: 'EN',
      switchToFlag: '🇺🇸',
      ariaLabel: 'Switch to English',
      groupAriaLabel: 'Selecionar idioma',
    },
    profile: {
      role: 'Full Stack Java Developer em formação',
      bio: 'Formação intensiva em Java pela EBAC, professor de inglês para devs e em transição para uma vaga júnior fullstack.',
      location: 'Pouso Alegre, MG — Brasil',
    },
    hero: {
      eyebrow: '// portfólio',
      greeting: 'Olá, sou o',
      viewProjects: 'ver projetos',
      linkedin: 'linkedin ↗',
      codeLines: [
        { indent: 0, text: 'public class Aguinaldo extends Developer {' },
        { indent: 1, text: 'String role = "Full Stack Java Developer em formação";' },
        { indent: 1, text: 'String[] stack = { "Java", "Spring Boot", "React", "SQL" };' },
        { indent: 1, text: 'boolean disponivel = true;' },
        { indent: 0, text: '}' },
      ],
    },
    projects: {
      eyebrow: '// projetos',
      title: 'explorador de projetos',
      statusDone: 'concluído',
      statusInProgress: 'em andamento',
      addImage: '+ imagem',
      imageHint: '/public/projects/',
      screenshotAlt: (title) => `Captura de tela do projeto ${title}`,
      viewDeploy: 'ver deploy ↗',
      viewCode: 'ver código ↗',
      deployLabel: 'deploy',
      githubLabel: 'github',
      addLinkPrefix: '+ adicionar',
      categories: {
        frontend: {
          label: 'Frontend',
          description: 'Interfaces, experiência de usuário e integração com APIs.',
        },
        backend: {
          label: 'Backend',
          description: 'APIs, persistência de dados e regras de negócio.',
        },
      },
      items: {
        efood: {
          title: 'efood',
          description:
            'Aplicação de delivery de comida com listagem de restaurantes, carrinho e fluxo completo de checkout integrado a uma API.',
        },
        biolink: {
          title: 'Bússola 2026',
          description:
            'Landing page freelance para cliente, com layout responsivo e ajustes de UI sob demanda.',
        },
        portfolio: {
          title: 'Portfólio',
          description: 'Meu portfólio pessoal, mostrando meus projetos e habilidades.',
        },
        'dao-service': {
          title: 'Sistema Genérico DAO/Service',
          description:
            'Camada de acesso a dados construída com padrões de projeto (DAO e Service genéricos) para reduzir duplicação de código entre entidades.',
        },
        'jpa-hibernate-migration': {
          title: 'Migração JDBC → JPA/Hibernate',
          description:
            'Migração de uma camada de persistência JDBC para JPA/Hibernate, com mapeamento de entidades e relacionamentos.',
        },
        'catalogo-produtos': {
          title: 'Catálogo de Produtos (API REST)',
          description:
            'API REST de e-commerce simples com Spring Boot: cadastro de produtos, categorias e autenticação.',
        },
        'cadastro-clientes': {
          title: 'CadastroClientes',
          description:
            'Aplicação Java EE para cadastro e gestão de clientes, com camada web em JSF rodando em WildFly.',
        },
        'java-slot-1': {
          title: 'Novo projeto',
          description: 'Descreva aqui o projeto: o problema que resolve e o que você construiu.',
        },
      },
    },
    footer: {
      code: '// vamos conversar',
      email: 'email',
      linkedin: 'linkedin',
      github: 'github',
    },
  },

  en: {
    meta: {
      title: 'Aguinaldo — Full Stack Java Developer',
      description:
        "Aguinaldo's portfolio — Full Stack Java Developer in training. Frontend, Backend, and Java projects.",
    },
    header: {
      contact: 'contact',
    },
    theme: {
      light: 'light',
      dark: 'dark',
      toggleAriaLabel: (target) => `Switch to ${target} theme`,
    },
    language: {
      code: 'EN',
      flag: '🇺🇸',
      switchToLabel: 'PT',
      switchToFlag: '🇧🇷',
      ariaLabel: 'Mudar para português',
      groupAriaLabel: 'Select language',
    },
    profile: {
      role: 'Full Stack Java Developer in training',
      bio: 'Intensive Java training at EBAC, English teacher for developers, currently transitioning into a junior fullstack role.',
      location: 'Pouso Alegre, MG — Brazil',
    },
    hero: {
      eyebrow: '// portfolio',
      greeting: "Hi, I'm",
      viewProjects: 'view projects',
      linkedin: 'linkedin ↗',
      codeLines: [
        { indent: 0, text: 'public class Aguinaldo extends Developer {' },
        { indent: 1, text: 'String role = "Full Stack Java Developer in training";' },
        { indent: 1, text: 'String[] stack = { "Java", "Spring Boot", "React", "SQL" };' },
        { indent: 1, text: 'boolean available = true;' },
        { indent: 0, text: '}' },
      ],
    },
    projects: {
      eyebrow: '// projects',
      title: 'project explorer',
      statusDone: 'completed',
      statusInProgress: 'in progress',
      addImage: '+ image',
      imageHint: '/public/projects/',
      screenshotAlt: (title) => `Screenshot of the ${title} project`,
      viewDeploy: 'view deploy ↗',
      viewCode: 'view code ↗',
      deployLabel: 'deploy',
      githubLabel: 'github',
      addLinkPrefix: '+ add',
      categories: {
        frontend: {
          label: 'Frontend',
          description: 'Interfaces, user experience, and API integration.',
        },
        backend: {
          label: 'Backend',
          description: 'APIs, data persistence, and business logic.',
        },
      },
      items: {
        efood: {
          title: 'efood',
          description:
            'Food delivery app with restaurant listing, shopping cart, and a complete checkout flow integrated with an API.',
        },
        biolink: {
          title: 'Bússola 2026',
          description:
            'Freelance landing page for a client, with a responsive layout and UI adjustments on demand.',
        },
        portfolio: {
          title: 'Portfolio',
          description: 'My personal portfolio, showcasing my projects and skills.',
        },
        'dao-service': {
          title: 'Generic DAO/Service System',
          description:
            'Data access layer built with design patterns (generic DAO and Service) to reduce code duplication across entities.',
        },
        'jpa-hibernate-migration': {
          title: 'JDBC → JPA/Hibernate Migration',
          description:
            'Migration of a JDBC persistence layer to JPA/Hibernate, with entity and relationship mapping.',
        },
        'catalogo-produtos': {
          title: 'Product Catalog (REST API)',
          description:
            'Simple e-commerce REST API with Spring Boot: product registration, categories, and authentication.',
        },
        'cadastro-clientes': {
          title: 'CadastroClientes',
          description:
            'Java EE application for customer registration and management, with a JSF web layer running on WildFly.',
        },
      },
    },
    footer: {
      code: "// let's talk",
      email: 'email',
      linkedin: 'linkedin',
      github: 'github',
    },
  },
}

export const SUPPORTED_LANGUAGES = ['pt', 'en']
