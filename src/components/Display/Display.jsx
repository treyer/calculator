import React from 'react'
import PropTypes from 'prop-types'

import Flex from '@wrappers/Flex/Flex'
import {
  ExpressionOutput,
  Output,
  OutputWrapper,
  Wrapper,
} from './components'

const Display = ({ output, expression }) => {
  return (
    <Wrapper data-cy="display">
      <Flex>
        <OutputWrapper>
          <ExpressionOutput data-cy="expression-output">
            {expression}
          </ExpressionOutput>
          <Output data-cy="display-output">{output}</Output>
        </OutputWrapper>
      </Flex>
    </Wrapper>
  )
}

Display.propTypes = {
  output: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired,
}

export default Display
