import {View, Text, Image} from 'react-native';
import React from 'react';
import myIcons from '../../../Assets/Icons/index';
import myImages from '../../../Assets/Images/index';
import styles from './styles';
const ProfilItem = props => {
  const {itemColor, itemName, itemDesc, itemAge} = props;
  return (
    <View>
      <View style={[styles.profil_item, {backgroundColor: itemColor}]}>
        <View style={[styles.profil_item_left]}>
          <Image
            style={[styles.profil_item_left_img]}
            source={myImages.personn}
          />
        </View>
        <View style={[styles.profil_item_right]}>
          <Text style={[styles.profil_item_right_name]}>{itemName}</Text>
          <Text style={[styles.profil_item_right_desc]}>{itemDesc}</Text>
          <Text style={[styles.profil_item_right_desc]}>{itemAge}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfilItem;

//1  FF8E8F
//2 50C4ED
//3 A5DD9B
