import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './styles';
import myImages from '../../../Assets/Images/index';
import PropTypes from 'prop-types';
import {Cards} from '../..';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const cards = props => {
  const {cardImage, balance, lastNumbers, age} = props;
  return (
    <View>
      <ImageBackground
        source={cardImage}
        borderRadius={windowWidth * 0.05}
        style={[styles.card]}>
        <Text style={[styles.text_balance]}>Balance</Text>
        <View style={[styles.card_balance]}>
          <Text style={[styles.text_balance_value]}>{balance}</Text>
          <Text style={[styles.text_usd]}>USD</Text>
        </View>
        <View style={[styles.card_no]}>
          <Text style={[styles.text_card_no]}>****</Text>
          <Text style={[styles.text_card_no]}>****</Text>
          <Text style={[styles.text_card_no]}>****</Text>
          <Text style={[styles.text_card_no]}>{lastNumbers}</Text>
        </View>
        <View style={[styles.card_bottom]}>
          <Text style={[styles.text_card_date]}>{age}</Text>
          <Text style={[styles.text_visa]}>VISA</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

cards.PropTypes = {
  cardImage: PropTypes.string,
  balance: PropTypes.string,
  lastNumbers: PropTypes.string,
  age: PropTypes.string,
};
cards.defaultProps = {
  cardImage: myImages.cc,
  balance: 'null',
  lastNumbers: 'null',
  age: 'null',
};

export default cards;
