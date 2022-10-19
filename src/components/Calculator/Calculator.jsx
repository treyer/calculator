import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import Flex from '@wrappers/Flex/Flex'
import Display from '@components/Display/Display'
import Keypad from '@components/Keypad/Keypad'
import History from '@components/History/History'
import ControlPanel from '@components/ControlPanel/ControlPanel'
import {
  CalculatorInner,
  CalculatorMain,
  CalculatorWrapper,
  KeypadWrapper,
} from './components'

import {
  addHistoryItem,
  clearExpression,
  setExpression,
  updateUserInput,
} from '@store/actions/data'
import {
  brackets,
  numberConstants,
  operators,
  EXPRESSION_TYPE_SIMPLE,
  EXPRESSION_TYPE_COMPLEX,
} from '@constants'
import {
  isInputComplete,
  calculateExpression,
  convertInputToString,
  handleAddBracket,
  handleAddConstant,
  handleAddDigit,
  handleAddDot,
  handleAddOperator,
  handleChangeSign,
  handleClearAll,
  handleClearEntry,
} from '@/utils'

export const Calculator = () => {
  const { userInput } = useSelector(state => state.data)
  const { expression } = useSelector(state => state.data)
  const { expressionType } = useSelector(
    state => state.settings,
  )
  const { historyArr } = useSelector(state => state.data)
  const dispatch = useDispatch()

  const updateInput = newInput => {
    dispatch(updateUserInput(newInput))
  }

  const addExpressionToHistory = (expr, res) => {
    dispatch(
      addHistoryItem({
        id: uuidv4(),
        expression: expr,
        result: res,
      }),
    )
  }

  const clearCalcExpression = () => {
    if (expression.length !== 0) {
      dispatch(clearExpression())
    }
  }

  const setCalcExpression = expr => {
    dispatch(setExpression(expr))
  }

  const operations = {
    addDigit: (digit, setIsError) => {
      const res = handleAddDigit(digit, userInput)
      res ? updateInput(res) : setIsError(true)
      if (res) clearCalcExpression()
    },
    addConstant: (constantType, setIsError) => {
      const res = handleAddConstant(
        numberConstants[constantType],
        userInput,
      )
      res ? updateInput(res) : setIsError(true)
      if (res) clearCalcExpression()
    },
    addDot: (payload, setIsError) => {
      const res = handleAddDot(userInput)
      res ? updateInput(res) : setIsError(true)
      if (res) clearCalcExpression()
    },
    addOperator: (operator, setIsError) => {
      if (
        expressionType === EXPRESSION_TYPE_SIMPLE &&
        userInput.length === 3
      ) {
        if (isInputComplete(userInput)) {
          try {
            const { res, expression } = calculateExpression(
              userInput,
            )
            updateInput([
              { number: String(res) },
              { operator: operators[operator] },
            ])
            addExpressionToHistory(expression, res)
            setCalcExpression(
              `${convertInputToString(expression)} =`,
            )
          } catch (err) {
            updateInput([{ error: err.message }])
          }
        } else {
          setIsError(true)
        }
      } else {
        const res = handleAddOperator(
          operators[operator],
          userInput,
        )
        res ? updateInput(res) : setIsError(true)
        if (res) clearCalcExpression()
      }
    },
    addBracket: (bracket, setIsError) => {
      if (expressionType === EXPRESSION_TYPE_COMPLEX) {
        const res = handleAddBracket(
          brackets[bracket],
          userInput,
        )
        res ? updateInput(res) : setIsError(true)
        if (res) clearCalcExpression()
      } else {
        setIsError(true)
      }
    },
    changeSign: (payload, setIsError) => {
      const res = handleChangeSign(userInput)
      res ? updateInput(res) : setIsError(true)
      if (res) clearCalcExpression()
    },
    clearAll: () => {
      const res = handleClearAll(userInput)
      if (res) updateInput(res)
      if (res) clearCalcExpression()
    },
    clearEntry: () => {
      const res = handleClearEntry(userInput)
      if (res) updateInput(res)
      if (res) clearCalcExpression()
    },
    calculate: (payload, setIsError) => {
      if (isInputComplete(userInput)) {
        try {
          const { res, expression } = calculateExpression(
            userInput,
          )
          updateInput([{ number: String(res) }])
          addExpressionToHistory(expression, res)
          setCalcExpression(
            `${convertInputToString(expression)} =`,
          )
        } catch (err) {
          updateInput([{ error: err.message }])
          clearCalcExpression()
        }
      } else {
        setIsError(true)
      }
    },
  }

  return (
    <CalculatorWrapper data-cy="calculator">
      <Flex direction="column" justify="start">
        <ControlPanel clearAll={operations.clearAll} />
        <CalculatorInner>
          <Flex align="start">
            <CalculatorMain>
              <Flex direction="column" justify="start">
                <Display
                  output={convertInputToString(userInput)}
                  expression={expression}
                />
                <KeypadWrapper>
                  <Keypad operations={operations} />
                </KeypadWrapper>
              </Flex>
            </CalculatorMain>
            <History operationsHistory={historyArr} />
          </Flex>
        </CalculatorInner>
      </Flex>
    </CalculatorWrapper>
  )
}
