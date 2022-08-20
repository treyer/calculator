import { handleActions } from 'redux-actions'

import {
  addHistoryItem,
  clearHistory,
  removeHistoryItem,
  updateUserInput,
} from '@store/actions/data'

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
    [removeHistoryItem]: (state, action) => {
      return {
        ...state,
        historyArr: state.historyArr.filter(
          (el, index) => index !== action.payload,
        ),
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
