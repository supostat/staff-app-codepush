

import React, { Component } from 'react';
import { StyleSheet,
  Platform,
  Dimensions,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView } from 'react-native';
import * as constants from '../../utils/constants';
import styles from './style';
import DisplayError from '../../utils/DisplayError';

const isTablet = Dimensions.get('window').width > 450;

export default class ChangePasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationError: false,
      responseError: false,
      isKeyboardShown: false,
      isToShowPassword: false,
      newPassword: '',
      confirmPassword: '',
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = () => {
    this.setState({ isKeyboardShown: true });
  }

  keyboardDidHide = () => {
    this.setState({ isKeyboardShown: false });
  }

  showPasswordButtonPressed = () => {
    this.setState({ isToShowPassword: !this.state.isToShowPassword });
  }

  renderPhoneView() {
    const error = this.state.validationError || this.state.responseError;
    return (<ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={[styles.topImageContainerView, { marginTop: isTablet ? 15 : 30 }]}>
          <Image style={styles.topImageStyle} resizeMode="contain" source={require('../../../assets/illustration-lock-gear-primary.png')} />
        </View>
        <View style={styles.changePasswordView}>
          <Text style={styles.changePasswordText}>{constants.CHANGE_PASSWORD_TEXT}</Text>
        </View>
        { error && <DisplayError errorText={constants.CONFIRM_PASSWORD_ERROR_MSG} /> }
        <View style={[styles.inputBoxView, { marginTop: 20 }]}>
          <TextInput
            underlineColorAndroid="transparent"
            style={[styles.inputBoxStyle, error && { borderColor: constants.COLOR_ERROR }]}
            placeholderTextColor={constants.COLOR_RGB_128}
            placeholder={constants.NEW_PASSWORD}
            returnKeyType="next"
            autoCapitalize="none"
            autoFocus={false}
            onChangeText={text => this.setState({ newPassword: text })}
            value={this.state.newPassword}
            secureTextEntry={!this.state.isToShowPassword}
          />
        </View>
        <View style={styles.inputBoxView}>
          <TextInput
            underlineColorAndroid="transparent"
            style={[styles.inputBoxStyle, error && { borderColor: constants.COLOR_ERROR }]}
            placeholderTextColor={constants.COLOR_RGB_128}
            placeholder={constants.CONFIRM_PASSWORD}
            returnKeyType="default"
            autoCapitalize="none"
            autoFocus={false}
            onChangeText={text => this.setState({ confirmPassword: text })}
            value={this.state.confirmPassword}
            secureTextEntry={!this.state.isToShowPassword}
          />
        </View>


        <View style={styles.showPasswordView}>
          <View style={styles.showPasswordButtonImageView}>
            <TouchableOpacity style={styles.showPasswordButtonImageTouchable} onPress={() => this.showPasswordButtonPressed()} >
              <Image resizeMode="contain" style={styles.showPasswordImage} source={this.state.isToShowPassword ? require('../../../assets/check-checkbox-light-gray.png') : null} />
            </TouchableOpacity>
          </View>
          <View style={{
marginLeft: 5, flex: 1, justifyContent: 'center', paddingLeft: 0,
}}
          >
            <Text style={styles.showPasswordText}>{constants.SHOW_PASSWORD}</Text>
          </View>
        </View>

        <View style={{
 flex: 1, marginHorizontal: 15, height: 40, marginTop: 10, alignItems: isTablet ? 'center' : null, justifyContent: isTablet ? 'center' : null,
}}
        >
          <TouchableOpacity style={styles.doneButtonFrame}>
            <Text style={styles.doneTextStyle}>{constants.DONE_BUTTON}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>);
  }

  renderTabletView() {
    const error = this.state.validationError || this.state.responseError;
    return <View style={[styles.shadowStyle, { width: 650, height: error ? 530 : 490 }]}>{this.renderPhoneView()}</View>;
  }

  render() {
    return (
      <View style={isTablet ? styles.viewFrameForTablet : styles.container}>
        {isTablet ? this.renderTabletView() : this.renderPhoneView()}
      </View>
    );
  }
}
