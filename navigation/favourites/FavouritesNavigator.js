import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";

import FavouritesScreen, {
  screenOptions,
} from "../../screens/main/favourites/Favourites";

const Stack = createStackNavigator();

export default FavouritesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};
