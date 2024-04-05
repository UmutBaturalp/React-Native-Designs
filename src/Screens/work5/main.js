import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './styles';

//images && icons
import myIcons from '../../Assets/Icons/index';
import myImages from '../../Assets/Images';

const main = () => {
  return (
    <SafeAreaView>
      <View style={[styles.main]}>
        <View style={[styles.header]}>
          <View style={[styles.header_buttons]}>
            <Image
              source={myIcons.back}
              style={[styles.header_button_icon]}
              tintColor={'white'}
            />
            <Image
              source={myIcons.more2}
              style={[styles.header_button_icon, {}]}
              tintColor={'white'}
            />
          </View>
          <Image source={myImages.personn} style={[styles.header_img]} />
        </View>
        <View style={[styles.main_content]}>
          <View style={[styles.main_content_top]}>
            <View style={[styles.main_content_person_info]}>
              <View style={[styles.main_content_name_view]}>
                <Text style={[styles.main_content_name]}>JOHN DOE</Text>
                <Image
                  style={[styles.main_content_online]}
                  source={myIcons.check}
                />
              </View>
              <Text style={[styles.main_content_name_desc]}>
                UI/UX Designer
              </Text>
            </View>
            <Text style={[styles.main_content_desc]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <View style={[styles.main_content_button]}>
              <Text style={[styles.main_content_button_text]}>FOLLOW</Text>
            </View>
          </View>
          <View style={[styles.main_content_bottom]}>
            <View style={[styles.main_content_bottom_left]}>
              <Text style={[styles.main_content_bottom_text1]}>FOLLOWERS</Text>
              <Text style={[styles.main_content_bottom_text2]}>25000</Text>
            </View>
            <View style={[styles.main_content_bottom_right]}>
              <Text style={[styles.main_content_bottom_text1]}>FOLLOWING</Text>
              <Text style={[styles.main_content_bottom_text2]}>257</Text>
            </View>
          </View>
        </View>
        <View style={[styles.projects]}>
          <View style={[styles.projects_header]}>
            <Text style={[styles.projects_title]}>PROJECTS</Text>
            <View style={[styles.view_all_view]}>
              <Text style={[styles.view_all_text]}>VIEW ALL</Text>
            </View>
          </View>
          <View style={[styles.projects_main]}>
            <Image style={[styles.projects_img]} source={myImages.img1} />
            <Image style={[styles.projects_img]} source={myImages.img2} />
          </View>
          <View style={[styles.projects_main, {opacity: 0.5}]}>
            <Image style={[styles.projects_img]} source={myImages.img3} />
            <Image style={[styles.projects_img]} source={myImages.img4} />
          </View>
          <View style={[styles.projects_buton]}>
            <Text style={[styles.projects_buton_text]}>HIRE HIM</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default main;
