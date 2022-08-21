describe('Header class components', () => {
  it('visits the app home page', () => {
    cy.visit('/')
  })

  it('set class components implementation', () => {
    cy.contains('Class components implementation').click()
  })

  it('check header and buttons text', () => {
    cy.getBySel('header-class')
      .should('be.visible')
      .contains('Calculator App')
    cy.getBySel('header-class').within(() => {
      cy.getBySel('header-nav-class').should('be.visible')
      cy.getBySel('button-home-class')
        .should('be.visible')
        .contains('Home')
      cy.getBySel('button-settings-class')
        .should('be.visible')
        .contains('Settings')
    })
  })

  it('change page to settings', () => {
    cy.getBySel('button-settings-class')
      .click()
      .should('have.class', 'active')
    cy.getBySel('button-home-class').should(
      'not.have.class',
      'active',
    )

    cy.getBySel('pre-header-class').should('be.visible')
    cy.getBySel('header-class').should('be.visible')
    cy.getBySel('theme-select-class').should('be.visible')
    cy.getBySel('clear-history-button-class').should(
      'be.visible',
    )

    cy.getBySel('calculator-class').should('not.exist')
    cy.getBySel('control-panel-class').should('not.exist')
    cy.getBySel('display-class').should('not.exist')
    cy.getBySel('keypad-class').should('not.exist')
    cy.getBySel('history-class').should('not.exist')
  })

  it('change page to home', () => {
    cy.getBySel('button-home-class')
      .click()
      .should('have.class', 'active')
    cy.getBySel('button-settings-class').should(
      'not.have.class',
      'active',
    )

    cy.getBySel('pre-header-class').should('be.visible')
    cy.getBySel('header-class').should('be.visible')
    cy.getBySel('calculator-class').should('be.visible')
    cy.getBySel('control-panel-class').should('be.visible')
    cy.getBySel('display-class').should('be.visible')
    cy.getBySel('keypad-class').should('be.visible')
    cy.getBySel('history-class').should('be.visible')

    cy.getBySel('theme-select-class').should('not.exist')
    cy.getBySel('clear-history-button-class').should(
      'not.exist',
    )
  })
})
