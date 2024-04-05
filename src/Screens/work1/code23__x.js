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

//header
//content
//navbar

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const code23__1 = () => {
  return (
    <SafeAreaView>
      <View style={[styles.main]}>
        <ImageBackground
          source={require('./shoe3.jpg')}
          style={[styles.header]}>
          <Image source={require('./img2.jpg')} style={[styles.logo]} />
          <View style={[styles.buttons]}>
            <Image
              source={require('./search.png')}
              style={[styles.Button]}
              tintColor={'white'}
            />
            <Image
              source={require('./basket.png')}
              style={[styles.Button]}
              tintColor={'white'}
            />
          </View>
        </ImageBackground>
        <ScrollView style={[styles.content]}>
          <View style={[styles.categories]}>
            <Text
              style={{
                fontSize: windowWidth * 0.045,
                fontWeight: '700',
                color: 'black',
              }}>
              Categories
            </Text>
            <View style={[styles.choeses]}>
              <View style={[styles.chose]}>
                <View style={[styles.choseIcon]}>
                  <Image
                    source={require('./watch.png')}
                    style={{width: '75%', height: '75%'}}
                  />
                </View>
                <Text style={[styles.choseText]}>RANK</Text>
              </View>
              <View style={[styles.chose]}>
                <View style={[styles.choseIcon]}>
                  <Image
                    source={require('./fav.png')}
                    style={{width: '75%', height: '75%'}}
                  />
                </View>
                <Text style={[styles.choseText]}>HOT</Text>
              </View>
              <View style={[styles.chose]}>
                <View style={[styles.choseIcon]}>
                  <Image
                    source={require('./watch.png')}
                    style={{width: '75%', height: '75%'}}
                  />
                </View>
                <Text style={[styles.choseText]}>ABIDIN</Text>
              </View>
              <View style={[styles.chose]}>
                <View style={[styles.choseIcon]}>
                  <Image
                    source={require('./watch.png')}
                    style={{width: '75%', height: '75%'}}
                  />
                </View>
                <Text style={[styles.choseText]}>CAFER</Text>
              </View>
            </View>
          </View>
          <View style={[styles.categories]}>
            <Text
              style={{
                fontSize: windowWidth * 0.045,
                fontWeight: '700',
                color: 'black',
              }}>
              Skin Type
            </Text>
            <View style={[styles.choeses]}>
              <View style={[styles.chose]}>
                <View style={[styles.choseIcon]}>
                  <Image
                    source={require('./watch.png')}
                    style={{width: '75%', height: '75%'}}
                  />
                </View>
                <Text style={[styles.choseText]}>RANK</Text>
              </View>
              <View style={[styles.chose]}>
                <View style={[styles.choseIcon]}>
                  <Image
                    source={require('./watch.png')}
                    style={{width: '75%', height: '75%'}}
                  />
                </View>
                <Text style={[styles.choseText]}>RANK</Text>
              </View>
              <View style={[styles.chose]}>
                <View style={[styles.choseIcon]}>
                  <Image
                    source={require('./watch.png')}
                    style={{width: '75%', height: '75%'}}
                  />
                </View>
                <Text style={[styles.choseText]}>RANK</Text>
              </View>
              <View style={[styles.chose]}>
                <View style={[styles.choseIcon]}>
                  <Image
                    source={require('./watch.png')}
                    style={{width: '75%', height: '75%'}}
                  />
                </View>
                <Text style={[styles.choseText]}>RANK</Text>
              </View>
            </View>
          </View>
          <View style={[styles.post]}>
            <View style={[styles.profil]}>
              <Image
                source={require('./img4.jpg')}
                style={{
                  width: windowWidth * 0.13,
                  height: windowWidth * 0.13,
                  borderRadius: 100,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: windowWidth * 0.04,
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  Abuzer Kömürcü
                </Text>
                <Text
                  style={{
                    fontSize: windowWidth * 0.03,
                    fontWeight: '500',
                    color: 'gray',
                  }}>
                  Prof.Dr
                </Text>
              </View>
            </View>
            <Image
              source={require('./img3.jpg')}
              style={{
                width: windowWidth * 0.88,
                height: windowHeight * 0.2,
                borderRadius: windowWidth * 0.05,
              }}
            />
          </View>
          <View style={[styles.post]}>
            <View style={[styles.profil]}>
              <Image
                source={require('./img4.jpg')}
                style={{
                  width: windowWidth * 0.13,
                  height: windowWidth * 0.13,
                  borderRadius: 100,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: windowWidth * 0.04,
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  Abuzer Kömürcü
                </Text>
                <Text
                  style={{
                    fontSize: windowWidth * 0.03,
                    fontWeight: '500',
                    color: 'gray',
                  }}>
                  Prof.Dr
                </Text>
              </View>
            </View>
            <Image
              source={require('./img3.jpg')}
              style={{
                width: windowWidth * 0.88,
                height: windowHeight * 0.2,
                borderRadius: windowWidth * 0.05,
              }}
            />
          </View>
        </ScrollView>
        <View style={[styles.nav]}>
          <Image source={require('./house.png')} style={[styles.navIcons]} />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderWidth: 2,
                width: windowWidth * 0.15,
                borderColor: 'orange',
              }}></View>
            <Image
              style={[styles.navIcons]}
              source={require('./menu.png')}
              tintColor={'orange'}
            />
          </View>
          <View
            style={{
              position: 'relative',
              bottom: windowHeight * 0.0323,
              backgroundColor: 'orange',
              width: windowWidth * 0.14,
              height: windowWidth * 0.14,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./plus.png')}
              tintColor={'white'}
              style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
            />
          </View>
          <Image source={require('./bell.png')} style={[styles.navIcons]} />
          <Image source={require('./user.png')} style={[styles.navIcons]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default code23__1;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'orange',
    width: windowWidth,
    height: windowHeight,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.25,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.06,
    paddingVertical: windowHeight * 0.04,
  },
  logo: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.03,
    borderRadius: windowWidth * 0.01,
  },
  buttons: {
    flexDirection: 'row',
    columnGap: windowWidth * 0.05,
  },
  Button: {width: windowWidth * 0.06, height: windowWidth * 0.06},
  content: {
    backgroundColor: '#EEEEEE',
    borderTopLeftRadius: windowWidth * 0.1,
    borderTopRightRadius: windowWidth * 0.1,
    maxHeight: windowHeight * 0.66,
  },
  categories: {
    padding: windowWidth * 0.05,
    rowGap: windowWidth * 0.03,
  },
  choeses: {flexDirection: 'row', columnGap: windowWidth * 0.035},
  chose: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: windowWidth * 0.01,
  },
  post: {
    padding: windowWidth * 0.06,
    rowGap: windowWidth * 0.02,
    width: windowWidth,
  },
  profil: {flexDirection: 'row', columnGap: windowWidth * 0.03},

  nav: {
    width: windowWidth,
    height: windowHeight * 0.0646,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.04,
  },
  navIcons: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    margin: windowWidth * 0.02,
  },
  choseIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    backgroundColor: 'tomato',
    borderRadius: 4,
  },
  choseText: {color: 'black', fontWeight: '700', fontSize: windowWidth * 0.035},
});
