import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import styles from './style';

class ProgressScreen extends Component {
  render() {
    const { progress } = this.props;
    return (
      <View style={styles.container}>
      <View style={styles.circle}>
        <Progress.Circle
          size={120}
          progress={progress}
          showsText
          borderWidth={0}
          color="#84bef0"
          unfilledColor="#efefef"
          textStyle={{
            fontSize: 14,
            fontFamily: 'Montserrat-Light',
            color: '#4c4c4c',
          }}
          thickness={12}
        />
        </View>
        <Text style={styles.text}>Downloading...</Text>
      </View>
    );
  }
}

ProgressScreen.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressScreen;
