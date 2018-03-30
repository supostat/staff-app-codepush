

import { StyleSheet, Platform, Dimensions } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  viewContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  searchView: {
    borderWidth: 1,
    borderColor: '#d8d8d8',
    marginHorizontal: 15,
    height: 44,
    flexDirection: 'row',
  },
  searchTextInput: {
    height: 44,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
  },
  touchableOpecityView: {
    height: 44,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImageView: {
    height: 40,
    width: 40,
    margin: 1,
    borderRadius: 20,
    backgroundColor: 'yellow',
  },
  profileTextView: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    flex: 1,

  },
  profileNameText: {
    marginHorizontal: 5,
    color: '#4c4c4c',
    fontSize: 16,
    backgroundColor: 'green',
  },
});
