import LoginPage from '../../support/pages/LoginPage'
import HomePage from '../../support/pages/HomePage'
import CadastrarProdutoPage from '../../support/pages/CadastrarProdutoPage'
import ListarProdutosPage from '../../support/pages/ListarProdutosPage'
import fakerFix from '../../fixtures/fakerFix'

describe('Produtos', () => {
  beforeEach(() => {
    LoginPage.doLogin(Cypress.env('userEmail'), Cypress.env('userPassword'))
  })

  context('Criar produto', () => {
    beforeEach(() => {
      HomePage.goToRegisterProduct()
    })

    it('Criar produto com sucesso', () => {
      CadastrarProdutoPage.fillFormProduct(
        fakerFix.nameProduct(),
        1000,
        'Produto cubo mágico',
        10,
        'cubo-magico.jpeg'
      )

      cy.contains('Lista dos Produtos').should('be.visible')

    })

    it('Tentar criar um produto com o mesmo nome', () => {
      CadastrarProdutoPage.fillFormProduct(
        'Cubo Mágico',
        1000,
        'Produto cubo mágico',
        10,
        'cubo-magico.jpeg'
      )

      cy.contains('Já existe produto com esse nome').should('be.visible')
    })
  })

  context('Excluir produtos', () => {
    it('Excluir produto com sucesso', () => {
      HomePage.goToListProduct()
      ListarProdutosPage.deleteProduct()

      cy.contains('Lista dos Produtos').should('be.visible')
    })
  })
})
