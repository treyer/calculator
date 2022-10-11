import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './components'

class HistoryBlockButtonClass extends React.Component {
  render() {
    return (
      <Button
        isShown={this.props.isShown}
        onClick={this.props.handleClick}
      />
    )
  }
}

HistoryBlockButtonClass.propTypes = {
  isShown: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default HistoryBlockButtonClass
