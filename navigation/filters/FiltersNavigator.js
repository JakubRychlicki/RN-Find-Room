import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";
import defaultScreenOptions from "../options/defaultScreenOptions";

import FiltersScreen from "../../screens/main/filters/Filters";

const Stack = createStackNavigator();

export default FiltersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={defaultScreenOptions}
      />
    </Stack.Navigator>
  );
};
