import React from 'react'
import PropTypes from 'prop-types'

import { StyledFlex } from './components'

class FlexClass extends React.Component {
  render() {
    return (
      <StyledFlex
        direction={this.props.direction}
        justify={this.props.justify}
        align={this.props.align}>
        {this.props.children}
      </StyledFlex>
    )
  }
}

FlexClass.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
}

FlexClass.defaultProps = {
  direction: 'row',
  justify: 'space-between',
  align: 'center',
}

export default FlexClass
