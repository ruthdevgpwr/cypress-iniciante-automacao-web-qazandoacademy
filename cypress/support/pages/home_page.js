/// <reference types="cypress" />

Cypress.Commands.add('accessRegisterPage', () => {

  

})

export default {
  accessRegisterPage() {

    cy.visit('/')
      .get('.header-logo')
    
    cy.get('.fa-lock')
      .click()
    
    cy.url().should('include', '/register')

    cy.get('#user')
      .should('be.visible')
  }
}