import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const code23_2 = () => {
  return (
    <SafeAreaView
      style={{
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
        backgroundColor: '#EEEFFE',
      }}>
      <View
        style={{
          width: windowWidth * 0.9,
          marginTop: windowHeight * 0.02,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: windowHeight * 0.02,
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={require('./back.png')}
              style={{width: windowWidth * 0.06, height: windowWidth * 0.06}}
            />
          </View>
          <View>
            <Image
              source={require('./logoo.png')}
              style={{width: windowWidth * 0.07, height: windowWidth * 0.07}}
            />
          </View>
          <View>
            <Image
              source={require('./fav.png')}
              style={{width: windowWidth * 0.07, height: windowWidth * 0.07}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: windowHeight * 0.1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            backgroundColor: '#A8DAF5',
            paddingVertical: windowWidth * 0.005,
            paddingHorizontal: windowWidth * 0.015,
            borderRadius: 7,
          }}>
          30%
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: windowHeight * 0.4,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Image
          source={require('./shoe.jpg')}
          style={{
            width: windowWidth * 0.5,
            height: windowWidth * 0.5,
            borderRadius: 1000,
          }}
        />
        <View
          style={{
            width: windowWidth * 0.15,
            height: windowHeight * 0.02,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            columnGap: windowWidth * 0.008,
          }}>
          <View
            style={{
              width: windowWidth * 0.01,
              height: windowWidth * 0.01,
              backgroundColor: '#A8DAF5',
              borderRadius: 100,
            }}></View>
          <View
            style={{
              width: windowWidth * 0.01,
              height: windowWidth * 0.01,
              backgroundColor: '#A8DAF5',
              borderRadius: 100,
            }}></View>
          <View
            style={{
              width: windowWidth * 0.06,
              height: windowWidth * 0.01,
              backgroundColor: '#A8DAF5',
              borderRadius: 100,
            }}></View>
          <View
            style={{
              width: windowWidth * 0.01,
              height: windowWidth * 0.01,
              backgroundColor: '#A8DAF5',
              borderRadius: 100,
            }}></View>
          <View
            style={{
              width: windowWidth * 0.01,
              height: windowWidth * 0.01,
              backgroundColor: '#A8DAF5',
              borderRadius: 100,
            }}></View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#EEEEEE',
          width: '100%',
          height: windowHeight * 0.3,
          padding: windowWidth * 0.05,
          justifyContent: 'space-around',
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: '#1808BD',
                fontSize: windowWidth * 0.06,
                fontWeight: '600',
              }}>
              Nike Air Max 200
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: windowWidth * 0.02,
              }}>
              <Image
                source={require('./logoo.png')}
                style={{width: windowWidth * 0.04, height: windowWidth * 0.04}}
              />
              <Text style={{fontSize: windowWidth * 0.035, color: 'gray'}}>
                $4.50
              </Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: windowWidth * 0.037,
                color: '#2919CE',
              }}>
              Built for natural motion, the Nikex Flox shoes
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: windowWidth * 0.05,
          }}>
          <Text style={{fontSize: windowWidth * 0.04}}>Size:</Text>
          <Text
            style={{
              fontWeight: '700',
              fontSize: windowWidth * 0.04,
              color: 'black',
              backgroundColor: '#A8DAF5',
              borderRadius: 8,
              paddingHorizontal: windowWidth * 0.02,
              paddingVertical: windowWidth * 0.01,
            }}>
            US 6
          </Text>
          <Text
            style={{
              fontWeight: '700',
              fontSize: windowWidth * 0.04,
              color: 'black',
              borderRadius: 8,
              paddingHorizontal: windowWidth * 0.02,
              paddingVertical: windowWidth * 0.01,
            }}>
            US 7
          </Text>
          <Text
            style={{
              fontWeight: '700',
              fontSize: windowWidth * 0.04,
              color: 'black',
              borderRadius: 8,
              paddingHorizontal: windowWidth * 0.02,
              paddingVertical: windowWidth * 0.01,
            }}>
            US 8
          </Text>
          <Text
            style={{
              fontWeight: '700',
              fontSize: windowWidth * 0.04,
              color: 'black',
              borderRadius: 8,
              paddingHorizontal: windowWidth * 0.02,
              paddingVertical: windowWidth * 0.01,
            }}>
            US 9
          </Text>
        </View>
        <View style={{flexDirection: 'row', columnGap: windowWidth * 0.06}}>
          <Text style={{fontSize: windowWidth * 0.04}}>Available Color:</Text>
          <View
            style={{
              width: windowWidth * 0.06,
              height: windowWidth * 0.06,
              backgroundColor: 'orange',
              opacity: 0.4,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                backgroundColor: 'orange',
                borderRadius: 100,
              }}></View>
          </View>
          <View
            style={{
              width: windowWidth * 0.06,
              height: windowWidth * 0.06,
              backgroundColor: 'red',
              opacity: 0.4,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                backgroundColor: 'red',
                borderRadius: 100,
              }}></View>
          </View>
          <View
            style={{
              width: windowWidth * 0.06,
              height: windowWidth * 0.06,
              backgroundColor: 'pink',
              opacity: 0.4,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                backgroundColor: 'pink',
                borderRadius: 100,
              }}></View>
          </View>
          <View
            style={{
              width: windowWidth * 0.06,
              height: windowWidth * 0.06,
              backgroundColor: 'blue',
              opacity: 0.4,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                backgroundColor: 'blue',
                borderRadius: 100,
              }}></View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          backgroundColor: '#FFFFFF',
          backgroundColor: '#',
          paddingHorizontal: windowWidth * 0.05,
          height: windowHeight * 0.102,
          borderTopLeftRadius: windowWidth * 0.05,
          borderTopRightRadius: windowWidth * 0.05,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: windowWidth * 0.04,
            }}>
            $
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: windowWidth * 0.08,
              fontWeight: '700',
            }}>
            269.00
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: windowWidth * 0.02,
            backgroundColor: '#EEEEEE',
            padding: windowWidth * 0.03,
            borderRadius: 30,
          }}>
          <Image
            source={require('./basket.png')}
            tintColor={'blue'}
            style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
          />
          <Text
            style={{
              color: 'blue',
              fontSize: windowWidth * 0.04,
              fontWeight: '600',
            }}>
            Add To Cart
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default code23_2;

const styles = StyleSheet.create({});
