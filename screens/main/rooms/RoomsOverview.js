import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../../components/UI/HeaderButton";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
