const KEYS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  '*': 'multiply',
  '/': 'divide',
  '-': 'subtract',
  '+': 'add',
  '=': 'calculate',
  '.': 'dot',
  '(': 'open bracket',
  ')': 'close bracket',
  C: 'clear',
  CE: 'clear entry',
}

const KEYS_ADVANCED = {
  ...KEYS,
  '%': 'modulus',
  '±': 'change sign',
  π: 'Pi',
  φ: 'golden ratio',
}

Cypress.Commands.add(
  'enterBasicKeypadExpression',
  exprInString => {
    exprInString.split('').forEach(key => {
      cy.get(`div[title="${KEYS[key]}"]`).click()
    })
  },
)

Cypress.Commands.add(
  'enterAdvancedKeypadExpression',
  exprInString => {
    exprInString.split('').forEach(key => {
      cy.get(`div[title="${KEYS_ADVANCED[key]}"]`).click()
    })
  },
)

Cypress.Commands.add('checkCalculationResult', result => {
  cy.get('#output')
    .invoke('text')
    .then(text => expect(text.trim()).equal(result))
})

Cypress.Commands.add('clearCalculationResult', () => {
  cy.get(`div[title="clear"]`).click()
})
