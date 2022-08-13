import { combineReducers } from 'redux'

import settings from './settings'
import data from './data'

export const rootReducer = combineReducers({
  settings,
  data,
})
