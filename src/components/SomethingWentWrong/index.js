import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import RNRestart from 'react-native-restart';
import style from './style';
import { ErrorTracker } from '../../utils/error-tracker';

function SomethingWentWrong(props) {
  const { error, isFatal } = props;
  ErrorTracker.trackError(error);

  const reloadApp = () => {
    RNRestart.Restart();
  };

  return (
    <View style={[style.imgContainer, { flex: 1 }]}>
      <Text style={style.titleText}>Something has gone horribly wrong</Text>
      <Text style={style.descriptionText}>
        There was an error in the code on this page.
        If the problem persist please let an admin know what happened
        so that they can relay this to the technical team
      </Text>
      <View style={style.buttonsView}>
        <TouchableOpacity
          onPress={reloadApp}
          style={style.reloadPageBtn}
        ><Text style={style.reloadBtnText}>Reload App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

SomethingWentWrong.PropTypes = {
  error: PropTypes.object.isRequired,
  isFatal: PropTypes.bool.isRequired,
};

export default SomethingWentWrong;
