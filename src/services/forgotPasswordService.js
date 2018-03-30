import AppManager from '../utils/AppManager';
import httpService from './httpService';

export default function renewPassword(email) {
  return AppManager.getBaseUrl().then((baseUrl) => {
    const path = 'api/security-app/v1/sessions/forgot-password';
    return httpService().post(`${baseUrl}/${path}`, {
      email,
    });
  });
}
