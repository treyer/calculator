import { handleActions } from 'redux-actions'
import {
  changeCalculatorType,
  changeComponentsType,
  changeExpressionType,
  changeTheme,
} from '@/store/actions/settings'

const INITIAL_STATE = {
  appType: 'functional', // 'functional' or 'class'
  theme: 'light', // 'light' or 'dark'
  expressionType: 'simple', // 'simple' or 'complex'
  calculatorType: 'basic', // 'basic' or 'advanced'
}

export default handleActions(
  {
    [changeComponentsType]: state => {
      return {
        ...state,
        appType:
          state.appType === 'functional'
            ? 'class'
            : 'functional',
      }
    },
    [changeTheme]: state => {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
    },
    [changeExpressionType]: state => {
      return {
        ...state,
        expressionType:
          state.expressionType === 'simple'
            ? 'complex'
            : 'simple',
      }
    },
    [changeCalculatorType]: state => {
      return {
        ...state,
        calculatorType:
          state.calculatorType === 'basic'
            ? 'advanced'
            : 'basic',
      }
    },
  },
  INITIAL_STATE,
)
