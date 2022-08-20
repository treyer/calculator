import React from 'react'

import { connect } from 'react-redux'

import FlexClass from '@components/Flex/FlexClass'
import { Button } from './components'

import {
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
    this.props.updateUserInput([{ number: '0' }])
  }

  render() {
    return (
      <Button
        onClick={this.handleClearHistory}
        data-cy="clear-history-button">
        <FlexClass> Clear All History</FlexClass>
      </Button>
    )
  }
}

const mapDispatchToProps = () => ({
  clearHistory,
  updateUserInput,
})

export default connect(
  null,
  mapDispatchToProps(),
)(ResetButtonClass)
