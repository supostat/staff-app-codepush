import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import * as Sentry from '@sentry/react-native';
import SplashScreen from 'react-native-splash-screen';

import configureStore from './src/configureStore';
import App from './App';
import Spinner from './src/components/Loader';
import SomethingWentWrong from './src/components/SomethingWentWrong';

const APP_SENTRY_LINK = process.env.APP_SENTRY_LINK;

Sentry.init({
  dsn: APP_SENTRY_LINK,
});
export default class BossStaffApp extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
    setJSExceptionHandler(this.globalJSErrorhandler, true);
    this.state = {
      isGlobalError: false,
      error: null,
      isFatal: null,
      isBasePathLoaded: false,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  globalJSErrorhandler = (error, isFatal) => {
    if (isFatal) {
      this.setState({ isGlobalError: true, error, isFatal });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.isGlobalError ? (
          <SomethingWentWrong
            error={this.state.error}
            isFatal={this.state.isFatal}
          />
        ) : (
          <Provider store={this.store}>
            <View style={{ flex: 1 }}>
              <App />
              <Spinner />
            </View>
          </Provider>
        )}
      </View>
    );
  }
}

AppRegistry.registerComponent('BossStaffApp', () => BossStaffApp);
