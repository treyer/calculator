import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Flex from '@/components/Flex'
import { ButtonText, PreHeaderBtn } from './components'

import { changeComponentsType } from '@/reducers/settings'
import { isPreHeaderBtnActive } from '@/helpers'

export const PreHeaderButton = ({ children, btnType }) => {
  const { appType } = useSelector(state => state.settings)
  const dispatch = useDispatch()

  const handleAppTypeChange = newType => {
    if (newType !== appType) {
      dispatch(changeComponentsType())
    }
  }

  return (
    <PreHeaderBtn
      className={
        isPreHeaderBtnActive(appType, btnType) && 'active'
      }
      onClick={() => handleAppTypeChange(btnType)}>
      <Flex justify="center">
        <ButtonText>{children}</ButtonText>
      </Flex>
    </PreHeaderBtn>
  )
}
