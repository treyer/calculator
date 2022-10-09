import { changeTheme } from '@/store/actions/settings'
import { put, select } from 'redux-saga/effects'

export function* themeSagaWorker() {
  yield put(changeTheme())
  const theme = yield select(state => state.settings.theme)
  yield localStorage.setItem('theme', theme)
}
