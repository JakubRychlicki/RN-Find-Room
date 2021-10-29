import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Text_Roboto_Medium } from "../../../components/UI/Text";
import HeaderButton from "../../../components/UI/HeaderButton";
import Button from "../../../components/location/Button";
import SearchPlace from "../../../components/location/SearchPlace";
import LocationItem from "../../../components/location/LocationItem";

import { pink, grays } from "../../../constants/AppStyles";
import Layout from "../../../constants/Layout";

const LocationAdd = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  const onAddLocation = () => {
    if (location === null) {
      return;
    }
    setLocations((locations) => [...locations, location]);
  };

  const onRemoveLocation = (id) => {
    setLocations(locations.filter((location) => location.id !== id));
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
                name: data.description,
                id: data.place_id,
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
        renderItem={({ item }) => {
          return (
            <LocationItem
              name={item.name}
              onRemove={() => onRemoveLocation(item.id)}
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

export const screenOptions = (navData) => {
  return {
    headerTitle: "",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default LocationAdd;
