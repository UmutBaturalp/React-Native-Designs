import {View, Text, Image} from 'react-native';
import React from 'react';
import myImages from '../../../Assets/Images/index';
import myIcons from '../../../Assets/Icons/index';
import styles from './styles';

const Aa = props => {
  const {} = props;
  return (
    <View>
      <View style={[styles.aa]}>
        <View style={[styles.a_main]}>
          <View style={[styles.a_left_view]}>
            <Image source={myImages.img4} style={[styles.a_Img]} />
            <View style={[styles.a_info_view]}>
              <Text style={[styles.a_info_name]}>Max William</Text>
              <Text style={[styles.a_info_date]}>03 Aug 2020</Text>
            </View>
          </View>
          <View style={[styles.a_amount_view]}>
            <Text style={[styles.a_amount_text]}>$458.00 USD</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Aa;
