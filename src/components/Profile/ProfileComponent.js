import React, { Component } from 'react';
import { View, Text, ScrollView, Platform, Image } from 'react-native';
import oFetch from 'o-fetch';
import { NavScreen } from '../NavBar/TopNavScreen';
import styles from './style';
import { isValidURL } from '../../utils/common';

function mapStaffMemberData(staffMember) {
  const niNumber = oFetch(staffMember, 'niNumber');
  const address = oFetch(staffMember, 'address');
  const county = oFetch(staffMember, 'county');
  const country = oFetch(staffMember, 'country');
  const phoneNumber = oFetch(staffMember, 'phoneNumber');
  const email = oFetch(staffMember, 'email');
  return [
    { title: 'Email address', text: email },
    { title: 'Phone number', text: phoneNumber },
    { title: 'NI number', text: niNumber },
    { title: 'Address', text: [address, county, country] },
  ];
}

function ProfileItem({ title, text }) {
  if (!text || (Array.isArray(text) && text.filter(t => t).length === 0)) return null;
  const renderText = text =>
    (Array.isArray(text) ? (
      text.map((textItem, key) => {
        if (!textItem) return null;
        return (
          <Text key={key.toString()} style={styles.profileListDetailTextPhone}>
            {textItem}
          </Text>
        );
      })
    ) : (
      <Text style={styles.profileListDetailTextPhone}>{text}</Text>
    ));

  return (
    <View style={[styles.profileListView, Array.isArray(text) && { height: 100 }]}>
      <View style={styles.profileListHeader}>
        <Text style={styles.profileListHeaderTextPhone}>{renderText(text) !== null && title}</Text>
      </View>
      <View style={styles.profileListDetail}>{renderText(text)}</View>
    </View>
  );
}

function ProfileData({ staffMember }) {
  return mapStaffMemberData(staffMember).map((profileItem, index) => {
    const title = oFetch(profileItem, 'title');
    const text = oFetch(profileItem, 'text');
    return <ProfileItem key={index.toString()} text={text} title={title} />;
  });
}

export default function ProfileComponent(props) {
  const staffMember = oFetch(props, 'staffMember');
  const onLogout = oFetch(props, 'screenProps.onLogout');
  const { avatarImageUrl, firstName, surname } = staffMember;

  const avatarUrl = isValidURL(avatarImageUrl)
    ? avatarImageUrl
    : `${props.currentUrl}${avatarImageUrl}`;
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
              <Text style={styles.profileNameTextPhone}>{fullName}</Text>
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
