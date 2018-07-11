export default {
  BASE: 'https://boss.jsmbars.co.uk',
  IMAGE_BASE: 'https://boss.jsmbars.co.uk',
  CONFIRM_PAYMENT(paymentId) {
    return `/api/staff-app/v1/payments/${paymentId}/receive_payment`;
  },
};
