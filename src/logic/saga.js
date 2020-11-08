import { call, put, takeEvery } from 'redux-saga/effects'
import { todosAPI } from '../service/api-service'
import { LOAD_DATA, putData } from './actions'

function* workerLoadData() {
  const data = yield call(todosAPI.getTodos)  
  yield put(putData(data))
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadData)
}