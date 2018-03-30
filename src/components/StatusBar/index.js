

import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

class StatusBarBackgroundIOS extends Component {
  render() {
    return (
      <View style={[styles.statusBarBackground, this.props.style || {}]} />
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'white',
  },
});

module.exports = StatusBarBackgroundIOS;
