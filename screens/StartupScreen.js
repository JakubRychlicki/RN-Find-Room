import React from "react";
import { StyleSheet, View, Image, ActivityIndicator } from "react-native";

import { AppStyles } from "../constants/AppStyles";

const StartupScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/splash-icon.png")}
        />
      </View>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppStyles.color.primary,
  },
  imageContainer: {
    width: 300,
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
