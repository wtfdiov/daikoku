import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';

import history from '../../history';

export function* tryAuthSaga(action) {
  const userData = {
    name: 'Diovane Gualberto',
    token: 'aehuaevaejna'
  }
  yield call([localStorage, 'setItem'], 'token', JSON.stringify(userData));
  yield put(actions.authSuccess(userData));
  yield call([history, 'push'], '/');
}

export function* tryAuthFromStorageSaga(action) {
  const credentials = {
    login: '',
    password: ''
  };
  yield put(actions.tryAuth(credentials));
}

export function* logOutSaga() {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([history, 'push'], '/login');
}