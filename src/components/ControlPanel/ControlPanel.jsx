import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Flex from '@/components/Flex/Flex'
import SwitchPanel from '../SwitchPanel/SwitchPanel'

import {
  changeCalculatorType,
  changeExpressionType,
} from '@/store/actions/settings'
import { PanelWrapper } from './components'

export const ControlPanel = () => {
  const { expressionType } = useSelector(
    state => state.settings,
  )
  const { calculatorType } = useSelector(
    state => state.settings,
  )
  const dispatch = useDispatch()

  const ChangeExpressionType = () => {
    dispatch(changeExpressionType())
  }

  const ChangeCalculatorType = () => {
    dispatch(changeCalculatorType())
  }

  return (
    <PanelWrapper>
      <Flex justify="start">
        <SwitchPanel
          label="Calculator type:"
          textBefore="basic"
          textAfter="advanced"
          isChecked={calculatorType === 'advanced'}
          callback={ChangeCalculatorType}
        />
        <SwitchPanel
          label="Expressions type:"
          textBefore="simple"
          textAfter="complex"
          isChecked={expressionType === 'complex'}
          callback={ChangeExpressionType}
        />
      </Flex>
    </PanelWrapper>
  )
}
