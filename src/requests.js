import httpService from './services/httpService';
import SecurityAppAuth from './services/SecurityAppAuth';
import AppManager from './utils/AppManager';
import CONFIG from './utils/config';

// eslint-disable-next-line import/prefer-default-export
export const acceptPaymentRequest = async ({ paymentId, password }) => {
  const baseURL = await AppManager.getBaseUrl();
  return httpService(SecurityAppAuth).post(`${baseURL}${CONFIG.CONFIRM_PAYMENT(paymentId)}`, {
    password,
  });
};
