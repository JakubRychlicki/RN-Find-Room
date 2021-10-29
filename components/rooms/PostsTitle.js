import React from "react";
import { StyleSheet, View } from "react-native";
import { Text_Roboto_Bold } from "../UI/Text";

const PostsTitle = (props) => {
  return (
    <View style={styles.titleContainer}>
      <Text_Roboto_Bold style={styles.title}>{props.title}</Text_Roboto_Bold>
    </View>
  );
};

export default PostsTitle;

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    color: "black",
  },
});
