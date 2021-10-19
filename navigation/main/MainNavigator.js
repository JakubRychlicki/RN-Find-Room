import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import RoomsNavigator from "../rooms/RoomsNavigator";
import FiltersNavigator from "../filters/FiltersNavigator";
import LocationNavigator from "../location/LocationNavigator";
import AuthNavigator from "../auth/AuthNavigator";

import defaultDrawerContentOptions from "../options/defaultDrawerContentOptions";

const Drawer = createDrawerNavigator();

export default MainNavigator = () => {
  return (
    <Drawer.Navigator drawerContentOptions={defaultDrawerContentOptions}>
      <Drawer.Screen
        name="MainRooms"
        component={RoomsNavigator}
        options={{
          drawerLabel: "Pokoje",
          drawerIcon: (props) => (
            <Ionicons name="home" size={23} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MainFilters"
        component={FiltersNavigator}
        options={{
          drawerLabel: "Filtry",
          drawerIcon: (props) => (
            <Ionicons name="funnel" size={23} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MainLocation"
        component={LocationNavigator}
        options={{
          drawerLabel: "Lokalizacje",
          drawerIcon: (props) => (
            <Ionicons name="location" size={23} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MainAuth"
        component={AuthNavigator}
        options={{
          drawerLabel: "Zaloguj się",
          drawerIcon: (props) => (
            <Ionicons name="person" size={23} color={props.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
