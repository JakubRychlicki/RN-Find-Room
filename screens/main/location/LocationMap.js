import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import Layout from "../../../constants/Layout";
import { AppStyles } from "../../../constants/AppStyles";
import {
  Text_Roboto_Bold,
  Text_Roboto_Medium,
} from "../../../components/UI/Text";
import Button from "../../../components/UI/Button";
import IconButton from "../../../components/UI/IconButton";

const initialRegion = {
  lat: 52.22977,
  lng: 21.01178,
};

const LocationMap = ({ navigation }) => {
  const mapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [nameLocation, setNameLocation] = useState("");

  const onAddLocation = () => {
    if (location === null) {
      return;
    }
    console.log(nameLocation, currentLocation);
  };

  const geocodeCordinates = async () => {
    Location.setGoogleApiKey("AIzaSyAFMDjRGqiNVssE0YYd9EzFcSsh1-UFogE");
    let address = await Location.reverseGeocodeAsync(
      {
        longitude: currentLocation.longitude,
        latitude: currentLocation.latitude,
      },
      {
        useGoogleMaps: true,
      }
    );

    if (address[0].street === undefined) {
      setNameLocation(address[0].city);
    } else {
      setNameLocation(address[0].name + ", " + address[0].city);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();

    if (currentLocation === null) {
      return;
    }
    geocodeCordinates();
  }, [currentLocation]);

  return (
    <View style={styles.screen}>
      <IconButton
        name="arrow-back"
        size={32}
        color="black"
        onTouch={() => navigation.goBack()}
        styles={styles.backBtn}
      />

      <MapView
        ref={mapRef}
        style={styles.mapContainer}
        mapType="mutedStandard"
        initialRegion={{
          latitude: initialRegion.lat,
          longitude: initialRegion.lng,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
        onPress={(e) => setCurrentLocation(e.nativeEvent.coordinate)}
      >
        {currentLocation && <Marker coordinate={currentLocation} />}
      </MapView>
      <View style={styles.locationContainer}>
        <Text_Roboto_Bold style={styles.title}>Lokalizacja</Text_Roboto_Bold>
        <Text_Roboto_Medium style={styles.nameLocation}>
          {nameLocation ? nameLocation : "---"}
        </Text_Roboto_Medium>
        <Button
          title="DODAJ"
          onPress={onAddLocation}
          styles={styles.addBtn}
          size={18}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backBtn: {
    backgroundColor: "white",
    position: "absolute",
    top: 50,
    left: 20,
    padding: 4,
    borderRadius: 25,
    elevation: 5,
    zIndex: 999,
  },
  mapContainer: {
    height: Layout.window.height * 0.75,
  },
  locationContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    paddingVertical: 10,
  },
  nameLocation: {
    fontSize: 16,
    paddingVertical: 10,
  },
  addBtn: {
    width: AppStyles.buttonWidth.half,
    marginTop: "auto",
    marginBottom: 10,
  },
});

export const screenOptions = (navData) => {
  return {
    headerShown: false,
  };
};

export default LocationMap;
