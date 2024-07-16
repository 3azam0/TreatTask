import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {scale, vScale} from '../../Themes/Scale';

import FastImage from 'react-native-fast-image';
import Images from '../../Services/Images';

const Stepper = ({showNext, onBackPress, disabled, onNextPress, showBack}) => (
  <View style={styles.stepper}>
    {showNext && (
      <TouchableOpacity
        style={{opacity: disabled ? 0.3 : 1}}
        disabled={disabled}
        onPress={onNextPress}>
        <FastImage source={Images.next} style={styles.nextButton} />
      </TouchableOpacity>
    )}

    {showBack && (
      <TouchableOpacity onPress={onBackPress}>
        <FastImage source={Images.back} style={styles.backButton} />
      </TouchableOpacity>
    )}
  </View>
);

export default Stepper;

const styles = StyleSheet.create({
  stepper: {
    flexDirection: 'row-reverse',
  },
  nextButton: {
    width: scale(64),
    height: vScale(64),
    borderRadius: vScale(32),
    marginTop: vScale(24),
    marginStart: scale(24),
  },
  backButton: {
    width: scale(64),
    height: vScale(64),
    borderRadius: vScale(32),
    marginTop: vScale(24),
  },
});
