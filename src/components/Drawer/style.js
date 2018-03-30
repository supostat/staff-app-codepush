import { StyleSheet } from 'react-native';
import screen from '@utils/screen';

module.exports = StyleSheet.create({
  container: {
    height: screen.HEIGHT - 130,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  header: {
    backgroundColor: 'rgb(123, 174, 253)',
    width: screen.WIDTH,
    height: 90,
  },
  heading: {
    fontSize: 22,
    color: 'rgb(255, 255, 255)',
    marginLeft: 100,
    marginTop: 30,
  },
  left_menu: {
    marginLeft: 5,
    marginTop: 5,
  },
  notification: {
    marginRight: 10,
    marginTop: 5,
  },
  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  calendar: {
    marginRight: 20,
    marginTop: 5,
  },
});
