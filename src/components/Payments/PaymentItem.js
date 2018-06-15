import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class PaymentItem extends Component {
  render() {
    return (
      <View style={[styles.paymentsItem]}>
        <View
          style={[
            styles.infoCard,
            this.props.alert && styles.infoCardStateAlert,
            this.props.status === 'Pending' && styles.infoCardStatusPending,
            this.props.status === 'Received' && styles.infoCardStatusReceived,
          ]}
        >
          <View style={[styles.infoCardInner]}>
            <Text
              style={[
                styles.infoCardTitle,
                this.props.status === 'Pending' && styles.infoCardTitleStatusPending,
                this.props.status === 'Received' && styles.infoCardTitleStatusReceived,
              ]}
            >
              {this.props.status}
            </Text>
            <View style={[styles.infoCardRecord]}>
              <View style={[styles.infoCardRecordText]}>
                <Text
                  style={[
                    styles.infoCardText,
                    styles.infoCardTextPrimary,
                    styles.infoCardTextAdjustRow,
                  ]}
                >
                  {this.props.amount}
                </Text>
                <Text style={[styles.infoCardText, styles.infoCardTextSecondary]}>
                  {this.props.date}
                </Text>
              </View>
            </View>
            {this.props.status === 'Pending' && (
              <View style={[styles.infoCardRecordActions]}>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this.props.onPressItem(this.props.id)}>
                    <View style={[styles.buttonContent, styles.buttonContentThemeBlue]}>
                      <Text style={[styles.buttonText, styles.buttonTextThemeLight]}>
                        Mark as Received
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default PaymentItem;
