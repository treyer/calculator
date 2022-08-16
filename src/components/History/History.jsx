import React from 'react'

import {
  ContentBox,
  Heading,
  HistoryWrapper,
  OperationHistory,
} from './components'

export const History = ({ operationsHistory }) => {
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
