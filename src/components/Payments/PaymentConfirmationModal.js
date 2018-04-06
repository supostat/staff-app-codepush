import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';

class PaymentConfirmationModal extends Component {
  render() {
    return (
      <Modal
        visible={this.state.isConfirmModalVisible}
        transparent={true}
        animationType={'fade'}
        supportedOrientations={[
          'portrait',
          'portrait-upside-down',
          'landscape',
          'landscape-left',
          'landscape-right',
        ]}
        onRequestClose={() => this.toggleConfirmModal()}
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
                <TouchableOpacity onPress={() => this.toggleConfirmModal()}>
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
                    styles.modalWindowHeaderRoleAlert,
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
                    Payment Confirmation
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
                            styles.noteIconRoleAlert,
                            !(
                              this.state.screen.isMobile &&
                              this.state.screen.isLandscape
                            ) && styles.noteIconLayoutColumn,
                          ]}
                        >
                          &#xe924;
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
                            By marking this payment as{' '}
                            <Text style={styles.noteTextMarked}>Received</Text>{' '}
                            I.... Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.serviceForm, styles.serviceFormLast]}>
                      <View style={styles.form}>
                        <View style={styles.formGroup}>
                          <View
                            style={[styles.textInput, styles.textInputLast]}
                          >
                            <TextInput
                              underlineColorAndroid="transparent"
                              placeholder="Password"
                              keyboardType="default"
                              placeholderTextColor="#808080"
                              autoCapitalize="none"
                              autoCorrect={false}
                              secureTextEntry={true}
                              style={styles.textInputField}
                            />
                          </View>
                        </View>
                        <View style={styles.formActions}>
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
                                    styles.buttonIcon,
                                    styles.buttonIconThemeLight,
                                    styles.buttonIconPositionBefore,
                                  ]}
                                >
                                  &#xe90d;
                                </Text>
                                <Text
                                  style={[
                                    styles.buttonText,
                                    styles.buttonTextThemeLight,
                                  ]}
                                >
                                  Confirm
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
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
