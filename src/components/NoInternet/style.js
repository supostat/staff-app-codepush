

import { StyleSheet, Platform } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  imgContainer: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgb(76,76,76)',
    paddingTop: 20,
  },
  subTitleText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'rgb(76,76,76)',
    paddingTop: 20,
  },

  retryText: {
    fontSize: 14,
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryBtnStyle: {
    backgroundColor: '#83bdef',
    borderRadius: 4,
    height: 40,
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 88,
  },
  itemContainer: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
