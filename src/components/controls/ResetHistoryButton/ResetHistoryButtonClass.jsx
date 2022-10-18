import React from 'react'
import PropTypes from 'prop-types'

import FlexClass from '@wrappers/Flex/FlexClass'
import { Button } from './components'

class ResetHistoryButtonClass extends React.Component {
  render() {
    return (
      <Button
        onClick={this.props.handleResetCallback}
        data-cy="clear-history-block-button-class">
        <FlexClass>Clear</FlexClass>
      </Button>
    )
  }
}

ResetHistoryButtonClass.propTypes = {
  handleResetCallback: PropTypes.func,
}

export default ResetHistoryButtonClass
