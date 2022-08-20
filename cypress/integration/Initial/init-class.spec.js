describe('Home page - class components app version', () => {
  it('visits the app home page', () => {
    cy.visit('/')
  })

  it('select class components app version', () => {
    cy.contains('Class components implementation')
      .should('be.visible')
      .click()
  })

  it('check pre-header', () => {
    cy.getBySel('pre-header-class').should('be.visible')
  })

  it('check header with menu', () => {
    cy.getBySel('header-class')
      .should('be.visible')
      .contains('Calculator App')
    cy.getBySel('header-nav-class').should('be.visible')
  })

  it('check calculator with inner components', () => {
    cy.getBySel('calculator-class').should('be.visible')
    cy.getBySel('control-panel-class').should('be.visible')
    cy.getBySel('display-class').should('be.visible')
    cy.getBySel('keypad-class').should('be.visible')
    cy.getBySel('history-class').should('be.visible')
  })
})

describe('Settings page - class components app version', () => {
  it('visits the app settings page', () => {
    cy.visit('/settings')
  })

  it('select class components app version', () => {
    cy.contains('Class components implementation')
      .should('be.visible')
      .click()
  })

  it('check pre-header', () => {
    cy.getBySel('pre-header-class').should('be.visible')
  })

  it('check header with menu', () => {
    cy.getBySel('header-class')
      .should('be.visible')
      .contains('Calculator App')
    cy.getBySel('header-nav-class').should('be.visible')
  })

  it('check theme switcher', () => {
    cy.getBySel('theme-select-class').should('be.visible')
  })

  it('check clear all history button', () => {
    cy.getBySel('clear-history-button-class').should(
      'be.visible',
    )
  })
})
