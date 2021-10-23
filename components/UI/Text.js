import React from "react";
import { Text } from "react-native";
import { AppStyles } from "../../constants/AppStyles";

export const Text_Roboto = (props) => {
  return (
    <Text
      {...props}
      style={[{ fontFamily: AppStyles.fontFamily.regular }, props.style]}
    >
      {props.children}
    </Text>
  );
};

export const Text_Roboto_Medium = (props) => {
  return (
    <Text
      {...props}
      style={[{ fontFamily: AppStyles.fontFamily.medium }, props.style]}
    >
      {props.children}
    </Text>
  );
};

export const Text_Roboto_Thin = (props) => {
  return (
    <Text
      {...props}
      style={[{ fontFamily: AppStyles.fontFamily.thin }, props.style]}
    >
      {props.children}
    </Text>
  );
};

export const Text_Roboto_Bold = (props) => {
  return (
    <Text style={[{ fontFamily: AppStyles.fontFamily.bold }, props.style]}>
      {props.children}
    </Text>
  );
};
