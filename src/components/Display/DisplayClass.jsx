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
      <Wrapper data-cy="display-class">
        <FlexClass>
          <OutputWrapper>
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
}

export default DisplayClass
