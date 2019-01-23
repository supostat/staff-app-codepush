import { Sentry } from 'react-native-sentry';

export const ErrorTracker = {
  trackError(error) {
    Sentry.captureException(error);
  },
  setUser(user) {
    Sentry.setUserContext(user);
  },
  captureBreadcrumb(data) {
    Sentry.captureBreadcrumb(data);
  },
};
