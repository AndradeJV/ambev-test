export default new (class Login {
  getUsuarios() {
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}usuarios`,
      failOnStatusCode: false,
    })
  }

  getUsuario(id) {
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}usuarios/${id}`,
      failOnStatusCode: false,
    })
  }

  postUsuarios(payload) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}usuarios`,
      failOnStatusCode: false,
      body: payload,
    })
  }

  putUsuario(payload, id) {
    return cy.request({
      method: 'PUT',
      url: `${Cypress.env('apiUrl')}usuarios/${id}`,
      failOnStatusCode: false,
      body: payload,
    })
  }

  delUsuario(id) {
    return cy.request({
      method: 'DELETE',
      url: `${Cypress.env('apiUrl')}usuarios/${id}`,
      failOnStatusCode: false,
    })
  }
})
