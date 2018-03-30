

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingComponent from './SettingComponent';

import { toggleCustomUrl, updateCurrentUrl } from '../../actions/commonAction';

class SettingContainer extends Component {
  render() {
    return (
      <SettingComponent {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { commonReducer } = state;
  return {
    isCustomUrl: commonReducer.isCustomUrl,
    currentUrl: commonReducer.currentUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCustomUrl: isCustom => dispatch(toggleCustomUrl(isCustom)),
    updateCurrentUrl: url => dispatch(updateCurrentUrl(url)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
