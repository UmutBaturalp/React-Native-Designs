import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import myImages from '../../../Assets/Images/index';
import myIcons from '../../../Assets/Icons/index';

const Nav = () => {
  return (
    <View>
      <View style={[styles.nav]}>
        <Image
          source={myIcons.credit_card}
          style={[styles.nav_icons]}
          tintColor={'#FB6D48'}
        />
        <Image source={myIcons.line} style={[styles.nav_icons]} />
        <Image source={myIcons.graph} style={[styles.nav_icons]} />
        <Image source={myIcons.user} style={[styles.nav_icons]} />
      </View>
    </View>
  );
};

export default Nav;
