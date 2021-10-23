import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text_Roboto_Bold } from "./Text";

import { AppStyles } from "../../constants/AppStyles";

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={
        props.disabled
          ? { ...styles.buttonBox, ...styles.disabledBtn, ...props.styles }
          : { ...styles.buttonBox, ...props.styles }
      }
    >
      <Text_Roboto_Bold style={[styles.text, { fontSize: props.size }]}>
        {props.title}
      </Text_Roboto_Bold>
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
  disabledBtn: {
    backgroundColor: "gray",
  },
});
