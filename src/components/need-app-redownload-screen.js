import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { S3_BUCKET, S3_REGION, S3_IOS_APP_DIR, S3_ANDROID_APP_DIR } from 'react-native-dotenv';

const downloadUrl = Platform.select({
  ios: `https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com/${S3_IOS_APP_DIR}/index.html`,
  android: `https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com/${S3_ANDROID_APP_DIR}/index.html`,
});
class NeedAppRedownload extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View title="Redownload Required">
          <Text style={styles.text}>
            An update is required for this app that needs a full reinstall. Please click on button below to download and
            install the new version!
          </Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() =>
                Linking.canOpenURL(downloadUrl).then(
                  (supported) => {
                    supported && Linking.openURL(downloadUrl);
                  },
                  err => console.log(err),
                )
              }
            >
              <Text>Download app</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default NeedAppRedownload;
