describe('Display', () => {
  it('visits the app home page', () => {
    cy.visit('/')
  })

  it('check display', () => {
    cy.getBySel('display').should('be.visible')
    cy.getBySel('display-output').should('be.visible')
    cy.getBySelAndCheckTextInside('display-output', '0')
  })

  it('check if correct input shows', () => {
    cy.getBySelAndCheckTextInside('display-output', '0')
    cy.enterBasicKeypadExpression('12+13*56/67')
    cy.getBySelAndCheckTextInside(
      'display-output',
      '12 + 13 * 56 / 67',
    )
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('1+2+(3+4)')
    cy.getBySelAndCheckTextInside(
      'display-output',
      '1 + 2 + ( 3 + 4 )',
    )
  })
})
