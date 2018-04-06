// @flow

import { Platform } from 'react-native';

import deviceInfo from './deviceInfo';

const MOBILE_REFERENCE = 320;
const TABLET_REFERENCE = 640;

// Get mobile scaling factor using refernce sizes
function scalingFactorMobile() {
  return deviceInfo.screenMinDimension() / MOBILE_REFERENCE;
};

// Get tablet scaling factor using refernce sizes
function scalingFactorTablet() {
  return deviceInfo.screenMinDimension() / TABLET_REFERENCE;
};

// Get device scaling factor basing on device screen size
function scalingFactor() {
  return (deviceInfo.isMobile()) ? scalingFactorMobile() : scalingFactorTablet();
};

// Normalize elements sizes
function normalize(size) {
  return Platform.OS === 'android' ? Math.round(scalingFactor() * size) : size;
}

export default {
  normalize
}
