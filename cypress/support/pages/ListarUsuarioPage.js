export default new (class ListarUsuarioPage {
  deleteUser() {
    cy.get('div > button.btn.btn-danger').first().click()
  }
})()
