import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const code23 = () => {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <View style={styles.container}>
        <View style={{marginTop: windowHeight * 0.03}}>
          <Image
            style={{
              height: windowHeight * 0.5,
              width: windowWidth * 0.85,
              borderTopLeftRadius: 170,
              borderTopRightRadius: 170,
            }}
            source={require('./resim.jpg')}
          />
        </View>
        <View
          style={{
            marginTop: windowHeight * 0.01,
            flexDirection: 'row',
            columnGap: windowWidth * 0.03,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#F96E7C',
              width: windowWidth * 0.1,
            }}></View>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'gray',
              width: windowWidth * 0.1,
            }}></View>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'gray',
              width: windowWidth * 0.1,
            }}></View>
        </View>
        <View style={{width: '100%', marginTop: windowHeight * 0.025}}>
          <Text
            style={{
              fontSize: windowWidth * 0.07,
              fontWeight: '700',
              color: 'black',
            }}>
            Living room
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: windowWidth * 0.035,
              fontWeight: '700',
            }}>
            a asdsa adasdaasa
          </Text>
        </View>
        <View
          style={{
            marginTop: windowHeight * 0.05,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              padding: windowWidth * 0.02,
              width: windowWidth * 0.22,
              backgroundColor: '#F96E7C',
              height: windowWidth * 0.22,
              borderRadius: 20,
            }}>
            <Image
              tintColor={'white'}
              style={{width: '30%', height: '30%'}}
              source={require('./location.png')}
            />
            <Text style={{maxWidth: '80%'}}>Control Panel</Text>
          </View>
          <View
            style={{
              rowGap: windowWidth * 0.02,
              padding: windowWidth * 0.02,
              width: windowWidth * 0.22,
              backgroundColor: '#EEEEEE',
              height: windowWidth * 0.22,
              borderRadius: 20,
            }}>
            <Image
              tintColor={'gray'}
              style={{width: '30%', height: '30%'}}
              source={require('./location.png')}
            />
            <Text>Aasassasd</Text>
            <View
              style={{
                justifyContent: 'center',
                borderRadius: 10,
                padding: windowWidth * 0.005,
                width: windowWidth * 0.08,
                backgroundColor: '#BBBBBB',
                height: windowWidth * 0.05,
              }}>
              <View
                style={{
                  width: windowWidth * 0.04,
                  height: windowWidth * 0.04,
                  backgroundColor: 'white',
                  borderRadius: 50,
                }}></View>
            </View>
          </View>
          <View
            style={{
              padding: windowWidth * 0.02,
              width: windowWidth * 0.22,
              backgroundColor: '#EEEEEE',
              height: windowWidth * 0.22,
              borderRadius: 20,
            }}>
            <Image
              tintColor={'gray'}
              style={{width: '30%', height: '30%'}}
              source={require('./location.png')}
            />
            <Text>asasasd</Text>
            <View
              style={{
                justifyContent: 'center',
                borderRadius: 10,
                padding: windowWidth * 0.005,
                width: windowWidth * 0.08,
                backgroundColor: '#BBBBBB',
                height: windowWidth * 0.05,
              }}>
              <View
                style={{
                  width: windowWidth * 0.04,
                  height: windowWidth * 0.04,
                  backgroundColor: 'white',
                  borderRadius: 50,
                }}></View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: windowHeight * 0.02,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              padding: windowWidth * 0.02,
              width: windowWidth * 0.22,
              backgroundColor: '#EEEEEE',
              height: windowWidth * 0.22,
              borderRadius: 20,
            }}>
            <Image
              tintColor={'gray'}
              style={{width: '30%', height: '30%'}}
              source={require('./location.png')}
            />
            <Text>asasasd</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                borderRadius: 10,
                padding: windowWidth * 0.005,
                width: windowWidth * 0.08,
                backgroundColor: 'green',
                height: windowWidth * 0.05,
              }}>
              <View
                style={{
                  width: windowWidth * 0.04,
                  height: windowWidth * 0.04,
                  backgroundColor: 'white',
                  borderRadius: 50,
                }}></View>
            </View>
          </View>
          <View
            style={{
              padding: windowWidth * 0.02,

              width: windowWidth * 0.22,
              backgroundColor: '#EEEEEE',
              height: windowWidth * 0.22,
              borderRadius: 20,
            }}>
            <Image
              tintColor={'gray'}
              style={{width: '30%', height: '30%'}}
              source={require('./location.png')}
            />
            <Text>asasasd</Text>
            <View
              style={{
                justifyContent: 'center',
                borderRadius: 10,
                padding: windowWidth * 0.005,
                width: windowWidth * 0.08,
                backgroundColor: '#BBBBBB',
                height: windowWidth * 0.05,
              }}>
              <View
                style={{
                  width: windowWidth * 0.04,
                  height: windowWidth * 0.04,
                  backgroundColor: 'white',
                  borderRadius: 50,
                }}></View>
            </View>
          </View>
          <View
            style={{
              padding: windowWidth * 0.02,
              width: windowWidth * 0.22,
              backgroundColor: '#EEEEEE',
              height: windowWidth * 0.22,
              borderRadius: 20,
              rowGap: windowWidth * 0.01,
            }}>
            <Image
              tintColor={'gray'}
              style={{width: '30%', height: '30%'}}
              source={require('./location.png')}
            />
            <Text>asasasd</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                borderRadius: 10,
                padding: windowWidth * 0.005,
                width: windowWidth * 0.08,
                backgroundColor: 'green',
                height: windowWidth * 0.05,
              }}>
              <View
                style={{
                  width: windowWidth * 0.04,
                  height: windowWidth * 0.04,
                  backgroundColor: 'white',
                  borderRadius: 50,
                }}></View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//windowWidth - windowHeight
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default code23;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.85,
    height: windowHeight,
    alignItems: 'center',
  },
});
