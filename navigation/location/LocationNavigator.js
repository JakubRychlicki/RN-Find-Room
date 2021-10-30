import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";
import defaultScreenOptions from "../options/defaultScreenOptions";

import LocationAddScreen from "../../screens/main/location/LocationAdd";
import LocationMap, {
  screenOptions as mapScreenOptions,
} from "../../screens/main/location/LocationMap";

const Stack = createStackNavigator();

export default LocationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Add"
        component={LocationAddScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name="Map"
        component={LocationMap}
        options={mapScreenOptions}
      />
    </Stack.Navigator>
  );
};
