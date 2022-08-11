import { createAction } from 'redux-actions'

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
