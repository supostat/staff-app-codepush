

import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import commonReducer from './commonReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import initReducer from './initReducer';
import logoutReducer from './logoutReducer';
import shifts from './shifts';
import venues from './venues';
import staffMember from './staffMember';

export default combineReducers({
  loginReducer,
  commonReducer,
  forgotPasswordReducer,
  initReducer,
  logoutReducer,
  shifts,
  venues,
  staffMember,
});
