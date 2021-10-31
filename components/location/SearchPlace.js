import Constants from "expo-constants";
import React from "react";
import { StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { grays } from "../../constants/AppStyles";

const SearchPlace = (props) => {
  return (
    <GooglePlacesAutocomplete
      {...props}
      styles={toInputBoxStyles}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      enablePoweredByContainer={false}
      minLength={2}
      fetchDetails={true}
      returnKeyType="search"
      query={{
        key: Constants.manifest.web.config.googleMaps.apiKey,
        language: "pl",
        components: "country:pl",
        types: ["(cities)"],
      }}
    />
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    borderRadius: 0,
    fontSize: 16,
    borderBottomColor: grays.gray400,
    borderBottomWidth: 2,
  },
  textInputContainer: {
    paddingHorizontal: 20,
  },
});

export default SearchPlace;
