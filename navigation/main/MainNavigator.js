import React from "react";
import { StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { AppStyles } from "../../constants/Colors";

import RoomsNavigator from "../rooms/RoomsNavigator";

const Drawer = createDrawerNavigator();

export default MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: AppStyles.color.activeDrawerColor,
        activeBackgroundColor: AppStyles.color.activeDrawerBg,
        contentContainerStyle: {
          paddingTop: StatusBar.currentHeight,
          backgroundColor: AppStyles.color.primary,
        },
        itemStyle: {
          width: "100%",
          alignSelf: "center",
          borderRadius: 0,
          marginVertical: 0,
        },
      }}
    >
      <Drawer.Screen
        name="MainRooms"
        component={RoomsNavigator}
        options={{
          drawerLabel: "Pokoje",
          drawerIcon: (props) => (
            <Ionicons name={"md-cart"} size={23} color={props.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
