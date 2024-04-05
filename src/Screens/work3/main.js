import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
//images && icons
import myIcons from '../../Assets/Icons/index';
import myImages from '../../Assets/Images/index';
import {Header, Nav2, HistoryItem} from '../../Components/index';
const main = () => {
  return (
    <SafeAreaView>
      <View style={[styles.main]}>
        <Header />
        <View style={[styles.graphic]}>
          <View style={[styles.graphic_title]}>
            <Text style={[styles.graphic_title_text1]}>Sep 2020</Text>
            <Text style={[styles.graphic_title_text2]}>+890.00 USD</Text>
          </View>
          <Image source={myImages.deneme1} style={[styles.graphic_img]} />
          <View style={[styles.graphic_bottom_view]}>
            <Text style={[styles.graphic_bottom_left]}>
              Target Completed 90%
            </Text>
            <View style={[styles.graphic_bottom_right]}>
              <Text style={[styles.graphic_bottom_right_text]}>View</Text>
            </View>
          </View>
        </View>
        <View style={[styles.history]}>
          <View style={[styles.history_title_view]}>
            <Text style={[styles.history_title_text1]}>History</Text>
            <View style={[styles.history_title_right_view]}>
              <Text style={[styles.history_title_cardNo]}>***</Text>
              <Text style={[styles.history_title_cardNo]}>4589</Text>
              <Image style={[styles.mastercard]} source={myIcons.mastercardd} />
            </View>
          </View>
          <HistoryItem
            itemName="Fast Food"
            itemColor="yellow"
            itemImage={myIcons.fast_food}
            itemDesc="lkjoljk"
            itemPrice="+%63 USD"
            itemAge="13 Sep"
          />
          <HistoryItem
            itemName="Store"
            itemImage={myIcons.store}
            itemColor="#41C9E2"
            itemDesc="salkdsamld"
            itemPrice="+%20 USD"
            itemAge="1 Oct"
          />
          <HistoryItem
            itemImage={myIcons.grocery}
            itemColor="#42ED1F"
            itemName="Grocery"
            itemDesc="asdsabvcbvcbvc skodmsadq wqe"
            itemPrice="+%222 USD"
            itemAge="29 Feb"
          />

          <Nav2 />
        </View>
      </View>
    </SafeAreaView>
  );
};
// store #41C9E2
export default main;
