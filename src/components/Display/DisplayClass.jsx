import React from 'react'

import PropTypes from 'prop-types'

import FlexClass from '@components/Flex/FlexClass'
import {
  ExpressionOutput,
  Output,
  OutputWrapper,
  Wrapper,
} from './components'

class DisplayClass extends React.Component {
  render() {
    return (
      <Wrapper data-cy="display-class">
        <FlexClass>
          <OutputWrapper>
            <ExpressionOutput data-cy="expression-output-class">
              {this.props.expression}
            </ExpressionOutput>
            <Output data-cy="display-output-class">
              {this.props.output}
            </Output>
          </OutputWrapper>
        </FlexClass>
      </Wrapper>
    )
  }
}

DisplayClass.propTypes = {
  output: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired,
}

export default DisplayClass
