import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const test = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#E00151', height: windowHeight}}>
      <View style={{alignItems: 'center', marginTop: windowHeight * 0.15}}>
        <View>
          <Image source={require('./LOGO.png')} />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          margin: windowWidth * 0.05,
        }}>
        <View
          style={{
            width: windowWidth * 0.75,
            marginTop: windowWidth * 0.1,
          }}>
          <View style={{padding: windowWidth * 0.01}}>
            <Text
              style={{
                color: 'white',
                fontSize: windowWidth * 0.04,
                fontWeight: '600',
              }}>
              Kullanıcı Adı
            </Text>
          </View>
          <View>
            <TextInput
              style={{
                backgroundColor: '#252A34',
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
              }}></TextInput>
          </View>
        </View>
        <View
          style={{width: windowWidth * 0.75, marginTop: windowWidth * 0.01}}>
          <View style={{padding: windowWidth * 0.02}}>
            <Text
              style={{
                fontSize: windowWidth * 0.04,
                fontWeight: '600',
                color: 'white',
              }}>
              Parola
            </Text>
          </View>
          <View>
            <TextInput
              style={{
                backgroundColor: '#252A34',
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
              }}></TextInput>
          </View>
        </View>
        <View
          style={{
            width: windowWidth * 0.75,
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: windowWidth * 0.02,
            padding: windowWidth * 0.02,
          }}>
          <View
            style={{
              width: windowWidth * 0.045,
              height: windowWidth * 0.045,
              backgroundColor: '#1F1F1F',
              borderWidth: 1,
              borderRadius: 50,
              borderColor: 'white',
            }}></View>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: windowWidth * 0.04,
              }}>
              Beni Hatırla
            </Text>
          </View>
        </View>
        <View
          style={{
            width: windowWidth * 0.75,
            height: windowWidth * 0.12,
            backgroundColor: '#08D9D6',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: windowWidth * 0.03,
          }}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: windowWidth * 0.045,
                fontWeight: '600',
              }}>
              Giriş Yap
            </Text>
          </View>
        </View>
        <View
          style={{
            width: windowWidth * 0.75,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: windowWidth * 0.02,
          }}>
          <View>
            <Text style={{color: 'white', fontSize: windowWidth * 0.035}}>
              Hesabım Yok
            </Text>
          </View>
          <View>
            <Text style={{color: 'white', fontSize: windowWidth * 0.035}}>
              Şifremi Unuttum
            </Text>
          </View>
        </View>
        <View style={{marginTop: windowWidth * 0.1}}>
          <Text
            style={{
              color: 'white',
              fontSize: windowWidth * 0.033,
              textDecorationLine: 'underline',
            }}>
            Şunlarla Giriş Yapabilirsin
          </Text>
        </View>
        <View
          style={{
            width: windowWidth * 0.42,
            height: windowWidth * 0.15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: windowWidth * 0.03,
          }}>
          <View
            style={{
              width: windowWidth * 0.12,
              height: windowWidth * 0.12,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <Image
              source={require('./google.png')}
              style={{width: windowWidth * 0.08, height: windowWidth * 0.08}}
            />
          </View>
          <View
            style={{
              width: windowWidth * 0.12,
              height: windowWidth * 0.12,
              backgroundColor: '#1976D2',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <Image
              tintColor={'white'}
              source={require('./facebook.png')}
              style={{width: windowWidth * 0.08, height: windowWidth * 0.08}}
            />
          </View>
          <View
            style={{
              width: windowWidth * 0.12,
              height: windowWidth * 0.12,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <Image
              tintColor={'white'}
              source={require('./twitter.png')}
              style={{width: windowWidth * 0.08, height: windowWidth * 0.08}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default test;

const styles = StyleSheet.create({});
