import './commands'
import 'cypress-file-upload'

Cypress.on('uncaught:exception', () => {
  return false
})
