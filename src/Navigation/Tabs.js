import * as React from 'react';
import {Image, Platform, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {fontScale, scale, sWidth, vScale} from '../Themes/Scale';
import Colors from '../Themes/Colors';
import FastImage from 'react-native-fast-image';
import images from '../Services/Images';
import Font from '../Themes/Font';
import {View} from 'react-native-reanimated/lib/typescript/Animated';
import Animated from 'react-native-reanimated';
import {Home, Menu} from '../Screens';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    id: 1,
    name: 'Home',
    // label: '',
    icon: images.selectedHome,
    component: Home,
  },

  {
    id: 1,
    name: 'Ice',
    // label: '',
    icon: images.ice,
    component: Menu,
  },
];

const MainTab = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.container,
        tabBarShowLabel: false,
      }}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarItemStyle: styles.tabItem,
            tabBarLabel: ({focused}) => (
              <>
                {focused && (
                  <Animated.View>
                    <Image
                      resizeMode="contain"
                      source={images.selectedIcon}
                      tintColor={Colors.mainColor}
                      style={styles.selectedIcon}
                    />
                  </Animated.View>
                )}
              </>
            ),
            tabBarIcon: ({focused}) => (
              <Animated.View
                style={{
                  backgroundColor: focused ? Colors.white : Colors.transparent,
                  width: scale(48),
                  height: vScale(48),
                  borderRadius: vScale(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.icon}
                  style={styles.image}
                  tintColor={focused ? Colors.mainColor : Colors.white}
                />
              </Animated.View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.mainColor,
    width: scale(200),
    height: vScale(80),
    justifyContent: 'center',
    borderRadius: vScale(28),
    paddingVertical: vScale(Platform.OS === 'ios' ? 25 : 0),
    // alignSelf: 'center',
    bottom: vScale(30),
    overflow: 'hidden',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute',
    left: '25%',
    alignItems: 'center',
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 6,
      height: 10,
    },
    shadowOpacity: 0.18,
    shadowRadius: vScale(16),
    elevation: 5,
  },
  tabItem: {
    backgroundColor: Colors.mainColor,
    // height: vScale(100),
    // marginVertical: vScale(20),
    // marginTop: vScale(25),
  },
  image: {
    width: scale(32),
    height: scale(32),
    // marginTop: vScale(10),
  },
  label: {
    ...Font.REGULAR,
    fontSize: fontScale(12),
    // marginTop: vScale(-10),
  },
  selectedIcon: {
    width: scale(32),
    height: vScale(32),
    position: 'absolute',
    bottom: -vScale(20),
  },
});
export default MainTab;
