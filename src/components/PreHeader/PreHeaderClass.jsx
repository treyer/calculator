import React from 'react'

import PreHeaderButtonClass from './PreHeaderButtonClass'
import FlexClass from '@wrappers/Flex/FlexClass'
import { PreHeaderWrapper } from './components'

import {
  APP_TYPE_CLASS,
  APP_TYPE_FUNCTIONAL,
} from '@constants'

export class PreHeaderClass extends React.Component {
  render() {
    return (
      <PreHeaderWrapper data-cy="pre-header-class">
        <FlexClass>
          <PreHeaderButtonClass
            btnType={APP_TYPE_FUNCTIONAL}>
            Functional components + hooks implementation
          </PreHeaderButtonClass>
          <PreHeaderButtonClass btnType={APP_TYPE_CLASS}>
            Class components implementation
          </PreHeaderButtonClass>
        </FlexClass>
      </PreHeaderWrapper>
    )
  }
}
