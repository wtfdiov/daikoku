import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';

import history from '../../history';

export function* tryAuthSaga(action) {
  const response = yield axios.post(`/login`, action.credentials);
  const { user, accessToken, refreshToken } = response.data;
  yield call([localStorage, 'setItem'], 'accessToken', JSON.stringify(accessToken));
  yield call([localStorage, 'setItem'], 'refreshToken', JSON.stringify(refreshToken));
  yield put(actions.authSuccess(user));
  yield call([history, 'push'], '/');
}

export function* tryAuthFromStorageSaga(action) {
  yield put(actions.tryAuth(action.credentials));
}

export function* logOutSaga() {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([history, 'push'], '/login');
}