import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";
import defaultScreenOptions from "../options/defaultScreenOptions";

import RoomsOverviewScreen from "../../screens/main/rooms/RoomOverview";

import RoomDetailScreen, {
  screenOptions as RoomDetailScreenOptions,
} from "../../screens/main/rooms/RoomDetail";

const Stack = createStackNavigator();

export default RoomsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Rooms"
        component={RoomsOverviewScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name="RoomDetail"
        component={RoomDetailScreen}
        options={RoomDetailScreenOptions}
      />
    </Stack.Navigator>
  );
};
