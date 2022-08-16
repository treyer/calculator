import { handleActions } from 'redux-actions'

import {
  addHistoryItem,
  clearHistory,
  updateUserInput,
} from '../actions/data'

const INITIAL_STATE = {
  historyArr: [],
  userInput: [{ number: '0' }],
}

export default handleActions(
  {
    [clearHistory]: state => {
      return {
        ...state,
        historyArr: [],
      }
    },
    [addHistoryItem]: (state, action) => {
      return {
        ...state,
        historyArr: [action.payload, ...state.historyArr],
      }
    },
    [updateUserInput]: (state, action) => {
      return {
        ...state,
        userInput: action.payload,
      }
    },
  },
  INITIAL_STATE,
)
