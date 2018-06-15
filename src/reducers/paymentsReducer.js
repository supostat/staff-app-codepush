import { handleActions } from 'redux-actions';

import { INIT_SUCCESS } from '../actions/loginAction';

import { ACCEPT_PAYMENT_SUCCESS } from '../actions/paymentActions';

const shifts = handleActions(
  {
    [INIT_SUCCESS]: (state, action) => action.payload.payments,
    [ACCEPT_PAYMENT_SUCCESS]: (state, action) =>
      state.map((p) => {
        if (p.id === action.payload.paymentId) {
          return { ...p, status: 'Received', alert: false };
        }
        return p;
      }),
  },
  {},
);

export default shifts;
