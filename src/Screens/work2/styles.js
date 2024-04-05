import {StyleSheet, Text, View} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: windowHeight * 0.1,
  },
  icon: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
  },
  myCardsView: {
    width: '90%',
    paddingVertical: windowHeight * 0.03,
  },
  myCardsText: {
    color: 'black',
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  card: {
    width: windowWidth * 0.65,
    height: windowWidth * 0.4,
    borderRadius: windowWidth * 0.05,
    justifyContent: 'space-between',
    marginRight: windowWidth * 0.03,
    padding: windowWidth * 0.06,
  },
  text_balance: {
    color: '#FFFFFF',
    fontSize: windowWidth * 0.04,
  },
  card_balance: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    columnGap: windowWidth * 0.015,
  },
  text_balance_value: {
    color: '#FFFFFF',
    fontSize: windowWidth * 0.06,
    fontWeight: '400',
  },
  text_usd: {color: '#FFFFFF', fontSize: windowWidth * 0.05, fontWeight: 400},
  card_no: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  text_card_no: {
    color: '#FFFFFF',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  card_bottom: {flexDirection: 'row', justifyContent: 'space-between'},
  text_card_date: {
    color: '#FFFFFF',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    opacity: 0.9,
  },
  text_visa: {
    color: '#FFFFFF',
    fontSize: windowWidth * 0.04,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  send_money_search: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: windowWidth * 0.05,
  },
  send_money_to: {
    color: '#000000',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: windowWidth * 0.03,
  },
  text_search: {
    color: '#000000',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  search_icon: {width: windowWidth * 0.05, height: windowWidth * 0.05},
  profiles: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    alignItems: 'center',
  },
  profileImages: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  amount: {
    width: windowWidth * 0.9,
    paddingVertical: windowWidth * 0.05,
  },
  text_amount: {
    color: '#000000',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
  },
  amountView: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountBar: {
    height: '100%',
    width: '80%',
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.04,
    borderRadius: windowWidth * 0.02,
  },
  sendingView: {
    width: '17%',
    backgroundColor: '#FB6D48',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.02,
  },
  your_amount: {
    color: '#000000',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
  },
  send_icon: {width: windowWidth * 0.06, height: windowWidth * 0.06},
  total_sent: {
    width: windowWidth * 0.9,
    paddingVertical: windowWidth * 0.05,
  },
  text_total_sent: {
    color: '#000000',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
  },
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
