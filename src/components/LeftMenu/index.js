import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import { NavScreen } from '../NavBar/TopNavScreen';

const HAMBURGER_ICO = require('../../../assets/menu-dark-gray.png');
const USER_ICO = require('../../../assets/user-o-menu-dark-gray.png');
const SHIFTS_ICO = require('../../../assets/time2-menu-dark-gray.png');
const LOGOUT_ICO = require('../../../assets/power-settings-new-menu-dark-gray.png');

class LeftMenuComponent extends Component {
  static navigationOptions = {
    drawerLabel: 'Security',
    drawerIcon: () => (
      <Image source={HAMBURGER_ICO} />
    ),
  };

  navigateToProfile = () => {
    this.props.navigation.navigate('Profilescreen');
  }

  navigateToShifts = () => {
    this.props.navigation.navigate('ShiftScreen');
  }

  render() {
    return (
      <View style={styles.full}>
        <View style={styles.container}>
          <NavScreen
            banner={'Securities'}
            navigation={this.props.navigation}
          />
          <ScrollView>
            <TouchableOpacity onPress={this.navigateToProfile}>
              <View style={[styles.dirRow, styles.itemContainer]}>
                 <Image resizeMode='contain' style={styles.icon} source={USER_ICO} />
                <Text style={styles.textStyle}> Profile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {this.navigateToShifts}>
              <View style={[styles.dirRow, styles.itemContainer]}>
                <Image resizeMode='contain' style={styles.icon} source={SHIFTS_ICO} />
                <Text style={styles.textStyle}> Shifts</Text>
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#ededed' }}></View>
            <TouchableOpacity onPress={this.props.screenProps.onLogout}>
              <View style={[styles.dirRow, styles.itemContainer]}>
                <Image resizeMode='contain' style={styles.icon} source={LOGOUT_ICO} />
                <Text style={styles.textStyle}> Log Out</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default LeftMenuComponent;
