import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {scale, vScale} from '../../Themes/Scale';
import Colors from '../../Themes/Colors';
import FastImage from 'react-native-fast-image';
import Images from '../../Services/Images';

const FlavourCard = ({style, selected, onPress, name, img}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <FastImage
          source={!selected ? Images.add : Images.remove}
          style={styles.addRemove}
        />
        <FastImage source={img} style={styles.img} />
      </View>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default FlavourCard;

const styles = StyleSheet.create({
  container: {
    width: scale(72),
    height: vScale(72),
    borderWidth: 1,
    borderColor: Colors.mainColor,
    borderRadius: vScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: scale(10),
  },
  addRemove: {
    width: scale(18),
    height: vScale(18),
    position: 'absolute',
    left: 0,
    top: 0,
  },
  addRemoveWrapper: {},
  img: {
    width: scale(48),
    height: vScale(48),
  },
});
