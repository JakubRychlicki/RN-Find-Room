import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Text_Roboto_Medium } from "../UI/Text";

import { AppStyles } from "../../constants/AppStyles";

const PostMap = (props) => {
  return (
    <View>
      <Text_Roboto_Medium style={styles.locationTitle}>
        Lokalizacja
      </Text_Roboto_Medium>
      {props.coordinates ? (
        <MapView
          scrollEnabled={false}
          zoomEnabled={false}
          mapType="standard"
          style={styles.mapContainer}
          initialRegion={{
            latitude: props.coordinates.latitude,
            longitude: props.coordinates.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          <Marker
            coordinate={{
              latitude: props.coordinates.latitude,
              longitude: props.coordinates.longitude,
            }}
          />
        </MapView>
      ) : null}
    </View>
  );
};

export default PostMap;

const styles = StyleSheet.create({
  locationTitle: {
    fontSize: AppStyles.fontSize.title,
    textAlign: "center",
    paddingVertical: 10,
  },
  mapContainer: {
    height: 200,
  },
});
