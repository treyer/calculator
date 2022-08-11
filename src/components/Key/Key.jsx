import React from 'react'
import PropTypes from 'prop-types'

import Flex from '@/components/Flex/Flex'
import { KeyBody, KeyText } from './components'

function Key({ children, title, type, payload, execute }) {
  return (
    <KeyBody
      title={title}
      onClick={() =>
        execute({ type: type, payload: payload })
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
