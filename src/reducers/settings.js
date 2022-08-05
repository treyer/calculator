import { createAction, handleActions } from 'redux-actions'

const INITIAL_STATE = {
  componentsType: 'functional',
  theme: 'light',
}

const changeComponentsType = createAction(
  'CHANGE_COMPONENTS_TYPE',
)
const changeTheme = createAction('CHANGE_THEME')

export default handleActions(
  {
    [changeComponentsType]: state => ({
      ...state,
      componentsType:
        state.componentsType === 'functional'
          ? 'class'
          : 'functional',
    }),
    [changeTheme]: state => ({
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
    }),
  },
  INITIAL_STATE,
)
