import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { withNetworkConnectivity } from 'react-native-offline';
import SplashScreen from 'react-native-splash-screen';

import configureStore from './src/configureStore';
import App from './App';
import Spinner from './src/components/Loader';
import SomethingWentWrong from './src/components/SomethingWentWrong';

export default class BossStaffApp extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
    // setJSExceptionHandler(this.globalJSErrorhandler, true);
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
    this.setState({ isGlobalError: true, error, isFatal });
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
