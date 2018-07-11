import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';

import deviceInfo from '../../utils/deviceInfo';
import { NavScreen } from '../NavBar/TopNavScreen';
import styles from './styles';
import PaymentItem from './PaymentItem';
import PaymentConfirmationModal from './PaymentConfirmationModal';

class Payments extends Component {
  state = {
    screen: {
      isPortrait: !!deviceInfo.isPortrait(),
      isLandscape: !!deviceInfo.isLandscape(),
      isMobile: !!deviceInfo.isMobile(),
      isTablet: !!deviceInfo.isTablet(),
    },
    isConfirmModalVisible: false,
    isSuccessModalVisible: false,
    currentPaymentId: null,
  };

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({ item }) => (
      <PaymentItem
        id={item.id}
        onPressItem={this.toggleConfirmModal}
        amount={item.amount}
        alert={item.alert}
        date={item.date}
        status={item.status}
      />
  );

  toggleConfirmModal = (paymentId) => {
    this.setState(state => ({
      isConfirmModalVisible: !state.isConfirmModalVisible,
      currentPaymentId: paymentId,
    }));
  };

  toggleSuccessModal = () => {
    this.setState(state => ({
      isConfirmModalVisible: false,
      isSuccessModalVisible: !state.isSuccessModalVisible,
    }));
  };

  render() {
    const { onLogout } = this.props.screenProps;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <View style={styles.main}>
          <NavScreen banner="Payments" navigation={this.props.navigation} onLogout={onLogout} />
          <View style={styles.mainContent}>
            <View style={styles.mainContentInner}>
              <View style={styles.payments}>
                <View style={styles.paymentsList}>
                  <FlatList
                    data={this.props.payments}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        <PaymentConfirmationModal
          visible={this.state.isConfirmModalVisible}
          toggleModal={this.toggleConfirmModal}
          acceptPayment={this.props.acceptPayment}
          paymentId={this.state.currentPaymentId}
          toggleSuccessModal={this.toggleSuccessModal}
        />

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
                  <View style={[styles.modalWindowHeader, styles.modalWindowHeaderRoleSuccess]}>
                    <Text
                      style={[
                        styles.modalWindowTitle,
                        styles.modalWindowTitleThemeLight,
                        this.state.screen.isTablet && styles.modalWindowTitleTablet,
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
                            !(this.state.screen.isMobile && this.state.screen.isLandscape) &&
                              styles.noteLayoutColumn,
                          ]}
                        >
                          <Text
                            style={[
                              styles.noteIcon,
                              styles.noteIconRoleSuccess,
                              !(this.state.screen.isMobile && this.state.screen.isLandscape) &&
                                styles.noteIconLayoutColumn,
                            ]}
                          >
                            &#xe902;
                          </Text>
                          <View style={styles.noteContent}>
                            <Text
                              style={[
                                styles.noteText,
                                this.state.screen.isTablet && styles.noteTextTablet,
                                !(this.state.screen.isMobile && this.state.screen.isLandscape) &&
                                  styles.noteTextLayoutColumn,
                              ]}
                            >
                              Payment {'\n'}
                              <Text style={styles.noteTextMarked}>£23.34</Text> {'\n'}
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
                          <TouchableOpacity onPress={() => this.toggleSuccessModal()}>
                            <View style={[styles.buttonContent, styles.buttonContentThemeBlue]}>
                              <Text style={[styles.buttonText, styles.buttonTextThemeLight]}>
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
