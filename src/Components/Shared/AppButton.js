import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../Themes/Scale';
import Colors from '../../Themes/Colors';
import Font from '../../Themes/Font';
import FastImage from 'react-native-fast-image';

const AppButton = ({
  title,
  onPress,
  containerStyle,
  titleStyle,
  loading,
  disabled,
  rightImg,
  rightImgStyle,
  icon,
}) => {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      {...{onPress}}
      activeOpacity={0.9}
      style={[
        styles.container,
        {backgroundColor: disabled ? Colors.placeholder : Colors.mainColor},
        containerStyle,
      ]}>
      {loading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <View style={styles.row}>
          {icon ? icon() : null}
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
      )}
      {rightImg && (
        <FastImage
          resizeMode="contain"
          source={rightImg}
          style={rightImgStyle}
        />
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainColor,
    borderRadius: vScale(17),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: vScale(16),
  },
  title: {
    ...Font.BOLD,
    color: Colors.white,
    fontSize: fontScale(24),
    marginStart: scale(24),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightImg: {
    width: scale(88),
    height: vScale(66),
    marginEnd: scale(10),
  },
});
