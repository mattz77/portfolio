# Portfólio

Site pessoal construído com [Next.js](https://nextjs.org/) (App Router), TypeScript, [Tailwind CSS](https://tailwindcss.com/) e componentes no estilo [shadcn/ui](https://ui.shadcn.com/). Conteúdo e currículo ficam centralizados em `src/data/resume.tsx`, com suporte a múltiplos idiomas.

**Repositório:** [github.com/mattz77/portfolio](https://github.com/mattz77/portfolio)

## Pré-requisitos

- Node.js 18+
- [pnpm](https://pnpm.io/) 9.x (`packageManager` definido no `package.json`)

## Desenvolvimento local

```bash
git clone https://github.com/mattz77/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000). Ajuste textos, projetos e experiências em [`src/data/resume.tsx`](./src/data/resume.tsx).

Variáveis de ambiente: copie `.env.example` para `.env.local` se precisar sobrescrever algo (não commite arquivos `.env*` com segredos).

## Scripts

| Comando        | Descrição              |
| -------------- | ---------------------- |
| `pnpm dev`     | Servidor de desenvolvimento |
| `pnpm build`   | Build de produção      |
| `pnpm start`   | Servir build (produção) |
| `pnpm lint`    | ESLint                 |

## Docker e deploy

- Desenvolvimento com containers: veja [`README.dev.md`](./README.dev.md).
- Deploy em produção (Docker / nginx): veja [`README.deploy.md`](./README.deploy.md).

## Créditos

Baseado no template [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) (evolução do projeto original por [Dillion Verma](https://github.com/dillionverma/portfolio)).

## Licença

MIT — ver [LICENSE](./LICENSE) (copyright original do template permanece no arquivo de licença).
