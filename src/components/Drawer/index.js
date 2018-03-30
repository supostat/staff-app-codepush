import React from 'react';
import { DrawerNavigator, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { ConnectivityRenderer } from 'react-native-offline';
import RNRestart from 'react-native-restart';
import { logoutAction, initializeApp } from '../../actions/loginAction';
import { updateDataAction } from '../../actions/sseActions';
import NoInternet from '../NoInternet';
import LeftMenuComponent from '../LeftMenu';
import Profile from '../Profile/ProfileContainer';
import Shift from '../Shift/ShiftContainer';
import * as constants from '../../utils/constants';

const Drawer = DrawerNavigator(
  {
    ShiftScreen: { screen: Shift },
    Profilescreen: { screen: Profile },
  },
  {
    drawerWidth: 300,
    contentComponent: props => <LeftMenuComponent { ...props } />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

class SecureApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLoaded: false,
      staffChecked: false,
    };
  }

  onAblyFailed = (error) => {
    this.ablyService.deactivate().then(() => {
      Alert.alert(
        'Error',
        'Something wrong with update service, please reload the app',
        [
          { text: 'Reload', onPress: () => RNRestart.Restart() },
        ],
      );
    });
  }

  componentWillMount() {
    this.props.initializeApp({
      onGetTokenFailed: this.onGetTokenFailed,
      onFailed: this.onAblyFailed,
    }).then((ablyService) => {
      this.ablyService = ablyService;
      this.ablyService.subscribeToPersonalChannel((message) => {
        this.props.updateData(message.data);
      });
    }).catch((error) => {
      if (error) {
        if (error.response && error.response.status === 403) {
          this.onLogout();
        }
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.staffMember) {
      this.onGetTokenFailed();
    } else {
      this.setState({ staffChecked: true });
    }
  }

  onGetTokenFailed = () => {
    this.onLogout().then(() => {
      Alert.alert(
        'Token',
        'Your authentication token was expired, please login again',
        [
          { text: 'OK' },
        ],
      );
    });
  }

  onLogout = () => {
    return this.props.handleLogout().then(() => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'LoginScreen' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
      if (!this.ablyService) {
        constants.BUGSNAG.notify(new Error('!!! Ably service doesn\'t exist in onLogout function !!!'));
      } else {
        return this.ablyService.deactivate();
      }
      return Promise.resolve();
    });
  }

  render() {
    if (!this.state.staffChecked) {
      return null;
    }

    return (
      <ConnectivityRenderer
        pingServerUrl={`${this.props.currentUrl}/api/v1/version`}
        timeout={10000}
      >{isConnected => (
        isConnected ? (
          <Drawer screenProps={{
            onLogout: this.onLogout,
            onGetTokenFailed: this.onGetTokenFailed,
          }}/>
        ) : (
          <NoInternet />
        )
      )}

      </ConnectivityRenderer>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUrl: state.commonReducer.currentUrl,
    staffMember: state.staffMember,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogout: () => dispatch(logoutAction()),
    updateData: data => dispatch(updateDataAction(data)),
    initializeApp: options => dispatch(initializeApp(options)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecureApp);
