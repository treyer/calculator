import { handleActions } from 'redux-actions'

import {
  addHistoryItem,
  clearExpression,
  clearHistory,
  removeHistoryItem,
  setExpression,
  updateUserInput,
} from '@store/actions/data'

const INITIAL_STATE = {
  historyArr: [],
  userInput: [{ number: '0' }],
  expression: '',
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
        historyArr: [...state.historyArr, action.payload],
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
    [setExpression]: (state, action) => {
      return {
        ...state,
        expression: action.payload,
      }
    },
    [clearExpression]: (state, action) => {
      return {
        ...state,
        expression: '',
      }
    },
  },
  INITIAL_STATE,
)
