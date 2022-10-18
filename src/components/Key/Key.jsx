import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Flex from '@wrappers/Flex/Flex'
import { KeyBody, KeyText } from './components'

function Key({ children, title, type, payload, execute }) {
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (isError === true) {
      setTimeout(() => {
        setIsError(false)
      }, 200)
    }
  })

  return (
    <KeyBody
      className={isError && 'error'}
      title={title}
      onClick={() =>
        execute({
          type: type,
          payload: payload,
          callback: setIsError,
        })
      }>
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
