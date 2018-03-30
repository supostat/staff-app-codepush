

import React, { Component } from 'react';
import ForgotPasswordComponent from './ForgotPasswordComponent';
import { connect } from 'react-redux';
import resetPasswordAct from '../../actions/forgotPasswordAction';

class ForgotPassword extends Component {
  render() {
    return (
      <ForgotPasswordComponent {...this.props} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onResetPassword: email => dispatch(resetPasswordAct(email)),
  };
}


export default connect(null, mapDispatchToProps)(ForgotPassword);
