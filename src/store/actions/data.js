import { createAction } from 'redux-actions'

import {
  ADD_HISTORY_ITEM,
  CLEAR_HISTORY,
  REMOVE_HISTORY_ITEM,
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
