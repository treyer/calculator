import React from 'react'
import PropTypes from 'prop-types'

import { LogoText } from './components'

function Logo({ children }) {
  return <LogoText>{children}</LogoText>
}

Logo.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Logo
