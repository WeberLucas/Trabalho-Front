Automation Exercise - Cypress + Mochawesome + GitHub Actions

Projeto de testes E2E usando Cypress na aplicação automationexercise.com.

Como rodar localmente

1. Instale as dependências:

```bash
npm ci
```

2. Abrir em modo interativo (UI do Cypress):

```bash
npx cypress open
```

3. Rodar em modo headless com relatório Mochawesome:

```bash
npx cypress run && npm run report:merge && npm run report:generate
```

Após `npm test`, o relatório HTML consolidado estará em `cypress/reports/html/index.html`.

CI (GitHub Actions)

O workflow em `.github/workflows/cypress.yml` executa os testes a cada push/PR e publica o relatório Mochawesome como artefato do job.

 Estrutura

- cypress/e2e/automation-exercise — Casos de teste em JavaScript (1–6, 8–10, 15)
- cypress.config.js — Configuração do Cypress e reporter
- cypress/support/e2e.js — Registro do reporter e comandos utilitários

Observação: O site pode apresentar banners de cookies. O comando `cy.acceptCookiesIfPresent()` tenta fechá-los quando exibidos.


