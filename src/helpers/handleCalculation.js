// I took the basis of the calculation function
// from the project I wrote during the RSSchool course
// Link: https://github.com/treyer/expression-calculator

import { convertInputToString } from '@/helpers/convertInputToString'
import { trimNumber } from '@/helpers/handleKeysInput'

import { CALCULATIONS_PRECISION } from '@/constants'

export const calculateExpression = userInput => {
  let expr = prepareInputForCalculation(userInput)
  const resExpr = userInput.slice()
  expr = expr.replace(/\s/g, '') // delete spaces

  if (
    expr.indexOf('(') === -1 &&
    expr.indexOf(')') === -1
  ) {
    // no parentheses
    const res = +calculateSimpleExpression(expr)
    if (isNaN(res)) throw new Error('Calculation Error')
    return {
      res: trimNumber(
        String(Number(res).toFixed(CALCULATIONS_PRECISION)),
      ),
      expression: resExpr,
    }
  } else {
    // with parentheses
    if (!isBracketsCorrect(expr)) {
      // check if expression has correct brackets
      throw new Error('Error: Incorrect brackets')
    } else {
      while (expr.indexOf('(') !== -1) {
        let begin, end
        for (let i = 0; i < expr.length; i++) {
          if (expr[i] === '(') {
            begin = i
          } else if (expr[i] === ')') {
            end = i
            break
          }
        }
        if (begin === 0 && end === expr.length - 1) {
          expr = calculateSimpleExpression(
            expr.substring(begin + 1, end),
          )
        } else if (begin === 0) {
          expr =
            calculateSimpleExpression(
              expr.substring(begin + 1, end),
            ) + expr.substring(end + 1)
        } else if (end === expr.length - 1) {
          const calculatedSimpleExpr = calculateSimpleExpression(
            expr.substring(begin + 1, end),
          )
          if (
            calculatedSimpleExpr[0] === '-' &&
            expr[begin - 1] === '+'
          ) {
            expr =
              expr.substring(0, begin - 1) +
              calculatedSimpleExpr // -+ => -
          } else if (
            calculatedSimpleExpr[0] === '-' &&
            expr[begin - 1] === '-'
          ) {
            expr =
              expr.substring(0, begin - 1) +
              '+' +
              calculatedSimpleExpr.substring(1) // -- => +
          } else {
            expr =
              expr.substring(0, begin) +
              calculatedSimpleExpr
          }
        } else {
          const calculatedSimpleExpr = calculateSimpleExpression(
            expr.substring(begin + 1, end),
          )
          if (
            calculatedSimpleExpr[0] === '-' &&
            expr[begin - 1] === '+'
          ) {
            expr =
              expr.substring(0, begin - 1) +
              calculatedSimpleExpr +
              expr.substring(end + 1) // -+ => -
          } else if (
            calculatedSimpleExpr[0] === '-' &&
            expr[begin - 1] === '-'
          ) {
            expr =
              expr.substring(0, begin - 1) +
              '+' +
              calculatedSimpleExpr.substring(1) +
              expr.substring(end + 1) // -- => +
          } else {
            expr =
              expr.substring(0, begin) +
              calculatedSimpleExpr +
              expr.substring(end + 1)
          }
        }
      }

      expr = calculateSimpleExpression(expr) // expr without brackets

      // if result has encrypted exponent - decipher it
      let eIndex
      if (expr.indexOf('ex') > 0) {
        eIndex = expr.indexOf('ex')
        expr =
          expr.substr(0, eIndex + 1) +
          '-' +
          expr.substr(eIndex + 2)
      }

      if (isNaN(+expr)) throw new Error('Calculation Error')
      return {
        res: trimNumber(
          String(
            Number(expr).toFixed(CALCULATIONS_PRECISION),
          ),
        ),
        expression: resExpr,
      }
    }
  }
}

// calculates expression without parenthesis
const calculateSimpleExpression = simpleStr => {
  let indexModul = simpleStr.indexOf('%')
  let indexMult = simpleStr.indexOf('*')
  let indexDev = simpleStr.indexOf('/')
  let indexSubtr = simpleStr.indexOf('-', 1)
  let indexAdd = simpleStr.indexOf('+')

  while (
    indexModul > -1 ||
    indexMult > -1 ||
    indexDev > -1 ||
    indexSubtr > -1 ||
    indexAdd > -1
  ) {
    if (
      (indexModul > -1 && indexMult > -1) ||
      (indexMult > -1 && indexDev > -1) ||
      (indexModul > -1 && indexDev > -1)
    ) {
      const minPositive = [indexModul, indexMult, indexDev]
        .sort((a, b) => a - b)
        .find(el => el !== -1)

      if (minPositive === indexModul) {
        simpleStr = makeOperation(
          simpleStr,
          '%',
          indexModul,
        )
      }
      if (minPositive === indexMult) {
        simpleStr = makeOperation(simpleStr, '*', indexMult)
      }
      if (minPositive === indexDev) {
        simpleStr = makeOperation(simpleStr, '/', indexDev)
      }
    } else if (indexModul > -1) {
      simpleStr = makeOperation(simpleStr, '%', indexModul)
    } else if (indexMult > -1) {
      simpleStr = makeOperation(simpleStr, '*', indexMult)
    } else if (indexDev > -1) {
      simpleStr = makeOperation(simpleStr, '/', indexDev)
    } else if (indexSubtr > -1 && indexAdd > -1) {
      if (indexSubtr < indexAdd) {
        simpleStr = makeOperation(
          simpleStr,
          '-',
          indexSubtr,
        )
      } else {
        simpleStr = makeOperation(simpleStr, '+', indexAdd)
      }
    } else if (indexSubtr > -1) {
      simpleStr = makeOperation(simpleStr, '-', indexSubtr)
    } else if (indexAdd > -1) {
      simpleStr = makeOperation(simpleStr, '+', indexAdd)
    }

    indexModul = simpleStr.indexOf('%')
    indexMult = simpleStr.indexOf('*')
    indexDev = simpleStr.indexOf('/')
    indexSubtr = simpleStr.indexOf('-', 1)
    indexAdd = simpleStr.indexOf('+')
  }

  return simpleStr
}

const makeOperation = (
  str,
  operationSign,
  operatorPosition,
) => {
  let firstOperand = ''
  let secondOperand = ''
  let strCutBegin
  let strCutEnd
  let operationResult

  // get first operand
  let i = operatorPosition - 1
  while (i > -1) {
    if (str[i] === '-' && i === 0) {
      strCutBegin = 0
      break
    }
    if (
      str[i] !== '%' &&
      str[i] !== '*' &&
      str[i] !== '/' &&
      str[i] !== '+' &&
      str[i] !== '-'
    ) {
      // if (str[i] !== ' '){
      strCutBegin = i
    } else {
      break
    }
    i--
  }
  firstOperand = str.substring(
    strCutBegin,
    operatorPosition,
  )

  // get second operand
  i = operatorPosition + 1
  while (i < str.length) {
    if (str[i] === '-' && i === operatorPosition + 1) {
      secondOperand += str[i]
      strCutEnd = i
    } else if (
      str[i] !== '%' &&
      str[i] !== '*' &&
      str[i] !== '/' &&
      str[i] !== '+' &&
      str[i] !== '-'
    ) {
      // if(str[i] !== " "){
      secondOperand += str[i]
      strCutEnd = i
    } else {
      break
    }
    i++
  }

  // decipher the exponent with a minus: "ex" to "e-"
  let eIndex
  if (firstOperand.indexOf('ex') > 0) {
    eIndex = firstOperand.indexOf('ex')
    firstOperand =
      firstOperand.substr(0, eIndex + 1) +
      '-' +
      firstOperand.substr(eIndex + 2)
  }

  if (secondOperand.indexOf('ex') > 0) {
    eIndex = secondOperand.indexOf('ex')
    secondOperand =
      secondOperand.substr(0, eIndex + 1) +
      '-' +
      secondOperand.substr(eIndex + 2)
  }

  if (operationSign === '%')
    operationResult = +firstOperand % +secondOperand
  if (operationSign === '*')
    operationResult = +firstOperand * +secondOperand
  if (operationSign === '/') {
    if (+secondOperand === 0)
      throw new Error('Error: Division by zero')
    operationResult = +firstOperand / +secondOperand
  }
  if (operationSign === '+')
    operationResult = +firstOperand + +secondOperand
  if (operationSign === '-')
    operationResult = +firstOperand - +secondOperand

  let result
  if (strCutBegin === 0 && strCutEnd === str.length - 1) {
    result = String(operationResult)
  } else if (strCutBegin === 0) {
    result =
      String(operationResult) + str.substring(strCutEnd + 1)
  } else if (strCutEnd === str.length - 1) {
    result =
      str.substring(0, strCutBegin) +
      String(operationResult)
  } else {
    result =
      str.substring(0, strCutBegin) +
      String(operationResult) +
      str.substring(strCutEnd + 1)
  }
  // encrypt the exponent with a minus: "e-" to "ex"
  if (result.indexOf('e-') > 0) {
    eIndex = result.indexOf('e-')
    result =
      result.substr(0, eIndex + 1) +
      'x' +
      result.substr(eIndex + 2)
  }

  return result
}

export const isBracketsCorrect = expr => {
  const stack = []

  for (let j = 0; j < expr.length; j++) {
    const elem = expr[j]

    if (elem === '(') {
      stack.push(elem)
    } else if (elem === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

// convert numbers to the same format (.5 => 0.5, trim "0") and then convert input to string
export const prepareInputForCalculation = userInput => {
  const transformedUserInput = userInput.map(el => {
    if (Object.keys(el)[0] === 'number') {
      let val = trimNumber(Object.values(el)[0])
      if (val[0] === '.') {
        val = '0' + val
      }
      if (val.slice(0, 2) === '-.') {
        val = '-0.' + val.slice(2)
      }
      return { number: val }
    }
    return el
  })
  const res = convertInputToString(transformedUserInput)
  return res
}
