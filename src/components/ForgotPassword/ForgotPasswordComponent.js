'user strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import style from './style';
import * as constant from '../../utils/constants';
import DeviceInfo from 'react-native-device-info';
import KeyboardManager from 'react-native-keyboard-manager';
import { ErrorTracker } from '../../utils/error-tracker';

let isTablet = false;

export default class ForgotPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isKeyboardShown: false,
    };
  }
  componentWillMount() {
    isTablet = DeviceInfo.isTablet();
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
    }
  }

  focusOnField(filedName) {
    this.refs[filedName].focus();
  }

  sendPasswordButtonPressed() {
    const { email } = this.state;
    this.props.onResetPassword(email).then(() => {
      Alert.alert(
        'Info.',
        'We have sent an email with reset password instruction to your email.',
        [
          { text: 'OK', onPress: () => this.props.navigation.goBack() },
        ],
        { cancelable: false },
      );
    }).catch((error) => {
      ErrorTracker.trackError(error);
      throw error;
    });
  }

  signinButtonPressed() {
    this.props.navigation.goBack();
  }

  renderPhoneView() {
    return (<ScrollView style={style.scrollViewiPhone}>
      <View style={style.lockImageStylePhone}>
        <Image resizeMode="cover" source={require('../../../assets/illustartion-lock-refresh-primary.png')} />
      </View>
      <View style={style.forgotPasswordTextFramePhone}>
        <Text style={style.forgotPasswordTextPhone}>{constant.FORGOT_PASSWORD_TEXT}</Text>
      </View>
      <View style={style.emailTextBoxFramePhone}>
        <TextInput
          ref="email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          style={[{ textAlign: 'left' }, style.emailTextBoxPhone]}
          placeholderTextColor="rgb(128,128,128)"
          editable
          placeholder={constant.EMAIL_PLACEHOLDER}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />
      </View>
      <View style={style.bottomButtonsView}>
        <TouchableOpacity
          style={style.sendResetPasswordFramePhone}
          onPress={() => this.sendPasswordButtonPressed()}
        >
          <Text style={style.sendResetPasswordPhone}>{constant.RESET_PASSWORD_TEXT}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.signinButtonFramePhone}
          onPress={() => this.signinButtonPressed()}
        >
          <Text style={style.signinButtonPhone}>{constant.SIGNIN_TEXT}</Text>
        </TouchableOpacity>
      </View>

            </ScrollView>);
  }

  renderTabletView() {
    return <View style={[style.shadowStyle, { height: 440, width: Dimensions.get('window').width - 100 }]}>{this.renderPhoneView()}</View>;
  }

  render() {
    return (
      <View style={[style.container, { alignItems: isTablet ? 'center' : null, justifyContent: isTablet ? 'center' : null }]}>
        {this.renderPhoneView()}
      </View>
    );
  }
}

