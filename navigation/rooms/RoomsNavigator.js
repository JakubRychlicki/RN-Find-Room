import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";

import RoomsOverviewScreen, {
  screenOptions as RoomsOverviewScreenOptions,
} from "../../screens/main/rooms/RoomOverview";

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
        options={RoomsOverviewScreenOptions}
      />
      <Stack.Screen
        name="RoomDetail"
        component={RoomDetailScreen}
        options={RoomDetailScreenOptions}
      />
    </Stack.Navigator>
  );
};
