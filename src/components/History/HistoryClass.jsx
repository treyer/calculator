import React from 'react'

import PropTypes from 'prop-types'

import {
  ContentBox,
  Heading,
  HistoryWrapper,
  OperationHistory,
} from './components'

class HistoryClass extends React.Component {
  render() {
    return (
      <HistoryWrapper>
        <Heading>History</Heading>
        <ContentBox>
          {this.props.operationsHistory.map(
            (operation, index) => (
              <OperationHistory key={index}>
                {operation}
              </OperationHistory>
            ),
          )}
        </ContentBox>
      </HistoryWrapper>
    )
  }
}

HistoryClass.propTypes = {
  operationsHistory: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
}

export default HistoryClass
