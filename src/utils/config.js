export default {
  BASE: 'https://boss.jsmbars.co.uk',
  IMAGE_BASE: 'https://boss.jsmbars.co.uk',
  CONFIRM_PAYMENT(paymentId) {
    return `/api/staff_app/v1/payments/${paymentId}/accept/`;
  },
};
