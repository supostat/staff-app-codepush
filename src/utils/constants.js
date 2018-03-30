// API Calling Constants
import { Client, Configuration } from 'bugsnag-react-native';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
export const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
export const AUTH_RENEW_KEY = 'AUTH_RENEW_KEY';
export const TOKEN_EXPIRE_DATE = 'TOKEN_EXPIRE_DATE';
export const USER_EMAIL = 'USER_EMAIL';
export const APP_CUSTOM_URL = 'APP_CUSTOM_URL';
export const APP_TOUSE_CUSTOM_URL = 'APP_TOUSE_CUSTOM_URL';
export const USER_PASSWORD = 'USER_PASSWORD';
export const USER_LOGOUT_EVENT = 'USER_LOGOUT';

export let BUGSNAG = new Client();
export const applyBugsnagAdditionalData = (data) => {
  const configuration = new Configuration();
  configuration.registerBeforeSendCallback((report, error) => {
    report.metadata = {
      ...report.metadata,
      'Additional data': {
        ...data,
      },
    };
  });
  BUGSNAG = new Client(configuration);
};

// String constants
export const RESET_PASSWORD_TEXT = 'Send Reset Password Instructions';
export const SIGNIN_TEXT = 'Sign in';
export const FORGOT_PASSWORD_TEXT = 'Forgot Your Password?';
export const EMAIL_PLACEHOLDER = 'Email Address';
export const EMAIL_PASSWORD_ERROR = 'The email or password you entered was not correct';
export const CHANGE_PASSWORD_TEXT = 'Change Password';
export const SHOW_PASSWORD = 'Show Password';
export const DONE_BUTTON = 'Done';
export const NEW_PASSWORD = 'New Password';
export const CONFIRM_PASSWORD = 'Confirm Password';
export const CONFIRM_PASSWORD_ERROR_MSG = 'New password must be different';
export const LOG_IN_TEXT = 'Log In';
export const SOMETHING_WRONG_HEADER = 'Something has gone horribly wrong';
export const SOMETHING_WRONG_DESCRIPTION = 'There was as error in the code on this page.';
export const SOMETHING_WRONG_DESCRIPTION_CONTINUE = 'If the problem persists please let an admin know what happened so that they can relay this to the technical team.';
// Color Constants
export const COLOR_RGB_128 = 'rgb(128,128,128)';
export const COLOR_RGB_216 = 'rgb(216,216,216)';
export const COLOR_RGB_240 = 'rgb(240,240,240)';
export const COLOR_RGB_135 = 'rgb(135,135,135)';
export const COLOR_RGB_76 = 'rgb(76,76,76)';
export const COLOR_ERROR = '#ed7f7e';
export const COLOR_BLUE = '#83bdef';
export const ERROR_TEXT = '#FFFFFF';
export const COLOR_D7 = '#d7d7d7';
