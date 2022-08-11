import React from 'react'
import PropTypes from 'prop-types'

import Flex from '@/components/Flex/Flex'
import {
  Output,
  OutputWrapper,
  Wrapper,
} from './components'

const Display = ({ output }) => {
  return (
    <Wrapper>
      <Flex>
        <OutputWrapper>
          <Flex justify="end">
            <Output>{output}</Output>
          </Flex>
        </OutputWrapper>
      </Flex>
    </Wrapper>
  )
}

Display.propTypes = {
  output: PropTypes.string.isRequired,
}

export default Display
