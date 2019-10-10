import { APP_LAMBDA_BASE_URL } from 'react-native-dotenv';

export default {
  BASE: APP_LAMBDA_BASE_URL,
  IMAGE_BASE: APP_LAMBDA_BASE_URL,
  CONFIRM_PAYMENT(paymentId) {
    return `/api/staff-app/v1/payments/${paymentId}/receive_payment`;
  },
};
