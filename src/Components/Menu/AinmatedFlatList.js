import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

const AinmatedFlatList = ({list, renderCard, style}) => (
  <Animated.View style={style}>
    <FlatList
      style={styles.flatList}
      horizontal
      data={list}
      keyExtractor={(item, index) => index}
      renderItem={renderCard}
      showsHorizontalScrollIndicator={false}
    />
  </Animated.View>
);

export default AinmatedFlatList;

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0,
  },
});
