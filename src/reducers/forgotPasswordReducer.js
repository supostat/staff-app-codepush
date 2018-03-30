import * as constants from '../utils/constants';
import resetPassword from '../actions/forgotPasswordAction';

const initialState = {
  status: false,
  message: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.FORGOT_PASSWORD:
      return {
        ...state,
        status: false,
        message: '',
      };
    case constants.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        status: true,
        message: '',
      };
    case constants.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        status: false,
        message: '',
      };
    default: return state;
  }
}
