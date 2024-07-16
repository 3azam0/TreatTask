import {StyleSheet, View} from 'react-native';
import React from 'react';
import {scale, vScale} from '../../Themes/Scale';
import Colors from '../../Themes/Colors';
import FastImage from 'react-native-fast-image';

const ToppingCard = ({image, id}) => (
  <View style={id === 1 ? styles.toppingWrapper1 : styles.toppingWrapper2}>
    <FastImage source={image} style={styles.topping} />
  </View>
);

export default ToppingCard;

const styles = StyleSheet.create({
  topping: {
    height: vScale(26),
    width: scale(26),
    alignSelf: 'center',
  },
  toppingWrapper1: {
    height: vScale(46),
    width: scale(46),
    backgroundColor: Colors.white,
    borderRadius: vScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    right: scale(-7),
    top: vScale(46),
    zIndex: 100,
  },
  toppingWrapper2: {
    height: vScale(46),
    width: scale(46),
    backgroundColor: Colors.white,
    borderRadius: vScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    right: scale(-7),
    top: vScale(106),
    zIndex: 100,
  },
});
