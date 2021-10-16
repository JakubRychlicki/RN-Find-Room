import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default IconButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onTouch}>
      <Ionicons name={props.name} size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};
