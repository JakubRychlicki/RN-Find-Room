import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";

import AuthScreen, {
  screenOptions as AuthScreenOptions,
} from "../../screens/auth/Auth";

const Stack = createStackNavigator();

export default AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={AuthScreenOptions}
      />
    </Stack.Navigator>
  );
};
