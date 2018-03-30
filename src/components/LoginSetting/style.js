
import { StyleSheet, Platform, Dimensions } from 'react-native';
import * as constants from '../../utils/constants';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flex: 5,
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  linkView: {
    height: 150,
  },
  linkBorderView: {
    borderRadius: 2,
    borderColor: constants.COLOR_D7,
    borderWidth: 1,
    flex: 10,
    marginHorizontal: 30,
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  linkViewContainer: {
    flex: 1,
    marginHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customURLText: {
    fontSize: 14,
    color: constants.COLOR_RGB_76,
    fontFamily: 'Montserrat-Regular',
  },
  customURLTextContainer: {
    flex: 4,
  },
  switchContainer: {
    width: 50,
  },
  loginBtnStyle: {
    backgroundColor: '#83bdef',
    borderRadius: 4,
    height: 40,
    marginHorizontal: 30,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 14,
    color: 'rgb(255,255,255)',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
