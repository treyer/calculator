describe('ThemeSelect', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })

  it('check theme select element', () => {
    cy.contains('Switch theme').should('be.visible')
    cy.getBySel('theme-select')
      .should('be.visible')
      .contains('Light theme')
    cy.getBySel('option-select-dark').should(
      'not.be.visible',
    )
    cy.getBySel('option-select-light').should('not.exist')
  })

  it('show-hide options click on element', () => {
    cy.getBySel('theme-select').click()
    cy.getBySel('option-select-dark').should('be.visible')
    cy.getBySel('theme-select').click()
    cy.getBySel('option-select-dark').should(
      'not.be.visible',
    )
  })

  it('close options on click outside', () => {
    cy.getBySel('theme-select').click()
    cy.getBySel('option-select-dark').should('be.visible')
    cy.get('div[class*="Card"]').click()
    cy.getBySel('option-select-dark').should(
      'not.be.visible',
    )
  })

  it('change theme to dark and backward to light', () => {
    cy.get('header').should(
      'have.css',
      'background-color',
      'rgb(67, 67, 67)',
    )
    cy.get('main').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)',
    )
    cy.getBySel('theme-select')
      .should('be.visible')
      .contains('Light theme')
    cy.getBySel('theme-select').click()
    cy.getBySel('option-select-dark').click()
    cy.getBySel('theme-select')
      .should('be.visible')
      .contains('Dark theme')
    cy.getBySel('option-select-light').should(
      'not.be.visible',
    )
    cy.getBySel('option-select-dark').should('not.exist')
    cy.get('header').should(
      'have.css',
      'background-color',
      'rgb(24, 24, 24)',
    )
    cy.get('main').should(
      'have.css',
      'background-color',
      'rgb(128, 128, 128)',
    )

    cy.getBySel('theme-select').click()
    cy.getBySel('option-select-light').click()
    cy.getBySel('theme-select')
      .should('be.visible')
      .contains('Light theme')
    cy.getBySel('option-select-light').should('not.exist')
    cy.getBySel('option-select-dark').should(
      'not.be.visible',
    )
    cy.get('header').should(
      'have.css',
      'background-color',
      'rgb(67, 67, 67)',
    )
    cy.get('main').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)',
    )
  })
})
