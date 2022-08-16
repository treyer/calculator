import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Flex from '@/components/Flex/Flex'
import Display from '@/components/Display/Display'
import Keypad from '@/components/Keypad/Keypad'
import { History } from '@/components/History'
import ControlPanel from '@/components/ControlPanel/ControlPanel'
import {
  CalculatorInner,
  CalculatorMain,
  CalculatorWrapper,
} from './components'

import { updateUserInput } from '@/store/actions/data'
import { brackets, operators } from '@/constants'
import { convertInputToString } from '@/helpers/convertInputToString'
import {
  handleAddBracket,
  handleAddDigit,
  handleAddDot,
  handleAddOperator,
  handleClearAll,
  handleClearEntry,
  isInputComplete,
} from '@/helpers/handleKeysInput'
import { calculateExpression } from '@/helpers/handleCalculation'

export const Calculator = () => {
  const { userInput } = useSelector(state => state.data)
  const { expressionType } = useSelector(
    state => state.settings,
  )
  const dispatch = useDispatch()
  const updateInput = newInput => {
    dispatch(updateUserInput(newInput))
  }

  const operations = {
    addDigit: (digit, setIsError) => {
      const res = handleAddDigit(digit, userInput)
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
            const res = calculateExpression(userInput)
            updateInput([
              { number: res },
              { operator: operators[operator] },
            ])
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
          const res = calculateExpression(userInput)
          updateInput([{ number: res }])
        } catch (err) {
          updateInput([{ error: err.message }])
        }
      } else {
        setIsError(true)
      }
    },
  }

  return (
    <CalculatorWrapper>
      <Flex direction="column" justify="start">
        <ControlPanel clearAll={operations.clearAll} />
        <CalculatorInner>
          <Flex align="start">
            <CalculatorMain>
              <Flex direction="column" justify="start">
                <Display
                  output={convertInputToString(userInput)}
                />
                <Keypad operations={operations} />
              </Flex>
            </CalculatorMain>
            <History />
          </Flex>
        </CalculatorInner>
      </Flex>
    </CalculatorWrapper>
  )
}
