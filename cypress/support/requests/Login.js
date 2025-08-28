export default new (class Login {
  postLogin(payload) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}login`,
      failOnStatusCode: false,
      body: payload,
    })
  }
})
