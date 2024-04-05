import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  nav: {
    width: windowWidth,
    backgroundColor: 'white',
    height: windowHeight * 0.0732,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
  },
  nav_item: {alignItems: 'center'},
  nav_mid: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'relative',
    bottom: windowHeight * 0.0366,
  },
  nav_icon: {width: windowWidth * 0.06, height: windowWidth * 0.06},
  nav_icon_text: {fontSize: windowWidth * 0.03},
});
