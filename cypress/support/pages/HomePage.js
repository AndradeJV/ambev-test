export default new (class HomePage {
  goToRegisterUser() {
    cy.get('[data-testid="cadastrarUsuarios"]').click()
  }

  goToListUsers() {
    cy.get('[data-testid="listarUsuarios"]').click()
  }
})
