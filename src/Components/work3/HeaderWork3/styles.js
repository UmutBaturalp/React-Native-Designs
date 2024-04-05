import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  header: {
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.12,
  },
  search_bar: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.12,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
    borderRadius: windowWidth * 0.05,
  },
  search_bar_text: {
    color: 'black',
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
  },
  search_bar_icon: {width: windowWidth * 0.04, height: windowWidth * 0.04},
});
