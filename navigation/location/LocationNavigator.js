import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";

import LocationAddScreen, {
  screenOptions,
} from "../../screens/main/location/LocationAdd";

const Stack = createStackNavigator();

export default LocationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="LocationAdd"
        component={LocationAddScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};
