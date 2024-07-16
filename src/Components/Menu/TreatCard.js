import {StyleSheet} from 'react-native';
import React from 'react';
import {scale, vScale} from '../../Themes/Scale';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

const TreatCard = ({style, stick, image}) => (
  <Animated.View style={style}>
    <FastImage
      resizeMode="contain"
      source={image}
      style={stick ? styles.stick : styles.img}
    />
  </Animated.View>
);

export default TreatCard;

const styles = StyleSheet.create({
  img: {
    height: vScale(300),
    width: scale(200),
    alignSelf: 'center',
    marginBottom: vScale(16),
  },
  stick: {
    height: vScale(242),
    width: scale(73),
    alignSelf: 'center',
    marginBottom: vScale(16),
  },
});
