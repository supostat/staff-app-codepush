import API from '../utils/config';

import {
  START_SPINNER,
  STOP_SPINNER,
  UPDATE_IS_CUSTOM_URL,
  UPDATE_CURRENT_URL,
} from '../actions/commonAction';

const initialState = {
  isAnimating: false,
  isCustomUrl: false,
  currentUrl: API.BASE,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_SPINNER:
      return {
        ...state,
        isAnimating: true,
      };
    case STOP_SPINNER:
      return {
        ...state,
        isAnimating: false,
      };
    case UPDATE_IS_CUSTOM_URL:
      return {
        ...state,
        isCustomUrl: action.payload,
      };
    case UPDATE_CURRENT_URL:
      return {
        ...state,
        currentUrl: action.payload,
      };
    default: return state;
  }
}
