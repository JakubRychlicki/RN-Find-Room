import React, { useState, useCallback, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import DropDownPicker from "react-native-custom-dropdown";

import {
  Text_Roboto_Medium,
  Text_Roboto_Bold,
} from "../../../components/UI/Text";
import Button from "../../../components/UI/Button";

import { AppStyles } from "../../../constants/AppStyles";
import { setFilters } from "../../../redux/actions/posts";

const Filters = ({ navigation }) => {
  const dispatch = useDispatch();

  const rooms = useSelector((state) => state.posts.posts);
  const prices = rooms.map((r) => r.price);
  const locations = [...new Set(rooms.map((r) => r.city))].sort((a, b) =>
    a.localeCompare(b)
  );

  const defaultMinPrice = Math.min(...prices);
  const defaultMaxPrice = Math.max(...prices);

  const [minPrice, setMinPrice] = useState(defaultMinPrice.toString());
  const [maxPrice, setMaxPrice] = useState(defaultMaxPrice.toString());
  const [selectedLocation, setSelectedLocation] = useState("");

  const locationItems = locations.map((location) => {
    return {
      label: location,
      value: location,
    };
  });

  const submitFilters = useCallback(() => {
    const appliedFilters = {
      minPrice: parseInt(minPrice),
      maxPrice: parseInt(maxPrice),
      city: selectedLocation,
    };
    dispatch(setFilters(appliedFilters));
  }, [minPrice, maxPrice, selectedLocation, dispatch]);

  const clearFilters = () => {
    setMinPrice(defaultMinPrice);
    setMaxPrice(defaultMaxPrice);
    setSelectedLocation("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={clearFilters}>
          <Text_Roboto_Medium>WYCZYŚĆ FILTRY</Text_Roboto_Medium>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const changeRangePrice = (values) => {
    setMinPrice(values[0].toString());
    setMaxPrice(values[1].toString());
  };

  if (rooms == undefined) {
    <ActivityIndicator size="large" color="black" />;
  }

  return (
    <View style={styles.screen}>
      <Text_Roboto_Bold style={styles.title}>Filtry</Text_Roboto_Bold>
      <View style={styles.formContainer}>
        {rooms == undefined ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <>
            <Text_Roboto_Medium style={styles.locationTitle}>
              Lokalizacja
            </Text_Roboto_Medium>
            <DropDownPicker
              placeholder="Wybierz"
              items={locationItems}
              defaultValue={selectedLocation ? selectedLocation : null}
              containerStyle={{ height: 50 }}
              style={{ backgroundColor: AppStyles.color.sliderLabelPriceBg }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              onChangeItem={(item) => setSelectedLocation(item.value)}
            />
            <View style={styles.priceSliderContainer}>
              <Text_Roboto_Medium style={styles.priceSliderTitle}>
                Cena:
              </Text_Roboto_Medium>
              <MultiSlider
                values={[parseInt(minPrice), parseInt(maxPrice)]}
                onValuesChange={changeRangePrice}
                min={defaultMinPrice}
                max={defaultMaxPrice}
                step={10}
                sliderLength={200}
                customMarker={() => (
                  <View
                    style={{
                      height: 25,
                      width: 25,
                      backgroundColor: AppStyles.color.sliderMarkerColor,
                      borderRadius: 12.5,
                    }}
                  />
                )}
                trackStyle={{
                  height: 5,
                }}
                selectedStyle={{
                  backgroundColor: AppStyles.color.sliderSelectedColor,
                }}
                unselectedStyle={{
                  backgroundColor: AppStyles.color.sliderUnselectedColor,
                }}
              />
            </View>
            <View style={styles.priceShowContainer}>
              <View>
                <Text style={styles.priceBox}>{minPrice}</Text>
              </View>
              <View style={styles.lineBetween} />
              <View>
                <Text style={styles.priceBox}>{maxPrice}</Text>
              </View>
            </View>
          </>
        )}
      </View>
      <Button
        title="Zastosuj"
        onPress={submitFilters}
        styles={styles.submitBtn}
        size={18}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: "center",
    width: "80%",
    margin: 15,
  },
  formContainer: {
    height: 200,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    color: "black",
    paddingBottom: 20,
  },
  locationTitle: {
    fontSize: 18,
    paddingBottom: 10,
    color: AppStyles.color.filterLabelColor,
  },
  priceSliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingRight: 10,
  },
  priceSliderTitle: {
    alignSelf: "center",
    fontSize: 18,
    color: AppStyles.color.filterLabelColor,
  },
  priceShowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceBox: {
    width: 120,
    backgroundColor: AppStyles.color.sliderLabelPriceBg,
    padding: 10,
    textAlign: "center",
  },
  lineBetween: {
    height: 2,
    width: 15,
    backgroundColor: "black",
    alignSelf: "center",
  },
  submitBtn: {
    width: AppStyles.buttonWidth.half,
    alignSelf: "center",
    marginTop: "auto",
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

export default Filters;
