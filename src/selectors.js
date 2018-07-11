import { createSelector } from 'reselect';
import oFetch from 'o-fetch';
import map from 'lodash/map';
import { moneyFormat } from './utils/common';
import safeMoment from './services/safeMoment';

const paymentsSelector = state => state.payments;

export const getPayments = createSelector(paymentsSelector, payments => map(payments, payment => ({
  id: oFetch(payment, 'id'),
  amount: moneyFormat(oFetch(payment, 'cents') / 100),
  date: `${oFetch(payment, 'weekStart')} - ${oFetch(payment, 'weekEnd')}`,
  weekStart: oFetch(payment, 'weekStart'),
  status: oFetch(payment, 'status'),
})).sort((a, b) => safeMoment.uiDateParse(a.weekStart) - safeMoment.uiDateParse(b.weekStart)));

export default {
  getPayments,
};
