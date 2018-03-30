

import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ScrollView, Alert } from 'react-native';
import { ConnectivityRenderer } from 'react-native-offline';
import RNRestart from 'react-native-restart';
import style from './style';
import * as constant from '../../utils/constants';
import { NavScreenWithBack } from '../NavBar/TopNavScreen';
import AsyncStorageUtil from '../../utils/AsyncStorageUtil';

const SWITCH_ON_ICO = require('../../../assets/switch_on.png');
const SWITCH_OFF_ICO = require('../../../assets/switch_off.png');
const LINK_ICO = require('../../../assets/link.png');

export default class SettingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customUrlReceived: false,
      customURL: props.currentUrl,
    };
  }

  reloadApp = () => {
    RNRestart.Restart();
  };

  switchButtonPressed() {
    this.props.toggleCustomUrl(this.props.isCustomUrl)
  }

  updateUrl = (url) => {
    this.setState({ customURL: url });
  }

  saveCustomURL = () => {
    if (!!this.state.customURL) {
      AsyncStorageUtil.setAsyncStorage(constant.APP_CUSTOM_URL, this.state.customURL).then(() => {
        this.props.updateCurrentUrl(this.state.customURL);
        Alert.alert(
          'Host changed successful',
          'Refresh the app',
          [
            { text: 'Refresh', onPress: () => this.reloadApp() },
          ],
        );
      });
    }
  }

  renderCustomLinkView() {
    return (
      <View style={style.linkBorderView}>
        <View style={style.linkViewContainer}>
          <Image style={{ width: 16, height: 16 }} source={LINK_ICO} />
        </View>
        <View style={{ flex: 10, height: 38, justifyContent: 'center' }} >
          <TextInput
            placeholder="http://example.com"
            color={constant.COLOR_RGB_76}
            style={style.customURLText}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => this.updateUrl(text)}
            value={this.props.isCustomUrl ? this.state.customURL : ''}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={style.container}>
        <NavScreenWithBack banner="Login Settings" navigation={this.props.navigation} />
        <ScrollView>
          <View style={style.headerView}>
            <View style={[style.customURLTextContainer, {}]}>
              <Text style={style.customURLText}>Use custom url</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{ justifyContent: 'flex-start' }}
                onPress={() => this.switchButtonPressed()}
              >
                { this.props.isCustomUrl
                    ? <Image source={SWITCH_ON_ICO} />
                    : <Image source={SWITCH_OFF_ICO} />
                }
              </TouchableOpacity>
            </View>
          </View>
          { this.props.isCustomUrl && this.renderCustomLinkView() }
          <View>
            <TouchableOpacity
              style={style.loginBtnStyle}
              onPress={this.saveCustomURL}
            >
              <Text style={style.loginText}>Apply</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            height: 1, marginHorizontal: 15, marginTop: 10, backgroundColor: constant.COLOR_RGB_240,
          }}
          />
        </ScrollView>
      </View>
    );
  }
}
