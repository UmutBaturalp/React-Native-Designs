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
        <View style={[styles.header]}>
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
        </View>
        <ScrollView style={[styles.content]}>
          <View style={[styles.featuredView]}>
            <Text style={[styles.featuredText]}>Featured Products</Text>
          </View>
          <ScrollView style={[styles.contentScroll]} horizontal={true}>
            <View style={[styles.contents]}>
              <View style={[styles.contentsProfil]}>
                <Image
                  source={require('./img4.jpg')}
                  style={[styles.profilImg]}
                />
                <View>
                  <Text
                    style={{
                      fontSize: windowWidth * 0.04,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    Abuzer Kömürcü
                  </Text>
                  <Text
                    style={{fontWeight: '600', fontSize: windowWidth * 0.035}}>
                    baron
                  </Text>
                </View>
              </View>
              <Image
                source={require('./img3.jpg')}
                style={[styles.contentImg]}
              />
            </View>
            <View style={[styles.contents]}>
              <View style={[styles.contentsProfil]}>
                <Image
                  source={require('./img4.jpg')}
                  style={[styles.profilImg]}
                />
                <View>
                  <Text
                    style={{
                      fontSize: windowWidth * 0.04,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    Abuzer Kömürcü
                  </Text>
                  <Text
                    style={{fontWeight: '600', fontSize: windowWidth * 0.035}}>
                    baron
                  </Text>
                </View>
              </View>
              <Image
                source={require('./img2.jpg')}
                style={[styles.contentImg]}
              />
            </View>
            <View style={[styles.contents]}>
              <View style={[styles.contentsProfil]}>
                <Image
                  source={require('./img4.jpg')}
                  style={[styles.profilImg]}
                />
                <View>
                  <Text
                    style={{
                      fontSize: windowWidth * 0.04,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    Abuzer Kömürcü
                  </Text>
                  <Text
                    style={{fontWeight: '600', fontSize: windowWidth * 0.035}}>
                    baron
                  </Text>
                </View>
              </View>
              <Image
                source={require('./img1.jpg')}
                style={[styles.contentImg]}
              />
            </View>
          </ScrollView>
          <View style={[styles.featuredView]}>
            <Text style={[styles.featuredText]}>Popular Products</Text>
          </View>
          <ScrollView style={[styles.contentScroll]} horizontal={true}>
            <View style={[styles.contents]}>
              <View style={[styles.contentsProfil]}>
                <Image
                  source={require('./img4.jpg')}
                  style={[styles.profilImg]}
                />
                <View>
                  <Text
                    style={{
                      fontSize: windowWidth * 0.04,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    Abuzer Kömürcü
                  </Text>
                  <Text
                    style={{fontWeight: '600', fontSize: windowWidth * 0.035}}>
                    baron
                  </Text>
                </View>
              </View>
              <Image
                source={require('./img1.jpg')}
                style={[styles.contentImg]}
              />
            </View>
            <View style={[styles.contents]}>
              <View style={[styles.contentsProfil]}>
                <Image
                  source={require('./img4.jpg')}
                  style={[styles.profilImg]}
                />
                <View>
                  <Text
                    style={{
                      fontSize: windowWidth * 0.04,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    Abuzer Kömürcü
                  </Text>
                  <Text
                    style={{fontWeight: '600', fontSize: windowWidth * 0.035}}>
                    baron
                  </Text>
                </View>
              </View>
              <Image
                source={require('./img3.jpg')}
                style={[styles.contentImg]}
              />
            </View>
            <View style={[styles.contents]}>
              <View style={[styles.contentsProfil]}>
                <Image
                  source={require('./img4.jpg')}
                  style={[styles.profilImg]}
                />
                <View>
                  <Text
                    style={{
                      fontSize: windowWidth * 0.04,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    Abuzer Kömürcü
                  </Text>
                  <Text
                    style={{fontWeight: '600', fontSize: windowWidth * 0.035}}>
                    baron
                  </Text>
                </View>
              </View>
              <Image
                source={require('./img3.jpg')}
                style={[styles.contentImg]}
              />
            </View>
          </ScrollView>
        </ScrollView>
        <View style={[styles.nav]}>
          <Image source={require('./house.png')} style={[styles.navIcons]} />
          <Image source={require('./menu.png')} style={[styles.navIcons]} />
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
    backgroundColor: 'white',
    borderTopLeftRadius: windowWidth * 0.1,
    borderTopRightRadius: windowWidth * 0.1,
    maxHeight: windowHeight * 0.66,
  },
  featuredView: {width: windowWidth, padding: windowWidth * 0.06},
  featuredText: {
    fontSize: windowWidth * 0.045,
    fontWeight: '700',
    color: 'black',
  },
  contentScroll: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: windowWidth * 0.03,
  },
  contents: {
    width: windowWidth * 0.55,
    height: windowHeight * 0.3,
    backgroundColor: '#EEEEEE',
    borderRadius: windowWidth * 0.04,
    marginHorizontal: windowWidth * 0.01,
  },
  contentsProfil: {
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: windowWidth * 0.03,
  },
  profilImg: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: 100,
  },

  contentImg: {
    width: '100%',
    height: '80%',
    borderBottomLeftRadius: windowWidth * 0.04,
    borderBottomRightRadius: windowWidth * 0.04,
  },
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
});
