
import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { NavScreen } from '../NavBar/TopNavScreen';
import { SearchBar, List, ListItem } from 'react-native-elements';

export default class RotaComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavScreen banner="Rota" navigation={this.props.navigation} />
        <View style={styles.viewContainer}>
          <View style={styles.searchView} >
            <Image resizeMode="cover" style={{ margin: 15 }} source={require('../../../assets/search2-search-input-medium-gray.png')} />
            <TextInput underlineColorAndroid="transparent" style={styles.searchTextInput} placeholder="Search" />
          </View>
          <ScrollView style={{ marginHorizontal: 15 }} />
        </View>
      </View>
    );
  }
}

