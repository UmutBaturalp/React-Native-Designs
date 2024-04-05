import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import myImages from '../../../Assets/Images/index';
import myIcons from '../../../Assets/Icons/index';
const Stories = () => {
  return (
    <View>
      <View style={[styles.stories_view]}>
        <ScrollView
          style={[styles.stories_scrollView]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View style={[styles.story_view]}>
            <Image style={[styles.story_img]} source={myImages.pp1} />
            <Text style={[styles.story_name]}>Tsubasa</Text>
          </View>
          <View style={[styles.story_view]}>
            <Image style={[styles.story_img]} source={myImages.img2} />
            <Text style={[styles.story_name]}>Jeremy</Text>
          </View>
          <View style={[styles.story_view]}>
            <Image style={[styles.story_img]} source={myImages.pp2} />
            <Text style={[styles.story_name]}>Doku</Text>
          </View>
          <View style={[styles.story_view]}>
            <Image style={[styles.story_img]} source={myImages.pp} />
            <Text style={[styles.story_name]}>Abuzer</Text>
          </View>
          <View style={[styles.story_view]}>
            <Image style={[styles.story_img]} source={myImages.img4} />
            <Text style={[styles.story_name]}>Tuncay</Text>
          </View>
          <View style={[styles.story_view]}>
            <Image style={[styles.story_img]} source={myImages.pp1} />
            <Text style={[styles.story_name]}>Cabbar</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default Stories;
