export default new (class HomePage {
  goToRegisterUser() {
    cy.get('[data-testid="cadastrarUsuarios"]').click()
  }

  goToListUsers() {
    cy.get('[data-testid="listarUsuarios"]').click()
  }

  goToRegisterProduct() {
    cy.get('[data-testid="cadastrarProdutos"]').click()
  }

  goToListProduct() {
    cy.get('[data-testid="listarProdutos"]').click()
  }
})
