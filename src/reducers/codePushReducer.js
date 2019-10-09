import codePush from 'react-native-code-push';
import { PROGRESS_CHANGED, DOWNLOAD_START, DOWNLOAD_END, SHOW_BINARY_VERSION_MISMATCH_MODAL } from '../actions/commonAction';

const initialState = {
  isDownloading: false,
  receivedBytes: null,
  totalBytes: null,
  binaryVersionMismatch: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_START:
      return {
        ...state,
        isDownloading: true,
      };
    case DOWNLOAD_END:
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
    case SHOW_BINARY_VERSION_MISMATCH_MODAL: {
      return {
        ...state,
        binaryVersionMismatch: action.payload,
      };
    }
    default:
      return state;
  }
}
