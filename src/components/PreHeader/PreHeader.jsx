import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Flex from '@/components/Flex'
import {
  PreHeaderWrapper,
  PreHeaderButton,
  ButtonText,
} from './components'

import { isFunctional } from '@/helpers'
import { changeComponentsType } from '@/reducers/settings'

export const PreHeader = () => {
  const { appType } = useSelector(state => state.settings)
  const dispatch = useDispatch()

  const handleAppTypeChange = newType => {
    if (newType !== appType) {
      dispatch(changeComponentsType())
    }
  }

  return (
    <PreHeaderWrapper>
      <Flex>
        <PreHeaderButton
          className={isFunctional(appType) && 'active'}
          onClick={() => handleAppTypeChange('functional')}>
          <Flex justify="center">
            <ButtonText>
              Functional components + hooks implementation
            </ButtonText>
          </Flex>
        </PreHeaderButton>
        <PreHeaderButton
          className={!isFunctional(appType) && 'active'}
          onClick={() => handleAppTypeChange('class')}>
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
