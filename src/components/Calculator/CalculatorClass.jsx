import React from 'react'

import FlexClass from '@/components/Flex/FlexClass'
import { DisplayClass } from '@/components/Display'
import { KeypadClass } from '@/components/Keypad'
import { HistoryClass } from '@/components/History'
import ControlPanelClass from '../ControlPanel/ControlPanelClass'
import {
  CalculatorInner,
  CalculatorMain,
  CalculatorWrapper,
} from './components'

export class CalculatorClass extends React.Component {
  render() {
    return (
      <CalculatorWrapper>
        <FlexClass direction="column" justify="start">
          <ControlPanelClass />
          <CalculatorInner>
            <FlexClass align="start">
              <CalculatorMain>
                <FlexClass
                  direction="column"
                  justify="start">
                  <DisplayClass />
                  <KeypadClass />
                </FlexClass>
              </CalculatorMain>
              <HistoryClass />
            </FlexClass>
          </CalculatorInner>
        </FlexClass>
      </CalculatorWrapper>
    )
  }
}
