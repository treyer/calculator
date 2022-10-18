import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Flex from '@wrappers/Flex/Flex'
import { KeyBody, KeyText } from './components'

import { useFlashButton } from '@/hooks/useFlashButton'

function Key({ children, title, type, payload, execute }) {
  const [isError, setIsError] = useState(false)

  useFlashButton(isError, setIsError)

  const handleKeyClick = () => {
    execute({
      type: type,
      payload: payload,
      callback: setIsError,
    })
  }

  return (
    <KeyBody
      className={isError && 'error'}
      title={title}
      onClick={handleKeyClick}>
      <Flex justify="center">
        <KeyText>{children}</KeyText>
      </Flex>
    </KeyBody>
  )
}

Key.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
  execute: PropTypes.func,
}

export default Key
