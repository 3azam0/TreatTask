import {StyleSheet, ImageBackground, View, Text, StatusBar} from 'react-native';
import React from 'react';
import Colors from '../Themes/Colors';
import Header from '../Components/Shared/Header';
import Card from '../Components/Home/Card';
import {FlatList} from 'react-native-gesture-handler';
import Images from '../Services/Images';
import Font from '../Themes/Font';
import {fontScale, scale} from '../Themes/Scale';
import {useIsFocused} from '@react-navigation/native';

const Home = () => {
  const list = [
    {
      id: 1,
      h1: 'exclusive',
      h2: 'offers',
      h3: 'get your deals now',
      img: Images.mega,
      img2: Images.percentage,
      buttonText: 'order now',
      backgroundColor: '#E6D1B8',
      buttonBackgroundColor: '#4B2713',
      buttonTextColor: '#FEFEFE',
    },
    {
      id: 2,

      h1: 'Rewards',
      h2: 'and earn',
      h3: 'Get your reward now',
      img: Images.mega2,
      img2: Images.gift,
      buttonText: 'Get Rewards',
      backgroundColor: '#B8DCDE',
      buttonBackgroundColor: '#96CBCD',
      buttonTextColor: '#0B3C3E',
    },
    {
      id: 3,

      h1: 'refer',
      h2: 'a friend',
      h3: 'And get 100 points',
      img: Images.mega2,
      img2: Images.gift,
      buttonText: 'Refer friend',
      backgroundColor: '#BDB6B4',
      buttonBackgroundColor: '#4B2713',
      buttonTextColor: '#FEFEFE',
    },
  ];

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
