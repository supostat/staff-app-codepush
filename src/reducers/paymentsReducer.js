import { handleActions } from 'redux-actions';
import oFetch from 'o-fetch';
import { INIT_SUCCESS } from '../actions/loginAction';

import { ACCEPT_PAYMENT_SUCCESS } from '../actions/paymentActions';
import { UPDATE_PAYMENTS } from '../actions/sseActions';

const paymentsReducer = handleActions(
  {
    [INIT_SUCCESS]: (state, action) => {
      const payments = oFetch(action, 'payload.paymentsPage.payments');
      return payments.reduce((acc, payment) => ({
        ...acc,
        [payment.id]: payment,
      }), {});
    },
    [UPDATE_PAYMENTS]: (state, action) => (
      action.payload.reduce((acc, item) => ({
        ...acc,
        [item.id]: { ...item },
      }), state)
    ),
    [ACCEPT_PAYMENT_SUCCESS]: (state, action) => {
      const payment = oFetch(action, 'payload.payment');
      const paymentId = oFetch(payment, 'id');

      return {
        ...state,
        [paymentId]: payment,
      };
    },
  },
  {},
);

export default paymentsReducer;
