import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Text_Roboto_Medium } from "../UI/Text";
import IconButton from "../UI/IconButton";

import { AppStyles } from "../../constants/AppStyles";

const LocationItem = (props) => {
  const [distance, setDistance] = useState("");

  const getTravelDistance = async () => {
    fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${props.location1.latitude}%2C${props.location1.longitude}&origins=${props.location2.lat}%2C${props.location2.lng}&key=AIzaSyAFMDjRGqiNVssE0YYd9EzFcSsh1-UFogE`
    )
      .then((res) => res.json())
      .then((data) => {
        setDistance(data.rows[0].elements[0].distance.text);
      });
  };

  useEffect(() => {
    if (props.isRoomDetailItem) {
      getTravelDistance();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Ionicons name="location" size={25} color={AppStyles.color.secondary} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Text_Roboto_Medium numberOfLines={1} style={styles.title}>
          {props.name}
        </Text_Roboto_Medium>
      </ScrollView>
      {props.isRoomDetailItem ? (
        <Text_Roboto_Medium style={styles.distanceText}>
          {distance}
        </Text_Roboto_Medium>
      ) : (
        <IconButton
          onTouch={props.onRemove}
          name="close"
          size={28}
          color="black"
          styles={{ marginLeft: "auto" }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 5,
  },
  distanceText: {
    fontSize: 18,
    paddingLeft: 5,
  },
});

export default LocationItem;
