import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const code23___3 = () => {
  return (
    <SafeAreaView>
      <View style={[styles.main]}>
        <View style={[styles.header]}>
          <Text
            style={{
              fontSize: windowWidth * 0.035,
              fontWeight: '600',
              color: '#000033',
              opacity: 0.7,
            }}>
            asa
          </Text>
          <Text
            style={{
              color: '#000033',
              fontSize: windowWidth * 0.06,
              fontWeight: '700',
            }}>
            October
          </Text>
          <Text
            style={{
              fontSize: windowWidth * 0.035,
              fontWeight: '600',
              color: '#000033',
              opacity: 0.7,
            }}>
            sas
          </Text>
        </View>
        <View style={[styles.date]}>
          <View style={[styles.days]}>
            <Text style={[styles.pick_num]}>Mo</Text>
            <Text style={[styles.pick_num]}>Tu</Text>
            <Text style={[styles.pick_num]}>We</Text>
            <Text style={[styles.pick_num]}>Th</Text>
            <Text style={[styles.pick_num]}>Fr</Text>
            <Text style={[styles.pick_num]}>Sa</Text>
            <Text style={[styles.pick_num]}>Su</Text>
          </View>
          <View style={[styles.picks]}>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}></Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}></Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}></Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>1</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>2</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>3</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>4</Text>
            </View>
          </View>
          <View style={[styles.picks]}>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>5</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>6</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>7</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>8</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>9</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>10</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>11</Text>
            </View>
          </View>
          <View style={[styles.picks]}>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>12</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>13</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>14</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>15</Text>
            </View>
            <View
              style={[
                styles.pick,
                {backgroundColor: '#5D12D2', borderRadius: 100},
              ]}>
              <Text style={[styles.pick_num, {color: 'white'}]}>16</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>17</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>18</Text>
            </View>
          </View>
          <View style={[styles.picks]}>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>19</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>20</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>21</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>22</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>23</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>24</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>25</Text>
            </View>
          </View>
          <View style={[styles.picks]}>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>26</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>27</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>28</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>29</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>30</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}>31</Text>
            </View>
            <View style={[styles.pick]}>
              <Text style={[styles.pick_num]}></Text>
            </View>
          </View>
        </View>
        <View style={[styles.ongoing]}>
          <Text
            style={{
              color: '#000033',
              fontSize: windowWidth * 0.05,
              fontWeight: '700',
              letterSpacing: windowWidth * 0.001,
            }}>
            Ongoing
          </Text>
        </View>
        <View style={[styles.ongoing_item]}>
          <View style={[styles.ongoing_item_hour]}>
            <Text style={{color: '#000033', fontSize: windowWidth * 0.035}}>
              9 AM
            </Text>
            <Text style={{color: '#000033', fontSize: windowWidth * 0.035}}>
              10 AM
            </Text>
          </View>
          <View style={[styles.task]}>
            <Text style={[styles.taskTitle]}>Mobile App Design</Text>
            <Text style={[styles.taskDesc]}>asda asd sadas </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
              <Text
                style={{
                  color: 'white',
                  fontSize: windowWidth * 0.035,
                  opacity: 0.8,
                }}>
                9.00 AM - 10.00 AM
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.free]}>
          <Text style={{color: '#000033', fontSize: windowWidth * 0.035}}>
            11 AM
          </Text>
          <View
            style={{
              width: windowWidth * 0.05,
              height: windowWidth * 0.05,
              backgroundColor: '#FFFFFF',
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.02,
                height: windowWidth * 0.02,
                backgroundColor: '#000033',
                borderRadius: 100,
              }}></View>
          </View>
          <View
            style={{
              height: 1.5,
              width: windowWidth * 0.7,
              backgroundColor: '#111133',
              position: 'relative',
              left: -windowWidth * 0.033,
            }}></View>
        </View>
        <View style={[styles.ongoing_item]}>
          <View style={[styles.ongoing_item_hour]}>
            <Text style={{color: '#000033', fontSize: windowWidth * 0.035}}>
              12 AM
            </Text>
            <Text style={{color: '#000033', fontSize: windowWidth * 0.035}}>
              12 AM
            </Text>
          </View>
          <View style={[styles.task]}>
            <Text style={[styles.taskTitle]}>Mobile App Design</Text>
            <Text style={[styles.taskDesc]}>asda asd sadas </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
              <Text
                style={{
                  color: 'white',
                  fontSize: windowWidth * 0.035,
                  opacity: 0.8,
                }}>
                12.00 AM - 12.00 AM
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default code23___3;

const styles = StyleSheet.create({
  main: {
    height: windowHeight,
    backgroundColor: '#EFFFFF',
    alignItems: 'center',
    padding: windowWidth * 0.05,
  },
  header: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: windowWidth * 0.08,
  },
  date: {width: '100%', rowGap: windowWidth * 0.03},
  days: {flexDirection: 'row', justifyContent: 'space-between'},
  picks: {flexDirection: 'row', justifyContent: 'space-between'},
  pick: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pick_num: {
    color: '#000033',
    fontSize: windowWidth * 0.035,
    fontWeight: '600',
  },
  ongoing: {width: '100%', paddingVertical: windowWidth * 0.07},
  ongoing_item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ongoing_item_hour: {justifyContent: 'center', rowGap: windowWidth * 0.1},
  task: {
    width: windowWidth * 0.7,
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
  free: {
    flexDirection: 'row',
    width: '100%',
    columnGap: windowWidth * 0.04,
    paddingVertical: windowWidth * 0.04,
    alignItems: 'center',
  },
});
