# ExtensaoMotivacional — E2E CI setup

Arquivos adicionados para automatizar testes E2E usando Playwright + GitHub Actions.

## Como rodar localmente

```bash
npm ci
npm run build:zip
npx playwright install --with-deps
npm run test:e2e
```

Os relatórios HTML ficam em `playwright-report/`.

No GitHub Actions, o workflow `.github/workflows/e2e-tests.yml` roda automaticamente e gera artefatos:
- `playwright-report` (HTML)
- `extension-zip` (dist/extension.zip)
