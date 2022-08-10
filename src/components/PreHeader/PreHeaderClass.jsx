import React from 'react'

import PreHeaderButtonClass from './PreHeaderButtonClass'
import FlexClass from '@/components/Flex/FlexClass'
import { PreHeaderWrapper } from './components'

export class PreHeaderClass extends React.Component {
  render() {
    return (
      <PreHeaderWrapper>
        <FlexClass>
          <PreHeaderButtonClass btnType="functional">
            Functional components + hooks implementation
          </PreHeaderButtonClass>
          <PreHeaderButtonClass btnType="class">
            Class components implementation
          </PreHeaderButtonClass>
        </FlexClass>
      </PreHeaderWrapper>
    )
  }
}
