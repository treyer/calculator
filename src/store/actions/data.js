import { createAction } from 'redux-actions'

export const clearHistory = createAction('CLEAR_HISTORY')

export const addHistoryItem = createAction(
  'ADD_HISTORY_ITEM',
)

export const updateUserInput = createAction(
  'UPDATE_USER_INPUT',
)
