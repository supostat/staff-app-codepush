import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import { getFormErrors } from '../../utils/common';
import { COLOR_ERROR } from '../../utils/constants';

class PaymentConfirmForm extends Component {
  onSubmit = ({ password, paymentId }) =>
    this.props
      .acceptPayment({ password, paymentId })
      .then(() => this.props.toggleSuccessModal())
      .catch(err => getFormErrors(err));

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={{ password: null, paymentId: this.props.paymentId }}
        render={({ handleSubmit, submitting }) => (
          <View style={[styles.serviceForm, styles.serviceFormLast]}>
            <View style={styles.form}>
              <Field name="password">
                {({ input, meta }) => (
                  <View style={styles.formGroup}>
                    <View
                      style={[
                        styles.textInput,
                        styles.textInputLast,
                        (meta.error || meta.submitError) &&
                          meta.touched &&
                          !meta.dirtySinceLastSubmit && {
                            borderColor: COLOR_ERROR,
                            borderWidth: 1,
                          },
                      ]}
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
                        {...input}
                      />
                    </View>
                    {(meta.error || meta.submitError) &&
                      meta.touched &&
                      !meta.dirtySinceLastSubmit && (
                        <Text style={{ color: COLOR_ERROR }}>{meta.error || meta.submitError}</Text>
                      )}
                  </View>
                )}
              </Field>
              <View style={styles.formActions}>
                <View style={styles.button}>
                  <TouchableOpacity disabled={submitting} onPress={handleSubmit}>
                    <View style={[styles.buttonContent, styles.buttonContentThemeBlue]}>
                      <Text
                        style={[
                          styles.buttonIcon,
                          styles.buttonIconThemeLight,
                          styles.buttonIconPositionBefore,
                        ]}
                      >
                        &#xe90d;
                      </Text>
                      <Text style={[styles.buttonText, styles.buttonTextThemeLight]}>
                        {submitting ? 'Confirming' : 'Confirm'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    );
  }
}

export default PaymentConfirmForm;
