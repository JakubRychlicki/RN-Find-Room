import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultStackNavOptions from "../options/defaultStackNavOptions";

import RoomsOverviewScreen, {
  screenOptions as RoomsOverviewScreenOptions,
} from "../../screens/main/rooms/RoomsOverview";

import RoomDetailScreen from "../../screens/main/rooms/RoomsOverview";

const Stack = createStackNavigator();

export default RoomsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Rooms"
        component={RoomsOverviewScreen}
        options={RoomsOverviewScreenOptions}
      />
      <Stack.Screen name="RoomDetail" component={RoomDetailScreen} />
    </Stack.Navigator>
  );
};
