import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
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
});
