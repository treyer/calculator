import React from 'react'
import { useSelector } from 'react-redux'

import Flex from '@/components/Flex'
import {
  PreHeaderWrapper,
  PreHeaderButton,
  ButtonText,
} from './components'

import { isFunctional } from '@/helpers'

export const PreHeader = () => {
  const componetsType = useSelector(
    state => state.settings.componentsType,
  )

  return (
    <PreHeaderWrapper>
      <Flex>
        <PreHeaderButton
          className={
            isFunctional(componetsType) && 'active'
          }>
          <Flex justify="center">
            <ButtonText>
              Functional components + hooks implementation
            </ButtonText>
          </Flex>
        </PreHeaderButton>
        <PreHeaderButton
          className={
            !isFunctional(componetsType) && 'active'
          }>
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
