import { INITIALIZE_CHANGE_THEME } from '@/store/actions/types'
import { all, takeEvery } from 'redux-saga/effects'
import { themeSagaWorker } from './themeSagaWorker'

export default function* rootSaga() {
  yield all([
    takeEvery(INITIALIZE_CHANGE_THEME, themeSagaWorker),
  ])
}
