import {View, Text, Image} from 'react-native';
import React from 'react';
import myImages from '../../../Assets/Images/index';
import myIcons from '../../../Assets/Icons/index';
import styles from './styles';
const Myheader = props => {
  const {} = props;
  return (
    <View>
      <View style={[styles.header]}>
        <Image source={myIcons.menu} style={[styles.icon]} />
        <Image
          source={myImages.img1}
          style={[styles.icon, {borderRadius: 10}]}
        />
      </View>
    </View>
  );
};

export default Myheader;
