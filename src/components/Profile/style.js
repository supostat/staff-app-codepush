

import { StyleSheet, Platform, Dimensions } from 'react-native';
import * as constants from '../../utils/constants';

const isTablet = Dimensions.get('window').width > 450;

const paddingHorizontalConst = 0;
const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    width: (deviceWidth < 350) ? deviceWidth : 350,
    paddingHorizontal: 30,
  },
  widthView: {
    width: (deviceWidth < 350) ? deviceWidth : 350,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  profileImageContainerPhone: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  imageViewFrames: {
    height: 120,
    width: 120,
    backgroundColor: (Platform.OS === 'ios') ? constants.COLOR_RGB_128 : 'transparent',
    borderRadius: 60,
  },
  profileNameTextFramePhone: {
    marginTop: 20,
    paddingHorizontal: isTablet ? 0 : paddingHorizontalConst,
    height: 30,
  },
  profileNameTextPhone: {
    height: 30,
    margin: 1,
    fontSize: 24,
    color: 'rgb(76,76,76)',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  profileListView: {
    height: 55,
    marginHorizontal: isTablet ? 0 : paddingHorizontalConst,
  },
  profileListHeader: {
    height: 17,
    marginHorizontal: isTablet ? 0 : paddingHorizontalConst,
  },
  profileListDetail: {
    height: 19,
    marginHorizontal: isTablet ? 0 : paddingHorizontalConst,
  },
  profileListHeaderTextPhone: {
    height: 17,
    margin: 1,
    fontSize: 10,
    color: 'rgb(170,170,170)',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
  },
  profileListDetailTextPhone: {
    height: 19,
    margin: 1,
    fontSize: 14,
    color: 'rgb(76,76,76)',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
  },
  loadMoreBtn: {
    backgroundColor: '#83bdef',
    borderRadius: 4,
    height: 40,
    marginHorizontal: 5,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
