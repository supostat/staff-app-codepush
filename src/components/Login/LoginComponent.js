import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import Orientation from 'react-native-orientation';
import KeyboardManager from 'react-native-keyboard-manager';
import styles from './style';
import * as constants from '../../utils/constants';
import { DisplayError } from '../../utils/DisplayError';

const LOGIN_SETTINGS_ICO = require('../../../assets/setting_login.png');
const LOCK_ICO = require('../../../assets/illustration-lock-primary.png');

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
}

export default class LoginCompoment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      orientation: Orientation.getInitialOrientation(),
    };
  }

  onPasswordChange = (password) => {
    this.setState({ password });
  }

  onEmailChange = (email) => {
    this.setState({ email });
  }

  onLogin = () => {
    const { email, password } = this.state;
    this.props.handleLogin(email, password).then(() => {
      this.props.navigation.navigate('DrawerScreen');
    });
  }

  navigateToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPasswordScreen');
  }

  navigateToLoginSettings = () => {
    this.props.navigation.navigate('LoginSettingScreen');
  }

  renderPhoneView() {
    return (
      <ScrollView>
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <View style={[styles.imgContainer, { flex: 2 }]}>
            <Image
              style={{ height: 170, marginLeft: 50 }}
              resizeMode="contain"
              source={LOCK_ICO}
            />
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity
              style={{
                height: 50, width: 50, marginTop: 40, alignItems: 'center', justifyContent: 'center',
              }}
              onPress={this.navigateToLoginSettings}
            >
              <Image style={{ height: 20, width: 20, marginTop: 0 }} resizeMode="contain" source={LOGIN_SETTINGS_ICO} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleText}>Log In</Text>
        {this.props.error &&
          <DisplayError errorText={this.props.errorText} />
        }
        <View>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Email Address"
            keyboardType="email-address"
            placeholderTextColor="rgb(128,128,128)"
            autoCapitalize="none"
            autoCorrect={false}
            style={[styles.inputStyle, this.props.error && styles.errorBorder]}
            onChangeText={this.onEmailChange}
            value={this.state.email}
            returnKeyType="next"
          />
        </View>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="rgb(128,128,128)"
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.inputStyle, this.props.error && styles.errorBorder]}
          onChangeText={this.onPasswordChange}
          value={this.state.password}
          secureTextEntry
        />
        <View style={styles.bottomButtonsView}>
          <TouchableOpacity
            style={styles.loginBtnStyle}
            onPress={this.onLogin}
          >
            <Text style={styles.loginText}>{constants.LOG_IN_TEXT}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.frtPassBtn}
            onPress={this.navigateToForgotPassword}
          >
            <Text style={styles.frtPassText}>{constants.FORGOT_PASSWORD_TEXT}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  renderTabletView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={[
            styles.shadowStyle,
            { width: Dimensions.get('window').width - 100, height: this.state.error ? 510 : 470 },
          ]}
        >
          {this.renderPhoneView()}
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {this.renderPhoneView()}
      </View>
    );
  }
}
