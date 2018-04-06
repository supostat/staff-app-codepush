import oFetch from 'o-fetch';
import { createAction } from 'redux-actions';
import {
  login,
  init,
} from '../services/loginService';

import {
  createAblyService,
} from '../services/ablyService';

import {
  startSpinner,
  stopSpinner,
} from './commonAction';

import AsyncStorageUtil from '../utils/AsyncStorageUtil';
import * as CONST from '../utils/constants';
import SecurityAppAuth from '../services/SecurityAppAuth';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const RENEW_LOGIN_FAILED = 'RENEW_LOGIN_FAILED';
export const RESET_LOGIN = 'RESET_LOGIN';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const RESET_LOGOUT = 'RESET_LOGOUT';

export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_FAILED = 'INIT_FAILED';
export const RESET_INIT = 'RESET_INIT';

export function saveAuthToken(authToken) {
  AsyncStorageUtil.setAsyncStorage(CONST.AUTH_TOKEN_KEY, authToken);
}

export function saveRenewToken(renewToken) {
  AsyncStorageUtil.setAsyncStorage(CONST.AUTH_RENEW_KEY, renewToken);
}

export function saveExpireDate(expiresAt) {
  AsyncStorageUtil.setAsyncStorage(CONST.TOKEN_EXPIRE_DATE, expiresAt);
}

export const reloadShiftData = () => (dispatch) => {
  return init().then((response) => {
    dispatch({
      type: INIT_SUCCESS,
      payload: response.data,
    });
    return response;
  }).catch((error) => {
    dispatch({
      type: INIT_FAILED,
      payload: error.response.data,
    });
    return Promise.reject(error);
  });
};

export const initAct = () => (dispatch, getState) => {
  return init().then((response) => {
    dispatch({
      type: INIT_SUCCESS,
      payload: response.data,
    });
    dispatch(stopSpinner());
    return response;
  }).catch((error) => {
    dispatch(stopSpinner());
    dispatch({
      type: INIT_FAILED,
      payload: error.response.data,
    });
    return Promise.reject(error);
  });
};

export const logoutAction = () => async (dispatch) => {
  dispatch(startSpinner());
  await SecurityAppAuth.deauthenticateUser();
  dispatch(stopSpinner());
};

export const initAblyService = data => (dispatch, getState) => {
  const ablyData = oFetch(data, 'ablyData');
  const personalChannelName = oFetch(ablyData, 'personalChannelName');
  const presenceChannelName = oFetch(ablyData, 'presenceChannelName');
  return createAblyService({
    ...data,
    personalChannelName,
    presenceChannelName,
  }).then((ablyService) => {
    console.log(ablyService);
    return ablyService;
  });
};

export const initializeApp = options => (dispatch) => {
  dispatch(startSpinner());
  return dispatch(initAct())
    .then((initResponse) => {
      return dispatch(initAblyService({ ...initResponse.data, ...options }))
        .then((ablyService) => {
          dispatch(stopSpinner());
          return ablyService;
        });
    });
};

export const loginAct = (email, password) => (dispatch) => {
  dispatch(startSpinner());
  return login(email, password).then((loginResponse) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginResponse.data,
    });
    dispatch(stopSpinner());
  }).catch((error) => {
    dispatch(stopSpinner());
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response ? error.response.data : error.request.responseText,
    });
    return Promise.reject(error);
  });
};
