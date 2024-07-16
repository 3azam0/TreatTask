import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {fontScale, vScale} from '../../Themes/Scale';
import Colors from '../../Themes/Colors';
import Font from '../../Themes/Font';

const CancelButton = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.cancel}>Cancel</Text>
  </TouchableOpacity>
);

export default CancelButton;

const styles = StyleSheet.create({
  cancel: {
    ...Font.BOLD,

    color: Colors.txtDarkBrown,
    fontSize: fontScale(24),
    textDecorationLine: 'underline',
  },
});
