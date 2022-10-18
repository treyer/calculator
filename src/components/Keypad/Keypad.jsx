import React from 'react'

import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Key from '@components/Key/Key'
import Flex from '@wrappers/Flex/Flex'
import { Grid } from './components'

import {
  CALCULATOR_TYPE_BASIC,
  KEYS,
  KEYS_ADVANCED,
  CALCULATOR_TYPE_ADVANCED,
} from '@constants'

const Keypad = ({ operations }) => {
  const { calculatorType } = useSelector(
    state => state.settings,
  )
  const keysMap =
    calculatorType === CALCULATOR_TYPE_BASIC
      ? KEYS
      : KEYS_ADVANCED

  const execute = action => {
    operations[action.type](action.payload, action.callback)
  }

  return (
    <Grid
      className={
        calculatorType === CALCULATOR_TYPE_ADVANCED &&
        'advanced'
      }
      data-cy="keypad">
      {keysMap.map(key => (
        <Flex key={key.id} justify="center">
          <Key
            title={key.keyName}
            type={key.type}
            payload={key.payload}
            execute={execute}>
            {key.key}
          </Key>
        </Flex>
      ))}
    </Grid>
  )
}

Keypad.propTypes = {
  operations: PropTypes.shape({
    addDigit: PropTypes.func.isRequired,
    addConstant: PropTypes.func.isRequired,
    addDot: PropTypes.func.isRequired,
    addOperator: PropTypes.func.isRequired,
    addBracket: PropTypes.func.isRequired,
    changeSign: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired,
    clearEntry: PropTypes.func.isRequired,
    calculate: PropTypes.func.isRequired,
  }),
}

export default Keypad
