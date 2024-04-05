import {View, Text, Image} from 'react-native';
import React from 'react';
import myIcons from '../../../Assets/Icons/index';
import myImages from '../../../Assets/Images/index';
import styles from './styles';

const NavWork3 = () => {
  return (
    <View>
      <View style={[styles.nav]}>
        <View style={[styles.nav_item]}>
          <Image
            style={[styles.nav_icon]}
            source={myIcons.app}
            tintColor={'orange'}
          />
          <Text style={[styles.nav_icon_text, {color: 'orange'}]}>Menu</Text>
        </View>
        <View style={[styles.nav_item]}>
          <Image style={[styles.nav_icon]} source={myIcons.line} />
          <Text style={[styles.nav_icon_text]}>Saved</Text>
        </View>
        <View style={[styles.nav_mid]}>
          <Image
            style={[styles.nav_icon]}
            source={myIcons.plus}
            tintColor={'white'}
          />
        </View>
        <View style={[styles.nav_item]}>
          <Image style={[styles.nav_icon]} source={myIcons.user} />
          <Text style={[styles.nav_icon_text]}>User</Text>
        </View>
        <View style={[styles.nav_item]}>
          <Image style={[styles.nav_icon]} source={myIcons.more} />
          <Text style={[styles.nav_icon_text]}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default NavWork3;
