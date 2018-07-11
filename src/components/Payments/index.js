import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';
import { acceptPayment } from '../../actions/paymentActions';
import { getPayments } from '../../selectors';

function mapStateToProps(state) {
  return {
    payments: getPayments(state),
  };
}

const mapDispatchToProps = {
  acceptPayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Payments {...props} />
));
