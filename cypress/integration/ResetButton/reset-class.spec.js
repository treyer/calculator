describe('Reset button - class components implementation', () => {
  it('visits the app home page', () => {
    cy.visit('/')
  })

  it('set class components implementation app type', () => {
    cy.contains('Class components implementation').click()
  })

  it('check display and history initial values', () => {
    cy.getBySel('display-output-class')
      .invoke('text')
      .then(text => expect(text.trim()).equal('0'))

    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
  })

  it('add test data to history and display, check it', () => {
    cy.enterBasicKeypadExpression('2+2=')
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('3+3=')
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('4+4=')
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('5+5')
    cy.getBySel('display-output-class')
      .invoke('text')
      .then(text => expect(text.trim()).equal('5 + 5'))
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 3)
  })

  it('click reset button and check result', () => {
    cy.getBySel('button-settings-class').click()
    cy.getBySel('clear-history-button-class').click()
    cy.getBySel('button-home-class').click()
    cy.getBySel('display-output-class')
      .invoke('text')
      .then(text => expect(text.trim()).equal('0'))
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
  })
})
