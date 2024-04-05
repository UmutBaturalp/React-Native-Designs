import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const code23___1 = () => {
  return (
    <SafeAreaView>
      <View style={[styles.main]}>
        <Image source={require('./bg.jpg')} style={[styles.bg]} />
        <View style={[styles.texts]}>
          <Text style={[styles.manage]}>Manage your daily tasks</Text>
          <Text style={[styles.desc]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </Text>
          <View style={[styles.getStartedView]}>
            <View style={[styles.circle]}></View>
            <Text style={[styles.getStarted]}>Get Started</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default code23___1;

const styles = StyleSheet.create({
  main: {
    height: windowHeight,
    backgroundColor: '#BBCCCC',
    alignItems: 'center',
    rowGap: windowHeight * 0.1,
    justifyContent: 'space-between',
    paddingVertical: windowHeight * 0.05,
  },
  bg: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    borderBottomLeftRadius: windowWidth * 0.4,
    borderBottomRightRadius: windowWidth * 0.4,
  },
  texts: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  manage: {color: '#201658', fontSize: windowWidth * 0.1, fontWeight: '700'},
  desc: {
    color: '#201658',
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    opacity: 0.9,
  },
  getStartedView: {flexDirection: 'row', alignItems: 'center'},
  circle: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    borderRadius: 100,
    backgroundColor: '#EEEEEE',
  },
  getStarted: {
    color: '#201658',
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
    position: 'absolute',
    left: windowWidth * 0.06,
  },
});
