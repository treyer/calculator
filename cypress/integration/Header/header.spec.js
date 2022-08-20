describe('Header', () => {
  it('visits the app home page', () => {
    cy.visit('/')
  })

  it('check header and buttons text', () => {
    cy.getBySel('header')
      .should('be.visible')
      .contains('Calculator App')
    cy.getBySel('header').within(() => {
      cy.getBySel('header-nav').should('be.visible')
      cy.getBySel('button-home')
        .should('be.visible')
        .contains('Home')
      cy.getBySel('button-settings')
        .should('be.visible')
        .contains('Settings')
    })
  })

  it('change page to settings', () => {
    cy.getBySel('button-settings')
      .click()
      .should('have.class', 'active')
    cy.getBySel('button-home').should(
      'not.have.class',
      'active',
    )

    cy.getBySel('pre-header').should('be.visible')
    cy.getBySel('header').should('be.visible')
    cy.getBySel('theme-select').should('be.visible')
    cy.getBySel('clear-history-button').should('be.visible')

    cy.getBySel('calculator').should('not.exist')
    cy.getBySel('control-panel').should('not.exist')
    cy.getBySel('display').should('not.exist')
    cy.getBySel('keypad').should('not.exist')
    cy.getBySel('history').should('not.exist')
  })

  it('change page to home', () => {
    cy.getBySel('button-home')
      .click()
      .should('have.class', 'active')
    cy.getBySel('button-settings').should(
      'not.have.class',
      'active',
    )

    cy.getBySel('pre-header').should('be.visible')
    cy.getBySel('header').should('be.visible')
    cy.getBySel('calculator').should('be.visible')
    cy.getBySel('control-panel').should('be.visible')
    cy.getBySel('display').should('be.visible')
    cy.getBySel('keypad').should('be.visible')
    cy.getBySel('history').should('be.visible')

    cy.getBySel('theme-select').should('not.exist')
    cy.getBySel('clear-history-button').should('not.exist')
  })
})
