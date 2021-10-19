import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";

const Filters = () => {
  return (
    <View>
      <Text>Filters</Text>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({});

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
