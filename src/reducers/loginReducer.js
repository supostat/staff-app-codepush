
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_LOGIN,
  RENEW_LOGIN_FAILED,
} from '../actions/loginAction';

const initialState = {
  email: '',
  authToken: null,
  renewToken: null,
  expiresAt: null,
  status: false,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        status: false,
      };
    case RESET_LOGIN:
      return {
        ...state,
        email: '',
        authToken: null,
        renewToken: null,
        expiresAt: null,
        status: false,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        authToken: action.payload.authToken,
        renewToken: action.payload.renewToken,
        expiresAt: action.payload.expiresAt,
        status: true,
        error: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        status: false,
        error: true,
        errorText: action.payload,
      };
    case RENEW_LOGIN_FAILED:
      return {
        ...state,
        status: false,
        error: true,
        errorText: action.payload,
      };

    default: return state;
  }
}
