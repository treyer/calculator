import React from 'react'
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types'

import Key from '@/components/Key/Key'
import Flex from '@/components/Flex/Flex'
import { Grid } from './components'

import { KEYS, KEYS_ADVANCED } from '@/constants'

const Keypad = ({ operations }) => {
  const { calculatorType } = useSelector(
    state => state.settings,
  )
  const keysMap =
    calculatorType === 'basic' ? KEYS : KEYS_ADVANCED

  const execute = action => {
    operations[action.type](action.payload, action.callback)
  }

  return (
    <Grid
      className={
        calculatorType === 'advanced' && 'advanced'
      }>
      {keysMap.map(key => (
        <Flex key={key.id} justify="end">
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
    clearAll: PropTypes.func.isRequired,
    addDigit: PropTypes.func.isRequired,
    addOperator: PropTypes.func.isRequired,
    calculate: PropTypes.func.isRequired,
    addDot: PropTypes.func.isRequired,
    addBracket: PropTypes.func.isRequired,
    clearEntry: PropTypes.func.isRequired,
  }),
}

export default Keypad
