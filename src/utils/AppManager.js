import AsyncStorageUtil from './AsyncStorageUtil';
import * as constants from './constants';
import API from './config';

export default class AppManager {
  static async getBaseUrl() {
    const customUrlUsed = await AsyncStorageUtil.getAsyncStorage(constants.APP_TOUSE_CUSTOM_URL);
    if (customUrlUsed === 'true') {
      const customURL = await AsyncStorageUtil.getAsyncStorage(constants.APP_CUSTOM_URL);
      return customURL;
    }
    return API.BASE;
  }

  static async getSettings() {
    const customUrlUsed = await AsyncStorageUtil.getAsyncStorage(constants.APP_TOUSE_CUSTOM_URL);
    if (customUrlUsed === 'true') {
      const customURL = await AsyncStorageUtil.getAsyncStorage(constants.APP_CUSTOM_URL);
      return {
        url: customURL,
        isCustom: customUrlUsed === 'true',
      };
    }
    return {
      url: API.BASE,
      isCustom: customUrlUsed === 'true',
    };
  }
}
