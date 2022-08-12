import React, { useState } from 'react'

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

export const Calculator = () => {
  const [output, setOutput] = useState('0')

  const operations = {
    clearAll: () => setOutput('0'),
    addDigit: digit => setOutput(prev => prev + digit),
    addOperator: operator =>
      setOutput(prev => prev + operators[operator]),
    calculate: () => {},
    addDot: () => setOutput(prev => prev + '.'),
    addBracket: bracket =>
      setOutput(prev => prev + brackets[bracket]),
    clearEntry: () => {},
  }

  return (
    <CalculatorWrapper>
      <Flex direction="column" justify="start">
        <ControlPanel />
        <CalculatorInner>
          <Flex align="start">
            <CalculatorMain>
              <Flex direction="column" justify="start">
                <Display output={output} />
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
