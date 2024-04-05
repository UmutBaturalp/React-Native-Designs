import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const code23_4 = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          marginTop: windowHeight * 0.02,
          width: windowWidth,
          height: windowHeight * 0.1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('./back.png')}
          style={{
            left: windowWidth * 0.05,
            position: 'absolute',
            width: windowWidth * 0.05,
            height: windowWidth * 0.05,
          }}
        />
        <Text
          style={{
            fontSize: windowWidth * 0.06,
            fontWeight: '700',
            color: 'black',
          }}>
          My Cart
        </Text>
      </View>
      <View
        style={{
          width: windowWidth,
          height: windowHeight * 0.75,
          backgroundColor: '#EEEEEE',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          padding: windowWidth * 0.04,
          alignItems: 'center',
          rowGap: windowHeight * 0.01,
        }}>
        <View
          style={{
            width: '95%',
            height: '18%',
            backgroundColor: '#FFFFFF',
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: windowWidth * 0.04,
          }}>
          <Image
            source={require('./shoe2.jpg')}
            style={{
              width: windowWidth * 0.2,
              height: windowWidth * 0.2,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.4,
              height: '80%',
              rowGap: windowHeight * 0.005,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: windowWidth * 0.045,
                color: 'blue',
              }}>
              Nike Pro Max 200
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.05,
                  fontWeight: '700',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.08,
              height: '80%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: windowWidth * 0.08, color: 'black'}}>
              -
            </Text>
            <Text
              style={{
                fontSize: windowWidth * 0.04,
                fontWeight: '600',
                color: 'black',
              }}>
              1
            </Text>
            <View
              style={{
                width: windowWidth * 0.06,
                height: windowWidth * 0.06,
                backgroundColor: '#A8DAF5',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '500',
                }}>
                +
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            height: '18%',
            backgroundColor: '#FFFFFF',
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: windowWidth * 0.04,
          }}>
          <Image
            source={require('./shoe4.jpg')}
            style={{
              width: windowWidth * 0.2,
              height: windowWidth * 0.2,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.4,
              height: '80%',
              rowGap: windowHeight * 0.005,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: windowWidth * 0.045,
                color: 'blue',
              }}>
              Nike Pro Max 200
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.05,
                  fontWeight: '700',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.08,
              height: '80%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: windowWidth * 0.08, color: 'black'}}>
              -
            </Text>
            <Text
              style={{
                fontSize: windowWidth * 0.04,
                fontWeight: '600',
                color: 'black',
              }}>
              1
            </Text>
            <View
              style={{
                width: windowWidth * 0.06,
                height: windowWidth * 0.06,
                backgroundColor: '#A8DAF5',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '500',
                }}>
                +
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            height: '18%',
            backgroundColor: '#FFFFFF',
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: windowWidth * 0.04,
          }}>
          <Image
            source={require('./shoe.jpg')}
            style={{
              width: windowWidth * 0.2,
              height: windowWidth * 0.2,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.4,
              height: '80%',
              rowGap: windowHeight * 0.005,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: windowWidth * 0.045,
                color: 'blue',
              }}>
              Nike Pro Max 200
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.05,
                  fontWeight: '700',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.08,
              height: '80%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: windowWidth * 0.08, color: 'black'}}>
              -
            </Text>
            <Text
              style={{
                fontSize: windowWidth * 0.04,
                fontWeight: '600',
                color: 'black',
              }}>
              1
            </Text>
            <View
              style={{
                width: windowWidth * 0.06,
                height: windowWidth * 0.06,
                backgroundColor: '#A8DAF5',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '500',
                }}>
                +
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            height: '18%',
            backgroundColor: '#FFFFFF',
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: windowWidth * 0.04,
          }}>
          <Image
            source={require('./shoe3.jpg')}
            style={{
              width: windowWidth * 0.2,
              height: windowWidth * 0.2,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.4,
              height: '80%',
              rowGap: windowHeight * 0.005,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: windowWidth * 0.045,
                color: 'blue',
              }}>
              Nike Pro Max 200
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.05,
                  fontWeight: '700',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.08,
              height: '80%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: windowWidth * 0.08, color: 'black'}}>
              -
            </Text>
            <Text
              style={{
                fontSize: windowWidth * 0.04,
                fontWeight: '600',
                color: 'black',
              }}>
              1
            </Text>
            <View
              style={{
                width: windowWidth * 0.06,
                height: windowWidth * 0.06,
                backgroundColor: '#A8DAF5',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '500',
                }}>
                +
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            height: '18%',
            backgroundColor: '#FFFFFF',
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: windowWidth * 0.04,
          }}>
          <Image
            source={require('./shoe4.jpg')}
            style={{
              width: windowWidth * 0.2,
              height: windowWidth * 0.2,
              borderRadius: 100,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.4,
              height: '80%',
              rowGap: windowHeight * 0.005,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: windowWidth * 0.045,
                color: 'blue',
              }}>
              Nike Pro Max 200
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.05,
                  fontWeight: '700',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              width: windowWidth * 0.08,
              height: '80%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: windowWidth * 0.08, color: 'black'}}>
              -
            </Text>
            <Text
              style={{
                fontSize: windowWidth * 0.04,
                fontWeight: '600',
                color: 'black',
              }}>
              1
            </Text>
            <View
              style={{
                width: windowWidth * 0.06,
                height: windowWidth * 0.06,
                backgroundColor: '#A8DAF5',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: windowWidth * 0.04,
                  fontWeight: '500',
                }}>
                +
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: windowWidth * 0.7,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: windowWidth * 0.03,
            }}>
            <Text style={{fontSize: windowWidth * 0.045}}>Subtotal:</Text>
            <Text
              style={{
                fontSize: windowWidth * 0.05,
                fontWeight: '700',
                color: 'black',
              }}>
              $1250
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: windowWidth * 0.02,
            }}>
            <Text style={{fontSize: windowWidth * 0.045}}>Taxes:</Text>
            <Text
              style={{
                fontSize: windowWidth * 0.05,
                fontWeight: '700',
                color: 'black',
              }}>
              $40
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: windowWidth * 0.06,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: '#FFFFFF',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text
            style={{
              fontSize: windowWidth * 0.035,
              fontWeight: '900',
              color: 'black',
            }}>
            $
          </Text>
          <Text
            style={{
              fontSize: windowWidth * 0.07,
              fontWeight: '900',
              color: 'black',
            }}>
            1290.00
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            shadowColor: 'black',
            borderRadius: 20,
            width: windowWidth * 0.33,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Image
            source={require('./basket.png')}
            style={{width: windowWidth * 0.045, height: windowWidth * 0.045}}
            tintColor={'#FFFFFF'}
          />
          <Text style={{color: '#FFFFFF', fontSize: windowWidth * 0.035}}>
            Check Out
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default code23_4;

const styles = StyleSheet.create({});
