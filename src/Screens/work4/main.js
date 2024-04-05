import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';
//images && icons
import myIcons from '../../Assets/Icons/index';
import myImages from '../../Assets/Images/index';
import {
  HeaderWork3,
  ProfilItem,
  NavWork3,
  Stories,
} from '../../Components/index';
const main = () => {
  return (
    <SafeAreaView>
      <View style={[styles.main]}>
        <HeaderWork3 />
        <Stories />
        <ScrollView
          style={[styles.profiles_scrollView]}
          showsVerticalScrollIndicator={false}>
          <ProfilItem
            itemColor="#FF8E8F"
            itemName="Abuzer"
            itemDesc="kömüğcüsads"
            itemAge="121"
          />
          <ProfilItem
            itemColor="#50C4ED"
            itemName="Jeremy"
            itemDesc="asdsad"
            itemAge="121"
          />
          <ProfilItem
            itemColor="#A5DD9B"
            itemName="Cabbar"
            itemDesc="kösads"
            itemAge="121"
          />
          <ProfilItem
            itemColor="pink"
            itemName="Abuzer"
            itemDesc="kömüğcüsads"
            itemAge="121"
          />
        </ScrollView>
        <NavWork3 />
      </View>
    </SafeAreaView>
  );
};

export default main;
