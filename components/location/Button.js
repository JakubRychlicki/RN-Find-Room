import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text_Roboto_Medium } from "../UI/Text";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btnBox}>
      <Text_Roboto_Medium style={[styles.btnTitle, { color: props.color }]}>
        {props.title}
      </Text_Roboto_Medium>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnBox: {
    marginVertical: 15,
  },
  btnTitle: {
    fontSize: 15,
  },
});
