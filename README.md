# Bruno Costa — Cybersecurity & Cloud Portfolio

Site pessoal estático para GitHub Pages, pensado para apresentar projetos de cibersegurança, cloud security, DevSecOps, backend e notas técnicas.

## Estrutura

- `index.html` — estrutura principal do site.
- `styles.css` — visual profissional com tema cloud/security.
- `data.js` — arquivo simples de projetos e notas/blog.
- `script.js` — filtros, menu mobile e renderização dinâmica.

## Como editar projetos

Abre o ficheiro `data.js` e adiciona um novo objeto ao array `projects`:

```js
{
  title: "Nome do projeto",
  category: ["security", "cloud"],
  status: "Em desenvolvimento",
  summary: "Descrição curta do projeto.",
  stack: ["AWS", "Terraform", "Linux"],
  links: { repo: "https://github.com/...", demo: "https://..." }
}
```

Categorias suportadas pelos filtros atuais:

- `security`
- `cloud`
- `backend`
- `research`

## Como editar notas/blog

No mesmo ficheiro `data.js`, adiciona entradas ao array `notes`:

```js
{
  date: "2026-06-12",
  title: "Título da nota",
  text: "Resumo curto da nota técnica."
}
```

## Publicação no GitHub Pages

1. Substitui os ficheiros atuais do repositório por estes ficheiros.
2. Faz commit e push para a branch `main`.
3. Em GitHub → Settings → Pages, confirma que a source está em `Deploy from a branch`, branch `main`, pasta `/root`.

## Personalização recomendada

- Trocar links `#` pelos repositórios reais.
- Atualizar o link do LinkedIn no `index.html`.
- Criar uma pasta `assets/` para screenshots dos projetos, caso queiras adicionar imagens mais tarde.
