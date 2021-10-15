import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { AppStyles } from "../../constants/Colors";

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.buttonBox, props.style]}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppStyles.color.secondary,
    height: 45,
    borderRadius: 30,
  },
  text: {
    color: "white",
    fontSize: AppStyles.fontSize.content,
    fontWeight: "bold",
  },
});
