// @flow

import { Dimensions } from 'react-native';

const BREAKPOINT = 640;

// Get device screen width
function screenWidth() {
  return Dimensions.get('window').width;
};

// Get device screen height
function screenHeight() {
  return Dimensions.get('window').height;
};

// Get device min screen dimension (depends on device orientation)
function screenMinDimension() {
  return (screenWidth() <= screenHeight()) ? screenWidth() : screenHeight();
};

// Check if device type is mobile
function isMobile() {
  return (screenMinDimension() <= BREAKPOINT) ? true : false;
};

// Check if device type is tablet
function isTablet() {
  return (screenMinDimension() > BREAKPOINT) ? true : false;
};

// Check if device orientation is portrait
function isPortrait() {
  return (screenWidth() <= screenHeight()) ? true : false;
};

// Check if device orientation is landscape
function isLandscape() {
  return (screenWidth() > screenHeight()) ? true : false;
};

export default {
  screenWidth,
  screenHeight,
  screenMinDimension,
  isMobile,
  isTablet,
  isPortrait,
  isLandscape
}