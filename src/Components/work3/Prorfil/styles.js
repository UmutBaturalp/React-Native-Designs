import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  profil_item: {
    width: '100%',
    height: windowWidth * 0.4,
    backgroundColor: '#FF8E8F',
    borderRadius: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: windowWidth * 0.02,
  },
  profil_item_left: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profil_item_left_img: {width: windowWidth * 0.33, height: windowWidth * 0.33},
  profil_item_right: {width: '50%'},
  profil_item_right_name: {
    color: 'white',
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
  },
  profil_item_right_desc: {
    color: '#EEEEEE',
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
  },
});
