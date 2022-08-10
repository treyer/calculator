import React from 'react'
import PropTypes from 'prop-types'

import Flex from '@/components/Flex/Flex'
import { KeyBody, KeyText } from './components'

function Key({ children, title }) {
  return (
    <KeyBody title={title}>
      <Flex justify="center">
        <KeyText>{children}</KeyText>
      </Flex>
    </KeyBody>
  )
}

Key.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Key
