import { createAction, handleActions } from 'redux-actions'

const INITIAL_STATE = {
  appType: 'functional',
  theme: 'light',
}

export const changeComponentsType = createAction(
  'CHANGE_COMPONENTS_TYPE',
)
export const changeTheme = createAction('CHANGE_THEME')

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
  },
  INITIAL_STATE,
)
