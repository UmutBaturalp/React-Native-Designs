import {StyleSheet, Text, View, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  nav: {
    height: windowHeight * 0.0707,
    width: windowWidth,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.04,
  },
  nav_icon: {width: windowWidth * 0.07, height: windowWidth * 0.07},
});
