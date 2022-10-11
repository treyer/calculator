import { createAction } from 'redux-actions'

import {
  ADD_HISTORY_ITEM,
  CLEAR_EXPRESSION,
  CLEAR_HISTORY,
  REMOVE_HISTORY_ITEM,
  SET_EXPRESSION,
  UPDATE_USER_INPUT,
} from './types'

export const clearHistory = createAction(CLEAR_HISTORY)

export const addHistoryItem = createAction(ADD_HISTORY_ITEM)

export const removeHistoryItem = createAction(
  REMOVE_HISTORY_ITEM,
)

export const updateUserInput = createAction(
  UPDATE_USER_INPUT,
)

export const setExpression = createAction(SET_EXPRESSION)

export const clearExpression = createAction(
  CLEAR_EXPRESSION,
)
