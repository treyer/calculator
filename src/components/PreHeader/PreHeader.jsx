import React from 'react'

import Flex from '@/components/Flex'
import {
  PreHeaderWrapper,
  PreHeaderButton,
  ButtonText,
} from './components'

import { isFunctional } from '@/helpers'

export const PreHeader = () => {
  return (
    <PreHeaderWrapper>
      <Flex>
        <PreHeaderButton
          className={isFunctional() && 'active'}>
          <Flex justify="center">
            <ButtonText>
              Functional components + hooks implementation
            </ButtonText>
          </Flex>
        </PreHeaderButton>
        <PreHeaderButton
          className={!isFunctional() && 'active'}>
          <Flex justify="center">
            <ButtonText>
              Class components implementation
            </ButtonText>
          </Flex>
        </PreHeaderButton>
      </Flex>
    </PreHeaderWrapper>
  )
}
