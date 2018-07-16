import { connect } from 'react-redux';
import Payments from './Payments';
import { acceptPayment } from '../../actions/paymentActions';
import { reloadShiftData } from '../../actions/loginAction';
import { getPayments } from '../../selectors';

function mapStateToProps(state) {
  return {
    payments: getPayments(state),
  };
}

const mapDispatchToProps = {
  acceptPayment,
  reloadShiftData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);
