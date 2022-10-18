import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Flex from '@wrappers/Flex/Flex'
import SwitchPanel from '@controls/SwitchPanel/SwitchPanel'

import {
  changeCalculatorType,
  changeExpressionType,
} from '@store/actions/settings'
import { PanelWrapper } from './components'
import {
  EXPRESSION_TYPE_COMPLEX,
  CALCULATOR_TYPE_ADVANCED,
} from '@constants'

function ControlPanel({ clearAll }) {
  const { expressionType } = useSelector(
    state => state.settings,
  )
  const { calculatorType } = useSelector(
    state => state.settings,
  )
  const dispatch = useDispatch()

  const ChangeExpressionType = () => {
    if (expressionType === EXPRESSION_TYPE_COMPLEX)
      clearAll()
    dispatch(changeExpressionType())
  }

  const ChangeCalculatorType = () => {
    if (calculatorType === CALCULATOR_TYPE_ADVANCED)
      clearAll()
    dispatch(changeCalculatorType())
  }

  return (
    <PanelWrapper data-cy="control-panel">
      <Flex justify="start">
        <SwitchPanel
          label="Calculator type:"
          textBefore="basic"
          textAfter="advanced"
          isChecked={
            calculatorType === CALCULATOR_TYPE_ADVANCED
          }
          callback={ChangeCalculatorType}
        />
        <SwitchPanel
          label="Expressions mode:"
          textBefore="simple"
          textAfter="complex"
          isChecked={
            expressionType === EXPRESSION_TYPE_COMPLEX
          }
          callback={ChangeExpressionType}
        />
      </Flex>
    </PanelWrapper>
  )
}

ControlPanel.propTypes = {
  clearAll: PropTypes.func.isRequired,
}

export default ControlPanel
