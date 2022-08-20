import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Flex from '@components/Flex/Flex'
import SwitchPanel from '@components/SwitchPanel/SwitchPanel'

import {
  changeCalculatorType,
  changeExpressionType,
} from '@store/actions/settings'
import { PanelWrapper } from './components'

function ControlPanel({ clearAll }) {
  const { expressionType } = useSelector(
    state => state.settings,
  )
  const { calculatorType } = useSelector(
    state => state.settings,
  )
  const dispatch = useDispatch()

  const ChangeExpressionType = () => {
    if (expressionType === 'complex') clearAll()
    dispatch(changeExpressionType())
  }

  const ChangeCalculatorType = () => {
    if (calculatorType === 'advanced') clearAll()
    dispatch(changeCalculatorType())
  }

  return (
    <PanelWrapper data-cy="control-panel">
      <Flex justify="start">
        <SwitchPanel
          label="Calculator type:"
          textBefore="basic"
          textAfter="advanced"
          isChecked={calculatorType === 'advanced'}
          callback={ChangeCalculatorType}
          data-cy="calculator-type-switch"
        />
        <SwitchPanel
          label="Expressions mode:"
          textBefore="simple"
          textAfter="complex"
          isChecked={expressionType === 'complex'}
          callback={ChangeExpressionType}
          data-cy="expression-mode-switch"
        />
      </Flex>
    </PanelWrapper>
  )
}

ControlPanel.propTypes = {
  clearAll: PropTypes.func.isRequired,
}

export default ControlPanel
