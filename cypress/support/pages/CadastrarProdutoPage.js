export default new (class CadastrarProdutoPage {
  fillFormProduct(name, price, description, quantity, image) {
    cy.get('[data-testid="nome"]').type(name)
    cy.get('[data-testid="preco"]').type(price)
    cy.get('[data-testid="descricao"]').type(description)
    cy.get('[data-testid="quantity"]').type(quantity)
    cy.get('[data-testid="imagem"]').attachFile(image)
    cy.get('[data-testid="cadastarProdutos"]').click()
  }
})
