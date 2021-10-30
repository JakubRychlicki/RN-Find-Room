import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";
import defaultScreenOptions from "../options/defaultScreenOptions";

import FavouritesScreen from "../../screens/main/favourites/Favourites";

const Stack = createStackNavigator();

export default FavouritesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={defaultScreenOptions}
      />
    </Stack.Navigator>
  );
};
