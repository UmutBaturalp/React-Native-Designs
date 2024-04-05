import {StyleSheet, Dimensions, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.4,
    backgroundColor: '#FF8E8F',
    borderBottomLeftRadius: windowWidth * 0.06,
    borderBottomRightRadius: windowWidth * 0.06,
    alignItems: 'center',
    paddingVertical: windowHeight * 0.02,
  },
  header_buttons: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_button_icon: {width: windowWidth * 0.06, height: windowWidth * 0.06},
  header_img: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
  },
  main_content: {
    width: windowHeight * 0.4,
    height: windowHeight * 0.35,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.05,
    position: 'relative',
    top: -windowHeight * 0.1,
    alignItems: 'center',
  },
  main_content_top: {
    alignItems: 'center',
    height: '70%',
    borderBottomWidth: 0.5,
    borderColor: '#DDDDDD',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  main_content_person_info: {
    rowGap: windowHeight * 0.002,
    alignItems: 'center',
  },
  main_content_name_view: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: windowWidth * 0.02,
  },
  main_content_name: {
    color: 'black',
    fontSize: windowWidth * 0.05,
    fontWeight: '800',
  },
  main_content_name_desc: {
    fontSize: windowWidth * 0.0375,
    fontWeight: '500',
    color: 'gray',
    opacity: 0.8,
  },
  main_content_online: {
    width: windowWidth * 0.035,
    height: windowWidth * 0.035,
  },
  main_content_desc: {
    textAlign: 'center',
    lineHeight: windowHeight * 0.03,
    fontSize: windowWidth * 0.03,
    color: 'gray',
    fontWeight: '500',
    opacity: 0.75,
  },
  main_content_button: {
    backgroundColor: '#FDA403',
    paddingHorizontal: windowWidth * 0.06,
    paddingVertical: windowWidth * 0.02,
    borderRadius: windowWidth * 0.04,
  },
  main_content_button_text: {
    fontSize: windowWidth * 0.03,
    color: 'white',
    fontWeight: '500',
  },
  main_content_bottom: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  main_content_bottom_left: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderColor: '#DDDDDD',
  },
  main_content_bottom_right: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_content_bottom_text1: {
    fontSize: windowWidth * 0.03,
    fontWeight: '400',
    color: '#AAAAAA',
  },
  main_content_bottom_text2: {
    fontSize: windowWidth * 0.042,
    fontWeight: '700',
    color: '#FDA403',
  },
  projects: {
    position: 'relative',
    top: -windowHeight * 0.09,
    width: windowWidth,
    height: windowHeight * 0.31,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  projects_header: {
    width: windowWidth * 0.85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: windowWidth * 0.03,
  },
  projects_title: {
    fontSize: windowWidth * 0.045,
    color: 'black',
    fontWeight: '800',
  },
  view_all_view: {
    backgroundColor: '#FDA403',
    paddingHorizontal: windowWidth * 0.02,
    paddingVertical: windowWidth * 0.01,
    borderRadius: windowWidth * 0.03,
  },
  view_all_text: {
    color: 'white',
    fontSize: windowWidth * 0.03,
    fontWeight: '500',
  },
  projects_main: {
    flexDirection: 'row',
    width: windowWidth * 0.85,
    justifyContent: 'space-between',
    paddingBottom: windowWidth * 0.02,
  },
  projects_img: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.3,
    borderRadius: windowWidth * 0.01,
  },
  projects_buton_text: {
    fontSize: windowWidth * 0.035,
    color: 'white',
    fontWeight: '500',
  },
  projects_buton: {
    backgroundColor: '#FDA403',
    borderRadius: windowWidth * 0.03,
    paddingVertical: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.2,
    position: 'absolute',
    top: windowHeight * 0.25,
  },
});