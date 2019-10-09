import * as Sentry from '@sentry/react-native';

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
