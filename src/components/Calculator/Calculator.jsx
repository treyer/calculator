import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Flex from '@components/Flex/Flex'
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
  updateUserInput,
} from '@store/actions/data'
import {
  brackets,
  numberConstants,
  operators,
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
  const { expressionType } = useSelector(
    state => state.settings,
  )
  const { historyArr } = useSelector(state => state.data)
  const dispatch = useDispatch()

  const updateInput = newInput => {
    dispatch(updateUserInput(newInput))
  }

  const addExpressionToHistory = expr => {
    dispatch(addHistoryItem(expr))
  }

  const operations = {
    addDigit: (digit, setIsError) => {
      const res = handleAddDigit(digit, userInput)
      res ? updateInput(res) : setIsError(true)
    },
    addConstant: (constantType, setIsError) => {
      const res = handleAddConstant(
        numberConstants[constantType],
        userInput,
      )
      res ? updateInput(res) : setIsError(true)
    },
    addDot: (payload, setIsError) => {
      const res = handleAddDot(userInput)
      res ? updateInput(res) : setIsError(true)
    },
    addOperator: (operator, setIsError) => {
      if (
        expressionType === 'simple' &&
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
            addExpressionToHistory(expression)
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
      }
    },
    addBracket: (bracket, setIsError) => {
      if (expressionType === 'complex') {
        const res = handleAddBracket(
          brackets[bracket],
          userInput,
        )
        res ? updateInput(res) : setIsError(true)
      } else {
        setIsError(true)
      }
    },
    changeSign: (payload, setIsError) => {
      const res = handleChangeSign(userInput)
      res ? updateInput(res) : setIsError(true)
    },
    clearAll: () => {
      const res = handleClearAll(userInput)
      if (res) updateInput(res)
    },
    clearEntry: () => {
      const res = handleClearEntry(userInput)
      if (res) updateInput(res)
    },
    calculate: (payload, setIsError) => {
      if (isInputComplete(userInput)) {
        try {
          const { res, expression } = calculateExpression(
            userInput,
          )
          updateInput([{ number: String(res) }])
          addExpressionToHistory(expression)
        } catch (err) {
          updateInput([{ error: err.message }])
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
