import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {cloneElement} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const navBar = windowHeight * 0.871;

const code23_3 = () => {
  return (
    <SafeAreaView
      style={{
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
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
              source={require('./search.png')}
              style={{width: windowWidth * 0.07, height: windowWidth * 0.07}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: windowWidth * 0.9,
          height: windowHeight * 0.06,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: windowWidth * 0.06,
            fontWeight: '700',
            color: 'black',
          }}>
          Our Product
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{color: 'gray'}}>Short by</Text>
          <Image
            tintColor={'gray'}
            source={require('./down.png')}
            style={{width: windowWidth * 0.07, height: windowWidth * 0.07}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: windowWidth * 0.9,
          height: windowHeight * 0.08,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '30%',
            height: '50%',
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: windowWidth * 0.015,
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}>
          <Image
            source={require('./sneakers.png')}
            style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: windowWidth * 0.035,
              fontWeight: '600',
            }}>
            Sneakers
          </Text>
        </View>
        <View
          style={{
            width: '30%',
            height: '50%',
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: windowWidth * 0.015,
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}>
          <Image
            source={require('./watch.png')}
            style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: windowWidth * 0.035,
              fontWeight: '600',
            }}>
            Watch
          </Text>
        </View>
        <View
          style={{
            width: '30%',
            height: '50%',
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: windowWidth * 0.015,
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}>
          <Image
            source={require('./backpack.png')}
            style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: windowWidth * 0.035,
              fontWeight: '600',
            }}>
            Backpack
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.9,
            height: windowHeight * 0.3,
            columnGap: windowWidth * 0.025,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#A8DAF5',
                  width: windowWidth * 0.09,
                  height: windowHeight * 0.035,
                  borderRadius: windowWidth * 0.015,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  30%
                </Text>
              </View>

              <Image
                tintColor={'gray'}
                source={require('./fav2.png')}
                style={{width: windowWidth * 0.04, height: windowWidth * 0.04}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe.jpg')}
                style={{
                  width: windowWidth * 0.22,
                  height: windowWidth * 0.22,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                24.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>3k</Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <Image
                source={require('./fav.png')}
                style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe4.jpg')}
                style={{
                  width: windowWidth * 0.23,
                  height: windowWidth * 0.23,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>3k</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.9,
            height: windowHeight * 0.3,
            columnGap: windowWidth * 0.025,
            justifyContent: 'space-between',
            paddingTop: windowHeight * 0.01,
          }}>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#A8DAF5',
                  width: windowWidth * 0.09,
                  height: windowHeight * 0.035,
                  borderRadius: windowWidth * 0.015,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  30%
                </Text>
              </View>
              <Image
                tintColor={'gray'}
                source={require('./fav2.png')}
                style={{width: windowWidth * 0.04, height: windowWidth * 0.04}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe2.jpg')}
                style={{
                  width: windowWidth * 0.23,
                  height: windowWidth * 0.23,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>3k</Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <Image
                source={require('./fav.png')}
                style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe3.jpg')}
                style={{
                  width: windowWidth * 0.23,
                  height: windowWidth * 0.23,
                  borderRadius: 100,
                  objectFit: 'cover',
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>4k</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.9,
            height: windowHeight * 0.3,
            columnGap: windowWidth * 0.025,
            justifyContent: 'space-between',
            paddingTop: windowHeight * 0.01,
          }}>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#A8DAF5',
                  width: windowWidth * 0.09,
                  height: windowHeight * 0.035,
                  borderRadius: windowWidth * 0.015,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  30%
                </Text>
              </View>
              <Image
                tintColor={'gray'}
                source={require('./fav2.png')}
                style={{width: windowWidth * 0.04, height: windowWidth * 0.04}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe.jpg')}
                style={{
                  width: windowWidth * 0.22,
                  height: windowWidth * 0.22,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>3k</Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <Image
                source={require('./fav.png')}
                style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe.jpg')}
                style={{
                  width: windowWidth * 0.22,
                  height: windowWidth * 0.22,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>4k</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.9,
            height: windowHeight * 0.3,
            columnGap: windowWidth * 0.025,
            justifyContent: 'space-between',
            paddingTop: windowHeight * 0.01,
          }}>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#A8DAF5',
                  width: windowWidth * 0.09,
                  height: windowHeight * 0.035,
                  borderRadius: windowWidth * 0.015,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  30%
                </Text>
              </View>
              <Image
                tintColor={'gray'}
                source={require('./fav2.png')}
                style={{width: windowWidth * 0.04, height: windowWidth * 0.04}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe.jpg')}
                style={{
                  width: windowWidth * 0.22,
                  height: windowWidth * 0.22,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>3k</Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <Image
                source={require('./fav.png')}
                style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe.jpg')}
                style={{
                  width: windowWidth * 0.22,
                  height: windowWidth * 0.22,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>4k</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.9,
            height: windowHeight * 0.3,
            columnGap: windowWidth * 0.025,
            justifyContent: 'space-between',
            paddingTop: windowHeight * 0.01,
          }}>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#A8DAF5',
                  width: windowWidth * 0.09,
                  height: windowHeight * 0.035,
                  borderRadius: windowWidth * 0.015,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  30%
                </Text>
              </View>
              <Image
                tintColor={'gray'}
                source={require('./fav2.png')}
                style={{width: windowWidth * 0.04, height: windowWidth * 0.04}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe.jpg')}
                style={{
                  width: windowWidth * 0.22,
                  height: windowWidth * 0.22,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>3k</Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <Image
                source={require('./fav.png')}
                style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe.jpg')}
                style={{
                  width: windowWidth * 0.22,
                  height: windowWidth * 0.22,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>4k</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.9,
            height: windowHeight * 0.3,
            columnGap: windowWidth * 0.025,
            justifyContent: 'space-between',
            paddingTop: windowHeight * 0.01,
          }}>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#A8DAF5',
                  width: windowWidth * 0.09,
                  height: windowHeight * 0.035,
                  borderRadius: windowWidth * 0.015,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  30%
                </Text>
              </View>
              <Image
                tintColor={'gray'}
                source={require('./fav2.png')}
                style={{width: windowWidth * 0.04, height: windowWidth * 0.04}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe.jpg')}
                style={{
                  width: windowWidth * 0.22,
                  height: windowWidth * 0.22,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>3k</Text>
            </View>
          </View>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.4375,
              alignItems: 'center',
              borderRadius: windowWidth * 0.05,
              paddingVertical: windowHeight * 0.01,
              backgroundColor: '#FFFFFF',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '90%',
                height: '10%',
                alignItems: 'center',
              }}>
              <Image
                source={require('./fav.png')}
                style={{width: windowWidth * 0.05, height: windowWidth * 0.05}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '50%',
                width: '90%',
              }}>
              <Image
                source={require('./shoe.jpg')}
                style={{
                  width: windowWidth * 0.22,
                  height: windowWidth * 0.22,
                  borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                Nike Air Max 20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '90%',
                height: '15%',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.03,
                  fontWeight: '600',
                  color: 'blue',
                  marginTop: windowHeight * 0.006,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: windowWidth * 0.06,
                  fontWeight: '600',
                  color: 'blue',
                }}>
                240.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%',
                height: '10%',
                columnGap: windowWidth * 0.015,
              }}>
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Image
                source={require('./star.png')}
                style={{width: windowWidth * 0.03, height: windowWidth * 0.03}}
              />
              <Text style={{fontSize: windowWidth * 0.033}}>4k</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: windowWidth,
          height: windowWidth * 0.22,
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: windowWidth * 0.06,
        }}>
        <Image
          source={require('./backpack.png')}
          style={{width: windowWidth * 0.08, height: windowWidth * 0.08}}
        />
        <Image
          source={require('./backpack.png')}
          style={{width: windowWidth * 0.08, height: windowWidth * 0.08}}
        />
        <View
          style={{
            width: windowWidth * 0.25,
            height: windowWidth * 0.25,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: windowWidth * 0.1,
          }}>
          <View
            style={{
              width: windowWidth * 0.17,
              height: windowWidth * 0.17,
              backgroundColor: 'blue',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./backpack.png')}
              style={{opacity: 1, width: '50%', height: '50%'}}
            />
          </View>
          <View
            style={{
              opacity: 1,
              width: '30%',
              height: '30%',
              position: 'absolute',
              backgroundColor: 'red',
              borderRadius: 100,
              left: windowWidth * 0.13,
              bottom: windowWidth * 0.15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: windowWidth * 0.035,
      
              }}>
              2
            </Text>
          </View>
        </View>

        <Image
          source={require('./backpack.png')}
          style={{width: windowWidth * 0.08, height: windowWidth * 0.08}}
        />
        <Image
          source={require('./backpack.png')}
          style={{width: windowWidth * 0.08, height: windowWidth * 0.08}}
        />
      </View>
    </SafeAreaView>
  );
};

export default code23_3;

const styles = StyleSheet.create({});
