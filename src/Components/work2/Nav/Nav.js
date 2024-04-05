import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import myIcons from '../../../Assets/Icons/index';
import myImages from '../../../Assets/Images/index';
const Nav = props => {
  const {} = props;
  return (
    <View>
      <View style={[styles.nav]}>
        <Image style={[styles.nav_icon]} source={myIcons.credit_card} />
        <Image
          style={[styles.nav_icon]}
          source={myIcons.line}
          tintColor={'#E8751A'}
        />
        <Image style={[styles.nav_icon]} source={myIcons.graph} />
        <Image style={[styles.nav_icon]} source={myIcons.user} />
      </View>
    </View>
  );
};

export default Nav;
