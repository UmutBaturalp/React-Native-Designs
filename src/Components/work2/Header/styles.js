import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  header: {
    height: windowHeight * 0.24,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: windowHeight * 0.02,
  },
  header_title_view: {},
  header_title_text: {
    color: 'black',
    fontSize: windowWidth * 0.06,
    fontWeight: '500',
  },
  header_content_view: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: windowWidth * 0.03,
  },
  header_content: {
    width: windowWidth * 0.33,
    height: windowWidth * 0.11,
    backgroundColor: '#5E1675',
    borderRadius: windowWidth * 0.025,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_content_text: {
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
});
