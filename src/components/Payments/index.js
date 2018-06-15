import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';
import { acceptPayment } from '../../actions/paymentActions';

function mapStateToProps(state) {
  return {
    payments: state.payments,
  };
}

const mapDispatchToProps = {
  acceptPayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Payments {...props} />
));
