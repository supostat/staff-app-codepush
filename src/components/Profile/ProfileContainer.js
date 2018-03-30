import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from './ProfileComponent';

function Profile(props) {
  if (!props.staffMember) {
    return null;
  }
  return <ProfileComponent {...props} />;
}

function mapStateToProps(state) {
  const { staffMember, commonReducer } = state;
  return {
    staffMember,
    currentUrl: commonReducer.currentUrl,
  };
}

export default connect(mapStateToProps)(Profile);
