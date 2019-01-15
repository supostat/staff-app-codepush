import codePush from 'react-native-code-push';
import { channel } from 'redux-saga';
import { fork, put, take, cancel } from 'redux-saga/effects';
import codePushSaga from './react-native-code-push-saga';
import { startDownload, endDownload, PROGRESS_CHANGED, showBinaryVersionMismatchModal } from '../actions/commonAction';


const codePushStatusDidChangeChannel = channel();
const codePushDownloadDidProgressChannel = channel();
const codePushBinaryVersionMismatchChannel = channel();

export function* updatesSaga() {
  // Disable syncing on resume, but synchronize
  // with CodePush every 5 seconds.
  const task = yield fork(codePushSaga, {
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
        payload: { ...progress },
      }),
    codePushBinaryVersionMismatch: (remotePackage) => {
      codePushBinaryVersionMismatchChannel.put({ remotePackage, task });
    },
  });
}

export function* watchCodePushBinaryVersionMismatchChannel() {
  while (true) {
    const { remotePackage, task } = yield take(codePushBinaryVersionMismatchChannel);
    yield put(showBinaryVersionMismatchModal(remotePackage));
    yield cancel(task);
  }
}

export function* watchCodePushStatusDidChangeChannel() {
  while (true) {
    const action = yield take(codePushStatusDidChangeChannel);
    if (action.type === codePush.SyncStatus.DOWNLOADING_PACKAGE) {
      yield put(startDownload());
    }
    if (action.type === codePush.SyncStatus.INSTALLING_UPDATE) {
      yield put(endDownload());
    }
  }
}

export function* watchCodePushDownloadDidProgressChannel() {
  while (true) {
    const action = yield take(codePushDownloadDidProgressChannel);
    yield put(action);
  }
}
