import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
    stories_view: {
        width: windowWidth - windowWidth * 0.05,
        height: windowWidth * 0.2,
        position: 'relative',
        left: windowWidth * 0.025,
        backgroundColor: '#EDEDEE',
      },
      stories_scrollView: {},
      story_view: {
        alignItems: 'center',
        justifyContent: 'center',
        height: windowWidth * 0.2,
        width: windowWidth * 0.18,
        rowGap: windowWidth * 0.01,
      },
      story_img: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
      },
      story_name: {color: 'black', fontSize: windowWidth * 0.03, fontWeight: '600'},
});
