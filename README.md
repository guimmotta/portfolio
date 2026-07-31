# Portfólio — Aguinaldo

Site de portfólio em React (Vite), estilo "IDE dark tech".

## Como rodar no VS Code

```bash
npm install
npm run dev
```

Abra o link que aparecer no terminal (normalmente `http://localhost:5173`).

## Onde editar

- **`src/data/projects.js`** — é o único arquivo que você provavelmente vai mexer no dia a dia.
  Preencha `deployUrl`, `githubUrl` e `image` de cada projeto. Deixe `""` (vazio) enquanto não tiver
  o link/imagem pronto: o card mostra automaticamente um estado "+ adicionar link" / "+ imagem".
- **Imagens dos projetos**: coloque os arquivos em `public/projects/` e referencie no `image` como
  `/projects/nome-do-arquivo.png`.
- **`profile`** (no mesmo arquivo `projects.js`) — seu nome, bio, stack e links de contato
  (github, linkedin, email).
- **Cores e fontes**: tokens centralizados em `src/index.css` (variáveis `--accent-cyan`,
  `--accent-blue`, `--font-mono`, `--font-sans`, etc).

## Estrutura

```
src/
  components/     Header, Hero (terminal animado), ProjectsSection, ProjectCard, Footer
  data/
    projects.js   <- seus projetos e perfil ficam aqui
  index.css       tokens de design (cores, fontes, espaçamentos)
  App.jsx
```

## Build para produção (deploy)

```bash
npm run build
```

Gera a pasta `dist/`, pronta para subir na Vercel, Netlify ou GitHub Pages.

## Próximos passos sugeridos

- [ ] Preencher `deployUrl` e `githubUrl` de cada projeto em `src/data/projects.js`
- [ ] Adicionar screenshots em `public/projects/`
- [ ] Preencher `profile.links` (github, linkedin, email)
- [ ] Trocar os slots "Novo projeto" pelos próximos projetos reais (ou remover se não usar)
- [ ] Deploy (Vercel é o caminho mais rápido: `npx vercel`)
