import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Text_Roboto_Medium } from "./Text";

import { AppStyles } from "../../constants/AppStyles";

const Input = (props) => {
  return (
    <View style={[{ width: props.width }, props.styles]}>
      <Text_Roboto_Medium style={styles.label}>
        {props.title}
      </Text_Roboto_Medium>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: AppStyles.fontSize.label,
    color: AppStyles.color.label,
    paddingBottom: 10,
  },
  input: {
    backgroundColor: AppStyles.color.inputBg,
    height: 40,
    color: AppStyles.color.text,
    paddingHorizontal: 10,
  },
});
