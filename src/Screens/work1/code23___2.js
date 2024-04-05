import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const code23___2 = () => {
  return (
    <SafeAreaView>
      <View style={[styles.main]}>
        <View style={[styles.header]}>
          <Image style={[styles.profilImg]} source={require('./img4.jpg')} />
        </View>
        <View style={[styles.headerTexts]}>
          <Text style={[styles.hiText]}>Hi Ghulam</Text>
          <Text style={[styles.headerDesc]}>6 Tasks are pasdasd</Text>
        </View>
        <View style={[styles.task]}>
          <Text style={[styles.taskTitle]}>Mobile App Design</Text>
          <Text style={[styles.taskDesc]}>asda asd sadas </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Image
              source={require('./img4.jpg')}
              style={{
                width: windowWidth * 0.08,
                height: windowWidth * 0.08,
                borderRadius: 100,
              }}
            />
            <Image
              source={require('./more.png')}
              style={{width: windowWidth * 0.07, height: windowWidth * 0.07}}
              tintColor={'#FFFFFF'}
            />
          </View>
        </View>
        <View style={[styles.monthly]}>
          <Text
            style={{
              fontSize: windowWidth * 0.055,
              color: '#FFFFFF',
              fontWeight: '600',
              letterSpacing: windowWidth * 0.003,
            }}>
            Monthly Review
          </Text>
          <Image
            source={require('./shoe2.jpg')}
            style={{
              width: windowWidth * 0.1,
              height: windowWidth * 0.1,
              borderRadius: 100,
            }}
          />
        </View>
        <View style={[styles.infos]}>
          <View style={[styles.infosColumn]}>
            <View style={[styles.info]}>
              <Text style={[styles.infoNum]}>22</Text>
              <Text style={{color: '#CCCCCC'}}>Asds</Text>
            </View>
            <View style={[styles.info, {height: windowHeight * 0.15}]}>
              <Text style={[styles.infoNum]}>10</Text>
              <Text style={{color: '#CCCCCC'}}>Asdasda</Text>
            </View>
          </View>
          <View style={[styles.infosColumn]}>
            <View style={[styles.info, {height: windowHeight * 0.15}]}>
              <Text style={[styles.infoNum]}>7</Text>
              <Text style={{color: '#CCCCCC'}}>Asds Asds</Text>
            </View>
            <View style={[styles.info, {height: windowHeight * 0.22}]}>
              <Text style={[styles.infoNum]}>12</Text>
              <Text style={{color: '#CCCCCC'}}>Asdasda Asdsa</Text>
            </View>
          </View>
        </View>
        <View style={[styles.nav]}>
          <Image
            source={require('./house.png')}
            style={[styles.navIcon]}
            tintColor={'white'}
          />
          <Image
            source={require('./menu.png')}
            style={[styles.navIcon]}
            tintColor={'white'}
          />
          <Image
            source={require('./user.png')}
            style={[styles.navIcon]}
            tintColor={'white'}
          />
          <Image
            source={require('./bell.png')}
            style={[styles.navIcon]}
            tintColor={'white'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default code23___2;

const styles = StyleSheet.create({
  main: {
    height: windowHeight,
    backgroundColor: '#5D12D2',
    paddingTop: windowHeight * 0.05,
    alignItems: 'center',
  },
  header: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: windowWidth * 0.0,
  },
  profilImg: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
  },
  headerTexts: {width: windowWidth * 0.9},
  hiText: {color: 'white', fontSize: windowWidth * 0.07, fontWeight: '600'},
  headerDesc: {color: 'white', opacity: 0.8, fontSize: windowWidth * 0.04},
  task: {
    marginTop: windowHeight * 0.03,
    width: windowWidth * 0.9,
    height: windowHeight * 0.15,
    backgroundColor: '#7752FE',
    borderRadius: windowWidth * 0.035,
    justifyContent: 'space-evenly',
    padding: windowWidth * 0.04,
  },
  taskTitle: {
    color: '#FFFFFF',
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
  },
  taskDesc: {color: '#DDDDDD', fontSize: windowWidth * 0.04, fontWeight: '600'},
  monthly: {
    flexDirection: 'row',
    width: windowWidth * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: windowHeight * 0.02,
  },
  infos: {
    height: windowHeight * 0.4,
    width: windowWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: windowHeight * 0.01,
  },
  info: {
    width: '100%',
    height: windowHeight * 0.22,
    backgroundColor: '#7752FE',
    borderRadius: windowWidth * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: windowWidth * 0.01,
  },
  infosColumn: {
    width: windowWidth * 0.42,
    height: '100%',
    justifyContent: 'space-between',
  },
  infoNum: {color: '#FFFFFF', fontSize: windowWidth * 0.06, fontWeight: '700'},
  nav: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.089,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navIcon: {width: windowWidth * 0.06, height: windowWidth * 0.06},
});
