

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RotaComponent from './RotaComponent';
import { connect } from 'react-redux';

class Rota extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RotaComponent {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rota);
