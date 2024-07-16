import {I18nManager, Platform} from 'react-native';
const IsAndroid = Platform.OS == 'android';

const MATEOANA = 'Matteona';
const BOLD = I18nManager.isRTL
  ? `${IsAndroid ? 'quincycf-bold' : 'quincycf-bold'}`
  : `${IsAndroid ? 'quincycf-bold' : 'quincycf-bold'}`;

const SEMIBOLD = I18nManager.isRTL
  ? `${IsAndroid ? 'quincycf-medium' : 'quincycf-medium'}`
  : `${IsAndroid ? 'quincycf-medium' : 'quincycf-medium'}`;

const MEDIUM = I18nManager.isRTL
  ? `${IsAndroid ? 'quincycf-medium' : 'quincycf-medium'}`
  : `${IsAndroid ? 'quincycf-medium' : 'quincycf-medium'}`;

const REGULAR = I18nManager.isRTL
  ? `${IsAndroid ? 'quincycf-regular' : 'quincycf-regular'}`
  : `${IsAndroid ? 'quincycf-regular' : 'quincycf-regular'}`;

export default {
  MATEOANA: {
    fontFamily: Platform.select({
      ios: MATEOANA,
      android: MATEOANA,
    }),
    fontWeight: Platform.select({
      ios: '700',
    }),
  },
  BOLD: {
    fontFamily: Platform.select({
      ios: BOLD,
      android: BOLD,
    }),
    fontWeight: Platform.select({
      ios: '700',
    }),
  },
  SEMIBOLD: {
    fontFamily: Platform.select({
      ios: SEMIBOLD,
      android: SEMIBOLD,
    }),
    fontWeight: Platform.select({
      ios: '600',
    }),
  },
  MEDIUM: {
    fontFamily: Platform.select({
      ios: MEDIUM,
      android: MEDIUM,
    }),
    fontWeight: Platform.select({
      ios: '500',
    }),
  },
  REGULAR: {
    fontFamily: Platform.select({
      ios: REGULAR,
      android: REGULAR,
    }),
    fontWeight: Platform.select({
      ios: '400',
    }),
  },
};
