import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Payments {...props} />
));
