import {Dimensions, StatusBar, Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const is_X_Ratio =
  (screenWidth / screenHeight).toFixed(2) == (430 / 872).toFixed(2) &&
  !isAndroid;
const guidelineBaseWidth = 430;

const sWidth = screenWidth;

const sHeight = isAndroid
  ? screenHeight - StatusBar.currentHeight
  : screenHeight;

/**
 * Horizontal Size Scale
 */
const scale = size => (sWidth / guidelineBaseWidth) * size;

/**
 * Vertical Size Scale
 * @param {number} size
 */
// const vScale = (size: number) => (screenHeight / guidelineBaseHeight) * size;
const vScale = size => (sWidth / guidelineBaseWidth) * size;

/**
 * Font Size Scale
 * @param {number} size
 * @param {number} [factor]
 */
const fontScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export {sHeight, sWidth, scale, vScale, fontScale, is_X_Ratio};
