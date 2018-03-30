
import {
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  RESET_LOGOUT,
  LOGOUT_RESET,
} from '../actions/loginAction';

const initialState = {
  status: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        status: true,
        error: false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        status: false,
        error: true,
      };
    case RESET_LOGOUT:
      return {
        ...state,
        status: false,
        error: false,
      };
    default: return state;
  }
}
