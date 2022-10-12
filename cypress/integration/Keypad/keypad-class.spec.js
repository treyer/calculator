describe('Keypad common', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
    cy.contains('Class components implementation')
      .should('be.visible')
      .click()
  })

  it('check basic keypad structure', () => {
    cy.checkKeypad('basic')
  })

  it('check advanced keypad', () => {
    cy.clickCalcTypeSwitch()
    cy.checkKeypad('advanced')
  })

  it('check numbers input', () => {
    cy.enterBasicKeypadExpression('1234567890')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1234567890',
    )
  })

  it('check operators input', () => {
    cy.clickExprModeSwitch()
    cy.clickCalcTypeSwitch()
    cy.enterAdvancedKeypadExpression('1+2-3*4/5%6')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + 2 - 3 * 4 / 5 % 6',
    )
  })

  it('check minus operator input as digit sign', () => {
    cy.enterBasicKeypadExpression('1--2')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 - -2',
    )
  })

  it('check brackets input', () => {
    cy.clickExprModeSwitch()
    cy.enterBasicKeypadExpression('(0)')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 0 )',
    )
  })

  it('check standard point input', () => {
    cy.enterBasicKeypadExpression('1.0001')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1.0001',
    )
  })

  it('check point input in format without digit before (.5)', () => {
    cy.enterBasicKeypadExpression('1+.5')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + .5',
    )
  })

  it('check constants input', () => {
    cy.clickCalcTypeSwitch()
    cy.enterAdvancedKeypadExpression('π+φ')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '3.14159 + 1.61803',
    )
  })

  it('check change sign button', () => {
    cy.clickCalcTypeSwitch()
    cy.enterAdvancedKeypadExpression('1+4±')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + -4',
    )
    cy.enterAdvancedKeypadExpression('±')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + 4',
    )
  })

  it('check clear button', () => {
    cy.clickExprModeSwitch()
    cy.enterBasicKeypadExpression('1+(9-5)')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + ( 9 - 5 )',
    )
    cy.enterBasicKeypadExpression('C')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
  })

  it('check clear entry button', () => {
    cy.clickExprModeSwitch()
    cy.enterBasicKeypadExpression('1+(9-5)')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + ( 9 - 5 )',
    )
    cy.get(`div[title="clear entry"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + ( 9 - 5',
    )
    cy.get(`div[title="clear entry"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + ( 9 -',
    )
    cy.get(`div[title="clear entry"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + ( 9',
    )
    cy.get(`div[title="clear entry"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + (',
    )
    cy.get(`div[title="clear entry"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 +',
    )
    cy.get(`div[title="clear entry"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1',
    )
    cy.get(`div[title="clear entry"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
  })
})

describe('Keypad input validations', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
    cy.contains('Class components implementation')
      .should('be.visible')
      .click()
  })

  it('forbid input 0-digit if last number is 0', () => {
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.get(`div[title="zero"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
  })

  it('forbid add digit after close bracket', () => {
    cy.clickExprModeSwitch()
    cy.enterAdvancedKeypadExpression('(9+9)')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 + 9 )',
    )
    cy.get(`div[title="one"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 + 9 )',
    )
  })

  it('forbid input constant after close bracket', () => {
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
    cy.enterAdvancedKeypadExpression('(9+9)')
    cy.get(`div[title="Pi"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 + 9 )',
    )
    cy.clearCalculationResult()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.enterAdvancedKeypadExpression('(9+9)')
    cy.get(`div[title="golden ratio"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 + 9 )',
    )
  })

  it('forbid input dot after close bracket', () => {
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
    cy.enterAdvancedKeypadExpression('(9+9)')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 + 9 )',
    )
    cy.get(`div[title="dot"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 + 9 )',
    )
  })

  it('forbid input dot if the number already has dot', () => {
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.enterBasicKeypadExpression('1.08')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1.08',
    )
    cy.get(`div[title="dot"]`).click()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1.08',
    )
  })

  it('forbid input operator if number input is not complete (only number inputted)', () => {
    cy.clickCalcTypeSwitch()
    cy.enterAdvancedKeypadExpression('-')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '-',
    )
    cy.enterAdvancedKeypadExpression('*/+-%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '-',
    )

    cy.enterAdvancedKeypadExpression('.')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '-.',
    )
    cy.enterAdvancedKeypadExpression('*/+-%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '-.',
    )
    cy.clearCalculationResult()

    cy.enterAdvancedKeypadExpression('1+.')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + .',
    )
    cy.enterAdvancedKeypadExpression('*/+-%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + .',
    )
    cy.clearCalculationResult()

    cy.enterAdvancedKeypadExpression('9.')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9.',
    )
    cy.enterAdvancedKeypadExpression('*/+-%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9.',
    )
  })

  it('forbid input operator if number input is not complete (expression inputted)', () => {
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
    cy.enterAdvancedKeypadExpression('(-')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( -',
    )
    cy.enterAdvancedKeypadExpression('*/+-%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( -',
    )

    cy.enterAdvancedKeypadExpression('.')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( -.',
    )
    cy.enterAdvancedKeypadExpression('*/+-%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( -.',
    )
    cy.clearCalculationResult()

    cy.enterAdvancedKeypadExpression('1+.')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + .',
    )
    cy.enterAdvancedKeypadExpression('*/+-%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '1 + .',
    )
    cy.clearCalculationResult()

    cy.enterAdvancedKeypadExpression('(9.')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9.',
    )
    cy.enterAdvancedKeypadExpression('*/+-%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9.',
    )
  })

  it('forbid input operator (except "-") after single bracket input', () => {
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
    cy.enterAdvancedKeypadExpression('(')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '(',
    )
    cy.enterAdvancedKeypadExpression('*/+%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '(',
    )
    cy.enterAdvancedKeypadExpression('-')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( -',
    )
  })

  it('forbid input operator (except "-") after not single open bracket input', () => {
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
    cy.enterAdvancedKeypadExpression('4+(')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '4 + (',
    )
    cy.enterAdvancedKeypadExpression('*/+%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '4 + (',
    )
    cy.enterAdvancedKeypadExpression('-')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '4 + ( -',
    )
  })

  it('forbid input operator (except "-") if last key input is the same operator', () => {
    cy.clickCalcTypeSwitch()
    cy.enterBasicKeypadExpression('7*')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 *',
    )
    cy.enterAdvancedKeypadExpression('*')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 *',
    )
    cy.clearCalculationResult()

    cy.enterBasicKeypadExpression('7+')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 +',
    )
    cy.enterAdvancedKeypadExpression('+')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 +',
    )
    cy.clearCalculationResult()

    cy.enterBasicKeypadExpression('7/')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 /',
    )
    cy.enterAdvancedKeypadExpression('/')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 /',
    )
    cy.clearCalculationResult()

    cy.enterAdvancedKeypadExpression('7%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 %',
    )
    cy.enterAdvancedKeypadExpression('%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 %',
    )
    cy.clearCalculationResult()

    cy.enterBasicKeypadExpression('7-')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 -',
    )
    cy.enterAdvancedKeypadExpression('-')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7 - -',
    )
    cy.clearCalculationResult()
  })

  it('forbid input bracket if only single number inputted', () => {
    cy.clickExprModeSwitch()
    cy.enterBasicKeypadExpression('7')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7',
    )
    cy.enterBasicKeypadExpression('(')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7',
    )
    cy.enterBasicKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '7',
    )
  })

  it('forbid input close bracket after open bracket', () => {
    cy.clickExprModeSwitch()
    cy.enterBasicKeypadExpression('(')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '(',
    )
    cy.enterBasicKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '(',
    )
  })

  it('forbid input open bracket after number', () => {
    cy.clickExprModeSwitch()
    cy.enterBasicKeypadExpression('888')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '888',
    )
    cy.enterBasicKeypadExpression('(')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '888',
    )
  })

  it('forbid input close bracket if open brackets count not more then close brackets', () => {
    cy.clickExprModeSwitch()
    cy.enterBasicKeypadExpression('9')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9',
    )
    cy.enterBasicKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9',
    )
    cy.clearCalculationResult()

    cy.enterBasicKeypadExpression('(9+9)')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 + 9 )',
    )
    cy.enterBasicKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 + 9 )',
    )
    cy.clearCalculationResult()

    cy.enterBasicKeypadExpression('((9+9)')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( ( 9 + 9 )',
    )
    cy.enterBasicKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( ( 9 + 9 ) )',
    )
  })

  it('forbid close bracket after operator', () => {
    cy.clickExprModeSwitch()
    cy.clickCalcTypeSwitch()
    cy.enterBasicKeypadExpression('(9*')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 *',
    )
    cy.enterBasicKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 *',
    )
    cy.clearCalculationResult()

    cy.enterBasicKeypadExpression('(9/')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 /',
    )
    cy.enterBasicKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 /',
    )
    cy.clearCalculationResult()

    cy.enterBasicKeypadExpression('(9-')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 -',
    )
    cy.enterBasicKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 -',
    )
    cy.clearCalculationResult()

    cy.enterBasicKeypadExpression('(9+')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 +',
    )
    cy.enterBasicKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 +',
    )
    cy.clearCalculationResult()

    cy.enterAdvancedKeypadExpression('(9%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 %',
    )
    cy.enterAdvancedKeypadExpression(')')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 %',
    )
    cy.clearCalculationResult()
  })

  it('change sign possible only on number', () => {
    cy.clickExprModeSwitch()
    cy.clickCalcTypeSwitch()
    cy.enterAdvancedKeypadExpression('(')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '(',
    )
    cy.enterAdvancedKeypadExpression('±')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '(',
    )

    cy.enterAdvancedKeypadExpression('9*')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 *',
    )
    cy.enterAdvancedKeypadExpression('±')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '( 9 *',
    )
  })
})

describe('Keypad input improvements', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clickCalcTypeSwitch()
    cy.clickExprModeSwitch()
    cy.contains('Class components implementation')
      .should('be.visible')
      .click()
  })

  it('replace last "0" number to non-0 digit input', () => {
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.enterBasicKeypadExpression('9')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9',
    )
    cy.clearCalculationResult()
    cy.enterBasicKeypadExpression('9+09')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9 + 9',
    )
  })

  it('replace first "0" number to "-" on minus input', () => {
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.enterBasicKeypadExpression('-')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '-',
    )
  })

  it('replace last operator with operator input if not the same', () => {
    cy.clickCalcTypeSwitch()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.enterBasicKeypadExpression('9*')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9 *',
    )
    cy.enterBasicKeypadExpression('/')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9 /',
    )
    cy.enterBasicKeypadExpression('-')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9 -',
    )
    cy.enterBasicKeypadExpression('*')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9 *',
    )
    cy.enterAdvancedKeypadExpression('%')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '9 %',
    )
  })

  it('replace first "0" number to open bracket', () => {
    cy.clickExprModeSwitch()
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '0',
    )
    cy.enterBasicKeypadExpression('(')
    cy.getBySelAndCheckTextInside(
      'display-output-class',
      '(',
    )
  })
})
