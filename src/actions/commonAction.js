import AppManager from '../utils/AppManager';
import AsyncStorageUtil from '../utils/AsyncStorageUtil';
import * as constant from '../utils/constants';

export const START_SPINNER = 'START_SPINNER';
export const STOP_SPINNER = 'STOP_SPINNER';
export const UPDATE_IS_CUSTOM_URL = 'UPDATE_IS_CUSTOM_URL';
export const UPDATE_CURRENT_URL = 'UPDATE_CURRENT_URL';
export const CURRENT_URL = 'CURRENT_URL';
export const PROGRESS_CHANGED = 'PROGRESS_CHANGED';

export function startSpinner() {
  return { type: START_SPINNER };
}

export function stopSpinner() {
  return { type: STOP_SPINNER };
}

export function updateIsCustomUrl(isCustom = false) {
  return { type: UPDATE_IS_CUSTOM_URL, payload: isCustom };
}

export function updateCurrentUrl(url) {
  return { type: UPDATE_CURRENT_URL, payload: url };
}

export const updateInitialUrlData = () => (dispatch) => {
  return AppManager.getSettings().then(({ url, isCustom }) => {
    dispatch(updateIsCustomUrl(isCustom));
    dispatch(updateCurrentUrl(url));
  });
};

export const toggleCustomUrl = (isCustom) => (dispatch) => {
  return AsyncStorageUtil.setAsyncStorage(constant.APP_TOUSE_CUSTOM_URL, (!isCustom).toString()).then(() => {
    AppManager.getBaseUrl().then((url) => {
      dispatch(updateIsCustomUrl(!isCustom));
      dispatch(updateCurrentUrl(url));
    })
  });
}
