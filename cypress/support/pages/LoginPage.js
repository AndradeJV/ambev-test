export default new (class LoginPage {
  doLogin(user, password) {
    cy.visit('/')
    cy.get('[data-testid="email"]').type(user)
    cy.get('[data-testid="senha"]').type(password)
    cy.get('[data-testid="entrar"]').click()
  }
})
