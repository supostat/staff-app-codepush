import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import deviceInfo from '../../utils/deviceInfo';
import styles from './styles';
import PaymentConfirmForm from './PaymentConfirmForm';

class PaymentConfirmationModal extends Component {
  state = {
    screen: {
      isPortrait: !!deviceInfo.isPortrait(),
      isLandscape: !!deviceInfo.isLandscape(),
      isMobile: !!deviceInfo.isMobile(),
      isTablet: !!deviceInfo.isTablet(),
    },
  };

  render() {
    return (
      <Modal
        visible={this.props.visible}
        transparent={true}
        animationType={'fade'}
        supportedOrientations={[
          'portrait',
          'portrait-upside-down',
          'landscape',
          'landscape-left',
          'landscape-right',
        ]}
        onRequestClose={this.props.toggleModal}
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
                <TouchableOpacity onPress={() => this.props.toggleModal()}>
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
                <View style={[styles.modalWindowHeader, styles.modalWindowHeaderRoleAlert]}>
                  <Text
                    style={[
                      styles.modalWindowTitle,
                      styles.modalWindowTitleThemeLight,
                      this.state.screen.isTablet && styles.modalWindowTitleTablet,
                    ]}
                  >
                    Payment Confirmation
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
                            styles.noteIconRoleAlert,
                            !(this.state.screen.isMobile && this.state.screen.isLandscape) &&
                              styles.noteIconLayoutColumn,
                          ]}
                        >
                          &#xe924;
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
                            By marking this payment as{' '}
                            <Text style={styles.noteTextMarked}>Received</Text> I.... Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.
                          </Text>
                        </View>
                      </View>
                    </View>
                    <PaymentConfirmForm
                      acceptPayment={this.props.acceptPayment}
                      paymentId={this.props.paymentId}
                      toggleSuccessModal={this.props.toggleSuccessModal}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

export default PaymentConfirmationModal;
