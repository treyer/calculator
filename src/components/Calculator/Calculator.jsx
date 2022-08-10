import React from 'react'

import Flex from '@/components/Flex/Flex'
import { Display } from '@/components/Display'
import { Keypad } from '@/components/Keypad'
import { History } from '@/components/History'
import { ControlPanel } from '@/components/ControlPanel'
import {
  CalculatorInner,
  CalculatorMain,
  CalculatorWrapper,
} from './components'

export const Calculator = () => {
  return (
    <CalculatorWrapper>
      <Flex direction="column" justify="start">
        <ControlPanel />
        <CalculatorInner>
          <Flex>
            <CalculatorMain>
              <Flex direction="column" justify="start">
                <Display />
                <Keypad />
              </Flex>
            </CalculatorMain>
            <History />
          </Flex>
        </CalculatorInner>
      </Flex>
    </CalculatorWrapper>
  )
}
