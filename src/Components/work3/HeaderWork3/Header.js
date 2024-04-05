import {View, Text, Image} from 'react-native';
import React from 'react';
import myIcons from '../../../Assets/Icons/index';
import styles from './styles';

const Header = props => {
  const {} = props;
  return (
    <View>
      <View style={[styles.header]}>
        <View style={[styles.search_bar]}>
          <Text style={[styles.search_bar_text]}>UI/UX Designer</Text>
          <Image style={[styles.search_bar_icon]} source={myIcons.close} />
        </View>
      </View>
    </View>
  );
};

export default Header;
