

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ChangePasswordComponent from './ChangePasswordComponent';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ChangePasswordComponent {...this.props} />
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
