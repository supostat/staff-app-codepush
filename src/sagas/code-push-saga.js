import codePushSaga from 'react-native-code-push-saga';
import codePush from 'react-native-code-push';
import { channel } from 'redux-saga';
import { spawn, put, take } from 'redux-saga/effects';
import { PROGRESS_CHANGED } from '../actions/commonAction';

const codePushStatusDidChangeChannel = channel();
const codePushDownloadDidProgressChannel = channel();

export function* updatesSaga() {
  try {
    // Disable syncing on resume, but synchronize
  // with CodePush every 5 seconds.
  yield spawn(codePushSaga, {
    syncOnResume: false,
    syncOnInterval: 5,
    syncOptions: {
      installMode: codePush.InstallMode.IMMEDIATE,
      mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
      updateDialog: true,
    },
    codePushStatusDidChange: status =>
      codePushStatusDidChangeChannel.put({
        type: status,
      }),
    codePushDownloadDidProgress: progress =>
      codePushDownloadDidProgressChannel.put({
        type: PROGRESS_CHANGED,
        progress,
      }),
  });
  } catch (error) {
    console.log('error: ', error)
  }
  
}

export function* watchCodePushStatusDidChangeChannel() {
  while (true) {
    const action = yield take(codePushStatusDidChangeChannel);
    console.log('status changed', action)
    yield put(action);
  }
}

export function* watchCodePushDownloadDidProgressChannel() {
  while (true) {
    const action = yield take(codePushDownloadDidProgressChannel);
    console.log('download progress', action)    
    yield put(action);
  }
}
