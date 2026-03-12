/// <reference types="cypress" />

import { screens } from "../fixtures/screens"
import { user } from "../support/factories/userFactory"
import home_page from "../support/pages/home_page"
import register_page from "../support/pages/register_page"

screens.forEach(screen => {

  describe('Cadastro de usuário', () => {

    beforeEach('Acessando tela de cadastro', () => {

      if (screen != 'desktop') {
        cy.viewport(screen)
      }

      home_page.accessRegisterPage()
        
    })

    it.only('Validar cadastro com sucesso', () => {
        
      register_page.fillName(user.dadosValidos.name)
      register_page.fillEmail(user.dadosValidos.email)
      register_page.fillPassword(user.dadosValidos.senha)
      register_page.saveRegister()
      register_page.checkRegisterSuccess(user.dadosValidos.name)
      
      cy.url().should('include', '/my-account')

    })
    it('Validar todos os campos vazios', () => {
      
      cy.saveRegister()
      cy.checkMessage('O campo nome deve ser prenchido')    

    })
    it('Validar campo com nome vazio', () => {

      //cy.get('#email').type(user.dadosValidos.email)
      cy.fillEmail(user.dadosValidos.email)
      cy.fillPassword(user.dadosValidos.senha)
      cy.saveRegister()
      cy.checkMessage('O campo nome deve ser prenchido')
        
    })
    it('Validar campo com email vazio', () => {

      cy.fillName(user.dadosValidos.name)
      cy.fillPassword(user.dadosValidos.senha)
      cy.saveRegister()
      cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
        
    })
    it('Validar com email inválido', () => {

      cy.fillName(user.dadosValidos.name)
      cy.fillEmail(user.dadosInvalidos.emailInvalido)
      cy.fillPassword(user.dadosValidos.senha)
      cy.saveRegister()
      cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
        
    })
    it('Validar campo com senha vazia', () => {

      cy.fillName(user.dadosValidos.name)
      cy.fillEmail(user.dadosValidos.email)
      cy.saveRegister()
      cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })
    it('Validar campo com senha inválida', () => {
      
      cy.fillName(user.dadosValidos.name)
      cy.fillEmail(user.dadosValidos.email)
      cy.fillPassword(user.dadosInvalidos.senhaInvalida)
      cy.saveRegister()
      cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        
    })
  })

})