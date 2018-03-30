import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  full: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  hDivider: {
    borderTopWidth: 1,
    borderColor: 'rgb(117,117,117)',
  },
  itemContainer: {
    padding: 10,
    alignItems: 'center',
  },
  dirRow: {
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 20,
  },
  textStyle: {
    fontSize: 16,
    paddingLeft: 15,
    fontFamily: 'Montserrat-Regular',
    color: 'rgb(76,76,76)',
  },
  heading: {
    fontSize: 16,
    fontFamily: 'Montserrat-Light',
    color: 'rgb(117,117,117)',
    paddingTop: 10,
  },

});
