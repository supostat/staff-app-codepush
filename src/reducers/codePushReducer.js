import codePush from 'react-native-code-push';
import { PROGRESS_CHANGED } from '../actions/commonAction';

const initialState = {
  isDownloading: false,
  receivedBytes: null,
  totalBytes: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case codePush.SyncStatus.DOWNLOADING_PACKAGE:
      return {
        ...state,
        isDownloading: true,
      };
    case codePush.SyncStatus.INSTALLING_UPDATE:
      return {
        ...state,
        isDownloading: false,
        receivedBytes: null,
        totalBytes: null,
      };
    case PROGRESS_CHANGED: {
      const { receivedBytes, totalBytes } = action.progress;
      return {
        ...state,
        receivedBytes,
        totalBytes,
      };
    }
    default:
      return state;
  }
}
