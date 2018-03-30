import renewPassword from '../services/forgotPasswordService';
import { startSpinner, stopSpinner } from './commonAction';
import * as constants from '../utils/constants';

const resetPasswordAct = email => (dispatch) => {
  dispatch(startSpinner());
  dispatch({ type: constants.FORGOT_PASSWORD });
  return renewPassword(email)
    .then(() => dispatch(stopSpinner()))
    .catch((error) => {
      dispatch(stopSpinner());
      return Promise.reject(error);
    });
};

export default resetPasswordAct;
