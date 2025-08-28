import LoginPage from '../../support/pages/LoginPage'
import HomePage from '../../support/pages/HomePage'
import CadastrarUsuarioPage from '../../support/pages/CadastrarUsuarioPage'
import ListarUsuarioPage from '../../support/pages/ListarUsuarioPage'
import fakerFix from '../../fixtures/fakerFix'

describe('Usuários', () => {
  beforeEach(() => {
    LoginPage.doLogin(Cypress.env('userEmail'), Cypress.env('userPassword'))
  })

  context('Criar usuário', () => {
    beforeEach(() => {
      HomePage.goToRegisterUser()
    })

    it('Criar usuário', () => {
      CadastrarUsuarioPage.registerUser(fakerFix.name(), fakerFix.email(), fakerFix.password(), false)
  
      cy.contains('Lista dos usuários').should('be.visible')
    })
  
    it('Criar usuário como administrador', () => {
      CadastrarUsuarioPage.registerUser(fakerFix.name(), fakerFix.email(), fakerFix.password(), true)
  
      cy.contains('Lista dos usuários').should('be.visible')
    })
  })

  context('Excluir usuário', () => {
    beforeEach(() => {
      HomePage.goToListUsers()
    })

    it('Excluir usuário', () => {
      ListarUsuarioPage.deleteUser()

      cy.contains('Lista dos usuários').should('be.visible')
    })
  })
})
