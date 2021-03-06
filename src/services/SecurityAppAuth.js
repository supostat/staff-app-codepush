import safeMoment from '../services/safeMoment';
import AsyncStorageUtil from '../utils/AsyncStorageUtil';
import * as CONST from '../utils/constants';
import httpService from './httpService';
import AppManager from '../utils/AppManager';
import { ErrorTracker } from '../utils/error-tracker';

export default class SecurityAppAuth {
  static async deauthenticateUser() {
    await AsyncStorageUtil.removeAsyncStorage(CONST.AUTH_TOKEN_KEY);
    await AsyncStorageUtil.removeAsyncStorage(CONST.AUTH_RENEW_KEY);
    await AsyncStorageUtil.removeAsyncStorage(CONST.TOKEN_EXPIRE_DATE);
  }

  static async currentToken() {
    const token = await AsyncStorageUtil.getAsyncStorage(CONST.AUTH_TOKEN_KEY);
    return token;
  }

  static async isUserAuthenticated() {
    const token = await SecurityAppAuth.currentToken();
    const isTokenExpired = await SecurityAppAuth.isTokenExpired();

    return token !== null && !isTokenExpired;
  }

  static async isTokenExpired() {
    const expiresAt = await AsyncStorageUtil.getAsyncStorage(CONST.TOKEN_EXPIRE_DATE);

    if (expiresAt === null) return false;

    const current = safeMoment.current();
    const expiration = safeMoment.iso8601Parse(expiresAt);
    return current.isSameOrAfter(expiration);
  }

  static async refreshToken() {
    const renewalToken = await AsyncStorageUtil.getAsyncStorage(CONST.AUTH_RENEW_KEY);
    const baseUrl = await AppManager.getBaseUrl();
    if (renewalToken === null) {
      ErrorTracker.trackError(new Error('Renewal Token not found'));
      return Promise.reject(new Error('Renewal Token not found'));
    }
    let response;
    try {
      response = await httpService().post(`${baseUrl}/api/staff-app/v1/sessions/renew`, {
        renewalToken,
      });
    } catch (error) {
      ErrorTracker.trackError(new Error(error));
      return Promise.reject(error);
    }
    const { authToken, expiresAt } = response.data;
    await AsyncStorageUtil.setAsyncStorage(CONST.AUTH_TOKEN_KEY, authToken);
    await AsyncStorageUtil.setAsyncStorage(CONST.TOKEN_EXPIRE_DATE, expiresAt);

    return authToken;
  }

  static async getToken() {
    const authToken = await AsyncStorageUtil.getAsyncStorage(CONST.AUTH_TOKEN_KEY);
    if (authToken === null) {
      ErrorTracker.trackError(new Error('Token not found'));
      return Promise.reject(new Error('Token not found'));
    }
    if (await SecurityAppAuth.isTokenExpired()) {
      let newAuthToken;
      try {
        newAuthToken = await SecurityAppAuth.refreshToken();
      } catch (error) {
        ErrorTracker.trackError(new Error(error));
        return Promise.reject(error);
      }
      return newAuthToken;
    }

    return authToken;
  }

  static async authenticateUser({ email, password }) {
    const baseUrl = await AppManager.getBaseUrl();
    let response;
    try {
      response = await httpService().post(`${baseUrl}/api/staff-app/v1/sessions/new`, {
        username: email,
        password,
      });
    } catch (error) {
      ErrorTracker.trackError(new Error(error));
      return Promise.reject(error);
    }
    const { authToken, expiresAt, renewToken } = response.data;

    await AsyncStorageUtil.setAsyncStorage(CONST.AUTH_TOKEN_KEY, authToken);
    await AsyncStorageUtil.setAsyncStorage(CONST.TOKEN_EXPIRE_DATE, expiresAt);
    await AsyncStorageUtil.setAsyncStorage(CONST.AUTH_RENEW_KEY, renewToken);

    return response;
  }
}
