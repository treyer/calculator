import React from 'react'
import PropTypes from 'prop-types'

import FlexClass from '@wrappers/Flex/FlexClass'
import { KeyBody, KeyText } from './components'

class KeyClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isError: false,
    }
    this.setIsError = this.setIsError.bind(this)
    this.handleKeyClick = this.handleKeyClick.bind(this)
  }

  setIsError() {
    this.setState({ isError: true })
  }

  handleKeyClick() {
    this.props.execute({
      type: this.props.type,
      payload: this.props.payload,
      callback: this.setIsError,
    })
  }

  componentDidUpdate() {
    if (this.state.isError === true) {
      this.timerHandle = setTimeout(() => {
        this.setState({ isError: false })
        this.timerHandle = null
      }, 200)
    }
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle)
      this.timerHandle = null
    }
  }

  render() {
    return (
      <KeyBody
        className={this.state.isError && 'error'}
        title={this.props.title}
        onClick={this.handleKeyClick}>
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
