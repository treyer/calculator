import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Flex from '@wrappers/Flex/Flex'
import { ButtonText, PreHeaderBtn } from './components'

import { changeComponentsType } from '@store/actions/settings'
import {
  APP_TYPE_CLASS,
  APP_TYPE_FUNCTIONAL,
} from '@constants'

function PreHeaderButton({ children, btnType }) {
  const { appType } = useSelector(state => state.settings)
  const dispatch = useDispatch()

  const handleAppTypeChange = () => {
    if (btnType !== appType) {
      dispatch(changeComponentsType())
    }
  }

  return (
    <PreHeaderBtn
      className={appType === btnType && 'active'}
      onClick={handleAppTypeChange}>
      <Flex justify="center">
        <ButtonText>{children}</ButtonText>
      </Flex>
    </PreHeaderBtn>
  )
}

PreHeaderButton.propTypes = {
  children: PropTypes.string.isRequired,
  btnType: PropTypes.oneOf([
    APP_TYPE_FUNCTIONAL,
    APP_TYPE_CLASS,
  ]),
}

export default PreHeaderButton
