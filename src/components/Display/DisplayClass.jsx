import React from 'react'

import PropTypes from 'prop-types'

import FlexClass from '@components/Flex/FlexClass'
import {
  Output,
  OutputWrapper,
  Wrapper,
} from './components'

class DisplayClass extends React.Component {
  render() {
    return (
      <Wrapper data-cy="display">
        <FlexClass>
          <OutputWrapper>
            <Output data-cy="display-output">
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
}

export default DisplayClass
