import React from "react";
import { StyleSheet, View } from "react-native";
import { Text_Roboto_Medium } from "../UI/Text";
import Layout from "../../constants/Layout";

const EmptyList = (props) => {
  return (
    <View style={styles.container}>
      <Text_Roboto_Medium style={styles.message}>
        {props.message}
      </Text_Roboto_Medium>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width * 0.85,
    height: Layout.window.height * 0.85,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
});
