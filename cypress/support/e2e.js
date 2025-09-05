import './commands'
import 'cypress-file-upload'
import Usuarios from './requests/Usuarios'

Cypress.on('uncaught:exception', () => {
  return false
})


before(() => {
  console.log('👁️ Preparando ambiente 👁️')

  const payload = {
    nome: 'João Vitor Andrade de Araujo',
    email: 'joaovandrade30@gmail.com',
    password: 'teste123',
    administrador: 'true',
  }

  cy.request({
    method: 'GET',
    url: 'https://serverest.dev/usuarios?email=joaovandrade30%40gmail.com',
    failOnStatusCode: false
  }).then(res => {
    const quantity = res.body.quantidade

    if(quantity !== 1){
      Usuarios.postUsuarios(payload)
    }
  })
})