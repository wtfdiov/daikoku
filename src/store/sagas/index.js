import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes';
import { tryAuthSaga, tryAuthFromStorageSaga, logOutSaga } from './auth';

export function* watchAuth() {
  yield takeLatest(actionTypes.AUTH_TRY, tryAuthSaga);
  yield takeLatest(actionTypes.AUTH_TRY_FROM_STORAGE, tryAuthFromStorageSaga);
  yield takeLatest(actionTypes.AUTH_LOGOUT, logOutSaga);
}