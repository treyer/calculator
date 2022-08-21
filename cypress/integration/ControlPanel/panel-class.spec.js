describe('Options panel - class components implementation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Class components implementation').click()
  })

  it('check options panel initial state', () => {
    cy.getBySel('control-panel-class').should('be.visible')
    cy.get('h5[class*="PanelLabel"]')
      .eq(0)
      .contains('Calculator type:')
    cy.get('h5[class*="PanelLabel"]')
      .eq(1)
      .contains('Expressions mode:')
    cy.get('h6[class*="PanelText"]')
      .eq(0)
      .should('have.class', 'active')
      .contains('basic')
    cy.get('h6[class*="PanelText"]')
      .eq(1)
      .should('not.have.class', 'active')
      .contains('advanced')
    cy.get('h6[class*="PanelText"]')
      .eq(2)
      .should('have.class', 'active')
      .contains('simple')
    cy.get('h6[class*="PanelText"]')
      .eq(3)
      .should('not.have.class', 'active')
      .contains('complex')
    cy.get('label').should('have.length', 2)
    cy.get('input[type="checkbox"]').should(
      'have.length',
      2,
    )
    cy.get('input[type="checkbox"]')
      .eq(0)
      .should('not.be.checked')
    cy.get('input[type="checkbox"]')
      .eq(1)
      .should('not.be.checked')
  })

  it('check calculator type change', () => {
    cy.get('h6[class*="PanelText"]')
      .eq(0)
      .should('have.class', 'active')
      .contains('basic')
    cy.get('h6[class*="PanelText"]')
      .eq(1)
      .should('not.have.class', 'active')
      .contains('advanced')
    cy.checkKeypad('basic')
    cy.get('div[title="modulus"]').should('not.exist')
    cy.get('div[title="change sign"]').should('not.exist')
    cy.get('div[title="Pi"]').should('not.exist')
    cy.get('div[title="golden ratio"]').should('not.exist')
    // change calculator type to advanced and test
    cy.get('label')
      .eq(0)
      .click()
    cy.get('input[type="checkbox"]')
      .eq(0)
      .should('be.checked')
    cy.get('h6[class*="PanelText"]')
      .eq(0)
      .should('not.have.class', 'active')
      .contains('basic')
    cy.get('h6[class*="PanelText"]')
      .eq(1)
      .should('have.class', 'active')
      .contains('advanced')
    cy.checkKeypad('advanced')
    // change calculator type back to basic and test
    cy.get('label')
      .eq(0)
      .click()
    cy.get('h6[class*="PanelText"]')
      .eq(0)
      .should('have.class', 'active')
      .contains('basic')
    cy.get('h6[class*="PanelText"]')
      .eq(1)
      .should('not.have.class', 'active')
      .contains('advanced')
    cy.checkKeypad('basic')
    cy.get('div[title="modulus"]').should('not.exist')
    cy.get('div[title="change sign"]').should('not.exist')
    cy.get('div[title="Pi"]').should('not.exist')
    cy.get('div[title="golden ratio"]').should('not.exist')
  })

  it('check expressions mode change', () => {
    cy.get('h6[class*="PanelText"]')
      .eq(2)
      .should('have.class', 'active')
      .contains('simple')
    cy.get('h6[class*="PanelText"]')
      .eq(3)
      .should('not.have.class', 'active')
      .contains('complex')
    cy.enterBasicKeypadExpression('2+2+')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '4 +',
    )
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 1)
    cy.getBySel('history-content-box-class')
      .contains('2 + 2')
      .should('be.visible')
    cy.clearCalculationResult()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.get('div[title="open bracket"]')
      .click()
      .should('have.class', 'error')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.get('div[title="close bracket"]')
      .click()
      .should('have.class', 'error')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    // change expressions mode to complex and test
    cy.get('label')
      .eq(1)
      .click()
    cy.enterBasicKeypadExpression('3+3+')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '3 + 3 +',
    )
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 1)
    cy.getBySel('history-content-box-class')
      .contains('2 + 2')
      .should('be.visible')
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('(4+4)')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 4 + 4 )',
    )
    // change expressions mode to simple and test
    cy.get('label')
      .eq(1)
      .click()
    cy.enterBasicKeypadExpression('3+3+')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '6 +',
    )
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 2)
    cy.getBySel('history-content-box-class')
      .contains('2 + 2')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('3 + 3')
      .should('be.visible')
    cy.clearCalculationResult()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.get('div[title="open bracket"]')
      .click()
      .should('have.class', 'error')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.get('div[title="close bracket"]')
      .click()
      .should('have.class', 'error')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
  })
})
