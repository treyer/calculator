import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Flex from '@/components/Flex/Flex'
import Display from '@/components/Display/Display'
import Keypad from '../Keypad/Keypad'
import { History } from '@/components/History'
import { ControlPanel } from '@/components/ControlPanel'
import {
  CalculatorInner,
  CalculatorMain,
  CalculatorWrapper,
} from './components'
import { brackets, operators } from '@/constants/types'
import { convertInputToString } from '@/helpers/convertInputToString'
import { updateUserInput } from '@/store/actions/data'
import {
  handleAddBracket,
  handleAddDigit,
  handleAddDot,
  handleAddOperator,
  handleClearAll,
  handleClearEntry,
} from '@/helpers/handleKeysInput'

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
    addDigit: digit => {
      const res = handleAddDigit(digit, userInput)
      if (res) updateInput(res)
    },
    addDot: () => {
      const res = handleAddDot(userInput)
      if (res) updateInput(res)
    },
    addOperator: operator => {
      if (
        expressionType === 'simple' &&
        userInput.length === 3
      ) {
        // TODO: calculate and add operator
      } else {
        const res = handleAddOperator(
          operators[operator],
          userInput,
        )
        if (res) updateInput(res)
      }
    },
    addBracket: bracket => {
      if (expressionType === 'complex') {
        const res = handleAddBracket(
          brackets[bracket],
          userInput,
        )
        if (res) updateInput(res)
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
    calculate: () => {},
  }

  return (
    <CalculatorWrapper>
      <Flex direction="column" justify="start">
        <ControlPanel />
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
