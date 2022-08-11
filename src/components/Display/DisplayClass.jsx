import React from 'react'

import FlexClass from '@/components/Flex/FlexClass'
import {
  Output,
  OutputWrapper,
  Wrapper,
} from './components'

export class DisplayClass extends React.Component {
  render() {
    return (
      <Wrapper>
        <FlexClass>
          <OutputWrapper>
            <FlexClass justify="end">
              <Output>233.332</Output>
            </FlexClass>
          </OutputWrapper>
        </FlexClass>
      </Wrapper>
    )
  }
}
