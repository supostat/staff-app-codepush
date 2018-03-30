

import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const paddingHorizontalConst = 10;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewiPhone: {
    flex: 1,
  },
  baseViewStylePhone: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#ffffff',
  },
  lockImageStylePhone: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPasswordTextFramePhone: {
    marginTop: 25,
    paddingHorizontal: paddingHorizontalConst,
    height: 30,
  },
  forgotPasswordTextPhone: {
    height: 30,
    margin: 1,
    fontSize: 24,
    color: 'rgb(76,76,76)',
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emailTextBoxFramePhone: {
    marginTop: 20,
    paddingHorizontal: 5,
    height: 40,
  },
  emailTextBoxPhone: {
    height: 40,
    borderRadius: 2,
    borderColor: '#d7d7d7',
    borderWidth: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    fontSize: 14,
  },
  sendResetPasswordFramePhone: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginHorizontal: 5,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#83bdef',
  },
  sendResetPasswordPhone: {
    color: 'rgb(255,255,255)',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  signinButtonFramePhone: {
    marginTop: 5,
    paddingHorizontal: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinButtonPhone: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(128,128,128)',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  shadowStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  bottomButtonsView: {

    height: 90,
    marginHorizontal: 5,
    marginTop: 20,
  },
  keyboardContainer: {
    flex: 1,
  },
});
