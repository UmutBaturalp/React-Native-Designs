import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import myImages from '../../..//Assets/Images/index';
import styles from './styles';
import PropTypes from 'prop-types';
import myIcons from '../../../Assets/Icons/index';
const HistoryItem = props => {
  const {itemImage, itemColor, itemName, itemDesc, itemPrice, itemAge} = props;
  return (
    <View>
      <View style={[styles.history_item]}>
        <View style={[styles.history_item_left]}>
          <View
            style={[
              styles.history_item_icon_view,
              {backgroundColor: itemColor},
            ]}>
            <Image source={itemImage} style={[styles.history_item_icon]} />
          </View>
          <View style={[styles.history_item_left_text_view]}>
            <Text style={[styles.history_item_left_title]}>{itemName}</Text>
            <Text style={[styles.history_item_left_desc]}>{itemDesc}</Text>
          </View>
        </View>
        <View style={[styles.history_item_right]}>
          <Text style={[styles.history_item_right_title]}>{itemPrice}</Text>
          <Text style={[styles.history_item_right_desc]}>{itemAge}</Text>
        </View>
      </View>
    </View>
  );
};

HistoryItem.PropTypes = {
  itemColor: PropTypes.string,
  itemName: PropTypes.string,
  itemDesc: PropTypes.string,
  itemPrice: PropTypes.string,
  itemAge: PropTypes.string,
  itemImage: PropTypes.string,
};
HistoryItem.defaultProps = {
  itemColor: 'white',
  itemName: 'Text',
  itemDesc: 'açıklama',
  itemPrice: '10$',
  itemAge: '1 Jan',
  itemImage: myIcons.store,
};

export default HistoryItem;
