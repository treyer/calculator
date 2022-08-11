import { createAction, handleActions } from 'redux-actions'

const INITIAL_STATE = {
  appType: 'functional', // 'functional' or 'class'
  theme: 'light', // 'light' or 'dark'
  expressionType: 'simple', // 'simple' or 'complex'
  calculatorType: 'basic', // 'basic' or 'advanced'
}

export const changeComponentsType = createAction(
  'CHANGE_COMPONENTS_TYPE',
)
export const changeTheme = createAction('CHANGE_THEME')
export const changeExpressionType = createAction(
  'CHANGE_EXPRESSION_TYPE',
)
export const changeCalculatorType = createAction(
  'CHANGE_CALCULATOR_TYPE',
)

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
