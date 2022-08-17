import React from 'react'

import PropTypes from 'prop-types'

import {
  ContentBox,
  Heading,
  HistoryWrapper,
  OperationHistory,
} from './components'

function History({ operationsHistory }) {
  return (
    <HistoryWrapper>
      <Heading>History</Heading>
      <ContentBox>
        {operationsHistory.map((operation, index) => (
          <OperationHistory key={index}>
            {operation}
          </OperationHistory>
        ))}
      </ContentBox>
    </HistoryWrapper>
  )
}

History.propTypes = {
  operationsHistory: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
}

export default History
