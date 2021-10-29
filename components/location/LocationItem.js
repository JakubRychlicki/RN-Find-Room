import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text_Roboto_Medium } from "../UI/Text";
import IconButton from "../UI/IconButton";

import { AppStyles, grays } from "../../constants/AppStyles";

const LocationItem = (props) => {
  return (
    <View style={styles.container}>
      <Ionicons name="location" size={25} color={AppStyles.color.secondary} />
      <Text_Roboto_Medium numberOfLines={1} style={styles.title}>
        {props.name}
      </Text_Roboto_Medium>
      <IconButton
        onTouch={props.onRemove}
        name="close"
        size={28}
        color="black"
        styles={{ marginLeft: "auto" }}
      />
    </View>
  );
};

export default LocationItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: grays.gray400,
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 5,
  },
});
