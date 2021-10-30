import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import LocationItem from "./LocationItem";
import Separator from "../UI/Separator";
import { Text_Roboto_Medium } from "../UI/Text";

import { AppStyles } from "../../constants/AppStyles";

const LocationListDistance = (props) => {
  return (
    <View style={styles.container}>
      <Text_Roboto_Medium style={styles.distanceTitle}>
        Odległość od
      </Text_Roboto_Medium>
      <FlatList
        data={props.locations}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => {
          return (
            <LocationItem
              isRoomDetailItem
              name={item.name}
              location1={props.postLocation}
              location2={item.coordinates}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  distanceTitle: {
    fontSize: AppStyles.fontSize.title,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default LocationListDistance;
