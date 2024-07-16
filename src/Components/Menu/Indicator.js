import {StyleSheet, View} from 'react-native';
import React from 'react';
import {scale, vScale} from '../../Themes/Scale';
import Colors from '../../Themes/Colors';

const Indicator = ({alignSelf}) => (
  <View style={styles.indicatorWrapper}>
    <View
      style={[
        styles.indicator,
        {
          alignSelf: alignSelf,
        },
      ]}></View>
  </View>
);

export default Indicator;

const styles = StyleSheet.create({
  indicatorWrapper: {
    width: scale(183),
    height: vScale(13),
    backgroundColor: Colors.secondryColor,
    borderRadius: vScale(10),
    marginVertical: vScale(38),
    marginBottom: vScale(10),
  },
  indicator: {
    width: scale(183 / 3),
    height: vScale(13),
    backgroundColor: Colors.indicatorBackGround,
    borderRadius: vScale(10),
  },
});
