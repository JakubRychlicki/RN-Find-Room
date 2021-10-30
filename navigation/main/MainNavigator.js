import firebase from "firebase";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import RoomsNavigator from "../rooms/RoomsNavigator";
import FavouritesNavigator from "../favourites/FavouritesNavigator";
import FiltersNavigator from "../filters/FiltersNavigator";
import LocationNavigator from "../location/LocationNavigator";
import AddPostNavigator from "../addPost/AddPostNavigator";
import AuthNavigator from "../auth/AuthNavigator";

import Logout from "../../screens/auth/Logout";

import defaultDrawerContentOptions from "../options/defaultDrawerContentOptions";

const Drawer = createDrawerNavigator();

export default MainNavigator = () => {
  return (
    <Drawer.Navigator drawerContentOptions={defaultDrawerContentOptions}>
      <Drawer.Screen
        name="MainRooms"
        component={RoomsNavigator}
        options={{
          drawerLabel: "Ogłoszenia",
          drawerIcon: (props) => (
            <Ionicons name="home" size={23} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MainFavs"
        component={FavouritesNavigator}
        options={{
          drawerLabel: "Obserwowane",
          drawerIcon: (props) => (
            <Ionicons name="heart" size={23} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MainFavourites"
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
      {firebase.auth().currentUser == null ? (
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
      ) : (
        <>
          <Drawer.Screen
            name="MainAddPost"
            component={AddPostNavigator}
            options={{
              drawerLabel: "Dodaj ogłoszenie",
              drawerIcon: (props) => (
                <Ionicons name="newspaper" size={23} color={props.color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Logout"
            component={Logout}
            options={{
              drawerLabel: "Wyloguj się",
              drawerIcon: (props) => (
                <Ionicons name="person" size={23} color={props.color} />
              ),
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};
