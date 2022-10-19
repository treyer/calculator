import React from 'react'
import { connect } from 'react-redux'

import FlexClass from '@wrappers/Flex/FlexClass'
import { Button } from './components'

import {
  clearExpression,
  clearHistory,
  updateUserInput,
} from '@store/actions/data'

class ResetButtonClass extends React.Component {
  constructor(props) {
    super(props)
    this.handleClearHistory = this.handleClearHistory.bind(
      this,
    )
  }

  handleClearHistory = () => {
    this.props.clearHistory()
    this.props.clearExpression()
    this.props.updateUserInput([{ number: '0' }])
  }

  render() {
    return (
      <Button
        onClick={this.handleClearHistory}
        data-cy="clear-history-button-class">
        <FlexClass> Clear All History</FlexClass>
      </Button>
    )
  }
}

const mapDispatchToProps = () => ({
  clearExpression,
  clearHistory,
  updateUserInput,
})

export default connect(
  null,
  mapDispatchToProps(),
)(ResetButtonClass)
