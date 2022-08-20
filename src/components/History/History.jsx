import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import {
  ContentBox,
  ExpressionHistory,
  Heading,
  HistoryWrapper,
  RemoveBtn,
} from './components'

import { convertInputToString } from '@/helpers/convertInputToString'
import {
  removeHistoryItem,
  updateUserInput,
} from '@store/actions/data'

function History({ operationsHistory }) {
  const dispatch = useDispatch()
  const { expressionType } = useSelector(
    state => state.settings,
  )
  const [isError, setIsError] = useState(false)
  const errorItemIndex = useRef(-1)

  const handleSetHistoryExprAsCurrent = (
    userInput,
    index,
  ) => {
    if (expressionType === 'complex') {
      dispatch(updateUserInput(userInput))
    } else {
      const isBrackets = userInput.some(
        el => Object.keys(el)[0] === 'bracket',
      )
      if (!isBrackets) {
        dispatch(updateUserInput(userInput))
      } else {
        errorItemIndex.current = index
        setIsError(true)
      }
    }
  }

  const handleRemoveHistoryExpr = (event, index) => {
    event.stopPropagation()
    dispatch(removeHistoryItem(index))
  }

  useEffect(() => {
    if (isError === true) {
      setTimeout(() => {
        errorItemIndex.current = -1
        setIsError(false)
      }, 200)
    }
  })

  return (
    <HistoryWrapper data-cy="history">
      <Heading>History</Heading>
      <ContentBox data-cy="history-content-box">
        {operationsHistory.map((item, index) => (
          <ExpressionHistory
            className={
              isError &&
              errorItemIndex.current === index &&
              'error'
            }
            key={index}
            onClick={() =>
              handleSetHistoryExprAsCurrent(item, index)
            }>
            {convertInputToString(item)}
            <RemoveBtn
              onClick={event => {
                handleRemoveHistoryExpr(event, index)
              }}>
              ✖
            </RemoveBtn>
          </ExpressionHistory>
        ))}
      </ContentBox>
    </HistoryWrapper>
  )
}

History.propTypes = {
  operationsHistory: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object),
  ).isRequired,
}

export default History
