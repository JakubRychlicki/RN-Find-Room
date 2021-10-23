import React from "react";
import { StyleSheet, View } from "react-native";
import { Text_Roboto_Thin } from "./Text";

const ErrorText = (props) => {
  return (
    <View style={styles.container}>
      <Text_Roboto_Thin
        style={{ textAlign: props.align ? props.align : "left" }}
      >
        {props.children}
      </Text_Roboto_Thin>
    </View>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
