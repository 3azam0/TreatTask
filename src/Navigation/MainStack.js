import * as React from 'react';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './Tabs';

import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

const MainStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export {MainStack};
