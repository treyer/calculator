import React from 'react'
import PropTypes from 'prop-types'

import FlexClass from '@/components/Flex/FlexClass'
import { KeyBody, KeyText } from './components'

class KeyClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isError: false,
    }
    this.setIsError = this.setIsError.bind(this)
  }

  setIsError() {
    this.setState({ isError: true })
  }

  componentDidUpdate() {
    if (this.state.isError === true) {
      setTimeout(() => {
        this.setState({ isError: false })
      }, 200)
    }
  }

  render() {
    return (
      <KeyBody
        className={this.state.isError && 'error'}
        title={this.props.title}
        onClick={() =>
          this.props.execute({
            type: this.props.type,
            payload: this.props.payload,
            callback: this.setIsError,
          })
        }>
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
  type: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
  execute: PropTypes.func,
}

export default KeyClass
