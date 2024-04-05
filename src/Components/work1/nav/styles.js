import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  nav: {
    width: windowWidth,
    height: windowWidth * 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  nav_icons: {width: windowWidth * 0.07, height: windowWidth * 0.07},
});
