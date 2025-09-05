# Teste Ambev

# 🍺 Testes Automatizados - Ambev

![Node.js](https://img.shields.io/badge/Node.js-16.x-green?logo=node.js)  
![Cypress](https://img.shields.io/badge/Cypress-12.x-17202C?logo=cypress)  
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)

Este repositório contém a automação de testes **end-to-end** desenvolvida em **Cypress (JS)** para avaliação técnica da **Ambev**.  
O objetivo é validar funcionalidades críticas da aplicação, garantindo **qualidade, confiabilidade e rapidez nos feedbacks**.

---

## 🚀 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) → Framework de testes E2E
- [Node.js](https://nodejs.org/) → Ambiente de execução
- [@faker-js/faker](https://fakerjs.dev/) → Geração de dados dinâmicos
- **JavaScript (ES6+)**

---

## 📂 Estrutura do projeto

```bash
cypress/
 ├─ fixtures/        # Arquivos estáticos (mocks, JSONs)
 ├─ support/         # Comandos customizados e configs globais
 ├─ tests/           # Testes automatizados (.cy.js)
 │   ├─ login.test.js
 │   ├─ cadastro.test.js
 └─ screenshots/     # Prints automáticos em falhas
```

## ⚙️ Configuração do ambiente

✅ Pré-requisitos
• Node.js >= 16.x
• npm ou yarn instalado

```
# Instala dependências
npm install
```

```
# Instala dependências
npx cypress open
```

```
# Instala dependências
npx cypress run
```

## 🌐 Variáveis de ambiente

As URLs das APIs estão configuradas no cypress.config.js usando env.
Você pode sobrescrever via CLI:

```
npx cypress run --env apiUrl=https://api-hml.minhaempresa.com
```

## 🧪 Exemplo de teste

```
describe('Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('/login')
    cy.get('#email').type('usuario@teste.com')
    cy.get('#senha').type('123456')
    cy.get('form').submit()

    cy.contains('Bem-vindo').should('be.visible')
  })
})
```

## Explicação de execução

- Baixar repositório
- Instalar com `npm install`

Dentro do projeto, foi preciso utilizar o before no e2e para criar um usuário padrão no projeto, a aplicação deve conter um job de exclusão de usuário.

## 👨‍💻 Autor

Desenvolvido por João Andrade
📧 joaovandrade30@gmail.com
