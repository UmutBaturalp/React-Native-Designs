import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const Header = props => {
  const {} = props;
  return (
    <View>
      <View style={[styles.header]}>
        <View style={[styles.header_title_view]}>
          <Text style={[styles.header_title_text]}>Statistic</Text>
        </View>
        <View style={[styles.header_content_view]}>
          <View style={[styles.header_content]}>
            <Text style={[styles.header_content_Text, {color: 'white'}]}>
              Savings
            </Text>
          </View>
          <View style={[styles.header_content, {backgroundColor: 'none'}]}>
            <Text style={[styles.header_content_Text]}>Expense</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
