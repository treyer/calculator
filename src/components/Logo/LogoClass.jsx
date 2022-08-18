import React from 'react'

import PropTypes from 'prop-types'

import { LogoText } from './components'

class LogoClass extends React.Component {
  render() {
    return <LogoText>{this.props.children}</LogoText>
  }
}

LogoClass.propTypes = {
  children: PropTypes.string.isRequired,
}

export default LogoClass
