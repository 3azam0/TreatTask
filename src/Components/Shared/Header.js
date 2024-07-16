import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  I18nManager,
  Platform,
} from 'react-native';
import React from 'react';
import {fontScale, sWidth, scale, vScale} from '../../Themes/Scale';
import images from '../../Services/Images';
import Colors from '../../Themes/Colors';
import Font from '../../Themes/Font';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const Header = ({
  title,
  goBack,
  backgroundColor = Colors.background,
  rightIcon,
  leftIcon,
  centerContainer,
}) => {
  const navigation = useNavigation();

  const NotificationIcon = () => (
    <FastImage style={styles.notification} source={images.notificationIcon} />
  );

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        paddingHorizontal: scale(24),
      }}>
      <SafeAreaView style={styles.container}>
        {goBack && (
          <Pressable onPress={() => navigation.goBack()}>
            <FastImage
              source={images.backIcon}
              style={styles.back}
              resizeMode="contain"
            />
          </Pressable>
        )}

        <View>
          <Text style={styles.create}>
            Create <Text style={styles.title}> your {'\n'}</Text>
          </Text>
          <Text style={styles.title}>own treat</Text>
        </View>
        <FastImage
          source={images.notifications}
          style={styles.rightIcon}
          resizeMode="contain"
        />
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: Platform.OS == 'android' ? vScale(80) : vScale(120),
    flexDirection: 'row',

    // alignSelf: 'center',
  },
  titleContainer: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: fontScale(32),
    ...Font.BOLD,
    color: Colors.gold,
    marginTop: vScale(-10),
  },
  create: {
    alignSelf: 'center',
    fontSize: fontScale(32),
    ...Font.MATEOANA,
    color: Colors.txtBrown,
    height: vScale(45),
  },
  back: {
    width: scale(46),
    height: scale(46),
    transform: [{rotateY: I18nManager.isRTL ? '180deg' : '0deg'}],
    marginTop: -vScale(5),
  },
  rightIcon: {
    width: scale(40),
    height: vScale(40),
  },
  leftIcon: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  notification: {
    width: scale(54),
    height: scale(54),
  },
});
