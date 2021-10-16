import React from "react";
import { StyleSheet, View } from "react-native";
import { Text_Roboto, Text_Roboto_Medium } from "../UI/Text";
import { AppStyles } from "../../constants/AppStyles";

export default PostDesc = (props) => {
  return (
    <View style={styles.container}>
      <Text_Roboto_Medium style={styles.descTitle}>Opis</Text_Roboto_Medium>
      <Text_Roboto style={styles.desc}>{props.desc}</Text_Roboto>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  descTitle: {
    fontSize: AppStyles.fontSize.title,
    textAlign: "center",
    paddingBottom: 10,
  },
  desc: {
    color: AppStyles.color.description,
    fontSize: AppStyles.fontSize.desc,
  },
});
