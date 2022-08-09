import React from 'react'

import Flex from '@/components/Flex'
import {
  Output,
  OutputWrapper,
  Wrapper,
} from './components'

export const Display = () => {
  return (
    <Wrapper>
      <Flex>
        <OutputWrapper>
          <Flex justify="end">
            <Output>233.332</Output>
          </Flex>
        </OutputWrapper>
      </Flex>
    </Wrapper>
  )
}
