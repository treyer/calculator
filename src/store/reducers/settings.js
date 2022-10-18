import { handleActions } from 'redux-actions'

import {
  changeCalculatorType,
  changeComponentsType,
  changeExpressionType,
  changeTheme,
} from '@store/actions/settings'
import {
  APP_TYPE_CLASS,
  APP_TYPE_FUNCTIONAL,
  CALCULATOR_TYPE_ADVANCED,
  CALCULATOR_TYPE_BASIC,
  EXPRESSION_TYPE_COMPLEX,
  EXPRESSION_TYPE_SIMPLE,
  THEME_DARK,
  THEME_LIGHT,
} from '@constants'

const INITIAL_STATE = {
  appType: APP_TYPE_FUNCTIONAL, // 'functional' or 'class'
  theme: localStorage.getItem('theme') || THEME_LIGHT, // 'light' or 'dark'
  expressionType: EXPRESSION_TYPE_COMPLEX, // 'simple' or 'complex'
  calculatorType: CALCULATOR_TYPE_ADVANCED, // 'basic' or 'advanced'
}

export default handleActions(
  {
    [changeComponentsType]: state => {
      return {
        ...state,
        appType:
          state.appType === APP_TYPE_FUNCTIONAL
            ? APP_TYPE_CLASS
            : APP_TYPE_FUNCTIONAL,
      }
    },
    [changeTheme]: state => {
      return {
        ...state,
        theme:
          state.theme === THEME_LIGHT
            ? THEME_DARK
            : THEME_LIGHT,
      }
    },
    [changeExpressionType]: state => {
      return {
        ...state,
        expressionType:
          state.expressionType === EXPRESSION_TYPE_SIMPLE
            ? EXPRESSION_TYPE_COMPLEX
            : EXPRESSION_TYPE_SIMPLE,
      }
    },
    [changeCalculatorType]: state => {
      return {
        ...state,
        calculatorType:
          state.calculatorType === CALCULATOR_TYPE_BASIC
            ? CALCULATOR_TYPE_ADVANCED
            : CALCULATOR_TYPE_BASIC,
      }
    },
  },
  INITIAL_STATE,
)
