export default new (class CadastrarUsuarioPage {
  registerUser(name, email, password, admin = false) {
    cy.get('[data-testid="nome"]').type(name)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)

    if (admin === true) {
      cy.get('[data-testid="checkbox"]').click()
    }

    cy.get('[data-testid="cadastrarUsuario"]').click()
  }
})
