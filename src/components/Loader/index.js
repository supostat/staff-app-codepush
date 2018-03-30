import React, { Component } from 'react';
import { View,Dimensions } from 'react-native';
import styles from './style';
const SpinnerEmt = require('react-native-spinkit');
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Orientation from "react-native-orientation";

class Spinner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orientation: Orientation.getInitialOrientation(),
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height
    }
  }

  componentWillMount() {
    Orientation.addOrientationListener(this.orientationDidChange);
  }

  orientationDidChange = orientation => {
    if (orientation === "LANDSCAPE") {
      this.setState({
        orientation: Orientation.getOrientation,
        screenWidth: Dimensions.get('window').width,
        screenHeight: Dimensions.get('window').height
      })
    } else {
      this.setState({
        orientation: Orientation.getOrientation,
        screenWidth: Dimensions.get('window').width,
        screenHeight: Dimensions.get('window').height
      })
    }
  };

	render() {
		if(!this.props.isAnimating){
			return null;
		} else {
			return (
				<View style={[styles.spinnerContainer,{width:this.state.screenWidth,height:this.state.screenHeight}]}>
          <SpinnerEmt
            style={styles.spinner} size={100}
            type={'ChasingDots'} color={'#83bdef'}
          />
				</View>
			);
		}
	}
}

function mapStateToProps(state) {
  const {
    commonReducer
  } = state;
  return {
    isAnimating: commonReducer.isAnimating,
  };
}

Spinner.propTypes = {
  isAnimating: PropTypes.bool,
};

export default connect(mapStateToProps)(Spinner);

