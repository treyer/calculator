import React from 'react'

import Flex from '@/components/Flex'
import { PreHeaderWrapper } from './components'
import PreHeaderButton from './PreHeaderButton'

export const PreHeader = () => {
  return (
    <PreHeaderWrapper>
      <Flex>
        <PreHeaderButton btnType="functional">
          Functional components + hooks implementation
        </PreHeaderButton>
        <PreHeaderButton btnType="class">
          Class components implementation
        </PreHeaderButton>
      </Flex>
    </PreHeaderWrapper>
  )
}
