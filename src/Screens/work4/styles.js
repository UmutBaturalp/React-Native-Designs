import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
  },
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
  profiles_scrollView: {
    width: windowWidth * 0.9,
    maxHeight: windowHeight * 0.68,
  },

  
  
});
