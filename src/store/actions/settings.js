import { createAction } from 'redux-actions'

import {
  CHANGE_CALCULATOR_TYPE,
  CHANGE_COMPONENTS_TYPE,
  CHANGE_EXPRESSION_TYPE,
  CHANGE_THEME,
  INITIALIZE_CHANGE_THEME,
} from './types'

export const changeComponentsType = createAction(
  CHANGE_COMPONENTS_TYPE,
)

export const changeTheme = createAction(CHANGE_THEME)

export const initializeChangeTheme = createAction(
  INITIALIZE_CHANGE_THEME,
)

export const changeExpressionType = createAction(
  CHANGE_EXPRESSION_TYPE,
)

export const changeCalculatorType = createAction(
  CHANGE_CALCULATOR_TYPE,
)
