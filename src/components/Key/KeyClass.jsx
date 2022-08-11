import React from 'react'
import PropTypes from 'prop-types'

import FlexClass from '@/components/Flex/FlexClass'
import { KeyBody, KeyText } from './components'

class KeyClass extends React.Component {
  render() {
    return (
      <KeyBody title={this.props.title}>
        <FlexClass justify="center">
          <KeyText>{this.props.children}</KeyText>
        </FlexClass>
      </KeyBody>
    )
  }
}

KeyClass.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default KeyClass
