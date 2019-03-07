import * as actionTypes from '../actionTypes';

export const tryAuth = (credentials) => ({
  type: actionTypes.AUTH_TRY,
  credentials
});

export const tryAuthFromStorage = () => ({
  type: actionTypes.AUTH_TRY_FROM_STORAGE
});

export const authSuccess = (userData) => ({
  type: actionTypes.AUTH_SUCCESS,
  userData
});

export const logOut = () => ({
  type: actionTypes.AUTH_LOGOUT
});