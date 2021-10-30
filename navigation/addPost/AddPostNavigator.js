import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";

import AddPostScreen, {
  screenOptions,
} from "../../screens/main/addPost/AddPost";

const Stack = createStackNavigator();

export default AddPostNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};
