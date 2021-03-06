import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";
import defaultScreenOptions from "../options/defaultScreenOptions";

import AuthScreen from "../../screens/auth/Auth";

const Stack = createStackNavigator();

export default AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={defaultScreenOptions}
      />
    </Stack.Navigator>
  );
};
