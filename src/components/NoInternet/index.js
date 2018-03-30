

import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';
import RNRestart from 'react-native-restart';
import styles from './style';

const CLOUD_ICO = require('../../../assets/illustration-cloud-storm-primary.png');

export default function NoInternetCompoment() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            resizeMode="cover"
            source={CLOUD_ICO}
          />
        </View>
        <Text style={styles.titleText}>No Internet  connection found</Text>
        <Text style={styles.subTitleText}>Check your connection</Text>
      </ScrollView>
    </View>

  );
}
