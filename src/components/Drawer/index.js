import React from 'react';
import { TabBarBottom, NavigationActions, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Alert, View } from 'react-native';
import { ConnectivityRenderer } from 'react-native-offline';
import RNRestart from 'react-native-restart';
import IIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIconFoundation from 'react-native-vector-icons/Foundation';
import { logoutAction, initializeApp } from '../../actions/loginAction';
import { updateDataAction } from '../../actions/sseActions';
import NoInternet from '../NoInternet';
import LeftMenuComponent from '../LeftMenu';
import Profile from '../Profile/ProfileContainer';
import Payments from '../Payments';
import Shift from '../Shift/ShiftContainer';
import * as constants from '../../utils/constants';
import { ErrorTracker } from '../../utils/error-tracker';

const Drawer = TabNavigator(
  {
    Profilescreen: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <IIcon name="face-profile" size={25} color={tintColor} />,
      }),
    },
    ShiftScreen: {
      screen: Shift,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Shift\'s',
        tabBarIcon: ({ tintColor }) => (
          <IIcon name="format-list-bulleted" size={25} color={tintColor} />
        ),
      }),
    },
    PaymentScreen: {
      screen: Payments,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Payment\'s',
        tabBarIcon: ({ tintColor }) => <IIconFoundation name="pound" size={25} color={tintColor} />,
      }),
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
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
      Alert.alert('Error', 'Something wrong with update service, please reload the app', [
        { text: 'Reload', onPress: () => RNRestart.Restart() },
      ]);
    });
  };

  componentWillMount() {
    this.props
      .initializeApp({
        onGetTokenFailed: this.onGetTokenFailed,
        onFailed: this.onAblyFailed,
      })
      .then((ablyService) => {
        this.ablyService = ablyService;
        this.ablyService.subscribeToPersonalChannel((message) => {
          this.props.updateData(message.data);
        });
      })
      .catch((error) => {
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
      Alert.alert('Token', 'Your authentication token was expired, please login again', [
        { text: 'OK' },
      ]);
    });
  };

  onLogout = () => this.props.handleLogout().then(() => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
    if (!this.ablyService) {
      ErrorTracker.trackError(new Error("!!! Ably service doesn't exist in onLogout function !!!"));
    } else {
      return this.ablyService.deactivate();
    }
    return Promise.resolve();
  });

  render() {
    if (!this.state.staffChecked) {
      return null;
    }

    return (
      <ConnectivityRenderer
        pingServerUrl={`${this.props.currentUrl}/api/v1/version`}
        timeout={20000}
      >
        {isConnected =>
          (isConnected ? (
            <Drawer
              screenProps={{
                onLogout: this.onLogout,
                onGetTokenFailed: this.onGetTokenFailed,
              }}
            />
          ) : (
            <NoInternet />
          ))
        }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SecureApp);
