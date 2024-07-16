import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../Themes/Scale';
import Colors from '../../Themes/Colors';
import FastImage from 'react-native-fast-image';
import Images from '../../Services/Images';
import Font from '../../Themes/Font';
import {AppButton} from '../Shared';

const Card = ({
  style,
  h1,
  h2,
  h3,
  buttonText,
  buttonTextColor,
  buttonBackgroundColor,
  backgroundColor,
  img,
  img2,
}) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}, style]}>
      <View style={{flexDirection: 'row'}}>
        <FastImage source={img2} style={styles.percentage} />

        <FastImage source={img} style={styles.mega} />
      </View>
      <Text style={styles.h1}>{h1}</Text>
      <Text style={styles.h2}>{h2} </Text>
      <Text style={styles.h3}>{h3}</Text>
      <AppButton
        rightImg={Images.start}
        title={buttonText}
        rightImgStyle={styles.rightImg}
        titleStyle={[styles.titleStyle, {color: buttonTextColor}]}
        containerStyle={[
          styles.cardButton,
          {backgroundColor: buttonBackgroundColor},
        ]}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: scale(16),
    marginHorizontal: scale(20),
    borderRadius: vScale(32),
    backgroundColor: Colors.itemBackground,
    elevation: 1,
    shadowOpacity: 0.1,
    shadowColor: Colors.semiGrey,
    shadowOffset: {width: 1, height: 1},
    marginTop: vScale(150),
  },
  mega: {
    width: scale(128),
    height: vScale(246),
    // position: 'absolute',
    marginTop: vScale(-150),
    alignSelf: 'center',
    marginBottom: vScale(24),
  },
  percentage: {
    width: scale(44),
    height: vScale(44),
    // position: 'absolute',
    marginTop: vScale(-70),
    alignSelf: 'center',
    marginLeft: scale(-5),
  },
  h1: {
    ...Font.SEMIBOLD,
    color: Colors.txtBrown,
    fontSize: fontScale(40),
  },
  h2: {
    ...Font.REGULAR,

    color: Colors.txtBrown,
    fontSize: fontScale(36),
  },
  h3: {
    ...Font.REGULAR,

    color: Colors.txtBrown,
    fontSize: fontScale(20),
    marginBottom: vScale(24),
  },
  cardButton: {
    width: scale(193),
    height: vScale(48),
    // marginBottom: vScale(16),
  },
  titleStyle: {
    ...Font.REGULAR,
    color: Colors.white,
    fontSize: fontScale(16),
    marginStart: scale(24),
  },
  rightImg: {width: scale(56), height: vScale(36), marginEnd: scale(5)},
});
