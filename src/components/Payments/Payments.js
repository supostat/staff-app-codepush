import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  SectionList,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';

import deviceInfo from '../../utils/deviceInfo';
import { NavScreen } from '../NavBar/TopNavScreen';
import styles from './styles';
import PaymentItem from './PaymentItem';

const arr = [{}];

const payments = [
  {
    id: 1,
    alert: false,
    status: 'Pending',
    amount: '£23.34',
    date: '20/12/2015 - 27/12/2015',
  },
  {
    id: 2,
    alert: false,
    status: 'Received',
    amount: '£33.00',
    date: '12/12/2015 - 19/12/2015',
  },
  {
    id: 3,
    alert: false,
    status: 'Received',
    amount: '£25.74',
    date: '04/12/2015 - 11/12/2015',
  },
  {
    id: 4,
    alert: false,
    status: 'Received',
    amount: '£30.17',
    date: '26/11/2015 - 03/12/2015',
  },
  {
    id: 5,
    alert: true,
    status: 'Pending',
    amount: '£23.34',
    date: '18/11/2015 - 25/11/2015',
  },
];

class Payments extends Component {
  state = {
    screen: {
      isPortrait: deviceInfo.isPortrait() ? true : false,
      isLandscape: deviceInfo.isLandscape() ? true : false,
      isMobile: deviceInfo.isMobile() ? true : false,
      isTablet: deviceInfo.isTablet() ? true : false,
    },
    isConfirmModalVisible: false,
    isSuccessModalVisible: false,
  };

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => {
    return (
      <PaymentItem
        id={item.id}
        onPressItem={this._onPressItem}
        amount={item.amount}
        alert={item.alert}
        date={item.date}
        status={item.status}
      />
    );
  };

  toggleConfirmModal = () => {
    this.setState(state => ({
      isConfirmModalVisible: !state.isConfirmModalVisible,
    }));
  };

  toggleSuccessModal = () => {
    this.setState(state => ({
      isConfirmModalVisible: false,
      isSuccessModalVisible: !state.isSuccessModalVisible,
    }));
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <View style={styles.main}>
          <NavScreen banner="Payments" navigation={this.props.navigation} />
          <View style={styles.mainContent}>
            <View style={styles.mainContentInner}>
              <View style={styles.payments}>
                <View style={styles.paymentsList}>
                  <FlatList
                    data={payments}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>


        <Modal
          visible={this.state.isSuccessModalVisible}
          transparent={true}
          animationType={'fade'}
          supportedOrientations={[
            'portrait',
            'portrait-upside-down',
            'landscape',
            'landscape-left',
            'landscape-right',
          ]}
          onRequestClose={() => this.toggleSuccessModal()}
        >
          <View style={styles.modalPortal}>
            <ScrollView
              style={styles.modalPortalScroll}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={styles.modalContent}>
                <View style={styles.modalClose}>
                  <TouchableOpacity onPress={() => this.toggleSuccessModal()}>
                    <View style={styles.modalCloseInner}>
                      <Text style={styles.modalCloseIcon}>&#xe909;</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    styles.modalWindow,
                    this.state.screen.isMobile &&
                      this.state.screen.isPortrait &&
                      styles.modalWindowMobilePortrait,
                  ]}
                >
                  <View
                    style={[
                      styles.modalWindowHeader,
                      styles.modalWindowHeaderRoleSuccess,
                    ]}
                  >
                    <Text
                      style={[
                        styles.modalWindowTitle,
                        styles.modalWindowTitleThemeLight,
                        this.state.screen.isTablet &&
                          styles.modalWindowTitleTablet,
                      ]}
                    >
                      Success!
                    </Text>
                  </View>
                  <View style={styles.modalWindowContent}>
                    <View style={styles.service}>
                      <View style={styles.serviceNote}>
                        <View
                          style={[
                            styles.note,
                            !(
                              this.state.screen.isMobile &&
                              this.state.screen.isLandscape
                            ) && styles.noteLayoutColumn,
                          ]}
                        >
                          <Text
                            style={[
                              styles.noteIcon,
                              styles.noteIconRoleSuccess,
                              !(
                                this.state.screen.isMobile &&
                                this.state.screen.isLandscape
                              ) && styles.noteIconLayoutColumn,
                            ]}
                          >
                            &#xe902;
                          </Text>
                          <View style={styles.noteContent}>
                            <Text
                              style={[
                                styles.noteText,
                                this.state.screen.isTablet &&
                                  styles.noteTextTablet,
                                !(
                                  this.state.screen.isMobile &&
                                  this.state.screen.isLandscape
                                ) && styles.noteTextLayoutColumn,
                              ]}
                            >
                              Payment {'\n'}
                              <Text style={styles.noteTextMarked}>
                                £23.34
                              </Text>{' '}
                              {'\n'}
                              <Text style={styles.noteTextMarked}>
                                20/12/2015 - 27/12/2015
                              </Text>{' '}
                              {'\n'}successfully confirmed
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.serviceActions}>
                        <View style={styles.button}>
                          <TouchableOpacity
                            onPress={() => this.toggleSuccessModal()}
                          >
                            <View
                              style={[
                                styles.buttonContent,
                                styles.buttonContentThemeBlue,
                              ]}
                            >
                              <Text
                                style={[
                                  styles.buttonText,
                                  styles.buttonTextThemeLight,
                                ]}
                              >
                                Dismiss
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

export default Payments;
