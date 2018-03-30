
import { StyleSheet, Platform } from 'react-native';
import * as constants from '../../utils/constants';


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  textContainer: {
    fontSize: 16,
    color: 'rgb(128,128,128)',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  textShitTime: {
    fontSize: 14,
    color: 'rgb(76,76,76)',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  textShitVenu: {
    fontSize: 14,
    color: 'rgb(128,128,128)',
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'normal',
  },
  shiftMonthContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  shiftContainer: {
    flex: 1,
    marginTop: 10,
    padding: 16,
    paddingTop: 11,
    marginBottom: (Platform.OS === 'ios' ? null : 10),
    marginRight: 6,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#84bef0',
  },
  vDivider: {
    borderRightWidth: 2,
    borderColor: constants.COLOR_RGB_240,
    marginRight: 5,
    marginTop: (Platform.OS === 'ios' ? null : 5),
    flex: 1,
  },
  vDividerBlank: {
    borderRightWidth: 2,
    borderColor: 'transparent',
    marginRight: 5,
    flex: 1,
  },
  loadMoreBtn: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#eeeeee',
    backgroundColor: '#f8f8f8',
    height: 40,
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NoShifts: {
    borderColor: 'transparent',
    height: 40,
    marginHorizontal: 1,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadMoreText: {
    fontSize: 14,
    color: '#808080',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  txtstyle: {
    fontSize: 14,
    color: 'red',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  rowViewStyle: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    marginBottom: 5,
  },
  timerViewStyle: {
    flex: 1,
    flexDirection: 'column',
  },


});
