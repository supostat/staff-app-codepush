

import { StyleSheet, Platform } from 'react-native';

module.exports = StyleSheet.create({
  container: {},
  navigationContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 4,
    marginBottom: 5,
  },
  imgContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonContainer: {
    width: 80,
    flexDirection: 'row',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 1,
    marginTop: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgb(76, 76, 76)',
    textAlign: 'center',
  },
  headingBack: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Medium',
    color: 'rgb(128, 128, 128)',
    textAlign: 'center',
  },
  shadows: {
    marginHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
});
