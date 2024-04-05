import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import styles from './styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//images && icons
import myImages from '../../Assets/Images/index';
import myIcons from '../../Assets/Icons/index';
import {Cards, Myheader, Nav, Aa} from '../../Components/index';

const main = () => {
  return (
    <SafeAreaView>
      <View style={[styles.main]}>
        <Myheader />
        <ScrollView
          style={{
            backgroundColor: '#EEEEEE',
            paddingLeft: windowWidth * 0.05,
            maxHeight: windowHeight * 0.8,
          }}>
          <View style={[styles.myCardsView]}>
            <Text style={[styles.myCardsText]}>My Cards</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              width: windowWidth,
              paddingLeft: windowWidth * 0.0,
              maxHeight: windowWidth * 0.4,
            }}>
            <Cards
              cardImage={myImages.cc}
              balance="123,633.00"
              lastNumbers="4543"
              age="12/25"
            />
            <Cards />
          </ScrollView>
          <View style={[styles.send_money_search]}>
            <Text style={[styles.send_money_to]}>Send Money To</Text>
            <View style={[styles.searchView]}>
              <Text style={[styles.text_search]}>Search</Text>
              <Image
                source={myIcons.search}
                tintColor={'orange'}
                style={[styles.search_icon]}
              />
            </View>
          </View>
          <View style={[styles.profiles]}>
            <Image
              source={myImages.img4}
              style={[styles.profileImages, {zIndex: 4}]}
            />
            <Image
              source={myImages.img4}
              style={[
                styles.profileImages,
                {zIndex: 3, position: 'relative', right: windowWidth * 0.02},
              ]}
            />
            <Image
              source={myImages.img4}
              style={[
                styles.profileImages,
                {zIndex: 2, position: 'relative', right: windowWidth * 0.04},
              ]}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: windowWidth * 0.12,
                height: windowWidth * 0.12,
                borderRadius: 100,
                borderWidth: 3,
                borderStyle: 'dotted',
                borderColor: '#000000',
                position: 'relative',
                right: windowWidth * 0.06,
              }}>
              <Text style={{fontSize: windowWidth * 0.06, fontWeight: '600'}}>
                +
              </Text>
            </View>
          </View>
          <View style={[styles.amount]}>
            <Text style={[styles.text_amount]}>Amount</Text>
          </View>
          <View style={[styles.amountView]}>
            <View style={[styles.amountBar]}>
              <Text style={[styles.your_amount]}>450.00 USD</Text>
            </View>
            <View style={[styles.sendingView]}>
              <Image
                source={myIcons.send}
                tintColor={'#FFFFFF'}
                style={[styles.send_icon]}
              />
            </View>
          </View>
          <View style={[styles.total_sent]}>
            <Text style={[styles.text_total_sent]}>Total Sent</Text>
          </View>
          <Aa />
          <Aa />
          <Aa />
          <Aa />
        </ScrollView>
        <Nav />
      </View>
    </SafeAreaView>
  );
};
export default main;
