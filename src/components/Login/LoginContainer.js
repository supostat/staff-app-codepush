

import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { loginAct } from '../../actions/loginAction';

function Login(props) {
  return <LoginComponent {...props} />;
}

function mapStateToProps(state) {
  const { loginReducer, initReducer, commonReducer } = state;
  return {
    status: loginReducer.status,
    error: loginReducer.error,
    errorText: loginReducer.errorText,
    initStatus: initReducer.status,
    currentUrl: commonReducer.currentUrl,
    isCustomUrl: commonReducer.isCustomUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogin: (email, password) => dispatch(loginAct(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
