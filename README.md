ExtensaoMotivacional — Configuração de CI E2E
Arquivos adicionados para automatizar testes E2E usando Playwright + GitHub Actions.

Como rodar localmente
npm ci
npm run build:zip
npx playwright install --with-deps
npm run test:e2e
Os relatórios HTML ficam em playwright-report/.

No GitHub Actions, o fluxo de trabalho .github/workflows/e2e-tests.ymlroda automaticamente e gera artefatos:

playwright-report(HTML)
extension-zip(dist/extensão.zip)
