/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/LoginContainer';
import ForgotPassword from './src/components/ForgotPassword/ForgotPasswordContainer';
import Rota from './src/components/Rota/RotaComponent';
import Drawer from './src/components/Drawer';
import LoginSetting from './src/components/LoginSetting/SettingContainer';

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator({
    LoginScreen: { screen: Login, navigationOptions: { header: null } },
    DrawerScreen: { screen: Drawer, navigationOptions: { header: null } },
    ForgotPasswordScreen: { screen: ForgotPassword, navigationOptions: { header: null } },
    RotaScreen: { screen: Rota, navigationOptions: { header: null } },
    LoginSettingScreen: { screen: LoginSetting, navigationOptions: { header: null } },
  }, {
    headerMode: 'screen',
    initialRouteName: signedIn ? 'DrawerScreen' : 'LoginScreen',
  });
};

export default createRootNavigator;
