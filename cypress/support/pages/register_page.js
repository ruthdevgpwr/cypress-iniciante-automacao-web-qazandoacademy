/// <reference types="cypress" />

//Elements

const elements = {

  buttons: {
    register: '#btnRegister'
  },
  fields: {
    name: '#user',
    email: '#email',
    password: '#password'
  },
  messages: {
    error: '.errorLabel',
    successTitle: '#swal2-title',
    successSubtitle: '.swal2-html-container'
  },
}


//Ações/Métodos/Funções

export default {

  saveRegister() {
    cy.get(elements.buttons.register)
      .click()
  },

  fillName(name) {
    cy.get(elements.fields.name)
      .type(name)
  },

  fillEmail(email) {
    cy.get(elements.fields.email)
      .type(email)
  },

  fillPassword(password) {

    cy.get(elements.fields.password)
      .type(password)
  },

  checkMessage(message) {
    cy.get(elements.messages.error)
      .should('be.visible')
      .should('have.text', message)
  },

  checkRegisterSuccess(name) {
    cy.get(elements.messages.successTitle)
      .should('be.visible')
      .should('have.text', 'Cadastro realizado!')

    cy.get(elements.messages.successSubtitle)
      .should('be.visible')
      .should('have.text', `Bem-vindo ${name}`)
  }
  
}