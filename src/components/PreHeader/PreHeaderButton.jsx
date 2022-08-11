import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Flex from '@/components/Flex/Flex'
import { ButtonText, PreHeaderBtn } from './components'

import { changeComponentsType } from '@/store/actions/settings'
import { isPreHeaderBtnActive } from '@/helpers'

function PreHeaderButton({ children, btnType }) {
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

PreHeaderButton.propTypes = {
  children: PropTypes.string.isRequired,
  btnType: PropTypes.oneOf(['functional', 'class']),
}

export default PreHeaderButton
