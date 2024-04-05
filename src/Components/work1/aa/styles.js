import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  a_Img: {
    width: windowWidth * 0.16,
    height: windowWidth * 0.13,
    borderRadius: windowWidth * 0.03,
  },
  a_main: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  a_left_view: {
    flexDirection: 'row',
    columnGap: windowWidth * 0.05,
    alignItems: 'center',
  },
  a_info_name: {
    color: 'black',
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
  },
  a_info_date: {
    color: 'gray',
    fontSize: windowWidth * 0.035,
    fontWeight: '400',
  },
  a_amount_text: {
    color: 'black',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  aa: {paddingVertical: windowWidth * 0.03},
});
