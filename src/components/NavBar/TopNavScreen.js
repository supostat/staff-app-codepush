import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './style';
import StatusBarBackgroundIOS from '../StatusBar';

const HAMBURGER_ICO = require('../../../assets/menu-dark-gray.png');
const GO_BACK_ICO = require('../../../assets/back.png');

export const NavScreen = ({ navigation, banner = '', paddingtop = 0 }) => (
  <View>
    <StatusBarBackgroundIOS style={{ backgroundColor: '#FFF' }} />
    <SafeAreaView style={[styles.navigationContainer]} forceInset={{ top: 'always' }} >
      <View style={styles.imgContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DrawerToggle');
          }}
          style={{
            flex: 1, alignItems: 'center', justifyContent: 'center', width: 50,
          }}
        >
          <Image
            source={ HAMBURGER_ICO }
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.textContainer, { paddingRight: 50 }]}>
        <Text style={styles.heading}>{banner}</Text>
      </View>
    </SafeAreaView>
  </View>
);

export const NavScreenWithBack = ({ navigation, banner = '', paddingtop = 0 }) => (
  <View>
    <StatusBarBackgroundIOS style={{ backgroundColor: '#FFF' }} />
    <SafeAreaView style={[styles.navigationContainer]} forceInset={{ top: 'always' }}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => { navigation.goBack(); }}
          style={{
            flex: 1, flexDirection: 'row', width: 80, alignItems: 'center', paddingLeft: 10,
          }}
        >
          <Image source={GO_BACK_ICO} />
          <Text style={[styles.headingBack, { paddingLeft: 10 }]} >Back</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.textContainer, { paddingRight: 80 }]}>
        <Text style={styles.heading}>{banner}</Text>
      </View>
    </SafeAreaView>
  </View>
);
