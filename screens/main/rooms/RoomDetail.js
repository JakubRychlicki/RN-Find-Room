import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ScrollView, LogBox } from "react-native";

import Separator from "../../../components/UI/Separator";
import PostSlider from "../../../components/rooms/PostSlider";
import PostProfileInfo from "../../../components/rooms/PostProfileInfo";
import PostDesc from "../../../components/rooms/PostDesc";
import PostInfo from "../../../components/rooms/PostInfo";
import PostMap from "../../../components/rooms/PostMap";
import LocationListDistance from "../../../components/location/LocationListDistance";

const RoomDetail = ({ route }) => {
  const postId = route.params.postId;
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );
  const locations = useSelector((state) => state.locations.locations);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <PostSlider images={post.images} />
      <PostInfo
        title={post.title}
        price={post.price}
        created_at={post.created_at}
      />
      <Separator />
      <PostDesc desc={post.description} />
      <Separator />
      <PostProfileInfo
        name="Piotrek"
        phoneNumber="555-666-777"
        avatarURL="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
      />
      <Separator />
      <PostMap coordinates={post.location} />
      {locations.length !== 0 ? (
        <LocationListDistance
          locations={locations}
          postLocation={post.location}
        />
      ) : null}
    </ScrollView>
  );
};

export const screenOptions = () => {
  return {
    headerTitle: "",
  };
};

export default RoomDetail;
