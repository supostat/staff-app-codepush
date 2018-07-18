

import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, Image } from 'react-native';
import oFetch from 'o-fetch';
import { NavScreen } from '../NavBar/TopNavScreen';
import styles from './style';
import { isValidURL } from '../../utils/common';

function mapStaffMemberData(staffMember) {
  const siaBadgeNumber = oFetch(staffMember, 'siaBadgeNumber');
  const siaBadgeExpiryDate = oFetch(staffMember, 'siaBadgeExpiryDate');
  const dateOfBirth = oFetch(staffMember, 'dateOfBirth');
  const phoneNumber = oFetch(staffMember, 'phoneNumber');
  const email = oFetch(staffMember, 'email');

  return [
    { title: 'SIA badge number', text: siaBadgeNumber },
    { title: 'SIA badge expiry date', text: siaBadgeExpiryDate },
    { title: 'Date of birth', text: dateOfBirth },
    { title: 'Phone number', text: phoneNumber },
    { title: 'Email address', text: email },
  ];
}

function ProfileItem({ title, text }) {
  return (
    <View style={styles.profileListView}>
      <View style={styles.profileListHeader}>
        <Text style={styles.profileListHeaderTextPhone}>{title}</Text>
      </View>
      <View style={styles.profileListDetail}>
        <Text style={styles.profileListDetailTextPhone}>{text}</Text>
      </View>
    </View>
  );
}

function ProfileData({ staffMember }) {
  return mapStaffMemberData(staffMember).map((profileItem, index) => {
    const title = oFetch(profileItem, 'title');
    const text = oFetch(profileItem, 'text');
    return (
      <ProfileItem key={index.toString()} text={text} title={title} />
    );
  });
}

export default function ProfileComponent(props) {
  const staffMember = oFetch(props, 'staffMember');
  const onLogout = oFetch(props, 'screenProps.onLogout');
  const {
    avatarImageUrl,
    firstName,
    surname,
  } = staffMember;

  const avatarUrl = isValidURL(avatarImageUrl) ? avatarImageUrl : `${props.currentUrl}${avatarImageUrl}`;
  const fullName = `${firstName} ${surname}`;
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <NavScreen banner="My Profile" navigation={props.navigation} onLogout={onLogout} />
      <View style={{ alignItems: 'center', flex: 1 }}>
        <View style={styles.container}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 0 }}
          >
            <View style={[styles.profileImageContainerPhone]}>
              <Image source={{ uri: avatarUrl }} style={styles.imageViewFrames} />
            </View>
            <View style={styles.profileNameTextFramePhone}>
              <Text style={styles.profileNameTextPhone}>
                {fullName}
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <ProfileData staffMember={staffMember} />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
