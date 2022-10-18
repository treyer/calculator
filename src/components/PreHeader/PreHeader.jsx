import React from 'react'

import Flex from '@wrappers/Flex/Flex'
import { PreHeaderWrapper } from './components'
import PreHeaderButton from './PreHeaderButton'

import {
  APP_TYPE_CLASS,
  APP_TYPE_FUNCTIONAL,
} from '@constants'

export const PreHeader = () => {
  return (
    <PreHeaderWrapper data-cy="pre-header">
      <Flex>
        <PreHeaderButton btnType={APP_TYPE_FUNCTIONAL}>
          Functional components + hooks implementation
        </PreHeaderButton>
        <PreHeaderButton btnType={APP_TYPE_CLASS}>
          Class components implementation
        </PreHeaderButton>
      </Flex>
    </PreHeaderWrapper>
  )
}
