export default new class ListarProdutosPage {
  deleteProduct() {
    cy.get('button.btn.btn-danger').first().click()
  }
}