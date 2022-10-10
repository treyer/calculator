describe('History expressions add class components', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Class components implementation').click()
  })

  it('check empty history block', () => {
    cy.getBySel('history-class')
      .should('be.visible')
      .contains('History')
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
  })

  it('no history add on one operand expression', () => {
    cy.getBySel('display-output-class')
      .invoke('text')
      .then(text => expect(text.trim()).equal('0'))
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
    cy.enterBasicKeypadExpression('1=')
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
  })

  it('no history add on one operand and one operator expression', () => {
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
    cy.enterBasicKeypadExpression('1+=')
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
  })

  it('history add on correct expression count', () => {
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
    cy.enterBasicKeypadExpression('1+1=')
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 1)
    cy.getBySel('history-content-box-class')
      .contains('1 + 1 = 2')
      .should('be.visible')
  })

  it('history add multiple history expressions', () => {
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
    cy.enterBasicKeypadExpression('1+1=')
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 1)
    cy.getBySel('history-content-box-class')
      .contains('1 + 1 = 2')
      .should('be.visible')
    cy.clearCalculationResult()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )

    cy.enterBasicKeypadExpression('2+2=')
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 2)
    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .should('be.visible')
    cy.clearCalculationResult()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )

    cy.enterBasicKeypadExpression('3+3=')
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 3)
    cy.getBySel('history-content-box-class')
      .contains('3 + 3 = 6')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('1 + 1 = 2')
      .should('be.visible')
  })
})

describe('History expressions set to display output class components', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Class components implementation').click()
  })

  it('add single history expression to display', () => {
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
    cy.enterBasicKeypadExpression('2+2=')
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 1)
    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .should('be.visible')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '4',
    )
    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '2 + 2',
    )
  })

  it('add one of multiple history expressions to display', () => {
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
    cy.enterBasicKeypadExpression('2+2=')
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('3+3=')
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('4+4=')
    cy.clearCalculationResult()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 3)
    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('3 + 3 = 6')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('4 + 4 = 8')
      .should('be.visible')

    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '2 + 2',
    )
    cy.getBySel('history-content-box-class')
      .contains('3 + 3 = 6')
      .click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '3 + 3',
    )
    cy.getBySel('history-content-box-class')
      .contains('4 + 4 = 8')
      .click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '4 + 4',
    )
  })
})

describe('History expressions remove class components', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Class components implementation').click()
  })

  it('remove history expressions from history box', () => {
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
    cy.enterBasicKeypadExpression('2+2=')
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('3+3=')
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('4+4=')
    cy.clearCalculationResult()

    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 3)
    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('3 + 3 = 6')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('4 + 4 = 8')
      .should('be.visible')

    cy.getBySel('history-content-box-class')
      .contains('4 + 4 = 8')
      .children()
      .click()
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 2)
    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('3 + 3 = 6')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('4 + 4 = 8')
      .should('not.exist')

    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .children()
      .click()
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 1)
    cy.getBySel('history-content-box-class')
      .contains('3 + 3 = 6')
      .should('be.visible')
    cy.getBySel('history-content-box-class')
      .contains('2 + 2 = 4')
      .should('not.exist')

    cy.getBySel('history-content-box-class')
      .contains('3 + 3 = 6')
      .children()
      .click()
    cy.getBySel('history-content-box-class')
      .children()
      .should('have.length', 0)
    cy.getBySel('history-content-box-class')
      .contains('3 + 3 = 6')
      .should('not.exist')
  })
})
