import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
  },
  // ----------------------------------------------
  
  // ----------------------------------------------
  graphic: {
    height: windowHeight * 0.33,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
  },
  graphic_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  graphic_title_text1: {
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
  },
  graphic_title_text2: {
    color: '#E8751A',
    fontSize: windowWidth * 0.04,
    fontWeight: '400',
  },
  graphic_img: {width: '100%', height: windowHeight * 0.24},
  graphic_bottom_view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  graphic_bottom_left: {
    color: 'gray',
    fontSize: windowWidth * 0.03,
    fontWeight: '400',
  },
  graphic_bottom_right: {
    width: windowWidth * 0.22,
    height: windowWidth * 0.07,
    backgroundColor: '#E8751A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.015,
  },
  graphic_bottom_right_text: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '400',
  },

  // ----------------------------------------------
  history: {
    height: windowHeight * 0.33,
    width: windowWidth,
    backgroundColor: '#F6F5F5',
    paddingVertical: windowHeight * 0.02,
    rowGap: windowHeight * 0.02,
  },
  history_title_view: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: windowWidth * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  history_title_text1: {
    color: 'black',
    fontSize: windowWidth * 0.0425,
    fontWeight: '600',
  },
  history_title_right_view: {
    flexDirection: 'row',
    columnGap: windowWidth * 0.012,
    alignItems: 'center',
  },
  history_title_cardNo: {
    color: 'black',
    fontSize: windowWidth * 0.038,
    fontWeight: '500',
  },
  mastercard: {width: windowWidth * 0.0768, height: windowWidth * 0.048},
  history_item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
  },
  history_item_left: {flexDirection: 'row', columnGap: windowWidth * 0.02},
  history_item_icon_view: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.13,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.02,
  },
  history_item_icon: {width: windowWidth * 0.07, height: windowWidth * 0.07},
  history_item_left_title: {
    color: 'black',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  history_item_left_desc: {
    color: 'gray',
    fontSize: windowWidth * 0.03,
    fontWeight: '400',
  },
  history_item_right: {alignItems: 'flex-end', rowGap: windowWidth * 0.005},
  history_item_right_title: {
    color: 'black',
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
  },
  history_item_right_desc: {
    color: 'gray',
    fontSize: windowWidth * 0.03,
    fontWeight: '400',
  },
  // ----------------------------------------------
 
  // ----------------------------------------------
});
