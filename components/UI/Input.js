import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { AppStyles } from "../../constants/AppStyles";

const Input = (props) => {
  return (
    <View style={{ width: props.width }}>
      <Text style={styles.label}>{props.title}</Text>
      <TextInput style={styles.input} onChangeText={props.onChangeText} />
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
