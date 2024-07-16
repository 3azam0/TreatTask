import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import Colors from '../Themes/Colors';
import Header from '../Components/Shared/Header';
import Card from '../Components/Home/Card';
import {FlatList} from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import {list} from '../Services/data';

const Home = () => {
  const renderCard = ({item}) => {
    return (
      <View>
        <Card {...item} />
      </View>
    );
  };

  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
  }
  return (
    <>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={Colors.background}
      />
      <Header />

      <View style={styles.container}>
        <FlatList
          horizontal
          data={list}
          keyExtractor={(item, index) => index}
          renderItem={renderCard}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
