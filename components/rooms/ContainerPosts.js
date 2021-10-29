import React from "react";
import { StyleSheet, View } from "react-native";
import { AppStyles } from "../../constants/AppStyles";

const ContainerPosts = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>{props.children}</View>
    </View>
  );
};

export default ContainerPosts;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppStyles.color.grayBg,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
