
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import * as constacts from './constants';

export function DisplayError({ errorText = '' }) {
  let errors = [];
  if (Object.prototype.toString.call(errorText) === '[object Object]') {
    if (errorText.errors) {
      errors = Object.values(errorText.errors);
    }
  } else {
    errors.push(errorText);
  }

  function renderErrors() {
    return errors.map((error, index) => {
      return (
        <Text key={index.toString()} style={{
          color: constacts.ERROR_TEXT,
          fontSize: 14,
          fontFamily: 'Montserrat-Light',
        }}>{error}</Text>
      );
    });
  }

  return (
    <View style={{
      flex: 1,
      marginHorizontal: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 4,
      borderWidth: 1,
      backgroundColor: '#ed7f7e',
      borderColor: '#ed7f7e',
      justifyContent: 'center',
      marginTop: 10,
    }}>
      { renderErrors() }
    </View>
  );
}

