import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";

import LocationAddScreen, {
  screenOptions,
} from "../../screens/main/location/LocationAdd";
import LocationMap from "../../screens/main/location/LocationMap";

const Stack = createStackNavigator();

export default LocationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Add"
        component={LocationAddScreen}
        options={screenOptions}
      />
      <Stack.Screen name="Map" component={LocationMap} />
    </Stack.Navigator>
  );
};
