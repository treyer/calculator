describe('Display', () => {
  it('visits the app home page and switch class components app type', () => {
    cy.visit('/')
    cy.contains('Class components implementation').click()
  })

  it('check display', () => {
    cy.getBySel('display-class').should('be.visible')
    cy.getBySel('display-output-class').should('be.visible')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
  })

  it('check if correct input shows', () => {
    cy.clickExprModeSwitch()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.enterBasicKeypadExpression('12+13*56/67')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '12 + 13 * 56 / 67',
    )
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('1+2+(3+4)')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + 2 + ( 3 + 4 )',
    )
  })
})
