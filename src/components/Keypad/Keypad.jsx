import React from 'react'
import PropTypes from 'prop-types'

import Key from '@/components/Key/Key'
import Flex from '@/components/Flex/Flex'
import { Grid } from './components'

import { KEYS } from '@/constants/keys'

const Keypad = ({ operations }) => {
  const execute = action => {
    operations[action.type](action.payload, action.callback)
  }

  return (
    <Grid>
      {KEYS.map(key => (
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
