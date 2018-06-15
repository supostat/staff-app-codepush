import { createAction } from 'redux-actions';
import oFetch from 'o-fetch';
import { acceptPaymentRequest } from '../requests';

export const ACCEPT_PAYMENT_SUCCESS = 'ACCEPT_PAYMENT_SUCCESS';

export const acceptPaymentSuccess = createAction(ACCEPT_PAYMENT_SUCCESS);

export const acceptPayment = params => (dispatch, getState) => {
  const password = oFetch(params, 'password');
  const paymentId = oFetch(params, 'paymentId');

  return acceptPaymentRequest({ paymentId, password }).then(() =>
    dispatch(acceptPaymentSuccess({ paymentId })));
};
