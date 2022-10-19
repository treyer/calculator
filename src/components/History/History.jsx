import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import ResetHistoryButton from '@controls/ResetHistoryButton/ResetHistoryButton'
import HistoryBlockButton from '@controls/HistoryBlockButton/HistoryBlockButton'
import {
  ContentBox,
  ExpressionHistory,
  Heading,
  HistoryWrapper,
  RemoveBtn,
} from './components'

import { convertInputToString } from '@utils'
import {
  clearExpression,
  clearHistory,
  removeHistoryItem,
  updateUserInput,
} from '@store/actions/data'
import { EXPRESSION_TYPE_COMPLEX } from '@constants'
import { useFlashButton } from '@/hooks/useFlashButton'

function History({ operationsHistory }) {
  const dispatch = useDispatch()
  const { expressionType } = useSelector(
    state => state.settings,
  )
  const [isError, setIsError] = useState(false)
  const [isShown, setIsShown] = useState(true)
  const errorItemIndex = useRef(-1)

  const handleSetHistoryExprAsCurrent = (
    userInput,
    index,
  ) => () => {
    if (expressionType === EXPRESSION_TYPE_COMPLEX) {
      dispatch(updateUserInput(userInput))
      dispatch(clearExpression())
    } else {
      const isBrackets = userInput.some(
        el => Object.keys(el)[0] === 'bracket',
      )
      if (!isBrackets) {
        dispatch(updateUserInput(userInput))
        dispatch(clearExpression())
      } else {
        errorItemIndex.current = index
        setIsError(true)
      }
    }
  }

  const handleRemoveHistoryExpr = event => {
    event.stopPropagation()
    const { index } = event.target.dataset
    dispatch(removeHistoryItem(index))
  }

  const handleResetHistory = () => {
    if (operationsHistory.length > 0) {
      dispatch(clearHistory())
    }
  }

  const handleShowComponent = () => {
    setIsShown(prev => !prev)
  }

  useFlashButton(isError, setIsError)

  return (
    <HistoryWrapper data-cy="history" isShown={isShown}>
      <HistoryBlockButton
        isShown={isShown}
        handleClick={handleShowComponent}
      />
      <Heading isShown={isShown}>
        History
        <ResetHistoryButton
          handleResetCallback={handleResetHistory}
        />
      </Heading>
      <ContentBox
        data-cy="history-content-box"
        isShown={isShown}>
        {operationsHistory.map(item => (
          <ExpressionHistory
            className={
              isError &&
              errorItemIndex.current === item.id &&
              'error'
            }
            key={item.id}
            onClick={handleSetHistoryExprAsCurrent(
              item.expression,
              item.id,
            )}>
            {`${convertInputToString(item.expression)}= ${
              item.result
            }`}
            <RemoveBtn
              data-index={item.id}
              onClick={handleRemoveHistoryExpr}>
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
    PropTypes.shape({
      id: PropTypes.string,
      expression: PropTypes.array,
      result: PropTypes.string,
    }),
  ).isRequired,
}

export default History
