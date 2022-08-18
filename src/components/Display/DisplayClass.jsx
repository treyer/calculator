import React from 'react'

import PropTypes from 'prop-types'

import FlexClass from '@/components/Flex/FlexClass'
import {
  Output,
  OutputWrapper,
  Wrapper,
} from './components'

class DisplayClass extends React.Component {
  render() {
    return (
      <Wrapper>
        <FlexClass>
          <OutputWrapper>
            <FlexClass justify="end">
              <Output id="output">
                {this.props.output}
              </Output>
            </FlexClass>
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
