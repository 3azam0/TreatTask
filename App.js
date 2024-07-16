/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import Colors from './src/Themes/Colors';
import {toastConfig} from './src/Services/showMessages';
import MainNav from './src/Navigation/Index';

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar
          backgroundColor={Colors.greyBackGround}
          barStyle="dark-content"
        />
        <MainNav />
      </GestureHandlerRootView>
      <Toast visibilityTime={2500} config={toastConfig} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
