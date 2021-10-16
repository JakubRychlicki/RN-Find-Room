import React from "react";
import { useSelector } from "react-redux";
import { View, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import { SliderBox } from "react-native-image-slider-box";

import { Text_Roboto_Medium } from "../../../components/UI/Text";
import PostProfileInfo from "../../../components/rooms/PostProfileInfo";
import PostDesc from "../../../components/rooms/PostDesc";
import PostInfo from "../../../components/rooms/PostInfo";

import { AppStyles } from "../../../constants/AppStyles";

const RoomDetail = ({ route }) => {
  const postId = route.params.postId;
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );

  return (
    <ScrollView style={styles.screen}>
      <SliderBox
        images={post.images}
        sliderBoxHeight={250}
        dotColor={AppStyles.color.dotSlider}
        inactiveDotColor={AppStyles.color.inactiveDotSlider}
        imageLoadingColor={AppStyles.color.primary}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
        }}
      />
      <PostInfo
        title={post.title}
        price={post.price}
        created_at={post.created_at}
      />
      <Divider style={{ backgroundColor: AppStyles.color.dividerColor }} />
      <PostDesc desc={post.description} />
      <Divider style={{ backgroundColor: AppStyles.color.dividerColor }} />
      <PostProfileInfo
        name="Piotrek"
        phoneNumber="555-666-777"
        avatarURL="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
      />
      <Divider style={{ backgroundColor: AppStyles.color.dividerColor }} />
      <View style={styles.container}>
        <Text_Roboto_Medium style={styles.subTitle}>
          Lokalizacja
        </Text_Roboto_Medium>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subTitle: {
    fontSize: AppStyles.fontSize.title,
    textAlign: "center",
    paddingBottom: 10,
  },
});

export const screenOptions = () => {
  return {
    headerTitle: "",
  };
};

export default RoomDetail;
