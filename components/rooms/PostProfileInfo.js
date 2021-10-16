import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Text_Roboto_Medium } from "../UI/Text";

const PostProfileInfo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Avatar.Image
          size={40}
          source={{
            uri: props.avatarURL,
          }}
          style={{ backgroundColor: "#ccc" }}
        />
        <Text_Roboto_Medium style={styles.name}>
          {props.name}
        </Text_Roboto_Medium>
      </View>
      <Text_Roboto_Medium style={styles.phone}>
        <Ionicons name="call" size={22} color="black" /> {props.phoneNumber}
      </Text_Roboto_Medium>
    </View>
  );
};

export default PostProfileInfo;

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  profileBox: {
    flexDirection: "row",
  },
  name: {
    fontSize: 22,
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  phone: {
    fontSize: 22,
    alignSelf: "flex-end",
  },
});
