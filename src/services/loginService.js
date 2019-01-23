import AsyncStorageUtil from '../utils/AsyncStorageUtil';
import * as CONST from '../utils/constants';
import AppManager from '../utils/AppManager';
import SecurityAppAuth from './SecurityAppAuth';
import httpService from './httpService';
import oFetch from 'o-fetch';
import DeviceInfo from 'react-native-device-info';

export function saveAuthToken(authToken) {
  AsyncStorageUtil.setAsyncStorage(CONST.AUTH_TOKEN_KEY, authToken);
}

export function saveRenewToken(renewToken) {
  AsyncStorageUtil.setAsyncStorage(CONST.AUTH_RENEW_KEY, renewToken);
}

export function saveExpireDate(expiresAt) {
  AsyncStorageUtil.setAsyncStorage(CONST.TOKEN_EXPIRE_DATE, expiresAt);
}

export async function login(email, password) {
  return SecurityAppAuth.authenticateUser({ email, password });
}

export async function init() {
  const baseURL = await AppManager.getBaseUrl();
  let response;
  try {
    response = await httpService(SecurityAppAuth).get(`${baseURL}/api/staff-app/v1/init`);
  } catch (error) {
    return Promise.reject(error);
  }
  return response;
}
