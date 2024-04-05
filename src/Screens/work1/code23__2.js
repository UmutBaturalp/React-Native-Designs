import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
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
    <SafeAreaView style={{backgroundColor: 'orange'}}>
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
        <View style={[styles.content]}>
          <ScrollView>
            <View style={[styles.contents]}>
              <View style={[styles.profil]}>
                <Image
                  source={require('./img4.jpg')}
                  style={[styles.profilImg]}
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
                  width: windowWidth * 0.8,
                  height: windowHeight * 0.2,
                  borderRadius: windowWidth * 0.05,
                }}
              />
            </View>
            <View style={[styles.contents]}>
              <View style={[styles.profil]}>
                <Image
                  source={require('./img2.jpg')}
                  style={[styles.profilImg]}
                />
                <View>
                  <Text
                    style={{
                      fontSize: windowWidth * 0.04,
                      color: 'black',
                      fontWeight: '600',
                    }}>
                    Abidin Yerebakan
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
              <Text
                style={{
                  fontSize: windowWidth * 0.0275,
                  color: '#666666',
                  fontWeight: '600',
                }}>
                DSFMO ASODM QOWDMAS ASDOMASD ASDKMSA asdad adSDA ASDA SD ASDA{' '}
              </Text>
            </View>
            <View style={[styles.contents]}>
              <View style={[styles.profil]}>
                <Image
                  source={require('./img3.jpg')}
                  style={[styles.profilImg]}
                />
                <View>
                  <Text
                    style={{
                      fontSize: windowWidth * 0.04,
                      color: 'black',
                      fontWeight: '600',
                    }}>
                    Tuncay Kantarcı
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
                source={require('./img1.jpg')}
                style={{
                  width: windowWidth * 0.8,
                  height: windowHeight * 0.2,
                  borderRadius: windowWidth * 0.05,
                }}
              />
            </View>
            <View style={[styles.contents]}>
              <View style={[styles.profil]}>
                <Image
                  source={require('./img4.jpg')}
                  style={[styles.profilImg]}
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
                  width: windowWidth * 0.8,
                  height: windowHeight * 0.2,
                  borderRadius: windowWidth * 0.05,
                }}
              />
            </View>
          </ScrollView>
        </View>
        <View style={[styles.nav]}>
          <Image
            style={[styles.navIcons]}
            source={require('./house.png')}
            tintColor={'#777777'}
          />
          <Image
            style={[styles.navIcons]}
            source={require('./menu.png')}
            tintColor={'#777777'}
          />
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
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderWidth: 1,
                width: windowWidth * 0.06,
                borderColor: 'orange',
              }}></View>
            <Image
              style={[styles.navIcons]}
              source={require('./bell.png')}
              tintColor={'orange'}
            />
          </View>

          <Image
            style={[styles.navIcons]}
            source={require('./user.png')}
            tintColor={'#777777'}
          />
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
    height: windowHeight * 0.06,
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
    width: windowWidth,
    height: windowHeight * 0.82,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: windowWidth * 0.1,
    borderTopRightRadius: windowWidth * 0.1,
    paddingTop: windowHeight * 0.03,
    alignItems: 'center',
  },
  contents: {
    borderRadius: windowWidth * 0.05,
    width: windowWidth * 0.84,
    rowGap: windowHeight * 0.02,
    padding: windowWidth * 0.02,
    marginBottom: windowHeight * 0.02,
    backgroundColor: '#EEEEEE',
  },
  profil: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: windowWidth * 0.03,
  },
  profilImg: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: 100,
  },
  nav: {
    height: windowHeight * 0.0746,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.1,
  },
  navIcons: {width: windowWidth * 0.06, height: windowWidth * 0.06},
});
