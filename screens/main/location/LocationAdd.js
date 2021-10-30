import uuid from "react-native-uuid";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { Text_Roboto_Medium } from "../../../components/UI/Text";
import Separator from "../../../components/UI/Separator";

import Button from "../../../components/location/Button";
import SearchPlace from "../../../components/location/SearchPlace";
import LocationItem from "../../../components/location/LocationItem";

import { pink, grays } from "../../../constants/AppStyles";
import Layout from "../../../constants/Layout";

import { useSelector, useDispatch } from "react-redux";
import { addLocation, removeLocation } from "../../../redux/actions/locations";

const LocationAdd = ({ navigation }) => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations.locations);
  const [location, setLocation] = useState(null);

  const onAddLocation = () => {
    if (location === null) {
      return;
    } else if (locations.some((l) => l.id === location.id)) {
      return;
    }
    dispatch(addLocation(location));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Text_Roboto_Medium style={styles.title}>
            Wyszukaj lokalizacje
          </Text_Roboto_Medium>
          <SearchPlace
            placeholder="Wpisz lokalizacje"
            onPress={(data, details = null) => {
              let newLocation = {
                coordinates: details.geometry.location,
                name: data.description.replace(", Polska", ""),
                id: uuid.v4(),
              };
              setLocation(newLocation);
            }}
          />
        </View>
        <View style={styles.actionsContainer}>
          <Button title="DODAJ" onPress={onAddLocation} color={pink.pink600} />
          <Button
            title="ZNAJDŹ NA MAPIE"
            onPress={() => navigation.navigate("Map")}
            color={grays.gray600}
          />
        </View>
      </View>
      <FlatList
        data={locations}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => {
          return (
            <LocationItem
              name={item.name}
              onRemove={() => dispatch(removeLocation(item.id))}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  container: {
    width: Layout.window.width * 0.85,
    alignSelf: "center",
  },
  title: {
    paddingVertical: 10,
    fontSize: 18,
    textAlign: "center",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnBox: {
    marginVertical: 15,
  },
});

export default LocationAdd;
