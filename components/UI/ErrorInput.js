import React from "react";
import { StyleSheet, View } from "react-native";
import { Text_Roboto_Thin } from "./Text";

const ErrorInput = (props) => {
  return (
    <View style={styles.container}>
      <Text_Roboto_Thin>{props.children}</Text_Roboto_Thin>
    </View>
  );
};

export default ErrorInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
