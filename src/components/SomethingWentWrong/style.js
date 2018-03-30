import { StyleSheet } from 'react-native';

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
    fontFamily: 'Montserrat-SemiBold',
    color: 'rgb(76,76,76)',
    marginTop: 15,
    marginBottom: 15,
  },
  reloadPageBtn: {
    backgroundColor: '#83bdef',
    borderRadius: 4,
    height: 40,
    marginHorizontal: 5,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  reloadBtnText: {
    fontSize: 14,
    color: 'rgb(255,255,255)',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  buttonsView: {
    height: 90,
    marginHorizontal: 5,
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: 'rgb(76,76,76)',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
