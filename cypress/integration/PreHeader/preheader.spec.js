describe('Home page PreHeader', () => {
  it('visits the app home page', () => {
    cy.visit('/')
  })

  it('check pre-header and buttons text', () => {
    cy.getBySel('pre-header').should('be.visible')
    cy.contains(
      'Functional components + hooks implementation',
    ).should('be.visible')
    cy.contains('Class components implementation').should(
      'be.visible',
    )
  })

  it('change app type to class components implementation', () => {
    cy.contains('Class components implementation').click()
    cy.get('div[class*="PreHeaderBtn"]')
      .eq(1)
      .should('have.class', 'active')
    cy.get('div[class*="PreHeaderBtn"]')
      .eq(0)
      .should('not.have.class', 'active')
    cy.getBySel('pre-header-class').should('be.visible')
    cy.getBySel('pre-header').should('not.exist')
    cy.getBySel('header-class').should('be.visible')
    cy.getBySel('header').should('not.exist')
    cy.getBySel('calculator-class').should('be.visible')
    cy.getBySel('calculator').should('not.exist')
  })

  it('change app type to functional components implementation', () => {
    cy.contains(
      'Functional components + hooks implementation',
    ).click()
    cy.get('div[class*="PreHeaderBtn"]')
      .eq(0)
      .should('have.class', 'active')
    cy.get('div[class*="PreHeaderBtn"]')
      .eq(1)
      .should('not.have.class', 'active')
    cy.getBySel('pre-header').should('be.visible')
    cy.getBySel('pre-header-class').should('not.exist')
    cy.getBySel('header').should('be.visible')
    cy.getBySel('header-class').should('not.exist')
    cy.getBySel('calculator').should('be.visible')
    cy.getBySel('calculator-class').should('not.exist')
  })
})

describe('Settings page PreHeader', () => {
  it('visits the app settings page', () => {
    cy.visit('/settings')
  })

  it('check pre-header and buttons text', () => {
    cy.getBySel('pre-header').should('be.visible')
    cy.contains(
      'Functional components + hooks implementation',
    ).should('be.visible')
    cy.contains('Class components implementation').should(
      'be.visible',
    )
  })

  it('change app type to class components implementation', () => {
    cy.contains('Class components implementation').click()
    cy.get('div[class*="PreHeaderBtn"]')
      .eq(1)
      .should('have.class', 'active')
    cy.get('div[class*="PreHeaderBtn"]')
      .eq(0)
      .should('not.have.class', 'active')
    cy.getBySel('pre-header-class').should('be.visible')
    cy.getBySel('pre-header').should('not.exist')
    cy.getBySel('header-class').should('be.visible')
    cy.getBySel('header').should('not.exist')
    cy.getBySel('theme-select-class').should('be.visible')
    cy.getBySel('theme-select').should('not.exist')
    cy.getBySel('clear-history-button-class').should(
      'be.visible',
    )
    cy.getBySel('clear-history-button').should('not.exist')
  })

  it('change app type to functional components implementation', () => {
    cy.contains(
      'Functional components + hooks implementation',
    ).click()
    cy.get('div[class*="PreHeaderBtn"]')
      .eq(0)
      .should('have.class', 'active')
    cy.get('div[class*="PreHeaderBtn"]')
      .eq(1)
      .should('not.have.class', 'active')
    cy.getBySel('pre-header').should('be.visible')
    cy.getBySel('pre-header-class').should('not.exist')
    cy.getBySel('header').should('be.visible')
    cy.getBySel('header-class').should('not.exist')
    cy.getBySel('theme-select').should('be.visible')
    cy.getBySel('theme-select-class').should('not.exist')
    cy.getBySel('clear-history-button').should('be.visible')
    cy.getBySel('clear-history-button-class').should(
      'not.exist',
    )
  })
})
