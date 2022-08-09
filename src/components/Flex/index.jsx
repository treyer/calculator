import React from 'react'
import PropTypes from 'prop-types'

import { StyledFlex } from './components'

function Flex({ children, direction, justify, align }) {
  return (
    <StyledFlex
      direction={direction}
      justify={justify}
      align={align}>
      {children}
    </StyledFlex>
  )
}

Flex.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
}

Flex.defaultProps = {
  direction: 'row',
  justify: 'space-between',
  align: 'center',
}

export default Flex
